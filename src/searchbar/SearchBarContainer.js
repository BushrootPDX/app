import { connect } from 'react-redux';
import { queryChange, queryReset } from './actions';
import { queryPlantDb } from '../plantsearch/actions';
import { bindActionCreators } from 'redux';
import SearchBar from './SearchBar';

const mapStateToProps = state => ({
    queryField: state.queryField
});

function mapDispatchToProps (dispatch) {
    return bindActionCreators({ queryChange, queryReset, queryPlantDb }, dispatch);
}

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchBar);

export default SearchBarContainer;