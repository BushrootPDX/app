import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import PlantSearchResults from '../plantsearch/PlantSearchResults';

const results = [{
    name: 'bill',
    id: '123'
}, {
    name: 'steve',
    id: '456'
}, {
    name: 'tomato',
    id: 'red'
}];
const selectPlant = function(id) {
    console.log(id);
};


describe('PlantSearchResults component', () => {

    it('renders the plant search results when given as an array', () => {
        const wrapper = shallow(PlantSearchResults(results, selectPlant));
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

});