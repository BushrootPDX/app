import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Auth from './auth/Auth';
import GardenContainer from './garden/GardenContainer';
import GardenBuilderContainer from './gardenBuilder/GardenBuilderContainer';
import PrivateRoute from './privateRoute';
import { checkForToken } from './auth/actions';
import { connect } from 'react-redux';


const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

class App extends Component {

    componentDidMount() {
        this.props.checkForToken();
    }

    render() {
        return (
            <Router >
                <div className="App">
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/dashboard">Dashboard</Link>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route path="/auth" render={() => <Auth/>}/>
                        <PrivateRoute path="/dashboard" render={() => <App/>}/>
                        <Route exact path="/" component={Home}/>
                        <PrivateRoute path="/gardens/:id" component={GardenContainer}/>
                        <PrivateRoute exact path="/gardens" component={GardenBuilderContainer}/>
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default connect(
    state => ({ user: state.auth.user }),
    dispatch => ({
        checkForToken() { return dispatch(checkForToken()); }
    })
)(App);