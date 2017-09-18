import * as actions from './constants';

export function plants(state = [], { type, payload }) {
    switch (type) {
    case actions.FETCHED_PLANTS:
        return payload;
    default:
        return state;
    }
}

export function plantsError(state = null, { type, payload }) {
    switch (type) {
    case actions.FETCH_PLANTS_ERROR:
    case actions.FETCH_PLANT_ERROR:
        return payload;
    case actions.FETCHING_PLANTS:
    case actions.FETCHING_PLANT:
        return null;
    default:
        return state;
    }
}

export function plantsLoading(state = false, { type, payload }) {
    switch (type) {
    case actions.FETCHING_PLANTS:
    case actions.FETCHING_PLANT:
        return true;
    case actions.FETCHED_PLANTS:
    case actions.FETCH_PLANTS_ERROR:
    case actions.FETCHED_PLANT:
    case actions.FETCH_PLANT_ERROR:
        return false;
    default:
        return state;
    }
}

export function selectedPlant( state = {}, { type, payload }) {
    switch (type) {
    case actions.FETCHED_PLANT:
        return payload;
    default:
        return state;
    }
}