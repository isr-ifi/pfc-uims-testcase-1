import React from "react";
import ReactApexChart from "react-apexcharts";
import ReactDOM from "react-dom";
import inputData from './in/aum.mfa.in.PublicVehicles'

const writeJsonFile = require('write-json-file');

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
 * @props {dependent} click [777] {changePublicVehicles--value.1.value}
 * @props {callback} changePublicVehicles [DecisionCard] (aum.mfa.in.PublicVehicles.name)
 */
class PieChart extends React.Component {
      
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [this.props.modelA, this.props.modelB, this.props.modelC, this.props.modelD, this.props.modelE], //['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        title: {
                    text: 'Energy'
                },
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
    this.changeAverageVehicleLifetime = this.changeAverageVehicleLifetime.bind(this);
    this.changePublicVehicles = this.changePublicVehicles.bind(this);
  }

  changeAverageVehicleLifetime() {
    let inputValue = inputData.value["25"].value + 1;
    alert("The button was clicked and has a value: " + inputValue);
    inputData.value["25"].value = inputValue;
  }

  changePublicVehicles() {
    let inputValue = inputData.value["24"].value + 1;
    alert(inputValue);
    inputData.value["24"].value = inputValue;

    /*const fileName = "aum.mfa.in.PublicVehicles";
    const json = JSON.stringify(inputData);
    const blob = new Blob([json], {type: 'application/json'});
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);*/
  }

  render() {
    let buttonText = "";
    switch (this.props.changePublicVehicles) {
      case "changeAverageVehicleLifetime":  buttonText = "Change Average Lifetime Input Value"; break;
      case "changePublicVehicles": buttonText = "Change Vehicles per Capita Value"; break;
    }
    return (
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="100%" />
          <button onClick={() => {
            switch (this.props.changePublicVehicles) {
            case "changeAverageVehicleLifetime": this.changeAverageVehicleLifetime(); break;
            case "changePublicVehicles": this.changePublicVehicles(); break;
          }}
          }>{buttonText}</button>
        </div>
    );
  }
}

export default PieChart;

// const domContainer = document.querySelector('#app');
//ReactDOM.render(React.createElement(PieChart), domContainer);

