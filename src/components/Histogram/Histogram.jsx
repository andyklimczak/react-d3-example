import React, { Component } from 'react';
import d3 from 'd3';

class Histogram extends Component {
  render() {
    let translate = `translate(0, ${this.props.topMargin})`;

    return (
      <g className='histogram' transform={translate}>
      </g>
    );
  }
}

export default histogram;
