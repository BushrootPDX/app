import React from 'react';
import BasicGrid from '../grid/basicGrid';
import styled from 'styled-components';



export default function GardenPlot( props ) {
    
    const { garden, plotClicked, selectedPlant } = props;
    const { _id, width, length, plot } = garden;
    const StyledLayout = styled.section`
    background-color:rgba(90, 43, 21, 0.96);
    display:block;
    margin-left: 25%;
    width:${garden.width};
    height:${garden.length};
    border-style: solid;
    border-color: green;
    `;

    const PlotDiv = styled.div`
        display: inline-block;
        float: right;
        margin-left: 25%;
        border-style: solid;
        border-width: 2px;
        border-color: green;
    `;

    return (
        
        <StyledLayout>
            <div
                id={_id}
                style={renderPlot(width, length)}
                onClick={event => {                    
                    const x = Math.abs(event.nativeEvent.offsetX);
                    const y = Math.abs(event.nativeEvent.offsetY);
                    if (event.target.id === _id) return plotClicked( garden, selectedPlant._id, x, y);
                    plotClicked( garden, _id, event.target.id, x, y);
                }}>
                {plot && Object.keys(plot).map(key => {
                    const {instanceId, img, x, y, type} = plot[key];

                    const xVal = x;
                    const yVal = y;
                    const transform = `translate( ${ xVal }px, ${ yVal }px)`;
                    
                })}
                <BasicGrid garden={ garden } plot={ plot }/>
            </div>
        </StyledLayout>
    );
}


function renderPlot(w, h) {
    return { width: `${w}vw`, height: `${h}vw` };
}