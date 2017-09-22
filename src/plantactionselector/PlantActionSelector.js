import React, { Component } from 'react';
import styled from 'styled-components';

export default class PlantActionSelector extends Component {

    
    render() {
        const { addAction, removeAction } = this.props;

        const PlantActionDiv = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
           `;

        const Paragraph = styled.div`
        display: block;
        margin: auto;
        text-align: center;
        `;

        return (
            <div>
                <Paragraph>{this.props.activeAction} MODE</Paragraph>
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
            </div>
        );
    }
}