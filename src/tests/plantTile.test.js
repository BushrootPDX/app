import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import PlantTile from '../favorites/PlantTile';

const removeFromFaves = () => 'Removed!';
const viewDetails = () => 'detailsViewed!';
const selectPlant = () => 'plant Slected!';
const plant = {name:'po',image:'image',_id:'123'};

describe('PlantTile component', () => {
    it('renders a plant tyle component with listening functions', () => {
        const wrapper = shallow(<PlantTile 
            removeFromFaves={removeFromFaves}
            viewDetails={viewDetails}
            selectPlant={selectPlant}
            plant={plant}
        />);
        expect(toJSON(wrapper)).toMatchSnapshot();

    });

});