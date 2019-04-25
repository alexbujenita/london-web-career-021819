import React from 'react';

const Search = props => (
  <div>
    <input
      id="search-input"
      onChange={event => props.handleChange(event.target.value)}
      placeholder="search by title..."
    />
  </div>
);

export default Search;
