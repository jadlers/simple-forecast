import React from 'react';

const Search = ({ onSubmit }) => {
  const placeholder = 'Search for city/region here';

  return (
    <form onSubmit={e => onSubmit(e)}>
      <input
        placeholder={placeholder}
        name="searchString"
        type="text"
        required
      />
      <input type="submit" />
    </form>
  );
};

export default Search;
