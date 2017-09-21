
import React, { Component } from 'react';
import GardenPlot from '../gardenPlot/GardenPlot';
import PlantSearch from '../plantsearch/PlantSearch';
import GardenBuilder from '../gardenBuilder/GardenBuilder';
import PlantActionSelectContainer from '../plantactionselector/PlantActionSelectContainer';
import GardenActionSelectorContainer from '../gardenactionselector/GardenActionSelector';

export default class Garden extends Component {
    componentDidMount() {
        const {id} = this.props.location;
        if(id) this.props.getGardenById(id);
    }
    render() {
        const { loading, garden, error } = this.props;
        const {id} = this.props.location;
        if (loading) return <div>Loading...</div>;
        if(!id) return <div><GardenBuilder newGarden={this.props.newGarden} user={this.props.user} /></div>;

        return (
            <div>
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