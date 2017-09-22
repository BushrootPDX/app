import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { PLANT } from '../garden/constants';


const style = spread => ({
    width: `${spread}`,
    height: `${spread}`,
    position: 'absolute',
    border: '1px dashed gray',
    backgroundColor: 'steelBlue',
    padding:'0.5rem 1rem',
    curser: 'move'
});

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
        const { img, type, x, y, spread, _id, name } = this.props;
        if(isDragging && hideSourceOnDrag) return null;
        
        return connectDragSource(
            <img
                alt={name}
                id={_id}
                src={img}
                style={{...style(spread), x, y}}
            />
        );
    }
}

export default DragSource(PLANT, plantSource, collect)(Plant);