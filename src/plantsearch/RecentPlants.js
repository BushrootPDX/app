import { connect } from 'react-redux';
import MinPlantList from './MinPlantList';
import { bindActionCreators } from 'redux';
import { selectPlant } from './actions';


const mapStateToProps = state => ({
    plants: state.recentlyViewed,

});

function mapDispatchToProps (dispatch){
    return bindActionCreators({ selectPlant }, dispatch);
}

const RecentPlantsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MinPlantList);

export default RecentPlantsContainer;