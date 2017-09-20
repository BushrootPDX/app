
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { getGardenById, addPlant, removePlant, movePlant } from './actions';

import Garden from './Garden';

function mapStateToProps(state) {
    return {
        selectedPlant: state.selectedPlant,
        garden: state.garden
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { getGardenById, addPlant, removePlant, movePlant }, dispatch);
}

const GardenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Garden));

export default GardenContainer;
