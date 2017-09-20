import React from 'react';

export default function GardenPlot( {garden, plotClicked, movePlant} ) {
    const { _id, width, height, plot } = garden;


    return (
        <div id={_id}>
            <div
                style={renderPlot(width, height)}
                onClick={event => {
                    const x = event.screenX;
                    const y = event.screenY;
                    if (event.target.id === _id) plotClicked(x, y);
                }}>
                {plot[0] && plot.map(plant => {
                    return <img
                        src={plant.img}
                        style={renderPlantIcon(plant.xPosition, plant.yPosition, plant.spread)}
                        alt={plant.type} />;
                })}
            </div>
        </div>
    );
}

function renderPlantIcon(x, y, s) {
    return { left: x, bottom: y, width: `${s}vw`, height: `${s}vw` };
}

function renderPlot(w, h) {
    return { width: `${w}vw`, height: `${h}vw` };
}