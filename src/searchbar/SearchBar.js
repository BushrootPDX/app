import React from 'react';
import { connect } from 'react-redux';
import { queryChange, queryReset } from './actions';

export function SearchBar(queryField, onChange, searchFunction) {

    return (
        <form>
            <input 
                type="text" 
                value={queryField}
                onChange={ ({target}) => queryChange(target.value)}
            ></input>
            <button onSubmit={searchFunction}>Search</button>
        </form>
    );
}

const mapStateToProps = state => ({
    queryField: state.queryField
});

const mapDispatchToProps = dispatch => ({
    queryChange: dispatch(queryChange()),
    queryReset: dispatch(queryReset())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);