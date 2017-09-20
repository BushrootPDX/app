
import React, { Component } from 'react';
import GardenPlot from './GardenPlot';

export default class Garden extends Component {
    componentDidMount() {
        this.props.getGardenById(this.props.location.params.id);
    }
    render() {
        // const { garden, movePlant, plotClicked } = this.props;
        return (
            <div>
                <GardenPlot { ...this.props }/>
            </div>
        );
    }
}