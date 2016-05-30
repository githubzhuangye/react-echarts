import React from 'react';
import {connect} from 'react-redux';
import PieChart from '../components/PieChart';

export const UserPage = () => {
  return (
    <div>
      <PieChart name="chart1" file="/orders.csv" title="图1"/>
      <PieChart name="chart2" file="/orders.csv" title="图2"/>
    </div>
  );
};

export default connect()(UserPage);
