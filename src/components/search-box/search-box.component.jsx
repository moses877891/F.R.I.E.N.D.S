import React from 'react';
import './search-box.css'

export const SearchBox = ({ placeholder, handleChange }) => (
    <div className="row py-4">
        <input
            className="form-control col-8 col-md-4"
            id="srch"
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
        />
    </div>

);