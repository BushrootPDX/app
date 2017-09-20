
import * as actions from './constants';

export function garden(state = {}, { type, payload }) {
    switch(type) {
    case actions.FETCHED_GARDEN:
    case actions.ADDED_GARDEN:
    case actions.ADDED_PLANT:
    case actions.REMOVED_PLANT:
        return payload;
    default: return state;
    }
}

export function gardenError(state = null, { type, payload }) {
    switch(type) {
    case actions.FETCHED_GARDEN_ERROR:
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
        return true;
    case actions.FETCHED_GARDEN:
    case actions.FETCHED_GARDEN_ERROR:
    case actions.ADD_GARDEN_ERROR:
        return false;
    default: return state;
    }
}



