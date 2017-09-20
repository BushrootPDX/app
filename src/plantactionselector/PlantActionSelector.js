import React, { Component } from 'react';

export default class PlantActionSelector extends Component {

    componentWillUnmount() {
        this.props.actionReset();
    }
    render() {
        const { activeAction } = this.props;
        const { addPlantInstance, removePlantInstance } = this.props;

        return (
            <div>
                <button
                    type="submit"
                    onClick={event => {
                        event.preventDefault();
                        addPlantInstance();
                    }}
                >Add</button>
                <button
                    type="submit"
                    onClick={event => {
                        event.preventDefault();
                        removePlantInstance();
                    }}
                >Remove</button>
            </div>
        );
    }
}