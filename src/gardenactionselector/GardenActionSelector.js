import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveGarden, deleteGarden } from './actions';


export default class GardenActionSelector extends Component {
    render (){
        const {
            id,
            saveGarden,
            deleteGarden
        } = this.props;
    
        return(
            <div>
                <button onSave={() => saveGarden(id)} >Save Garden</button>
                <button onDelete={() => deleteGarden(id)} >Delete Garden</button>
            </div>
        );
    }
}