import React from 'react';
import BasicGrid from '../grid/basicGrid';
import styled from 'styled-components';



export default function GardenPlot( props ) {
    
    const { garden, plotClicked, selectedPlant } = props;
    const { _id, width, length, plot } = garden;
    const StyledLayout = styled.section`
    background-color:rgba(90, 43, 21, 0.96);
    display:block;
    margin:auto;
    width:${garden.width};
    height:${garden.length};
    `;


    return (
        <StyledLayout >
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
                    const newPlant = <img
                        id={instanceId}
                        src={img}
                        style={{transform}}
                        alt={type} />;
                    return newPlant;
                })}
                <BasicGrid garden={ garden } plot={ plot }/>
            </div>
        </StyledLayout>
    );
}


function renderPlot(w, h) {
    return { width: `${w}vw`, height: `${h}vw` };
}