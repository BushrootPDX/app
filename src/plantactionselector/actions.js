import * as actions from './constants';

export function addAction() {
    return {
        type: actions.ACTION_CHANGE,
        payload: 'ADD'
    };
}

export function removeAction() {
    return {
        type: actions.ACTION_CHANGE,
        payload: 'REMOVE'
    };
}

export function actionReset() {
    return {
        type: actions.ACTION_RESET,
        payload: ''
    };
}