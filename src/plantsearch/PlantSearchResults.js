import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPlant } from './actions';

export class PlantSearchResults extends Component {

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

export default connect(
    state => ({ 
        plants: state.plants, 
    }),
    dispatch => ({ 
        selectPlant: dispatch(selectPlant()) 
    })
)(PlantSearchResults);