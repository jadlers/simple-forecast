import React from 'react';

const City = ({ data }) => (
  <div>
    <h1>{data.title}</h1>
    <h2>{data.location_type}</h2>
    {data.woeid}
  </div>
);

export default City;
