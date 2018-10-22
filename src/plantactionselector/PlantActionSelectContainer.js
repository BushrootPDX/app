import { connect } from 'react-redux';
import { addAction, removeAction, actionReset } from './actions';
import { bindActionCreators } from 'redux';
import PlantActionSelector from './PlantActionSelector';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { addAction, removeAction, actionReset },
        dispatch
    );
}

const PlantActionSelectContainer = connect(
    null,
    mapDispatchToProps
)(PlantActionSelector);

export default PlantActionSelectContainer;
