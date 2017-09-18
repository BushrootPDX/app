import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class PlantSearchResults extends Component {

    render() {

        const { plants, selectPlant } = this.props;

        return (
            <ul>
                {plants && plants.map((plant, index) => 
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

