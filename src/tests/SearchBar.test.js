import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { SearchBar } from '../searchbar/SearchBar';

const searchFunction = function(value) {
    console.log('something something', value);
};

describe('SearchBar component', () => {

    it('renders a search bar with a default value', () => {
        const queryField = null;

        const wrapper = shallow(<SearchBar queryField={queryField} searchFunction={searchFunction} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('renders a search bar with a supplied value', () => {
        const queryField = 'potato';

        const wrapper = shallow(<SearchBar queryField={queryField} searchFunction={searchFunction} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });


});