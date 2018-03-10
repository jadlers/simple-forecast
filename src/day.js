import React from 'react';
import { weatherStateIcon } from './api-requests';

const Day = ({ data }) => (
  <div>
    <img
      src={weatherStateIcon(data.weather_state_abbr)}
      alt={data.weather_state_name}
      style={{ maxHeight: '50px', maxWidth: '50px' }}
    />
    <p>{data.applicable_date}</p>
    <p>Max: {data.max_temp}</p>
    <p>Min: {data.min_temp}</p>
  </div>
);

export default Day;
