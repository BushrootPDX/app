import * as actions from './constants';
import { combineReducers } from 'redux';

export default (state = {}, action) => combineReducers({garden, error, loading})(state, action);

export function garden(state = null, action) {
    switch(action.type) {
    case actions.SAVED_GARDEN:
        return action.payload;
    case actions.DELETED_GARDEN:
        return {};
    case actions.SAVE_GARDEN_ERROR:
    case actions.DELETE_GARDEN_ERROR:
        return null;
    default:
        return state;
    }
}

export function error(state = null, action) {
    switch(action.type) {
    case actions.SAVE_GARDEN_ERROR:
    case actions.DELETE_GARDEN_ERROR:
        return action.payload;
    default:
        return state;
    }
}

//TODO create loading reducer