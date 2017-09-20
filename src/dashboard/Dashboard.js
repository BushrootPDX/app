import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Dashboard extends Component {

    render() {

        const { user } = this.props;
        const { email, gardens } = user;
        return (
            <div>
                <h3>Hello {email}</h3>
                <h5> Gardens: </h5>
                { gardens && gardens.map( garden => {
                    return <Link to={`gardens/${garden._id}`}>{garden.name}</Link>;
                })}
                <button type="button">New Garden</button>
            </div>
        );
    }
}