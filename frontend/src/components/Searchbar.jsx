import React, { useState } from 'react';
import './Search.css';

function SearchBar({ filterData }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleFilter = (value) => {
        setSearchTerm(value.toLowerCase());
        filterData(value.toLowerCase());
    }

    return (
        <div className='search-top'>
            <div className='search'>
                <input
                    type="text"
                    placeholder='Search Here...'
                    value={searchTerm}
                    onChange={e => handleFilter(e.target.value)}
                />
            </div>
        </div>
    );
}

export default SearchBar;
