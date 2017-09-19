import * as actions from './constants';
import gardensApi from '../services/gardensApi';

export default function saveGarden(id) {
    return dispatch => {
        dispatch({ type: actions.SAVING_GARDEN });
        gardensApi.update(id)
            .then(saved => {
                dispatch({
                    type: actions.SAVED_GARDEN,
                    payload: saved
                });
            })
            .catch(error => {
                dispatch({
                    type: actions.SAVE_GARDEN_ERROR,
                    payload: error
                });
            });
    };
}

export function deleteGarden(id) {
    return dispatch => {
        dispatch({ type: actions.DELETING_GARDEN });
        gardensApi.delete(id)
            .then(deleted => {
                dispatch({
                    type: actions.DELETED_GARDEN,
                    payload: deleted
                });
            })
            .catch(error => {
                dispatch({
                    type: actions.DELETE_GARDEN_ERROR,
                    payload: error
                });
            });
    };
}