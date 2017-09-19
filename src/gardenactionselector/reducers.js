import * as actions from './constants';

export function garden(state = null, { type, payload }) {
    switch(type) {
    case actions.SAVED_GARDEN:
        return payload;
    case actions.DELETED_GARDEN:
    case actions.SAVE_GARDEN_ERROR:
    case actions.DELETE_GARDEN_ERROR:
        return null;
    default:
        return state;
    }
}