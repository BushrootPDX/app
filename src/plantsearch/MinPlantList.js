import React, { Component } from 'react';

export default class MinPlantList extends Component {

    render() {

        const { plants, selectPlant } = this.props;

        return (
            <ul>
                {plants && plants.map((plant, index) => 
                    (<li key={index} 
                        id={plant._id} 
                        onClick={() => selectPlant(plant._id)}>
                        {plant.name}
                    </li> )
                )}
            </ul>
        );
    }
}

