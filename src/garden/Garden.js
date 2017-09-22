
import React, { Component } from 'react';
import { GardenPlot } from '../gardenPlot/GardenPlot';
import PlantSearch from '../plantsearch/PlantSearch';
import GardenBuilderContainer from '../gardenBuilder/GardenBuilderContainer';
import PlantActionSelectContainer from '../plantactionselector/PlantActionSelectContainer';
import GardenActionSelectorContainer from '../gardenactionselector/GardenActionSelectorContainer';

export default class Garden extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        if(id) this.props.getGardenById(id);
    }
    render() {
        const { loading, garden, error } = this.props;
        // const {id} = this.props.match.params;
        if (loading) return <div>Loading...</div>;
        
        return (
            <div>
                {!this.props.match.params.id && <div><GardenBuilderContainer/></div>}
                {error && error.map(err => <pre>{err}</pre>)}
                {this.props.match.params.id && (
                    <div>
                        <h2>{garden.name}</h2>
                        <PlantActionSelectContainer {...this.props} />
                        <PlantSearch />
                        <GardenPlot { ...this.props } />
                        <GardenActionSelectorContainer/>
                    </div>
                )}
            </div>
        );
    }
}