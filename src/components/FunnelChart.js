import React, { PropTypes, Component } from 'react';
const echarts = require('echarts');
const baby = require('babyparse');
const request = require('superagent');

class FunnelChart extends Component {

  componentDidMount() {
    const {name, title} = this.props;
    request
      .get(this.props.file)
      .end(function(err, res) {
        const parse = baby.parse(res.text);
        let chart = echarts.init(document.getElementById(name));
        let data = [];
        for (let i = 0; i < parse.data[0].length; i++) {
          data.push({
            name: parse.data[0][i],
            value: parse.data[1][i]
          });
        }
        const chartOptions = {
          title : {
            text: title
          },
          series: [
            {
              name:'总量',
              type:'funnel',
              width: '35%',
              left: '5%',
              label: {
                normal: {
                  formatter: '{b}: {c}%',
                  textStyle: {
                    fontSize: 20
                  }
                }
              },
              data: [
                {value: 1.50, name: '付款'},
                {value: 2.01, name: '下单'},
                {value: 53.24, name: '详情'},
                {value: 15.00, name: '激活'},
                {value: 3.30, name: '注册'},
                {value: 22.24, name: '优质'},
                {value: 100, name: '活跃'}
              ]
            },
            {
              name:'沙特',
              type:'funnel',
              width: '35%',
              left: '55%',
              label: {
                normal: {
                  formatter: '{b}: {c}%',
                  textStyle: {
                    fontSize: 20
                  }
                }
              },
              data: [
                {value: 1.70, name: '沙特付款'},
                {value: 2.19, name: '沙特下单'},
                {value: 57.64, name: '沙特详情'},
                {value: 13.91, name: '沙特激活'},
                {value: 2.99, name: '沙特注册'},
                {value: 25.19, name: '沙特优质'},
                {value: 100, name: '沙特活跃'}
              ]
            }
          ]
        };
        chart.setOption(chartOptions);
      });
  }

  render() {
    const { name } = this.props; // eslint-disable-line no-use-before-define
    return (
      <div id={name} style={{width: '90%', height: '600px'}}>
      </div>
    );
  }
}

FunnelChart.propTypes = {
  name: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default FunnelChart;
