import React from 'react';
import {connect} from 'react-redux';
import TopChart from '../components/TopChart';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import FunnelChart from '../components/FunnelChart';
import MonthFunnel from '../components/MonthFunnel';

export const ChartPage = () => {
  return (
    <div>
      <BarChart labelUnit="k" labelBase={1000} file="/data/zhiyu/first_orders.csv" title="首单占比"/>
      <LineChart columns={[3, 4, 5, 6]} labelRotate={30} file="/data/zhiyu/conversion_rate_saudi.csv" title="2016年5月沙特详情优质下单付款转化率"/>
      <LineChart columns={[1, 2]} labelRotate={30} file="/data/zhiyu/conversion_rate_saudi.csv" title="2016年5月沙特激活注册转化率"/>
      <LineChart columns={[3, 4, 5, 6]} labelRotate={30} file="/data/zhiyu/conversion_rate.csv" title="2016年5月详情优质下单付款转化率"/>
      <LineChart columns={[1, 2]} labelRotate={30} file="/data/zhiyu/conversion_rate.csv" title="2016年5月激活注册转化率"/>
      <MonthFunnel name="chart1" file="/data/zhiyu/refund_rate.csv" title="活跃用户月总量转化漏斗"/>
      <LineChart labelRotate={30} file="/data/zhiyu/refund_rate.csv" title="退款率"/>
      <BarChart labelUnit="k" labelBase={1000} file="/data/zhiyu/old_users.csv" title="老客占比"/>
      <BarChart file="/data/zhiyu/order_counts_saudi.csv" title="2016年1-5月沙特订单数"/>
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
