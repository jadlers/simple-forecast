import React from 'react';

const Day = ({ data }) => {
  const date = new Date(data.Date);
  return (
    <div>
      <img alt={data.Day.IconPhrase} />
      <p>{date.toDateString()}</p>
      <p>Max: {data.Temperature.Maximum.Value}</p>
      <p>Min: {data.Temperature.Minimum.Value}</p>
    </div>
  );
};

export default Day;
