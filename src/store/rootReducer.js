
import { combineReducers } from 'redux';
import auth from '../auth/reducers';
import { garden, gardenError, gardenLoading } from '../garden/reducers';

export default combineReducers({
    auth,
    garden,
    gardenError,
    gardenLoading
});
