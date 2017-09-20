import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import '../../node_modules/react-resizable/css/styles.css';
import '../../node_modules/react-grid-layout/css/styles.css';
import styled from 'styled-components';

const StyledLayout = styled.div`
    

`;

export default class MyFirstGrid extends Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        var layout = [
            {i: 'tomato', x: 0, y: 0, w: 1, h: 2},
            {i: 'carrot', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'corn', x: 4, y: 0, w: 1, h: 2}
        ];
        return (
            
            
            <ReactGridLayout className="layout" layout={layout} useCSSTransforms={true} cols={12} verticalCompact={false} rowHeight={30} width={1200}
                style={{
                    backgroundColor:'grey',
                    display:'block',
                    margin:'auto'
                }}
            >
                <div style={{border:'solid 1px'}}key={'tomato'}>tomato</div>
                <div style={{border:'solid 1px'}}key={'carrot'}>carrot</div>
                <div style={{border:'solid 1px'}}key={'corn'}>corn</div>
            </ReactGridLayout>    
            
            
        );
    }
}