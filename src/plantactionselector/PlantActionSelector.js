import React, { Component } from 'react';
import styled from 'styled-components';

export default class PlantActionSelector extends Component {

    componentWillUnmount() {
        this.props.actionReset();
    }
    render() {
        const { addAction, removeAction } = this.props;

        const PlantActionDiv = styled.div`
            border-style: solid;
            border-width: 2px;
            border-color: red;
        `;

        return (
            <PlantActionDiv>
                <button
                    type="submit"
                    onClick={event => {
                        event.preventDefault();
                        addAction();
                    }}
                >Add</button>
                <button
                    type="submit"
                    onClick={event => {
                        event.preventDefault();
                        removeAction();
                    }}
                >Remove</button>
            </PlantActionDiv>
        );
    }
}