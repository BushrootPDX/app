import { connect } from 'react-redux';
import { saveGarden, deleteGarden } from './actions';
import { bindActionCreators } from 'redux';
import GardenActionSelector from './GardenActionSelector';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
    return {
        garden: state.garden
    };
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ saveGarden, deleteGarden }, dispatch);
}

const GardenActionSelectorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(GardenActionSelector));

export default GardenActionSelectorContainer;