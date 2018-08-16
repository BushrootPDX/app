import { connect } from 'react-redux';
import Dashboard from './Dashboard';

const mapStateToProps = state => ({
    user: state.auth.user
});

const mapDispatchToProps = dispatch => {
    return {};
};

const DashboardContainer = connect(
    mapStateToProps,
    null
)(Dashboard);

export default DashboardContainer;