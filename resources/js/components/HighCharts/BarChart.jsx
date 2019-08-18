import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
//import HighchartsReact from 'highcharts-react-official'
import HighchartsReact from "highcharts-react-official";

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
        //categories: [],
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
        data: [10,20,50]
      }
      ]
    };
  }

  componentDidMount(){
    let {data,index} = this.props;
    var hash={},result=[];

    data.forEach(function(obj){
      var id=obj[index];
      if(hash[id]){
       hash[id].y++;
     }else{
       result.push(hash[id]={
        y:1,
        name: id
      });
     }
   });
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