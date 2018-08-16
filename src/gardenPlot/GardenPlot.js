import React from 'react';
import styled from 'styled-components';

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
                style={{ width: `${width}vw`, height: `${length}vw` }}
                onClick={({ screenX: x, screenY: y, target }) => {
                    const { id } = target;
                    if (id === _id) return plotClicked(garden, selectedPlant._id, x, y);
                    plotClicked( _id, id, x, y);
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
            </div>
        </PlotDiv>
    );
}