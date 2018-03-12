import React, { Component } from 'react';
import { fiveDayForecast } from './api-requests';

import Day from './day.js';

class City extends Component {
  state = {
    expanded: false,
    forecast: {},
  };

  async toggleDetail(key) {
    let { expanded, forecast } = this.state;
    if (!expanded) {
      forecast = await fiveDayForecast(key);
    }
    this.setState({ forecast, expanded: !expanded });
  }

  render() {
    const { data } = this.props;
    const { expanded, forecast } = this.state;

    return (
      <div>
        <div
          style={{ border: '1px solid black' }}
          onClick={() => this.toggleDetail(data.Key)}
        >
          <h1>{data.EnglishName}</h1>
          <h2>{data.Country.EnglishName}</h2>
          {data.Key}
        </div>
        <div>
          {expanded &&
            forecast.DailyForecasts &&
            forecast.DailyForecasts.map(v => (
              <Day key={v.EpochDate} data={v} />
            ))}
        </div>
      </div>
    );
  }
}

export default City;
