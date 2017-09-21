import React, { Component } from 'react';

export default class GardenActionSelector extends Component {
    render (){
        const { garden } = this.props;
        const { saveGarden, deleteGarden } = this.props;
    
        return(
            <div>
                <button type="button" onClick={() => saveGarden(garden)} >Save Garden</button>
                <button type="button" onClick={() => deleteGarden(garden)} >Delete Garden</button>
            </div>
        );
    }
}