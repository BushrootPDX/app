import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ItemTypes from './ItemTypes';
import styled from 'styled-components';
import DragSource from './Plant';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { plotClicked, movePlant } from '../garden/actions';
import { bindActionCreators } from 'redux'; 

const plantTarget = {
    drop(props, monitor) {
        const item = monitor.getItem();
        const id = item.id;
        const delta = monitor.getDifferenceFromInitialOffset();
        const x = Math.round(item.x + delta.x);
        const y = Math.round(item.y + delta.y);

        movePlant({id, x, y});
    }
};

function collect(connect, monitor) {
    return { 
        connectDropTarget: connect.dropTarget(),
        itemType: monitor.getItemType()
    };
}

class GardenPlot extends Component {

    render() {
        const { garden, plotClicked, selectedPlant, connectDropTarget, movePlant } = this.props;
        const { _id, width, length, plot } = garden;

        const PlotDiv = styled.div`
        display: inline-block;
        border-style: solid;
        border-width: 2px;
        border-color: #525038; 
        borderRadius: 10px;
        overflow: hidden
    `;
        function renderSize(num) {
            return parseInt(num * 5, 10);
        }

        const styles = {
            width: `${renderSize(width)}px`,
            height: `${renderSize(length)}px`,
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
                            if (event.target.id !== garden._id) {
                                return plotClicked(garden, event.target.id, x, y);
                            } else {
                                return plotClicked(garden, selectedPlant._id, x, y);
                            }
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
    return bindActionCreators( { plotClicked, movePlant }, dispatch);
}

export default compose(DropTarget('PLANT', plantTarget, collect), connect(
    mapStateToProps,
    mapDispatchToProps))(GardenPlot);

// export default DropTarget('PLANT', plantTarget, collect)(GardenPlot);