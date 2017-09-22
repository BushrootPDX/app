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
            border-style: solid;
            border-width: 2px;
            * {
                max-width: 80%;
            }
            img {
                width: 60%;
                display: block;
                margin: auto;
            };
            h3, h4, h5 {
                text-align: center;
                display: block;
            };
            form {
                display: block;
                margin: auto;
                width: 25vw;
            };
            p {
                display: block;
                height: 20vw;
                width: 25vw;
                margin: auto;
                overflow: scroll;

            };
            ul {
                display: block;
                height: 10vw;
                border: 1px solid black;
                margin: auto;
                width: 25vw;
                overflow: scroll;
            };
            li {
                display: block;
            };
        `;

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