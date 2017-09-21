
import { combineReducers } from 'redux';
import auth from '../auth/reducers';

import { garden, gardenError, gardenLoading } from '../garden/reducers';


import { activeAction } from '../plantactionselector/reducers';
import { queryField } from '../searchbar/reducers';
import { 
    plants,
    plantsError, 
    plantsLoading, 
    selectedPlant,
    recentlyViewed
} from '../plantsearch/reducers';

export default combineReducers({
    auth,
    garden,
    gardenError,
    gardenLoading,
    queryField,
    plants,
    plantsError,
    plantsLoading,
    recentlyViewed,
    selectedPlant,
    activeAction
});
