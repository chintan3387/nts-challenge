import React from 'react';
import { AreaChart } from 'react-d3-components';


const WeightChart = (props) => {
  let data = [{
    label: 'Sun',
    values: props.weights
  }];

  return (
    <AreaChart
      data={data}
      width={props.width}
      height={props.height}
      margin={{top: 10, bottom: 50, left: 50, right: 10 }} />
  );


}

export default WeightChart;
