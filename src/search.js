import React from 'react';
import './search.css';

const Search = ({ onSubmit }) => {
  const placeholder = 'Search for a city';

  return (
    <form className="searchForm" onSubmit={e => onSubmit(e)}>
      <input
        placeholder={placeholder}
        name="searchString"
        type="text"
        required
      />
      <button type="submit">
        <span className="fas fa-search fa-2x" />
      </button>
    </form>
  );
};

export default Search;
