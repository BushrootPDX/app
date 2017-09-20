
import * as actions from './constants';

export function garden(state = {}, { type, payload }) {
    switch(type) {
    case actions.FETCHED_GARDEN:
        return payload;
    case actions.ADDED_PLANT:
        // need to push 
        return { 
            plot: payload,  
            ...state };
    case actions.REMOVED_PLANT:{
        const newPlot = state.plot.slice();
        const index = newPlot.findIndex(instance => instance._id === payload);
        return {
            plot: [
                newPlot.slice(0, index),
                newPlot.slice(index+1)
            ],
            ...state
        };}
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
    case actions.FETCHING_GARDEN:
        return true;
    case actions.FETCHED_GARDEN:
    case actions.FETCHED_GARDEN_ERROR:
        return false;
    default: return state;
    }
}



