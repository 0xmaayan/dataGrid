import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
//import HighchartsReact from 'highcharts-react-official'
import PieChart from "highcharts-react-official";

class HighCharts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: {
        text: props.text
      },
      chart: {
        type: props.type
      },
      series: [
      {
        data: [100, 150]
      }
      ]
    };
  }

  render() {
    return (
      <div>
      <PieChart highcharts={Highcharts} options={this.state} />
      </div>
      );
  }
}

export default HighCharts;