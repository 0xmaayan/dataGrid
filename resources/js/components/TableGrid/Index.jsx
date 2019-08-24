import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// jxwidgets
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';
import JqxGrid, {jqx} from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
// Components
import CreateWindow from './createWindow';
import SearchWindow from './searchWindow';
import EditWindow from './editWindow';
import Charts from '../Highcharts/index';
// style
import './style.css';

class TableGrid extends Component {

  constructor(props) {
    super(props);
    this.createWindowRef = React.createRef();
    this.editWindowRef = React.createRef();
    this.searchWindowRef = React.createRef();
    this.myGrid = React.createRef();

    let source =
    {
      datatype: 'json',
      localdata: props.data,
      id: 'PassengerId'
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
      { text: 'Embarked', datafield: 'Embarked',width:100}
      ],
      source: new jqx.dataAdapter(source,{ autoBind: true }),
      theme: 'material-purple',
      disableButton: true
    }
  }

  createButtonClick(){
    let rowCount = this.myGrid.current.getdatainformation().rowscount;
    var rowData = this.myGrid.current.getrowdata(rowCount-1);
    let newPassengerId = parseInt(rowData.PassengerId) + 1;
    this.createWindowRef.current.openWindow(newPassengerId);
  }

  editButtonClick(){
    const dataRecord = this.getRowData();
    this.editWindowRef.current.openWindow(dataRecord);
  }

  async deleteButtonClick(){
    const rowData = this.getRowData();
    await this.props.siteDeleteData(rowData);
    this.reloadTableData();
  }

   searchButtonClick () {
    this.searchWindowRef.current.openWindow();
  };

  enableActionButtons(){
    this.setState({
      disableButton : false
    })
  }

  getRowData(){
    const rowIndex = this.myGrid.current.getselectedrowindex();
    return this.myGrid.current.getrowdata(rowIndex);
  }

  reloadTableData(){
      let source =
      {
        datatype: 'json',
        localdata: this.props.data,
        id: 'PassengerId'
      };
      this.setState({
        source : new jqx.dataAdapter(source)
      })
  }

  render() {
    return (
      <div className="data-wrapper">
        <div className="actions-buttons-wrapper">
          <JqxButton onClick={() => this.createButtonClick()} theme={this.state.theme}
          width={80} height={25} value={'Add'} textPosition={'center'} />

          <JqxButton onClick={() => this.editButtonClick()} theme={this.state.theme}
          width={80} height={25} value={'Edit'} textPosition={'center'} disabled={this.state.disableButton} />

          <JqxButton onClick={() => this.deleteButtonClick()} theme={this.state.theme}
          width={80} height={25} value={'Delete'} textPosition={'center'} disabled={this.state.disableButton} />

          <JqxButton onClick={() => this.searchButtonClick()} className="search-button" theme={this.state.theme}
          width={80} height={25} value={'Search'} textPosition={'center'} />

        </div>

        <JqxGrid ref={this.myGrid} onRowselect={() => this.enableActionButtons()}
        width={"100%"} columns={this.state.columns} source={this.state.source} theme={this.state.theme}
        pageable={true} autoheight={true} sortable={true} altrows={true}
        enabletooltips={true}
        />
        <CreateWindow ref={this.createWindowRef} reloadTableData={() => this.reloadTableData()} />
        <EditWindow ref={this.editWindowRef} reloadTableData={() => this.reloadTableData()} />
        <SearchWindow ref={this.searchWindowRef} reloadTableData={() => this.reloadTableData()} />
        <Charts reloadTableData={() => this.reloadTableData()} data={this.props.data}/>
      </div>
      );
  }
}

TableGrid.propTypes = {
  data: PropTypes.array
}

export default TableGrid;