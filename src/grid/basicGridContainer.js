import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { onAddInstance, onRemoveInstance } from './actions';
import { plotClicked } from '../garden/actions';

import BasicGrid from './basicGrid';

function mapStateToProps(state) {
    return {
        garden: state.garden,
        plot: state.plot
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onAddInstance, onRemoveInstance, plotClicked }, dispatch);
}

function mergeProps() {
    
}

const BasicGridContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BasicGrid);

export default BasicGridContainer;