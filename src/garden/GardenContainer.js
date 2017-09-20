import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { getGardenById, movePlant, plotClicked } from './actions';

import Garden from './Garden';

function mapStateToProps(state) {
    return {
        selectedPlant: state.selectedPlant,
        garden: state.garden,
        error: state.error,
        loading: state.loading,
        activeAction: state.activeAction
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { getGardenById, plotClicked, movePlant }, dispatch);
}

const GardenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Garden));

export default GardenContainer;
