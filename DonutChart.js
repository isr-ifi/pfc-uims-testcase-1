import React from "react";
import ReactApexChart from "react-apexcharts";
import ReactDOM from "react-dom";

// code taken from: https://apexcharts.com/react-chart-demos/pie-charts/gradient-donut/
// last visited: 9.11.19

/**
 * Not valid syntax to be recognized as visual component
 *
 * @param something
 * @props anotherthing
 */
class DonutChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'gradient',
                },
                legend: {
                    formatter: function(val, opts) {
                        return val + " - " + opts.w.globals.series[opts.seriesIndex]
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
            series: [44, 55, 41, 17, 15],
        }
    }

    render() {
        return (



            <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width="380" />
          </div>



        );
    }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(DonutChart), domContainer);