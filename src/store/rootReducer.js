import { combineReducers } from 'redux';
import auth from '../auth/reducers';
import queryField from '../searchbar/reducers';

export default combineReducers({
    auth,
    queryField
});