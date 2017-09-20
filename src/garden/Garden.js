
import React, { Component } from 'react';
import GardenPlot from '../gardenPlot/GardenPlot';
import PlantSearch from '../plantsearch/PlantSearch';
import GardenBuilder from '../gardenBuilder/GardenBuilder';

export default class Garden extends Component {
    componentDidMount() {
        this.props.getGardenById(this.props.location.params.id);
    }
    render() {
        const { loading, garden, error } = this.props;

        if (loading) return <div>Loading...</div>;
        return (
            <div>
                <h2>{garden.name}</h2>
                {error && error.map(err => <pre>{err}</pre>)}
                <PlantSearch />
                <GardenPlot { ...this.props } />
                <GardenBuilder {...this.props}/>
            </div>
        );
    }
}