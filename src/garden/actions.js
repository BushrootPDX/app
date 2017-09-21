
import * as actions from './constants';
import gardensApi from '../services/gardensApi';
import shortid from 'shortid';

export function addPlantInstance(id) {

    return dispatch => {
        dispatch({ type: actions.ADDING_PLANT });

        dispatch({ 
            type: actions.ADDED_PLANT,
            payload: id
        });
    };
}

export function newGarden(garden) {
    return dispatch => {
        dispatch({
            type: actions.ADDING_GARDEN
        });

        gardensApi.add(garden)
            .then(({savedGarden, slimUser}) => {
                dispatch({
                    type: actions.ADDED_GARDEN,
                    payload: savedGarden
                });
                dispatch({
                    type: 'FETCHED_USER',
                    payload: slimUser
                });
            }, error => {
                dispatch({
                    type: actions.ADD_GARDEN_ERROR,
                    payload: error
                });
            });
    };
}

export function getGardenById(id) {
    return dispatch => {
        dispatch({
            type: actions.FETCHING_GARDEN
        });

        gardensApi.get(id)
            .then(garden => {
                dispatch({
                    type: actions.FETCHED_GARDEN,
                    payload: garden
                });
            }, error => {
                dispatch({
                    type: actions.FETCHED_GARDEN_ERROR,
                    payload: error
                });
            });
    };
}

export function plotClicked( garden, plantId, xPosition, yPosition) {
    console.log('I was clicked!');
    return (dispatch, getState) => { 
        const { activeAction } = getState();
        if(activeAction === 'ADD') {
            return dispatch => {
                dispatch({
                    type: actions.ADDING_PLANT });
            
                const newGarden = Object.create(garden);
                const instanceId = shortid.generate();
                newGarden.plot[instanceId] = {
                    instanceId,
                    plantId,
                    xPosition,
                    yPosition
                };
                gardensApi.update(newGarden)
                    .then(newGarden => {
                        dispatch({
                            type: actions.ADDED_PLANT,
                            payload: newGarden
                        });
                    })
                    .catch(error => {
                        dispatch({
                            type: actions.ADD_PLANT_ERROR,
                            payload: error
                        });
                    });
            };
        }
        if(verb === 'REMOVE') {
            return dispatch => {
                dispatch({ 
                    type: actions.REMOVING_PLANT });

                const newGarden = Object.create(garden);
                newGarden.plot[plantId] = null;
            
                gardensApi.update(newGarden)
                    .then(newGarden => {
                        dispatch({
                            type: actions.REMOVED_PLANT,
                            payload: newGarden
                        });
                    })
                    .catch(error => {
                        dispatch({
                            type: actions.REMOVE_PLANT_ERROR,
                            payload: error
                        });
                    });
            };
        }
    };
}