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
      width={400}
      height={400}
      margin={{top: 10, bottom: 50, left: 50, right: 10 }} />
  );


}

export default WeightChart;
