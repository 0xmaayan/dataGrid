import React, {Component} from 'react';
import axios from 'axios';
// jxwidgets
import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';
import JqxGrid, {jqx} from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';
// Highcharts
import BarChart from '../Highcharts/BarChart';
import PieChart from '../Highcharts/PieChart';

class TableGrid extends Component {

  constructor(props) {
    super(props);
    this.editWindow = React.createRef();
    this.myGrid = React.createRef();
    // data values refs
    this.PassengerId = React.createRef();
    this.Pclass = React.createRef();
    this.Name = React.createRef();
    this.Sex = React.createRef();
    this.Age = React.createRef();
    this.SibSp = React.createRef();
    this.Parch = React.createRef();
    this.Ticket = React.createRef();
    this.Fare = React.createRef();
    this.Cabin = React.createRef();
    this.Embarked = React.createRef();

    let editrow = -1;
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
      { text: 'Embarked', datafield: 'Embarked',width:100},
      {
                    buttonclick: (row) => {
                        // get the data and append in to the inputs
                        this.editrow = row;
                        const dataRecord = this.myGrid.current.getrowdata(this.editrow);
                        this.PassengerId.current.val(dataRecord.PassengerId);
                        this.Pclass.current.val(dataRecord.Pclass);
                        this.Name.current.val(dataRecord.Name);
                        this.Sex.current.val(dataRecord.Sex);
                        this.Age.current.val(dataRecord.Age);
                        this.SibSp.current.val(dataRecord.SibSp);
                        this.Parch.current.val(dataRecord.Parch);
                        this.Ticket.current.val(dataRecord.Ticket);
                        this.Fare.current.val(dataRecord.Fare);
                        this.Cabin.current.val(dataRecord.Cabin);
                        this.Embarked.current.val(dataRecord.Embarked);
                        // show the popup window.
                        this.editWindow.current.open();
                    },
                    cellsrenderer: () => {
                        return 'Edit';
                    },
                    columntype: 'button', datafield: 'Edit', text: 'Edit',
                    width:100
                }
      ],
      source: new jqx.dataAdapter(source,{ autoBind: true }),
      theme: 'material-purple',
    }
  }

  saveEditButton(e){
    if (this.editrow >= 0) {
            const row = {
             PassengerId: this.PassengerId.current.getOptions('value'),
             Pclass: this.Pclass.current.getOptions('value'),
             Name:   this.Name.current.getOptions('value'),
             Sex: this.Sex.current.getOptions('value'),
             Age: this.Age.current.getOptions('value'),
             SibSp: this.SibSp.current.getOptions('value'),
             Parch: this.Parch.current.getOptions('value'),
             Ticket: this.Ticket.current.getOptions('value'),
             Fare: this.Fare.current.getOptions('value'),
             Cabin: this.Cabin.current.getOptions('value'),
             Embarked: this.Embarked.current.getOptions('value'),
            };
            const rowID = this.myGrid.current.getrowid(this.editrow);
            this.myGrid.current.updaterow(rowID, row);
            this.editWindow.current.hide();
            // api call to update record on server
            axios.put(process.env.MIX_API_URL+'data/'+row.PassengerId,row)
              .then((response) => {
                console.log(response);
              })
        }
  }

  cancelEditBtn() {
        this.editWindow.current.hide();
    }

  searchButtonClick (event) {
            /*this.myWindow.current!.open();
            this.myWindow.current!.move(60, 60);*/
            console.log(event)
          };

          render() {
            return (
              <div>
                <JqxButton onClick={this.searchButtonClick}
                width={80} height={25} value={'Search'} textPosition={'center'} />
                <JqxGrid ref={this.myGrid}
                width={"100%"} columns={this.state.columns} source={this.state.source} theme={this.state.theme}
                pageable={true} autoheight={true} sortable={true} altrows={true}
                enabletooltips={true}
                />
                <JqxWindow ref={this.editWindow} width={250} resizable={true}
                    isModal={false} autoOpen={false} modalOpacity={'0.01'}>
                    <div>Edit</div>
                      <table>
                            <tbody>
                                <tr>
                                    <td align={'right'}>Passenger Id:</td>
                                    <td align={'left'}>
                                       <JqxInput ref={this.PassengerId} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Pclass:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.Pclass} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Name:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.Name} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Sex:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.Sex} width={150} height={23}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Age:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.Age} width={150} height={23} />
                                    </td>
                                </tr>
                                 <tr>
                                    <td align={'right'}>SibSp:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.SibSp} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Parch:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.Parch} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Ticket:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.Ticket} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Fare:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.Fare} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Cabin:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.Cabin} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Embarked:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.Embarked} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'} />
                                    <td style={{ paddingTop: '10px' }} align={'right'}>
                                        <JqxButton style={{ display: 'inline-block', marginRight: '5px' }} width={50} onClick={() => this.saveEditButton()}>
                                            Save
                                        </JqxButton>
                                        <JqxButton style={{ display: 'inline-block', marginRight: '5px' }} width={50} onClick={() => this.cancelEditBtn()}>
                                            Cancel
                                        </JqxButton>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                </JqxWindow>
                <div className="row">
                  <div className="col-md-6">
                    <PieChart text="My pie chart" name="Sex" index="Sex" data={this.props.data}/>
                  </div>
                <div className="col-md-6">
                  <BarChart text="My bar chart" name="Pclass" index="Pclass" data={this.props.data}/>
                </div>
                </div>
              </div>
              );
          }
        }

        export default TableGrid;