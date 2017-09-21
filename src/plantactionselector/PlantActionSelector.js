import React, { Component } from 'react';

export default class PlantActionSelector extends Component {

    componentWillUnmount() {
        this.props.actionReset();
    }
    render() {
        const { addAction, removeAction, actionReset } = this.props;

        return (
            <div>
                <button
                    type="submit"
                    onClick={event => {
                        event.preventDefault();
                        addAction();
                    }}
                >Add</button>
                <button
                    type="submit"
                    onClick={event => {
                        event.preventDefault();
                        removeAction();
                    }}
                >Remove</button>
                <button
                    type="submit"
                    onClick={event => {
                        event.preventDefault();
                        actionReset();
                    }}
                >Reset</button>
            </div>
        );
    }
}