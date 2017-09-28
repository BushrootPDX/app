import * as actions from './constants';

export function plants(state = [], { type, payload }) {
    switch (type) {
    case actions.FETCHED_PLANTS:
        return payload;
    default:
        return state;
    }
}

export function recentlyViewed(state = [], { type, payload}) {
    switch(type) {
    case actions.VIEWED_PLANT:{
        let newArray = state.slice();
        const index = newArray.findIndex((plant) => plant._id === payload._id);

        if(index !== -1) newArray.splice(index,1);
        newArray.unshift(payload);
        //TODO: change list lenght to hight number with test
        if(newArray.length >= 4 ) newArray.pop();
        return newArray;
    }
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
        // Wha?
        setTimeout(() => {}, 2000);
        return payload;
    default:
        return state;
    }
}