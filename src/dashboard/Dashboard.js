import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Dashboard extends Component {


    render() {

        const { gardens } = this.props.user;
        return (
            <div>
                <h3 style={{color: '#B8C733'}}>Your Gardens:</h3>

                { gardens && gardens.map( (garden, index) => {
                    return <NavLink 
                        style={{
                            fontWeight: 'bold',
                            color: '#C8C2B7',
                            padding: '2px'
                        }}
                        key={index} 
                        to={`gardens/${garden._id}`}>
                        {garden.name}<br style={{padding: '10px',}}/>
                    </NavLink>;
                })}
                <NavLink 
                    style={{
                        fontWeight: 'bold',
                        color: '#C8C2B7',
                        border: '1px dashed gray',
                    }}
                    to="/gardens">New Garden</NavLink>
            </div>
        );
    }
}