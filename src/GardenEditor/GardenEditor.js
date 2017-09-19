import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import GardenActionSelector from './GardenActionSelector';
import PlantActionSelector from './PlantActionSelector';
import GardenPlot from './GardenPlot';

export default function GardenEditor() {

    
    return (
        // <h2>{Garden Name}</h2>
        <div>
            <PlantActionSelector/>
            <GardenPlot/>
            <GardenActionSelector/>
        </div>
    );
}