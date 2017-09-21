import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGardenById, plotClicked, newGarden } from './actions';

import Garden from './Garden';

function mapStateToProps(state) {
    return {
        user: state.auth.user,
        selectedPlant: state.selectedPlant,
        garden: state.garden,
        error: state.error,
        loading: state.loading,
        activeAction: state.activeAction
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { getGardenById, plotClicked, newGarden }, dispatch);
}

const GardenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Garden);

export default GardenContainer;
