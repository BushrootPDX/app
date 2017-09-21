import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newGarden } from '../garden/actions';

import GardenBuilder from './GardenBuilder';

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators( { newGarden }, dispatch);
};



const GardenBuilderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(GardenBuilder);

export default GardenBuilderContainer;

