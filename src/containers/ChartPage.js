import React from 'react';
import {connect} from 'react-redux';
import TopChart from '../components/TopChart';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import FunnelChart from '../components/FunnelChart';

export const ChartPage = () => {
  return (
    <div>
      <FunnelChart file="/data/test/funnel.csv" title="转化漏斗"/>
      <LineChart inverted={true} file="/data/test/android_rr.csv" title="安卓留存"/>
      <LineChart labelRotate={30} file="/data/test/user_daily.csv" title="每月注册用户"/>
      <BarChart labelBase={10000} file="/data/test/login.csv" title="登录用户分布"/>
      <PieChart file="/data/test/order_user_dist.csv" title="订单分布"/>
      <TopChart labelBase={10000} labelUnit="万" file="/data/test/top20.csv" title="前20收入"/>
    </div>
  );
};

export default connect()(ChartPage);
