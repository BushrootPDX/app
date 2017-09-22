import React, { Component } from 'react';
import DashboardContainer from './dashboard/DashboardContainer';
import './App.css';
import { checkForToken } from './auth/actions';
import { connect } from 'react-redux';

class App extends Component {

    componentDidMount() {
        this.props.checkForToken();
    }

    render() {
    
        return (
            <div className="App">
                <DashboardContainer/>
            </div>
        );
    }
}



export default connect(
    state => ({ user: state.auth.user }),
    dispatch => ({
        checkForToken() { return dispatch(checkForToken()); }
    })
)(App);
