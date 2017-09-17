import React from 'react';

export default function SearchBar(queryField = 'Search Plants Database...', searchFunction) {

    return (
        <form>
            <input type="text" value={queryField}></input>
            <button onSubmit={searchFunction}>Search</button>
        </form>
    );
}