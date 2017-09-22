import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Dashboard extends Component {


    render() {

        const { gardens } = this.props.user;
        return (
            <div>
                <h3>Hello, Gard'ner!</h3>
                <h5> Gardens: </h5>
                { gardens && gardens.map( (garden, index) => {
                    return <NavLink 
                        style={{
                            fontWeight: 'bold',
                            color: 'pink',
                            padding: ''
                        }}
                        key={index} 
                        to={`gardens/${garden._id}`}>
                        {garden.name}
                    </NavLink>;
                })}
                <NavLink 
                    style={{
                        fontWeight: 'bold',
                        color: 'pink',
                        border: '1px dashed gray',
                    }}
                    to="/gardens">New Garden</NavLink>
            </div>
        );
    }
}