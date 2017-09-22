import * as actions from './constants';

export function onAddInstance(instance) {
    return dispatch => {
        dispatch({
            type: actions.ADD_INSTANCE,
            payload: instance
        });
    };

}
export function converPolt(garden)  {
    const convertedGarden = garden.plot.map((plant) => {
        const item = {
            key:`${plant._id}`,
            i: `${plant._id}`,
            x: plant.x,
            y: plant.y,
            w: plant.spread,
            h: plant.spread
        }; 
        return convertedGarden;
    });
    return dispatch => {
        dispatch({
            type: actions.CONVERTED_PLOT,
            payload: convertedGarden
        });
    };
}
//   onAddItem() {
//     this.setState({
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