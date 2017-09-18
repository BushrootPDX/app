import React from 'react';

export default function PlantDetail( className, {
    name, 
    scientificName,
    photoUrl,
    spread,
    height,
    zone,
    harvestAmount,
    sunlightReq,
    waterReq
}, addToFavorites) {

    return (
        <div className={className}>
            <img src={photoUrl} alt={name}/>
            <h3>{name}</h3>
            <h5>{scientificName}</h5>
            <h5>Size:</h5><span>{spread}in. X {height}in. </span> 
            <h5>Zone:</h5><span>{zone}</span>
            <h5>Sunlight Preference: </h5><span>{sunlightReq}</span>
            <h5>Water Requirements: </h5><span>{waterReq}</span>
            <h5>Typical Yield:  </h5><span>{harvestAmount}</span>
        </div>
    );

}