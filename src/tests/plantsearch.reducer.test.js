import { plants, recentlyViewed, plantsError, plantsLoading} from '../plantsearch/reducers';
import * as actions from '../plantsearch/constants';

describe('plantsearch reducers', () => {
    it('updates recently viewed as needed', () => {
        const recent = [
            {name:'tomato',_id:'123'},
            {name:'corn',_id:'456'},
            {name:'peas',_id:'789'},
            {name:'cabbage',_id:'1011'},
        ];
        // const initialState = recentlyViewed([], 
        //     {type: actions.VIEWED_PLANT, payload:{name:'tomato',_id:'123'}});
        // expect(initialState).toEqual(recent);

        const finalState = recentlyViewed(recent, 
            {type:actions.VIEWED_PLANT, payload: {name:'lettuce',_id:'987'}});
        expect(finalState).toEqual(
            [
                {name:'lettuce',_id:'987'},
                {name:'tomato',_id:'123'},
                {name:'corn',_id:'456'},
                {name:'peas',_id:'789'},
            ]
        );
    });

});