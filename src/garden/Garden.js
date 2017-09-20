
import React, { Component } from 'react';
import GardenPlot from '../gardenPlot/GardenPlot';
import PlantSearch from '../plantsearch/PlantSearch';
import GardenBuilder from '../gardenBuilder/GardenBuilder';
import PlantActionSelectContainer from '../plantactionselector/PlantActionSelectContainer';
import GardenActionSelectorContainer from '../gardenactionselector/GardenActionSelector';

export default class Garden extends Component {
    componentDidMount() {
        this.props.getGardenById(this.props.location.params.id);
    }
    render() {
        const { loading, garden, error } = this.props;

        if (loading) return <div>Loading...</div>;
        return (
            <div>
                <GardenBuilder {...this.props} />
                <h2>{garden.name}</h2>
                {error && error.map(err => <pre>{err}</pre>)}
                <PlantSearch />
                <PlantActionSelectContainer {...this.props} />
                <GardenPlot { ...this.props } />
                <GardenActionSelectorContainer {...this.props} />
            </div>
        );
    }
}