import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBarContainer from '../searchbar/SearchBarContainer';
import MinPlantList from './MinPlantList';
import PlantDetail from '../plantdetail/PlantDetail';
import { selectPlant } from './actions';


export class PlantSearchContainer extends Component {

    render() {
        const { selectedPlant, plants, selectPlant, recentlyViewed } = this.props;

        return (
            <div>
                <SearchBarContainer />
                <MinPlantList plants={plants} selectPlant={selectPlant} />
                <PlantDetail plant={selectedPlant} />
                <MinPlantList plants={recentlyViewed} selectPlant={selectPlant} />

            </div>
        );
    }
}

const mapStateToProps = state => ({
    plants: state.plants,
    selectedPlant: state.selectedPlant,
    recentlyViewed: state.recentlyViewed
});

const mapDispatchToProps = dispatch => ({
    selectPlant: dispatch(selectPlant())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlantSearchContainer);