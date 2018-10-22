import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newGarden } from '../garden/actions';
import { withRouter } from 'react-router';

import GardenBuilder from './GardenBuilder';

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ newGarden }, dispatch);
};

const GardenBuilderContainer = connect(
    null,
    mapDispatchToProps
)(withRouter(GardenBuilder));

export default GardenBuilderContainer;
