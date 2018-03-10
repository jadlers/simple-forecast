import React, { Component } from 'react';

class City extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <h1>{data.title}</h1>
        <h2>{data.location_type}</h2>
        {data.woeid}
      </div>
    );
  }
}

export default City;
