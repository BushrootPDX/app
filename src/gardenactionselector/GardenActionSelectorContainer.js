import { connect } from 'react-redux';
import { saveGarden, deleteGarden } from './actions';
import { bindActionCreators } from 'redux';
import GardenActionSelector from './GardenActionSelector';

const mapStateToProps = state => ({
    garden: state.garden
});

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ saveGarden, deleteGarden }, dispatch);
}

const GardenActionSelectorContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GardenActionSelector);

export default GardenActionSelectorContainer;