import React from 'react'
import { render } from 'react-dom'
// High charts
import Highcharts from 'highcharts'
import HighchartsReact from "highcharts-react-official";
// helpers
import setData from './helpers';

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: {
        text: props.text
      },
      chart: {
        type: 'bar'
      },
      xAxis: {
        type: 'category'
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true
          }
        },
        series: {
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                      console.log('this.name',this.name);
                      console.log('this.series.name',this.series.name);
                    }
                }
            }
        }
      },
      series: [
      {
        name: props.name,
        colorByPoint: true,
        data: []
      }
      ]
    };
  }

  componentDidUpdate(prevProps, prevState) {
  if (prevProps.data !== this.props.data){
    let result = setData(this.props);
    this.setLocalState(result);
  }
}

  componentDidMount(){
    let result = setData(this.props);
    this.setLocalState(result);
  }

  setLocalState(result){
    var series = {...this.state.series}
    series.data = result;
    this.setState({series})
  }

  render() {
    return (
      <div>
      <HighchartsReact highcharts={Highcharts} options={this.state} />
      </div>
      );
  }
}

export default BarChart;