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
 * @props {string} legedPosition [bottom]
 *
 * @props {dynamic} nameA [aum.mfa.out.PublicVehicles => name]
 * @props {dynamic} nameB [aum.mfa.out.ResidentialBuildings => name]
 * @props {dynamic} nameC [aum.mfa.out.OtherBuildings => name]
 * @props {dynamic} nameD [aum.mfa.out.Infrastructure => name]
 * @props {dynamic} nameE [aum.mfa.out.Industry => name]
 *
 * @props {dynamic} valueA [aum.mfa.out.PublicVehicles => value => energy => TJ]
 * @props {dynamic} valueB [aum.mfa.out.ResidentialBuildings => value => energy => TJ]
 * @props {dynamic} valueC [aum.mfa.out.OtherBuildings => value => energy => TJ]
 * @props {dynamic} valueD [aum.mfa.out.Infrastructure => value => energy => TJ]
 * @props {dynamic} valueE [aum.mfa.out.Industry => value => energy => TJ]
 *
 * @props {input} click [1000] (aum.mfa.in.PublicVehicles => value => VehiclesPerCapita => PrivateVehicles/capita)
 */
class PieChart extends React.Component {
      
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [this.props.nameA, this.props.nameB, this.props.nameC, this.props.nameD. this.props.nameE, this.props.nameF], //['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
      series: [this.props.valueA, this.props.valueB, this.props.valueC, this.props.valueD, this.props.valueE], //[44, 55, 13, 43, 22],
    }
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="100%" /> 
        <button onClick={() => alert(this.props.click)}>test</button>
      </div>
    );
  }
}


export default PieChart;

// const domContainer = document.querySelector('#app');
//ReactDOM.render(React.createElement(PieChart), domContainer);