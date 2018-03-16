import React, { Component } from 'react';
import { searchLocation } from './api-requests';
import './App.css';

import Search from './search';
import City from './city';

class App extends Component {
  state = {
    cities: [],
  };

  async newSearch(e) {
    document.activeElement.blur();
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
      <div className="app">
        <Search onSubmit={e => this.newSearch(e)} />
        {this.state.cities.map(data => <City key={data.Key} data={data} />)}
      </div>
    );
  }
}

export default App;
