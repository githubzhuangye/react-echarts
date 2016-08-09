import React from 'react';
import {connect} from 'react-redux';
import Table from '../components/Table';

export const TablePage = () => {
  return (
    <div>
      <Table column={[1,2,3]} file="/data/zhiyu/conversion_rate.csv"/>
      <Table file="/data/zhiyu/order_rate_saudi.csv"/>
      <Table file="/data/zhiyu/order_rate.csv"/>
      <Table file="/data/test/login.csv"/>
    </div>
  );
};

export default connect()(TablePage);
