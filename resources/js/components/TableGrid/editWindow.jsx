import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import PropTypes from 'prop-types';
// jxwidgets
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
// Actions
import { siteUpdateData } from '../../redux/actions/data';

class editWindow extends Component {

	constructor(props){
    	super(props);
        this.editWindow = React.createRef();
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
	}

    openWindow(dataRecord){
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
    }

 async saveEditButton(e){
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

    this.editWindow.current.hide();
   
    await this.props.siteUpdateData(row);
    this.props.reloadTableData();
        
  }

  cancelEditBtn() {
        this.editWindow.current.hide();
    }


	render(){
		return (
				<JqxWindow ref={this.editWindow} width={250} resizable={true}
                    isModal={false} autoOpen={false} modalOpacity={'0.01'}>
                    <div>Edit</div>
                      <table>
                            <tbody>
                                <tr>
                                    <td align={'right'}>Passenger Id:</td>
                                    <td align={'left'}>
                                       <JqxInput ref={this.PassengerId} width={150} height={23} disabled={true} />
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
			)
	}
}

editWindow.propTypes = {
    siteUpdateData: PropTypes.func,
    reloadTableData: PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
  return {
    siteUpdateData: (data) => dispatch(siteUpdateData(data))
  }
}

export default connect(null, mapDispatchToProps,null,{ forwardRef: true })(editWindow);