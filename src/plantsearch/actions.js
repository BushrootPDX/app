import * as actions from './constants';
import api from '../services/plantsApi';

export function queryPlantDb (query) {
    
    return dispatch => {
        dispatch({ type: actions.FETCHING_PLANTS });
        
        api.getByQuery(query)
            .then( plants => {
                dispatch({ 
                    type: actions.FETCHED_PLANTS, 
                    payload: plants 
                });
            })
            .catch( error => { 
                dispatch({ 
                    type: actions.FETCH_PLANTS_ERROR, 
                    payload: error 
                });
            });
    };
}

export function selectPlant(id) {

    return dispatch => {
        dispatch({ type: actions.FETCHING_PLANT });

        api.getById(id)
            .then( plant => {
                dispatch({
                    type: actions.FETCHED_PLANT,
                    payload: plant
                });
                dispatch({
                    type: actions.VIEWED_PLANT,
                    payload: {name: plant.name, _id: plant._id}
                });
            })
            .catch( error => {
                dispatch({
                    type: actions.FETCH_PLANT_ERROR,
                    payload: error
                });
            });
    };
}