import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
display: flex;
justify-content: space-around;
text-align: center;
border: 1px solid black;
margin: auto;
width: 30%;
h3 {
    fontSize: 32px;
    color: #B8C733;
}
label {
    display: block;
}
.numberField{
    width: 30px;
    margin: 10px 15px 10px 5px;
}
label, button {
    padding: 5px 10px;
}
button {
    margin-bottom: 15px;
}
`;

export default function GardenBuilder( props ) {
    const { newGarden, history } = props;
    return (
        <Form>
            <form onSubmit={e => {
                e.preventDefault();
                const {name, feetWidth, feetLength, inchWidth, inchLength} = e.target.elements;
                const w = parseInt(feetWidth.value * 12) + parseInt(inchWidth.value); //eslint-disable-line
                const l = parseInt(feetLength.value * 12) + parseInt(inchLength.value); //eslint-disable-line
                const goToGarden = (id) => history.push(`/gardens/${id}`);
                newGarden({
                    name: name.value,
                    width: w,
                    length: l
                }, goToGarden);
            }}>
                <h3>Make a new Garden</h3>
                <label> Name: 
                    <input required name="name"/>
                </label>
                <label > Width: 
                    <input className="numberField" required name="feetWidth"/> 
                    Ft. 
                    <input className="numberField" name="inchWidth"/> 
                    in.
                </label>
                <label> Length: 
                    <input className="numberField" required name="feetLength"/> 
                    Ft. 
                    <input className="numberField" name="inchLength"/> 
                    in.
                </label>
                <button type="submit">Save</button>
            </form>
        </Form>
    );
}