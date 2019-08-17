import React, {Component} from 'react';
// jxwidgets
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';
import JqxGrid, {jqx} from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
// Highcharts
import HighCharts from './Highcharts';

class TableGrid extends Component {

  constructor(props) {
    super(props);
    const source =
    {
      datatype: 'json',
      localdata: props.data
    };
    this.state = {
      columns: [
      { text: 'Passenger Id', datafield: 'PassengerId',width:100},
      { text: 'Pclass', datafield: 'Pclass',width:50},
      { text: 'Name', datafield: 'Name',width:300},
      { text: 'Sex', datafield: 'Sex',width:100},
      { text: 'Age', datafield: 'Age',width:100},
      { text: 'SibSp', datafield: 'SibSp',width:50 },
      { text: 'Parch', datafield: 'Parch',width:50},
      { text: 'Ticket', datafield: 'Ticket',width:100},
      { text: 'Fare', datafield: 'Fare',width:100},
      { text: 'Cabin', datafield: 'Cabin',width:100},
      { text: 'Embarked', datafield: 'Embarked',width:50}
      ],
      source: new jqx.dataAdapter(source,{ autoBind: true }),
      theme: 'material-purple',
    }
  }

  render() {
    return (
      <div>
        <JqxGrid
        width={"100%"} columns={this.state.columns} source={this.state.source} theme={this.state.theme}
        pageable={true} autoheight={true} sortable={true} altrows={true}
        enabletooltips={true} editable={true}
        />
      <div className="row">
        <div className="col-md-6">
          <HighCharts type="pie" text="My pie chart"/>
        </div>
        <div className="col-md-6">
          <HighCharts type="bar" text="My bar chart"/>
        </div>
      </div>
      </div>
      );
  }
}

export default TableGrid;