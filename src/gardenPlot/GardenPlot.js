import React, { Component } from 'react';
import update from 'react/lib/update';
import PropTypes from 'prop-types';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ItemTypes from './ItemTypes';
import styled from 'styled-components';

const boxTarget = {
    drop(props, monitor, component) {
        const item = monitor.getItem();
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);

        component.moveBox(item.id, left, top);
    }
};

@DragDropContext(HTML5Backend)
@DropTarget(ItemTypes.PLANT, boxTarget, connect => ({
    connectDropTarget: connect.dropTarget()
}))


export default class GardenPLot extends Component {

    moveBox(id, left, top) {
        this.setState(update(this.state, {
            boxes: {
                [id]: {
                    $merge: {
                        left: left,
                        top: top
                    }
                }
            }
        }));
    }


    render() {
        const { garden, plotClicked, selectedPlant, hideSourceOnDrag, connectDropTarget } = this.props;
        const { _id, width, length, plot } = garden;

        const PlotDiv = styled.div`
        display: inline-block;
        border-style: solid;
        border-width: 2px;
        border-color: green;
    `;

        return connectDropTarget(
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
                </div>
            </PlotDiv>
        );
    }
}


function renderPlot(w, h) {
    return { width: `${w}vw`, height: `${h}vw` };
}