import { immutableGarden } from '../garden/actions';
import * as actions from '../garden/constants';



describe('garden reducers', () => {
    it('adds new plant instance to garden plot', () => {
        const garden = {
            _id: '123456789',
            name: 'test garden',
            width: 2,
            height: 4,
            plot: {}
        };
        const plantId = '456ABC';
        const xPosition = 2;
        const yPosition = 4;

        const updatedGardenPlot = immutableGarden(garden, plantId, xPosition, yPosition);

        expect(updatedGardenPlot).toEqual(
            
            {
                _id: '123456789',
                name: 'test garden',
                width: 2,
                height: 4,
                plot: {
                    instanceId: '1111111',
                    plantId: '456ABC',
                    xPosition: 2,
                    yPosition: 4
                }
            }
            
        );
    });
});