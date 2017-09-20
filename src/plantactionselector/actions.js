import * as actions from './constants';

export function addPlantInstance() {
    return {
        type: actions.ACTION_CHANGE,
        payload: 'Add Plant'
    };
}

export function removePlantInstance() {
    return {
        type: actions.ACTION_CHANGE,
        payload: 'Remove Plant'
    };
}

export function actionReset() {
    return {
        type: actions.ACTION_RESET,
        payload: ''
    };
}