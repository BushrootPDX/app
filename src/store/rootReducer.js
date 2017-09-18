import { combineReducers } from 'redux';
import auth from '../auth/reducers';
import queryField from '../searchbar/reducers';
import { 
    plants,
    plantsError, 
    plantsLoading, 
    selectedPlant 
} from '../plantsearch/reducers';

export default combineReducers({
    auth,
    queryField,
    plants,
    plantsError,
    plantsLoading,
    selectedPlant
});