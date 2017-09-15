import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import App from './App';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

export const TopBar = () => (
    <div className="TopBar">
        <ul>
            <Link to="/">Home</Link>
            <Link to="/app">App</Link>
        </ul>
        <hr/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/app" component={App}/>
        </Switch>
    </div>
);

export default () => <Router ><TopBar/></Router>;