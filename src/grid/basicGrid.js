import React, { Component } from 'react';
import '../../node_modules/react-resizable/css/styles.css';
import '../../node_modules/react-grid-layout/css/styles.css';
import ReactGridLayout from 'react-grid-layout';


let layout;
export default class BasicGrid extends Component {
    componentDidMount() {
        const { garden } = this.props;
        if(garden.plot) {
            layout = garden.plot.map(plant => {
                return ({
                    key:`${plant._id}`,
                    i: `${plant._id}`,
                    x: parseInt(plant.x),
                    y: parseInt(plant.y),
                    w: parseInt(plant.spread),
                    h: parseInt(plant.spread)
                });
            });
        }

    }
    render() {
        const { garden } = this.props;
        console.log(garden);
        const { onAddInstance, onRemoveInstance, converPolt } = this.props;
        const { selectedPlant } = this.props;


        // const converPolt = garden.plot.map((plant) => {
        //     const item = {
        //         key:`${plant._id}`,
        //         i: `${plant._id}`,
        //         x: plant.x,
        //         y: plant.y,
        //         w: plant.spread,
        //         h: plant.spread
        //     }; 
        //     return item;
        // });
        
        // Object.keys(plot).map() = layout
        // layout is an array of objects, see the demo for more complete usage

        // NOTE: need a max lenth of webpage or the grid will have a infinite length
        // onLayoutChange={'resubmit the garden'}
        // onDragStop={'set new layout on plot'}
        // var layout = [
        //     {i: 'tomato', x: 0, y: 0, w: 1, h: 1},
        //     {i: 'carrot', x: 2, y: 0, w: 1, h: 1},
        //     {i: 'corn', x: 4, y: 0, w: 1, h: 1}
        // ];
        return (
            
            
            <ReactGridLayout 
                className="layout" 
                autoSize={false}
                isResizable={false}
                layout={layout}
                useCSSTransforms={true}
                verticalCompact={false}
                cols={6}
                rowHeight={10}
                width={garden.width}
                style={
                    {
                        width:garden.width,
                        height:garden.length,
                        float:'center'
                    }
                }
            >    
                {
                    garden.plot &&  garden.plot.map(plant => {
                        const { name, spread, _id } = plant;
                        const styled = (spread) => ({
                            width: spread,
                            height: spread,
                            borderStyle: 'solid',
                            borderColor: '#000',
                            borderWidth: 'solid',
                            backgroundColor: 'blue'


                        });
                        return (
                            <div key={_id} id={_id} style={styled(spread)}>{name}</div>
                        );
                    })
                }
            </ReactGridLayout>    
            
            
        );
    }
}
//DICECTION NOTES FROM CHRIS:
// Currently I can tell that 'n' is an added pice of a concatonated string that is givven to all new objects
// the _ = require('lodash'); is a refrence for the library lodash witch handels simple data types like
//strings number arrays and objects.
// _.reject removes an item from an aray that matches the paramiters, use the twice .spliced technique to mimic this
//_.map is just the lodash version of .map



// var React = require('react');
// var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');
// var _ = require('lodash');
// var WidthProvider = require('react-grid-layout').WidthProvider;
// var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;
// ResponsiveReactGridLayout = WidthProvider(ResponsiveReactGridLayout);

// /**
//  * This layout demonstrates how to use a grid with a dynamic number of elements.
//  */
// var AddRemoveLayout = React.createClass({
//   mixins: [PureRenderMixin],

//   getDefaultProps() {
//     return {
//       className: "layout",
//       cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
//       rowHeight: 100
//     };
//   },

//   getInitialState() {
//     return {
//       items: plot.map(function(i, key, list) {
//         return {_id: i.toString(), x: i * 2, y: 0, w: 2, h: 2,};
//       })
//     };
//   },

//   createElement(el) {
//     var removeStyle = {
//       position: 'absolute',
//       right: '2px',
//       top: 0,
//       cursor: 'pointer'
//     };
//     var i = el.add ? '+' : el.i;
//     return (
//       <div key={i} data-grid={el}>
//         {el.add ?
//           <span className="add text" onClick={this.onAddItem} title="You can add an item by clicking here, too.">Add +</span>
//         : <span className="text">{i}</span>}
//         <span className="remove" style={removeStyle} onClick={this.onRemoveItem.bind(this, i)}>x</span>
//       </div>
//     );
//   },

//   onAddItem() {
//     /*eslint no-console: 0*/
//     console.log('adding', 'n' + this.state.newCounter);
//     this.setState({
//       // Add a new item. It must have a unique key!
//       items: this.state.items.concat({
//         i: 'n' + this.state.newCounter,
//         x: this.state.items.length * 2 % (this.state.cols || 12),
//         y: Infinity, // puts it at the bottom
//         w: 2,
//         h: 2
//       }),
//       // Increment the counter to ensure key is always unique.
//       newCounter: this.state.newCounter + 1
//     });
//   },

//   // We're using the cols coming back from this to calculate where to add new items.
//   onBreakpointChange(breakpoint, cols) {
//     this.setState({
//       breakpoint: breakpoint,
//       cols: cols
//     });
//   },

//   onLayoutChange(layout) {
//     this.props.onLayoutChange(layout);
//     this.setState({layout: layout});
//   },

//   onRemoveItem(i) {
//     console.log('removing', i);
//     this.setState({items: _.reject(this.state.items, {i: i})});
//   },

//   render() {
//     return (
//       <div>
//         <button onClick={this.onAddItem}>Add Item</button>
//         <ResponsiveReactGridLayout onLayoutChange={this.onLayoutChange} onBreakpointChange={this.onBreakpointChange}
//             {...this.props}>
//           {_.map(this.state.items, this.createElement)}
//         </ResponsiveReactGridLayout>
//       </div>
//     );
//   }
// });

// module.exports = AddRemoveLayout;

// if (require.main === module) {
//   require('../test-hook.jsx')(module.exports);
// }