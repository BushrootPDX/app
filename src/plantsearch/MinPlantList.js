import React, { Component } from 'react';
import styled from 'styled-components';





export default class MinPlantList extends Component {

    render() {

        const { plants, selectPlant, selectedPlant } = this.props;

        return (
            <ul>
                {plants && plants.map((plant, index) => { 
                    return (<li key={index} 
                        id={plant._id} 
                        onClick={() => selectPlant(plant._id)}>
                        {plant.name}
                    </li> );
                }
                )}
            </ul>
        );
    }
}

