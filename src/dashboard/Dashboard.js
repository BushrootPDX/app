import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {

    render() {

        const { gardens } = this.props.user;
        return (
            <div>
                <h3>Hello, Gard'ner!</h3>
                <h5> Gardens: </h5>
                { gardens && gardens.map( (garden, index) => {
                    return <Link key={index} to={`gardens/${garden._id}`}>{garden.name}</Link>;
                })}
                <Link to="/gardens">New Garden</Link>
            </div>
        );
    }
}