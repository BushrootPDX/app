
import * as actions from './constants';
import gardensApi from '../services/gardensApi';
import plantInstancesApi from '../services/plantInstancesApi';

export function addPlantInstance(id) {

    return dispatch => {
        dispatch({ type: actions.ADDING_PLANT });

        dispatch({ 
            type: actions.ADDED_PLANT,
            payload: id
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
            })
            .catch(error => {
                dispatch({
                    type: actions.FETCHED_GARDEN_ERROR,
                    payload: error
                });
            });
    };
}

export function plotClicked(verb, gardenId, plantId, xPosition, yPosition) {
    if(verb === 'ADD') {
        return dispatch => {
            dispatch({
                type: actions.ADDING_PLANT });
            
            // make sure this format works below..
            plantInstancesApi.add({
                garden: gardenId,
                plant: plantId,
                xPosition,
                yPosition
            })
                .then(newPlot => {
                    dispatch({
                        type: actions.ADDED_PLANT,
                        payload: newPlot
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
            dispatch({ type: actions.REMOVING_PLANT });

            plantInstancesApi.delete(id)
                .then(instanceId => {
                    dispatch({
                        type: actions.REMOVED_PLANT,
                        payload: instanceId
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
}
