
import * as actions from './constants';

export function garden(state = {}, { type, payload }) {
    switch(type) {
    case actions.SAVED_GARDEN:
    case actions.FETCHED_GARDEN:
    case actions.ADDED_GARDEN:
    case actions.ADDED_PLANT:
    case actions.REMOVED_PLANT:
    case actions.MOVED_PLANT:
        return payload;
    case actions.DELETED_GARDEN:
        return {};
    case actions.SAVE_GARDEN_ERROR:
    case actions.DELETE_GARDEN_ERROR:
        return null;
    default: return state;
    }
}

export function gardenError(state = null, { type, payload }) {
    switch(type) {
    case actions.SAVE_GARDEN_ERROR:
    case actions.DELETE_GARDEN_ERROR:
    case actions.FETCHED_GARDEN_ERROR:
    case actions.MOVE_PLANT_ERROR:
        return payload;
    case actions.FETCHING_GARDEN:
    case actions.FETCHED_GARDEN:
        return null;
    default: return state;
    }
}

export function gardenLoading(state = false, { type, paylaod }) {
    switch(type) {
    case actions.ADDING_GARDEN:
    case actions.FETCHING_GARDEN:
    case actions.MOVING_PLANT:
        return true;
    case actions.FETCHED_GARDEN:
    case actions.FETCHED_GARDEN_ERROR:
    case actions.ADD_GARDEN_ERROR:
        return false;
    default: return state;
    }
}



