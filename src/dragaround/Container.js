import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget, DragDropContext, DragSource } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
import _ from 'lodash';
// import ItemTypes from './ItemTypes';
// import Box from './Box';

const Types = {
    BOX: 'Box'
};

const boxSource = {
    beginDrag(props) {
        const item = { id: props.id };
        return item;
    },
    endDrag(props, monitor, component) {
        if(!monitor.didDrop()) {
            return;
        }

        const item = monitor.getItem();
        // const dropResult = monitor.getDropResult();
        console.log(monitor.getDropResult());
        // BoxActions.moveBoxToList(item.id, dropResult.listId);
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}


class Box extends Component {

    render() {
        const { id } = this.props;

        const { isDragging, connectDragSource } = this.props;

        return connectDragSource(
            <div>
                I am a draggable box
                {isDragging && 'and I am being dragged'}
            </div>
        );
    }
}

export const DragSourceContainer = DragSource(Types.BOX, boxSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource()
}))(Box);


// const styles = {
//     width: 300,
//     height: 300,
//     border: '1px solid black',
//     position: 'relative'
// };

// const boxTarget = {
//     drop(props, monitor, component) {
//         const item = monitor.getItem();
//         const delta = monitor.getDifferenceFromInitialOffset();
//         const left = Math.round(item.left + delta.x);
//         const top = Math.round(item.top + delta.y);

//         component.moveBox(item.id, left, top);
//     }
// };

// export default class Container extends Component {
//     static propTypes = {
//         connectDropTarget: PropTypes.func.isRequired
//     };

//     constructor(props) {
//         super(props);
//         this.state = {
//             boxes: {
//                 a: { top: 20, left: 80, title: 'drag me around' },
//                 b: { top: 180, left: 20, title: 'drag me too' }
//             }
//         };
//     }

//     moveBox(id, left, top) {
//         console.log('left is', left);
//         // this.setState(update(this.state, {
//         //     boxes: {
//         //         [id]: {
//         //             $merge: {left, top}
//         //         }
//         //     }
//         // }));
//     }

//     render () {
//         const { hideSourceOnDrag, connectDropTarget }= this.props;
//         const { boxes } = this.state;

//         return connectDropTarget(
//             <div style={styles}>
//                 {Object.keys(boxes).map((key) => {
//                     const { left, top, title } = boxes[key];
//                     return (
//                         <Box
//                             key={key}
//                             id={key}
//                             left={left}
//                             top={top}
//                             hideSourceOnDrag={hideSourceOnDrag}
//                         >
//                             {title}
//                         </Box>
//                     )
//                 })}
//             </div>
//         );

//     }
// }

// export const DropTargetContainer = DropTarget(Types.BOX, boxTarget, (connect, monitor) => ({
//     connectDropTarget: connect.dropTarget(),
//     isOver: monitor.isOver(),
//     isOverCurrent: monitor.isOver({shallow: true}),
//     canDrop: monitor.canDrop(),
//     itemType: monitor.getItemType()
// }))(Container);