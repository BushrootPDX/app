import React, { Component } from 'react';
import '../../node_modules/react-resizable/css/styles.css';
import '../../node_modules/react-grid-layout/css/styles.css';
import styled from 'styled-components';
import ReactGridLayout from 'react-grid-layout';


const StyledLayout = styled.section`
margin: auto;
`;

export default class BasicGrid extends Component {
    
    
    render() {

        const { garden } = this.props;
        const { onAddInstance, onRemoveInstance } = this.props;
        const { selectedPlant } = this.props;
        // Object.keys(garden.plot).map() = layout
        // layout is an array of objects, see the demo for more complete usage
        var layout = [
            {i: 'tomato', x: 0, y: 0, w: 1, h: 2, maxW: 1},
            {i: 'carrot', x: 1, y: 0, w: 1, h: 2, maxW: 1},
            {i: 'corn', x: 4, y: 0, w: 1, h: 2, maxW: 1}
        ];
        return (
            
            <StyledLayout>
                {/* {garden.name} */}
                <ReactGridLayout 
                    className="layout" 
                    layout={layout}
                    useCSSTransforms={true}
                    verticalCompact={false}
                    cols={12}
                    rowHeight={30}
                    width={1200}
                    style={{
                        backgroundColor:'grey',
                        display:'block',
                        margin:'auto'
                    }}
                >
                    <div style={{border:'solid 1px'}}key={'tomato'}>tomato</div>
                    <div style={{border:'solid 1px'}}key={'carrot'}>carrot</div>
                    <div style={{border:'solid 1px'}}key={'corn'}>corn</div>
                </ReactGridLayout>    
            </StyledLayout>
            
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
//       items: [0, 1, 2, 3, 4].map(function(i, key, list) {
//         return {i: i.toString(), x: i * 2, y: 0, w: 2, h: 2, add: i === (list.length - 1).toString()};
//       }),
//       newCounter: 0
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