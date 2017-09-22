import * as actions from './constants';

export function instance(state = {}, { type, payload }) {
    switch(type) {
    case actions.ADD_INSTANCE:
        return payload;
    default: return state;
    }
}

export function plotter(state = {}, {type, payload}) {
    switch(type) {
    case actions.CONVERTED_PLOT:
        return payload;
    default:return state;
    }
}