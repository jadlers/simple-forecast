import React, { Component } from 'react';
import { fiveDayForecast } from './api-requests';

import Day from './day.js';

class City extends Component {
  state = {
    expanded: false,
    forecast: {},
  };

  async toggleDetail(woeid) {
    let { expanded, forecast } = this.state;
    if (!expanded) {
      forecast = await fiveDayForecast(woeid);
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
          onClick={() => this.toggleDetail(data.woeid)}
        >
          <h1>{data.title}</h1>
          <h2>{data.location_type}</h2>
          {data.woeid}
        </div>
        <div>
          {expanded &&
            forecast.consolidated_weather.map(v => <Day key={v.id} data={v} />)}
        </div>
      </div>
    );
  }
}

export default City;
