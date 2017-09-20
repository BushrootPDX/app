import * as actions from '../gardenactionselector/constants';
import { makeSaveGarden, makeDeleteGarden } from '../gardenactionselector/actions';

describe('GardenActionSelector', () => {
    
    it('saveGarden function', () => {
        
        const garden = {
            _id : '59c1c13a4957d3652b65e5ee',
            name : 'East Garden',
            width : 120,
            height : 144,
            __v : 0,
            plot : []
        };
        const gardensApi = {update: () => Promise.resolve(garden)};
        const dispatched = [];
        const dispatch = (action) => dispatched.push(action);

        const saveGarden = makeSaveGarden(gardensApi);
        return saveGarden(garden)(dispatch)
            .then(() => {
                expect(dispatched).toEqual([
                    {type: actions.SAVING_GARDEN},
                    {type: actions.SAVED_GARDEN, payload: garden}
                ]);
            });
    });

    it('deleteGarden function', () => {
        const garden = {
            _id : '59c1c13a4957d3652b65e5ee',
            name : 'East Garden',
            width : 120,
            height : 144,
            __v : 0,
            plot : []
        };
        const gardensApi = {delete: () => Promise.resolve(garden)};
        const dispatched = [];
        const dispatch = (action) => dispatched.push(action);

        const deleteGarden = makeDeleteGarden(gardensApi);
        return deleteGarden(garden)(dispatch)
            .then(() => {
                expect(dispatched).toEqual([
                    {type: actions.DELETING_GARDEN},
                    {type: actions.DELETED_GARDEN}
                ]);
            });
    });
});