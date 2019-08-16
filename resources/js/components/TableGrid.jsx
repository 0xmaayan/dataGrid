import React, {Component} from 'react';
// jxwidgets
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';
import JqxGrid, {jqx} from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class TableGrid extends Component {

  constructor(props) {
    super(props);
    const source =
    {
      datafields: [
      { name: 'PassengerId', type: 'string', map: '0' },
      { name: 'Pclass', type: 'string', map: '1' },
      { name: 'Name', type: 'string', map: '2' },
      { name: 'Sex', type: 'string', map: '3' },
      { name: 'Age', type: 'string', map: '4' },
      { name: 'SibSp', type: 'string', map: '5' },
      { name: 'Parch', type: 'string', map: '6' },
      { name: 'Ticket', type: 'string', map: '7' },
      { name: 'Fare', type: 'string', map: '8' },
      { name: 'Cabin', type: 'string', map: '9' },
      { name: 'Embarked', type: 'string', map: '10' }
      ],
      datatype: 'array',
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
      theme: 'material purple',
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
          <h1>Pie</h1>
        </div>
        <div className="col-md-6">
          <h1>Bar</h1>
        </div>
      </div>
      </div>
      );
  }
}

export default TableGrid;