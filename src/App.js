import React, { Component } from 'react';
import GardenContainer from './garden/GardenContainer';
import './App.css';

class App extends Component {
    render() {
      
        return (
            <div className="App">
                Hello!
                <GardenContainer location={{params: {id: '59c1c13a4957d3652b65e5ee'}}}/>
            </div>
        );
    }
}

export default App;
