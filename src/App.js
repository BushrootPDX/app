import React, { Component } from 'react';
import PlantSearch from './plantsearch/PlantSearch';
import './App.css';

class App extends Component {
    render() {
      
        return (
            <div className="App">
                Hello!
                <PlantSearch/>

            </div>
        );
    }
}

export default App;
