import * as actions from './constants';

export function queryChange(query='') {
    return {
        type: actions.QUERY_CHANGE,
        payload: query
    };
}

export function queryReset() {
    return {
        type: actions.QUERY_RESET,
        payload: 'Search...'
    };
}