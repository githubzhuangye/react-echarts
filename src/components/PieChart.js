import React, { PropTypes, Component } from 'react';
const echarts = require('echarts');
const baby = require('babyparse');
const request = require('superagent');

class PieChart extends Component {

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
            text: title,
            x: 'center'
          },
          series : [
            {
              type: 'pie',
              radius : '70%',
              label: {
                normal: {
                  show: true,
                  formatter: "{b} ({d}%)",
                  textStyle: {
                    fontSize: 20
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
    const { name } = this.props; // eslint-disable-line no-use-before-define
    return (
      <div id={name} style={{width: '80%', height: '600px'}}>
      </div>
    );
  }
}

PieChart.propTypes = {
  name: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PieChart;
