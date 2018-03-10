import React, { Component } from 'react';
import { searchLocation } from './api-requests';

import Search from './search';
import City from './city';

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
    return (
      <div>
        <Search onSubmit={e => this.newSearch(e)} />
        {this.state.cities.map(data => <City key={data.woeid} data={data} />)}
      </div>
    );
  }
}

export default App;
