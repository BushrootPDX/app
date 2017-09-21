import React, { Component } from 'react';
import BasicGrid from './grid/basicGrid';
import DashboardContainer from './dashboard/DashboardContainer';
import './App.css';

class App extends Component {
    render() {
      
        return (
            <div className="App">
                Hello!
                <BasicGrid />
                <DashboardContainer/>
            </div>
        );
    }
}

export default App;
