import * as actions from './constants';

export const queryField = 
    (state = 'Search...', { type, payload }) => {
        switch(type) {
        case actions.QUERY_CHANGE:
            return payload;
        case actions.QUERY_RESET:
            return payload;
        default: 
            return state;
        }
    };
