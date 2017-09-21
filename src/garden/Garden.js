import React, { Component } from 'react';
import GardenPlot from '../gardenPlot/GardenPlot';
import PlantSearch from '../plantsearch/PlantSearch';
import GardenBuilderContainer from '../gardenBuilder/GardenBuilderContainer';
import PlantActionSelectContainer from '../plantactionselector/PlantActionSelectContainer';
import GardenActionSelectorContainer from '../gardenactionselector/GardenActionSelectorContainer';
import styled from 'styled-components';

export default class Garden extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        if(id) this.props.getGardenById(id);
    }
    render() {
        const { loading, garden, error } = this.props;
        if (loading) return <div>Loading...</div>;

        const GardenDiv = styled.div`
            display: inline-block;
            margin: auto;
            width: 65vw;
        `;

        const SearchPanel = styled.div`
            display: inline-block;
            width: 30vw;
            height: 80%;
            overflow: scroll;
            * {
                display: inline-block;
            }
        `;
        
        return (
            <div>
                {!this.props.match.params.id && <div><GardenBuilderContainer/></div>}
                {error && error.map(err => <pre>{err}</pre>)}
                {this.props.match.params.id && (
                    <div>
                        <h2>{garden.name}</h2>
                        <SearchPanel>
                            <PlantSearch />
                        </SearchPanel>
                        <GardenDiv>
                            <PlantActionSelectContainer {...this.props} />
                            <GardenPlot { ...this.props } />
                            <GardenActionSelectorContainer/>
                        </GardenDiv>
                    </div>
                )}
            </div>
        );
    }
}