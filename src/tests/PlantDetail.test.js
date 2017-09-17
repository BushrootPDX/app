import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import PlantDetail from '../plantdetail/PlantDetail';

const className = 'smallViewer';
const plant = {
    name: 'brian', 
    scientificName: 'planty mcplanterson',
    photoUrl: 'http://picpic.com/somepic.jpg',
    spread: '14',
    height: '24',
    zone: '8',
    harvestAmount: 3,
    sunlightReq: 'partial shade',
    waterReq: 'beer only'
};

describe('PlantDetail component', () => {
    it('renders a plant detail compoenent', () => {
        const wrapper = shallow(<PlantDetail className={className} plant={plant}/>);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});