import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch, Redirect} from 'react-router-dom';
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
        <h2
            style={{
                paddingRight:'10px',
                color: '#B8C733'
            }}>Welcome Bush Root!</h2>
    </div>
);

class TopBar extends Component {

    componentDidMount() {
        this.props.checkForToken();
    }

    render() {
        return (
            <Router style={{backgroundColor:'#525038', margin:'0px'}}>
                <div className="TopBar" >
                    <ul style={{backgroundColor:'#525038', margin:'0', padding:'20px'}}>
                        <NavLink
                            style={{
                                paddingRight:'10px',
                                color: '#C8C2B7'
                            }}
                            activeStyle={{
                                fontWeight: 'bold',
                                color: '#9AAC39',
                                border: '1px solid gray',
                            }}
                            exact to="/">Home</NavLink>
                        <NavLink 
                            style={{
                                paddingRight:'10px',
                                color: '#C8C2B7'
                            }}
                            activeStyle={{
                                fontWeight: 'bold',
                                color: '#9AAC39',
                                border: '1px solid gray',
                            }}
                            to="/dashboard">Dashboard</NavLink>
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