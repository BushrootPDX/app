import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../searchbar/SearchBar';
import PlantSearchResults from './PlantSearchResults';
import PlantDetail from '../plantdetail/PlantDetail';

export class PlantSearchContainer extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div>
                <SearchBar 
                    queryField={queryField}
                    onChange={updateQueryField}
                    searchFunction={searchFunction} />
                <PlantSearchResults />
                <PlantDetail 
                    className={className}
                    plant={selectedPlant}
                    addToFavorites={addToFavorites} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    queryField: state.queryField,
    selectedPlant: state.selectedPlant
});

const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlantSearchContainer);