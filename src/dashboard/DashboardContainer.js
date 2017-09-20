import { connect } from 'react-redux';
import Dashboard from './Dashboard';

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => {
};

const DashboardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default DashboardContainer;