import React, { Component } from 'react';
import Search from './search';

const BASE_URL = 'https://www.metaweather.com/api/location/';

class App extends Component {
  state = {
    searchResults: [],
  };

  async newSearch(e) {
    e.preventDefault();
    try {
      const searchString = e.target[0].value;
      const url = `${BASE_URL}search/?query=${searchString}`;
      const res = await fetch(url);
      const searchResult = await res.json();
      console.log(searchResult); // TODO: Remove
      this.setState({ searchResult: searchResult.results });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return <Search onSubmit={this.newSearch} />;
  }
}

export default App;
