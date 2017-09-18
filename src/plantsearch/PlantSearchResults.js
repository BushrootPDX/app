import React, { Component } from 'react';
import { connect } from 'react-redux';

// props = plant, selectPlant();


export class PlantSearchResults extends Component {

    handleShowResults() {
        //connected to store via actions/reducers
    }

    render() {
        const { results, selectPlant } = this.props;

        return (
            <ul>
                {results && results.map((plant, index) => 
                    (<li key={index} 
                        id={plant._id} 
                        onSelect={() => selectPlant(plant._id)}>
                        {plant.name}
                    </li> )
                )}
            </ul>
        );
    }
}

export default connect(
    state => ({ 
        results: state.results, 
        showResults: state.showResults }),
    state => ({ selectPlant: state.selectPlant })
)(PlantSearchResults);