import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

export default function PlantActionSelector() {


    return(
        <div>
            <button>Add</button>
            <button>Remove</button>
            <button>Water</button>
            <button>Plant</button>
        </div>
    );
}