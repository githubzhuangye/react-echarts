import React, { PropTypes, Component } from 'react';
const echarts = require('echarts');
const baby = require('babyparse');
const request = require('superagent');

class PieChart extends Component {

  componentDidMount() {
    const {percent, file, title} = this.props;
    request
      .get(file)
      .end(function(err, res) {
        const parse = baby.parse(res.text);
        let chart = echarts.init(document.getElementById(title));
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
          series : [
            {
              type: 'pie',
              radius : percent + '%',
              label: {
                normal: {
                  show: true,
                  formatter: "{b} ({c}, {d}%)",
                  textStyle: {
                    fontSize: 15
                  }
                }
              },
              data: data,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        chart.setOption(chartOptions);
      });
  }

  render() {
    const { title } = this.props; // eslint-disable-line no-use-before-define
    return (
      <div id={title} style={{width: '80%', height: '600px'}}>
      </div>
    );
  }
}

PieChart.defaultProps = {
  percent: 80
};

PieChart.propTypes = {
  file: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  percent: PropTypes.number
};

export default PieChart;
