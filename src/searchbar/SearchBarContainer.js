import React, { Component } from 'react';
import { connect } from 'react-redux';
import { queryChange, queryReset } from './actions';
import { queryPlantDb } from '../plantsearch/actions';

import SearchBar from './SearchBar';

const mapStateToProps = state => ({
    queryField: state.queryField
});

const mapDispatchToProps = dispatch => ({
    queryChange: dispatch(queryChange()),
    queryReset: dispatch(queryReset()),
    searchFunction: dispatch(queryPlantDb()),    
});

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchBar);

export default SearchBarContainer;