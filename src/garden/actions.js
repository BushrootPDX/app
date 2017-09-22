
import * as actions from './constants';
import gardensApi from '../services/gardensApi';
import shortid from 'shortid';
import _ from 'lodash';

export function addPlantInstance(id) {

    return dispatch => {
        dispatch({ type: actions.ADDING_PLANT });

        dispatch({
            type: actions.ADDED_PLANT,
            payload: id
        });
    };
}

export function newGarden(garden, goToGarden) {
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
                goToGarden(savedGarden._id);
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

export function plotClicked( garden, plantId, x, y) {
    return (dispatch, getState) => { 
        const { activeAction } = getState();
        if(activeAction === 'ADD') {
            
            dispatch({
                type: actions.ADDING_PLANT });
            
            const newGardenPlot = _.cloneDeep(garden.plot) || [];
            newGardenPlot.push({
                plantId,
                x,
                y
            });
            console.log('newGarden before going to API is ', newGardenPlot);
            gardensApi.updatePlot(garden._id, newGardenPlot)
                .then( newGarden => {
                    console.log('savedGarden coming back from API is ', newGarden);
                    dispatch({
                        type: actions.ADDED_PLANT,
                        payload: newGarden
                    });
                })
                .catch(error => {
                    console.log('error from savedPlant is ', error);
                    dispatch({
                        type: actions.ADD_PLANT_ERROR,
                        payload: error
                    });
                });
        }
        if(activeAction === 'REMOVE') {
            dispatch({ 
                type: actions.REMOVING_PLANT });

            const newGarden = Object.create(garden);
            newGarden.plot[plantId] = null;

            gardensApi.update(newGarden)
                .then(({savedGarden, slimUser}) => {
                    dispatch({
                        type: actions.ADDED_PLANT,
                        payload: savedGarden
                    });
                    dispatch({
                        type: 'FETCHED_USER',
                        payload: slimUser
                    });
                })
                .catch(error => {
                    dispatch({
                        type: actions.REMOVE_PLANT_ERROR,
                        payload: error
                    });
                });
        }
    };
}