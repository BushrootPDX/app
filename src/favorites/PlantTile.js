import React from 'react';

export default function PlantTile({ removeFromFaves, viewDetails, selectPlant, plant}) {
    let { name, image, _id} = plant;
    return (
        <div id={_id} onClick={() => selectPlant(_id)}>
            <img src={image} alt={name}/>
            <h6>{name}</h6>
            <button onClick={removeFromFaves}>remove</button>
            <button onClick={viewDetails}>view</button>
        </div>
    );

}