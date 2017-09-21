import React from 'react';
import BasicGrid from '../grid/basicGrid';


export default function GardenPlot( props ) {

    const { garden, plotClicked, selectedPlant } = props;
    const { _id, width, length, plot } = garden;


    return (
        <div >
            <div
                id={_id}
                style={renderPlot(width, length)}
                onClick={event => {                    
                    const x = event.screenX;
                    const y = event.screenY;
                    if (event.target.id === _id) return plotClicked( garden, selectedPlant._id, x, y);
                    plotClicked( garden, _id, event.target.id, x, y);
                }}>
                {plot && Object.keys(plot).map(key => {
                    const {instanceId, img, xPosition, yPosition, type} = plot[key];

                    const xVal = xPosition;
                    const yVal = yPosition;
                    const transform = `translate( ${ xVal }px, ${ yVal }px)`;

                    return <img
                        id={instanceId}
                        src={img}
                        style={{transform}}
                        alt={type} />;
                })}
                <BasicGrid />
            </div>
        </div>
    );
}


function renderPlot(w, h) {
    return { width: `${w}vw`, height: `${h}vw` };
}