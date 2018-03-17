import React, { Component } from 'react';
import { searchLocation } from './api-requests';
import './App.css';

import Search from './search';
import City from './city';

class App extends Component {
  state = {
    cities: [],
    info: {
      show: false,
      message: '',
    },
  };

  async newSearch(e) {
    document.activeElement.blur();
    e.preventDefault();
    const searchString = e.target[0].value;
    const { ok, cities } = await searchLocation(searchString);
    if (ok) {
      if (cities.length < 1) {
        this.showMessage(
          `Could not find any cities when searching for ${searchString}`
        );
      } else {
        this.setState({ cities });
      }
    } else {
      const errorMessage = `An error occurred while searching.
      This is probably because of my restricted access to the weather data.
      I'm only allowed 50 requests per day. Try again tomorrow!`;
      this.showMessage(errorMessage, 15000);
    }
  }

  showMessage(message, time = 5000) {
    this.setState({ info: { show: true, message } });
    setTimeout(
      () => this.setState({ info: { show: false, message: '' } }),
      time
    );
  }

  render() {
    const { info } = this.state;
    return (
      <div className="app">
        <Search onSubmit={e => this.newSearch(e)} />
        {info.show && <p className="tmpMessage">{info.message}</p>}
        {this.state.cities.map(data => <City key={data.Key} data={data} />)}
      </div>
    );
  }
}

export default App;
