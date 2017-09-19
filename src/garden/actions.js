
import * as actions from './constants';

export function addPlant(id) {

    return dispatch => {
        dispatch({ type: actions.ADDING_PLANT });

        dispatch({ 
            type: actions.ADDED_PLANT,
            payload: id
        });
    };
}
