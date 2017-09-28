import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBarContainer from '../searchbar/SearchBarContainer';
import MinPlantList from './MinPlantList';
import PlantDetail from '../plantdetail/PlantDetail';
import { selectPlant } from './actions';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';


export class PlantSearch extends Component {

    render() {
        const { selectedPlant, plants, selectPlant, recentlyViewed } = this.props;

        const SearchDiv = styled.div`
            width: 25%;
            border-style: solid;
            border-width: 2px;
            img {
                width: 50%;
                display: block;
                margin: auto;
            };
            h3, h4 {
                text-align: center;
            };
            form {
                display: block;
                margin: auto;
                width: 90%;
            };
        `;

        // nice work reusing PlantList
        return (
            <SearchDiv>
                <SearchBarContainer />
                <MinPlantList plants={plants} selectPlant={selectPlant} />
                { selectedPlant._id && <PlantDetail selectedPlant={selectedPlant} /> }
                <MinPlantList plants={recentlyViewed} selectPlant={selectPlant} />
            </SearchDiv>
        );
    }
}

const mapStateToProps = state => ({
    plants: state.plants,
    selectedPlant: state.selectedPlant,
    recentlyViewed: state.recentlyViewed
});

function mapDispatchToProps (dispatch){
    return bindActionCreators({ selectPlant }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlantSearch);