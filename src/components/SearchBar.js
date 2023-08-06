import React, { useState } from 'react';

function SearchBar(props) {

    const {searchQuery, onSearchChange, inStockOnly, onStockChange} = props;

  return (
    <div className="search-bar">
        <p>Search</p>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={onSearchChange}
      />
      <tr></tr>
      <label>
        <input
        type="checkbox"
          checked={inStockOnly}
          onChange={onStockChange}
        />
         Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
