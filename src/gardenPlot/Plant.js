import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { PLANT } from '../garden/constants';


const style = (spread, x, y) => {
    const renderSize = parseInt(spread * 5, 10);
    return ({
        boxSizing: 'border-box',
        width: `${renderSize}px`,
        height: `${renderSize}px`,
        position: 'absolute',
        border: '1px dashed gray',
        backgroundColor: 'steelBlue',
        padding:'0.5rem 1rem',
        curser: 'move',
        transform: `translate(${x}px, ${y}px)`,
        borderRadius: `${renderSize}px`,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    });};

const plantSource = {
    beginDrag(props) {
        const { id, x, y } = props;
        return { id, x, y };
    },
    endDrag(props, monitor, component) {
        if(!monitor.didDrop()) return;

        const item = monitor.getItem();
        console.log(monitor.getDropResult());
    },

};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

export class Plant extends Component {
    
    render() {
        const { hideSourceOnDrag, connectDragSource, isDragging } = this.props;
        const { x, y, _id, plantId } = this.props.props;
        const { name, spread, img } = plantId;
        if(isDragging && hideSourceOnDrag) return null;
        const shortName = name => {
            const letters = name.split('');
            return letters[0]+letters[1]+letters[2];
        };
        
        return connectDragSource(
            <div
                name={_id}
                id={_id}
                src={img}
                style={{...style(spread, x, y)}}
            >
                {shortName(name)}
            </div>

        );
    }
}

export default DragSource(PLANT, plantSource, collect)(Plant);