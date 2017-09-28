import React, { Component } from 'react';

export default class GardenActionSelector extends Component {
    render (){
        const { garden, history } = this.props;
        const { saveGarden, deleteGarden } = this.props;
    
        return(
            <div>
                <button type="button" onClick={() => saveGarden(garden)} >Save Garden</button>
                <button type="button" onClick={() =>{
                    // add promise...
                    deleteGarden(garden).then(() => history.push('/dashboard'));
                }} >Delete Garden</button>
            </div>
        );
    }
}