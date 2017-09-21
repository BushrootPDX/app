import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Auth from './auth/Auth';
import GardenContainer from './garden/GardenContainer';
import App from './App';
import PrivateRoute from './privateRoute';


const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

export const TopBar = () => (
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
            <PrivateRoute path="/gardens" component={GardenContainer}/>
            <PrivateRoute path="/gardens/:id" component={GardenContainer}/>
            <Redirect to="/"/>
        </Switch>
    </div>
);

export default () => <Router ><TopBar/></Router>;