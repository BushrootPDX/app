import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    text-align: center;
    label {
        display: block;
    }
    label, button {
        padding: 5px;
    }
`;

export default ({ submit}) => (
    <Form onSubmit={e => {
        e.preventDefault();
        const { elements } = e.target;
        const data = Object.keys(elements).reduce((obj, key) => {
            obj[key] = elements[key].value;
            return obj;
        }, {});
        submit(data);
    }}>
        <label>email: <input name="email"/></label>
        <label>password: <input type="password" name="password"/></label>
        <button>Sign in!</button>
    </Form>
);