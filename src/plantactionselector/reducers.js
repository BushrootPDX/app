import * as actions from './constants';

export const activeAction = 
    (state = 'ADD', { type, payload }) => {
        switch(type) {
        case actions.ACTION_CHANGE:
            return payload;
        case actions.ACTION_RESET:
            return payload;

        default:
            return state;
        }
    };