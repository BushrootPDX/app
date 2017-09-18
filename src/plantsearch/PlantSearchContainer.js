import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBarContainer from '../searchbar/SearchBarContainer';
import PlantSearchResultsContainer from './PlantSearchResultsContainer';
import PlantDetail from '../plantdetail/PlantDetail';

export class PlantSearchContainer extends Component {

    render() {
        const { selectedPlant, plants } = this.props;

        return (
            <div>
                <SearchBarContainer />
                <PlantSearchResultsContainer />
                <PlantDetail plant={selectedPlant} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    queryField: state.queryField,
    selectedPlant: state.selectedPlant,
    recentlyViewed: state.recentlyViewed
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlantSearchContainer);