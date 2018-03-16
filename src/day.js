import React from 'react';

import './day.css';
import { weatherStateIcon } from './api-requests';

const Day = ({ data }) => {
  const date = new Date(data.Date);
  const weatherIcon = weatherStateIcon(data.Day.Icon);
  const { Maximum, Minimum } = data.Temperature;

  return (
    <div className="day">
      <p className="date">{date.toDateString()}</p>
      <div>
        <img src={weatherIcon} alt={data.Day.IconPhrase} />

        <div>
          <p>
            <span className="fas fa-long-arrow-alt-up" />
            {Maximum.Value}&deg;{Maximum.Unit}
          </p>

          <p>
            <span
              className="fas fa-long-arrow-alt-down"
              style={{ color: '#555' }}
            />
            {Minimum.Value}&deg;{Minimum.Unit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Day;
