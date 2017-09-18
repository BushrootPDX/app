import { connect } from 'react-redux';
import MinPlantList from './MinPlantList';
import { selectPlant } from './actions';


const mapStateToProps = state => ({
    plants: state.recentlyViewed,

});

const mapDispatchToProps = dispatch => ({
    selectPlant: dispatch(
        selectPlant()
    )
});

const RecentPlantsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MinPlantList);

export default RecentPlantsContainer;