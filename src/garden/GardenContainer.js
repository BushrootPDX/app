import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPlant } from './actions';

import Garden from './Garden';

function mapStateToProps(state) {
    return {
        selectedPlant: state.selectedPlant,
        error: state.error,
        loading: state.loading
    };
}

function mapDispatchToProps(dispatch) {
    //dispatch() something? Which action?
    return bindActionCreators({addPlant});
}

const GardenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Garden);

export default GardenContainer;
