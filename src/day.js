import React from 'react';

import { weatherStateIcon } from './api-requests';

const Day = ({ data }) => {
  const date = new Date(data.Date);
  const weatherIcon = weatherStateIcon(data.Day.Icon);
  return (
    <div>
      <img src={weatherIcon} alt={data.Day.IconPhrase} />
      <p>{date.toDateString()}</p>
      <p>Max: {data.Temperature.Maximum.Value}</p>
      <p>Min: {data.Temperature.Minimum.Value}</p>
    </div>
  );
};

export default Day;
