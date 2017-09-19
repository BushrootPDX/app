
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Garden from './Garden';

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {

}

const GardenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Garden);

export default GardenContainer;
