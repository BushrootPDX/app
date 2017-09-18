import React, { Component } from 'react';

export default class SearchBar extends Component {

    componentWillUnmount() {
        this.props.queryReset();
    }

    render() {
        const { queryField } = this.props;
        const { queryChange, searchFunction } = this.props;


        return (
            <form>
                <input
                    type="text"
                    value={queryField}
                    onChange={({ target }) => queryChange(target.value)}
                ></input>
                <button onSubmit={() => searchFunction(queryField)}>Search</button>
            </form>
        );
    }
}