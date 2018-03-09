import React from 'react';

const Search = () => {
  const placeholder = 'Search for city/region here';

  return (
    <form>
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
