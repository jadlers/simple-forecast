import React, { Component } from 'react';

import { fiveDayForecast } from './api-requests';
import expandIcon from './assets/expand-icon.svg';
import './city.css';

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
      <div className="city">
        <div className="cityHeader" onClick={() => this.toggleDetail(data.Key)}>
          <img
            src={expandIcon}
            className={expanded ? 'cityExpanded' : ''}
            alt=">"
          />
          <div>
            <p className="city-name">{data.EnglishName}</p>
            <p>
              {data.AdministrativeArea.EnglishName}, {data.Country.EnglishName}
            </p>
          </div>
        </div>
        <div className="cityBody">
          {expanded &&
            forecast.DailyForecasts.map(v => (
              <Day key={v.EpochDate} data={v} />
            ))}
        </div>
      </div>
    );
  }
}

export default City;
