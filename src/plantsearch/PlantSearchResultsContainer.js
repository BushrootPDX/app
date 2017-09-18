import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantSearchResults from './PlantSearchResults';
import { selectPlant } from './actions';


const mapStateToProps = state => ({
    plants: state.plants,

});

const mapDispatchToProps = dispatch => ({
    selectPlant: dispatch(
        selectPlant()
    )
});

const PlantSearchResultsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PlantSearchResults);

export default PlantSearchResultsContainer;