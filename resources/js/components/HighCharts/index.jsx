import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
// Highcharts
import BarChart from './BarChart';
import PieChart from './PieChart';
// Actions
import { siteFilterData } from '../../redux/actions/data';

class Chart extends Component {

  constructor(props) {
    super(props);
  }

  async onChartSliceClick(data){
    await this.props.siteFilterData(data)
    this.props.reloadTableData();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <PieChart text="Sex Data Pie" name="Sex" index="Sex" data={this.props.data} onChartSliceClick={(data)=>this.onChartSliceClick(data)}/>
          </div>
          <div className="col-md-6">
            <BarChart text="Pclass Data Chart" name="Pclass" index="Pclass" data={this.props.data} onChartSliceClick={(data)=>this.onChartSliceClick(data)}/>
          </div>
        </div>
      </div>
      );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    siteFilterData: (data) => dispatch(siteFilterData(data))
  }
}

export default connect(null, mapDispatchToProps)(Chart);