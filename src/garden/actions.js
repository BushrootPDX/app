
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

export function plotClicked(verb, id, xPosition, yPosition) {
    if(verb === 'ADD') {
        return dispatch => {
            dispatch({
                type: actions.ADDING_PLANT });
            
            // make sure this format works below..
            plantInstancesApi.put({
                plant: id,
                xPosition,
                yPosition
            })
                .then(plantInstance => {
                    dispatch({
                        type: actions.ADDED_PLANT,
                        payload: plantInstance
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
}
