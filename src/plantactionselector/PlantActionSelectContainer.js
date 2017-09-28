import { connect } from 'react-redux';
import { addAction, removeAction, actionReset } from './actions';
import { bindActionCreators } from 'redux';
import PlantActionSelector from './PlantActionSelector';

// Not used by component
// const mapStatetoProps = state => ({
//     activeAction: state.activeAction
// });

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ addAction, removeAction, actionReset}, dispatch);
}

const PlantActionSelectContainer = connect(
    null,
    mapDispatchToProps,
)(PlantActionSelector);

export default PlantActionSelectContainer;