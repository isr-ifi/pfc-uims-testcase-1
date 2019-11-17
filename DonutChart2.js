import React from "react";
import ReactApexChart from "react-apexcharts";
import ReactDOM from "react-dom";

// code taken from: https://apexcharts.com/react-chart-demos/pie-charts/donut-with-pattern/
// last visited: 9.11.19

/**
 * Some other chart
 *
 * @param something
 * @visComp
 */
class DonutChart2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    dropShadow: {
                        enabled: true,
                        color: '#111',
                        top: -1,
                        left: 3,
                        blur: 3,
                        opacity: 0.2
                    }
                },
                stroke: {
                    width: 0,
                },
                labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
                dataLabels: {
                    dropShadow: {
                        blur: 3,
                        opacity: 0.8
                    }
                },
                fill: {
                    type: 'pattern',
                    opacity: 1,
                    pattern: {
                        enabled: true,
                        style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
                    },
                },
                states: {
                    hover: {
                        enabled: false
                    }
                },
                theme: {
                    palette: 'palette2'
                },
                title: {
                    text: "Favourite Movie Type"
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
            series: [44, 55, 41, 17, 15]
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

export default DonutChart2;

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(DonutChart), domContainer);