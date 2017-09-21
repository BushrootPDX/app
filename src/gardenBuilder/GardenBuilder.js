import React from 'react';

export default function GardenBuilder( props ) {
    const { newGarden, user } = props;
    
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                const {name, feetWidth, feetLength, inchWidth, inchLength} = e.target.elements;
                const w = parseInt(feetWidth.value * 12) + parseInt(inchWidth.value); //eslint-disable-line
                const l = parseInt(feetLength.value * 12) + parseInt(inchLength.value); //eslint-disable-line
                newGarden({
                    userId: user._id,
                    name: name.value,
                    width: w,
                    length: l
                });
            }}>
                <h3>Make a new Garden</h3>
                <label>Name:<input required name="name"/></label>
                <label>Width:<input required name="feetWidth"/>Ft.<input name="inchWidth"/>in.</label>
                <label>Length:<input required name="feetLength"/>Ft.<input name="inchLength"/>in.</label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}