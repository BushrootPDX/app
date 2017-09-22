
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
        const newGardenPlot = _.cloneDeep(garden.plot) || [];
        if(activeAction === 'ADD') {
            
            dispatch({
                type: actions.ADDING_PLANT });
            
            newGardenPlot.push({
                plantId,
                x,
                y
            });
            gardensApi.updatePlot(garden._id, newGardenPlot)
                .then( newGarden => {
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
        }
        if(activeAction === 'REMOVE') {
            dispatch({ 
                type: actions.REMOVING_PLANT });

            const moverIndex = newGardenPlot.findIndex((plant) => plant._id === plantId);
                
            newGardenPlot.splice(moverIndex, 1);

            gardensApi.updatePlot(garden._id, newGardenPlot)
                .then( newGarden => {
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
        }
    };
}

export function movePlant({id, x, y}) {
    console.log('trying to move this thing', id, x, y);

    return (dispatch, getState) => {
        const { garden: currentGarden } = getState();
        const moverIndex = currentGarden.plot.findIndex((plant) => plant._id === id);
        const movingPlant = _.cloneDeep(newGarden.plot[moverIndex]);
        const newGardenPlot = _.cloneDeep(currentGarden.plot);
        
        
        movingPlant.x = x;
        movingPlant.y = y;
        
        newGardenPlot.splice(moverIndex, 1);
        newGardenPlot.push(movingPlant);

        dispatch({
            type: actions.MOVING_PLANT
        });

        gardensApi.updatePlot(currentGarden._id, newGardenPlot)
            .then( newGarden => {
                dispatch({
                    type: actions.MOVED_PLANT,
                    payload: newGarden
                });
            })
            .catch( error => {
                dispatch({
                    type: actions.MOVE_PLANT_ERROR,
                    payload: error
                });
            });

    };

}