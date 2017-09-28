import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Auth from './auth/Auth';
import GardenContainer from './garden/GardenContainer';
import GardenBuilderContainer from './gardenBuilder/GardenBuilderContainer';
import App from './App';
import PrivateRoute from './privateRoute';
import { checkForToken } from './auth/actions';
import { connect } from 'react-redux';


const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

// Not sure why this is called TopBar. It's the meat of the app, right?
// And it's in a file called routing.js
class TopBar extends Component {

    componentDidMount() {
        this.props.checkForToken();
    }

    render() {
        return (
            <Router >
                <div className="TopBar">
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
)(TopBar);