import React, { Component } from 'react';

export default class SearchBar extends Component {

    componentWillUnmount() {
        this.props.queryReset();
    }

    render() {
        const { queryField } = this.props;
        const { queryChange, queryPlantDb } = this.props;

        return (
            <form 
                onSubmit={event => {
                    event.preventDefault();
                    queryPlantDb(queryField);
                }}>
                <input
                    type="text"
                    value={queryField}
                    onChange={({ target }) => queryChange(target.value)}
                ></input>
                <button type="submit" 
                >Search</button>
            </form>
        );
    }
}