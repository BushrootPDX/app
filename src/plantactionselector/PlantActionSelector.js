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
                <ActionButton title="Add" action={addAction}/>
                <ActionButton title="Remove" action={removeAction}/>
            </PlantActionDiv>
        );
    }
}

function ActionButton({ title, action }) {
    return (
        <button type="submit" onClick={event => {
            event.preventDefault();
            action();
        }}>
            {title}
        </button>
    );
}