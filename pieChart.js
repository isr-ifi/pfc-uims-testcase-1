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
 * @props {dynamic} nameA [Team A] (aum.mfa.out.PublicVehicles.name) //TODO:make dots everywhere
 * @props {dynamic} nameB [Team B] (aum.mfa.out.PrivateVehicles.name)
 * @props {dynamic} nameC [Team C] (aum.mfa.out.OtherBuildings.name)
 * @props {dynamic} nameD [Team D] (aum.mfa.out.ResidentialBuildings.name)
 * @props {dynamic} nameE [Team E] (aum.mfa.out.Industry.name)
 *
 * @props {dynamic} valueA [44] (aum.mfa.out.PublicVehicles.value.4.value)
 * @props {dynamic} valueB [55] (aum.mfa.out.PrivateVehicles.value.4.value)
 * @props {dynamic} valueC [55] (aum.mfa.out.OtherBuildings.value.4.value)
 * @props {dynamic} valueD [43] (aum.mfa.out.ResidentialBuildings.value.4.value)
 * @props {dynamic} valueE [22] (aum.mfa.out.Industry.value.6.value)
 *
 * @props {dynamic} click [1000] (aum.mfa.in.PublicVehicles.value.1.value)
 */
class PieChart extends React.Component {
      
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [this.props.nameA, this.props.nameB, this.props.nameC, this.props.nameD, this.props.nameE], //['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="100%" />
          <button onClick={this.showAlert}>test</button>
        </div>
    );
  }
}

export default PieChart;

// const domContainer = document.querySelector('#app');
//ReactDOM.render(React.createElement(PieChart), domContainer);