import React, { Component } from 'react';
import { searchLocation } from './api-requests';

import Search from './search';

class App extends Component {
  state = {
    cities: [],
  };

  async newSearch(e) {
    e.preventDefault();
    try {
      const searchString = e.target[0].value;
      const cities = await searchLocation(searchString);
      this.setState({ cities });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return <Search onSubmit={e => this.newSearch(e)} />;
  }
}

export default App;
