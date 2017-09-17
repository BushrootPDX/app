import React from 'react';

export default function PlantSearchResults(results, selectPlant) {

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