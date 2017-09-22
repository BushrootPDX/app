import React from 'react';
import styled from 'styled-components';
import { DragSourceContainer, DropTargetContainer } from '../dragaround/Container';


export default function GardenPlot( props ) {

    const { garden, plotClicked, selectedPlant } = props;
    const { _id, width, length, plot } = garden;

    const PlotDiv = styled.div`
        display: inline-block;
        float: right;
        margin-left: 25%;
        border-style: solid;
        border-width: 2px;
        border-color: green;
    `;

    return (
        <PlotDiv>
            <div
                id={_id}
                style={renderPlot(width, length)}
                onClick={event => {                    
                    const x = event.screenX;
                    const y = event.screenY;
                    if (event.target.id === _id) return plotClicked( garden, selectedPlant._id, x, y);
                    plotClicked( _id, event.target.id, x, y);
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
                <DropTargetContainer />
                <DragSourceContainer />
            </div>
        </PlotDiv>
    );
}


function renderPlot(w, h) {
    return { width: `${w}vw`, height: `${h}vw` };
}