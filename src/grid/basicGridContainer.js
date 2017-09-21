import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { onAddInstance, onRemoveInstance } from './actions';

import BasicGrid from './basicGrid';

function mapStateToProps(state) {
    return {
        garden: state.garden
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onAddInstance, onRemoveInstance }, dispatch);
}

function mergeProps() {
    
}

const BasicGridContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BasicGrid);

export default BasicGridContainer;