import React from 'react';
import {connect} from 'react-redux';
import Table from '../components/Table';

export const TablePage = () => {
  return (
    <div>
      <Table file="/data/test/login.csv"/>
    </div>
  );
};

export default connect()(TablePage);
