import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import GardenContainer from './GardenContainer';
//TODO import PlantSearch from Joe/Chris
//TODO import GardenPlot grid


export default function Garden({garden, loading, error}) {

    if(loading) return <div>Loading...</div>;

    return (
        <div>
            <h2>{garden.name}</h2>
            {error && error.map(err => <pre>{err}</pre>)}
            <PlantSearch/>
            <GardenPlot/>
        </div>
    );
}