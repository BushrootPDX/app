import React, { Component } from 'react';
import styled from 'styled-components';

export default class GardenActionSelector extends Component {
    render() {
        const { garden, history } = this.props;
        const { saveGarden, deleteGarden } = this.props;

        const GardenActionDiv = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            }
        `;

        return (
            <GardenActionDiv>
                <button type="button" onClick={() => saveGarden(garden)} >Save Garden</button>
                <button type="button" onClick={() => {
                    deleteGarden(garden);
                    history.push('/dashboard');
                }} >Delete Garden</button>
            </GardenActionDiv>
        );
    }
}