import React from 'react';
import styled from 'styled-components';
import { DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DragSource from './Plant';


export function GardenPlot( props ) {

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

    const styles = {
        width: `${width}vw`,
        height: `${length}vw`,
        position: 'relative'
    };

    const plantTarget = {
        drop(props, monitor, component) {
            const item = monitor.getItem();
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);

            component.movePlant(item.id, left, top);
        }
    };

    return (
        <PlotDiv>
            <div
                id={_id}
                style={styles}
                onClick={event => {                    
                    const x = event.nativeEvent.offsetX;
                    const y = event.nativeEvent.offsetY;
                    if (event.target.id === _id) return plotClicked( garden, selectedPlant._id, x, y);
                    plotClicked( _id, event.target.id, x, y);
                }}>
                {plot && plot.map( (plant, index) => {
                    return <DropTarget key={index} props={plant}/>;
                } )}
            </div>
        </PlotDiv>
    );
}


function renderPlot(w, h) {
    return { width: `${w}vw`, height: `${h}vw` };
}