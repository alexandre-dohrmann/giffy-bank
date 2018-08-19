import React from 'react';

const SearchBar = (props) => {

    return (
        <div>
            <div className="form-group log-in-box">
                <input className="form-control search-input" type="text" name="search" onChange={props.handleTermChange} placeholder="search giphy database" />
            </div>
        </div>
    );
}

export default SearchBar;