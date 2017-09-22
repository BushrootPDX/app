import React, { Component } from 'react';
import update from 'react/lib/update';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ItemTypes from './ItemTypes';
import styled from 'styled-components';
import DragSource from './Plant';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { plotClicked } from '../garden/actions';
import { bindActionCreators } from 'redux'; 

// const boxTarget = {
//     drop(props, monitor, component) {
//         const item = monitor.getItem();
//         const delta = monitor.getDifferenceFromInitialOffset();
//         const left = Math.round(item.left + delta.x);
//         const top = Math.round(item.top + delta.y);

//         component.moveBox(item.id, left, top);
//     }
// };

const plantTarget = {
    drop(props, monitor, component) {
        const item = monitor.getItem();
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);

        component.movePlant(item.id, left, top);
    }
};

class GardenPlot extends Component {

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
        const { garden, plotClicked, selectedPlant, connectDropTarget } = this.props;
        const { _id, width, length, plot } = garden;

        const PlotDiv = styled.div`
        display: inline-block;
        border-style: solid;
        border-width: 2px;
        border-color: green;
    `;


        const styles = {
            width: `${width}vw`,
            height: `${length}vw`,
            position: 'relative'
        };

        return connectDropTarget(
            <div>
                <PlotDiv>
                    <div
                        id={_id}
                        style={styles}
                        onClick={event => {
                            const x = event.nativeEvent.offsetX;
                            const y = event.nativeEvent.offsetY;
                            if (event.target.id === _id) return plotClicked(garden, selectedPlant._id, x, y);
                            plotClicked(_id, event.target.id, x, y);
                        }}>
                        {plot && plot.map((plant, index) => {
                            return <DragSource key={index} props={plant} />;
                        })}
                    </div>
                </PlotDiv>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        garden: state.garden,
        selectedPlant: state.selectedPlant
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { plotClicked }, dispatch);
}

export default compose(DropTarget('PLANT', plantTarget, collect), connect(
    mapStateToProps,
    mapDispatchToProps))(GardenPlot);

function collect(connect, monitor) {
    return { connectDropTarget: connect.dropTarget() };
}