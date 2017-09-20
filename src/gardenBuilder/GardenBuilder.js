import React from 'react';

export default function GardenBuilder( props ) {
    const { newGarden } = props;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                newGarden({
                    name: e.target.elements.name.value,
                    width: e.target.elements.width.value,
                    length: e.target.elements.length.value
                });
            }}>
                <h3>Make a new Garden</h3>
                <label>Name:<input required name="name"/></label>
                <label>Width:<input required name="width"/>Ft.<input/>in.</label>
                <label>Length:<input required name="length"/>Ft.<input/>in.</label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}