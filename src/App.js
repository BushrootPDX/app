import React, { Component } from 'react';
import DashboardContainer from './dashboard/DashboardContainer';
import './App.css';

class App extends Component {
    render() {
      
        return (
            <div className="App">
                Hello!
                <DashboardContainer/>
            </div>
        );
    }
}

export default App;
