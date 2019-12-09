import React from "react";
import ReactApexChart from "react-apexcharts";
import ReactDOM from "react-dom";

// class taken from https://apexcharts.com/react-chart-demos/pie-charts/simple-pie-chart/
// last visited: 09.11.19

/**
 * Pie chart
 *
 * @visComp
 * @props {integer} breakpoint [480]
 * @props {integer} chartWidth [200]
 * @props {string} legendPosition [bottom]
 *
 * @props {dynamic} modelA [aum.mfa.out.PublicVehicles] (aum.mfa.out.PublicVehicles.name) 
 * @props {dynamic} modelB [aum.mfa.out.PrivateVehicles] (aum.mfa.out.PrivateVehicles.name)
 * @props {dynamic} modelC [aum.mfa.out.OtherBuildings] (aum.mfa.out.OtherBuildings.name)
 * @props {dynamic} modelD [aum.mfa.out.ResidentialBuildings] (aum.mfa.out.ResidentialBuildings.name)
 * @props {dynamic} modelE [aum.mfa.out.Industry] (aum.mfa.out.Industry.name)
 *
 * @props {dependent} valueA [44] {modelA--value.10.value}
 * @props {dependent} valueB [55] {modelB--value.10.value}
 * @props {dependent} valueC [55] {modelC--value.10.value}
 * @props {dependent} valueD [43] {modelD--value.10.value}
 * @props {dependent} valueE [22] {modelE--value.10.value}
 *
 * @props {dynamic} click [1000] (aum.mfa.in.PublicVehicles.value.1.value)
 */
class PieChart extends React.Component {
      
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [this.props.modelA, this.props.modelB, this.props.modelC, this.props.modelD, this.props.modelE], //['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
      series: [this.props.valueA, this.props.valueB, this.props.valueC, this.props.valueD, this.props.valueE], //[44, 55, 55, 43, 22],
    };
    this.showAlert = this.showAlert.bind(this);
  }

  showAlert() {
    alert(this.props.click)
  }

  render() {
    return (
<<<<<<< HEAD
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="100%" />
          <button onClick={this.showAlert}>test</button>
        </div>
=======
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="100%" />
      </div>
>>>>>>> 7046071b4268a29ec72833e0feda68c238714e48
    );
  }
}

export default PieChart;

// const domContainer = document.querySelector('#app');
//ReactDOM.render(React.createElement(PieChart), domContainer);