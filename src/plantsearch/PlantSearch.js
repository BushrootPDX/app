import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBarContainer from '../searchbar/SearchBarContainer';
import MinPlantList from './MinPlantList';
import PlantDetail from '../plantdetail/PlantDetail';
import { selectPlant } from './actions';
import { bindActionCreators } from 'redux';


export class PlantSearch extends Component {

    render() {
        const { selectedPlant, plants, selectPlant, recentlyViewed } = this.props;

        return (
            <div>
                <SearchBarContainer />
                <MinPlantList plants={plants} selectPlant={selectPlant} />
                <PlantDetail selectedPlant={selectedPlant} />
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

function mapDispatchToProps (dispatch){
    return bindActionCreators({ selectPlant }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlantSearch);