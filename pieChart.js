import React from "react";
import ReactApexChart from "react";
import ReactDOM from "react";

// class taken from https://apexcharts.com/react-chart-demos/pie-charts/simple-pie-chart/
// last visited: 9.11.19

/**
 * Pie chart
 *
 * @visComp
 * @props {integer} breakpoint
 * @props {integer} width
 * @props {string}  position	aum.mfa.co2
 */
class PieChart extends React.Component {
      
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
          breakpoint: this.props.breakpoint, //480,
          options: {
            chart: {
              width: this.props.width //200
            },
            legend: {
              position: this.props.position //'bottom'
            }
          }
        }]
      },
      series: [44, 55, 13, 43, 22],
    }
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="380" />
      </div>
    );
  }
}


export default PieChart;

// const domContainer = document.querySelector('#app');
//ReactDOM.render(React.createElement(PieChart), domContainer);