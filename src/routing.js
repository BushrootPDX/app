import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Auth from './auth/Auth';
import GardenContainer from './garden/GardenContainer';
import GardenBuilderContainer from './gardenBuilder/GardenBuilderContainer';
import App from './App';
import PrivateRoute from './privateRoute';
import { checkForToken } from './auth/actions';
import { connect } from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

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
                        <PrivateRoute path="/gardens" component={GardenBuilderContainer}/>
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export const TopBarContainer = connect(
    state => ({ user: state.auth.user }),
    dispatch => ({
        checkForToken() { return dispatch(checkForToken()); }
    })
)(TopBar);

export default DragDropContext(HTML5Backend)(TopBarContainer);