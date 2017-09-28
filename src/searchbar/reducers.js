import * as actions from './constants';

export const queryField =
    // that's a presentation thing. use `placeholder` on the `<input/>`
    (state = '', { type, payload }) => {
        switch(type) {
        case actions.QUERY_CHANGE:
            return payload;
        case actions.QUERY_RESET:
            return payload;
        default: 
            return state;
        }
    };
