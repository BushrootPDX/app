import { connect } from 'react-redux';
import { saveGarden, deleteGarden } from './actions';
import GardenActionSelector from './GardenActionSelector';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
    id: state.garden._id;
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ saveGarden, deleteGarden }, dispatch);
};

const GardenActionSelectorContainer = connect(
    mapStateToProps, mapDispatchToProps
)(GardenActionSelector);