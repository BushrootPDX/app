import React from 'react';

export default function PlantDetail( props ) {
    const {
        _id,
        name, 
        scientific_name,
        image,
        spread,
        height,
        description,
        sun_requirements,
        sowing_method
    } = props.selectedPlant;

    return (
        <div id={_id}>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <h4>{scientific_name}</h4>
            <h5>{description}</h5>
            <h5>Size:</h5><span>{spread}in. X {height}in. </span> 
            <h5>Sunlight Preference: </h5><span>{sun_requirements}</span>
            <h5>Sowing Method: </h5><span>{sowing_method}</span>
        </div>
    );
}