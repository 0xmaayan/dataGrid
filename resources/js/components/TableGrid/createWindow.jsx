import React, {Component} from 'react';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';

class createWindow extends Component {

	constructor(props){
    	super(props);
        this.createWindow = React.createRef();
       // create refs values
        this.createPassengerId = React.createRef();
        this.createPclass = React.createRef();
        this.createName = React.createRef();
        this.createSex = React.createRef();
        this.createAge = React.createRef();
        this.createSibSp = React.createRef();
        this.createParch = React.createRef();
        this.createTicket = React.createRef();
        this.createFare = React.createRef();
        this.createCabin = React.createRef();
        this.createEmbarked = React.createRef();

	}

    openWindow(newPassengerId){
        this.createPassengerId.current.val(newPassengerId);
        // show the popup window.
        this.createWindow.current.open();
    }

	async saveCreateButton(){
    const data = {
     PassengerId: this.createPassengerId.current.getOptions('value'),
     Pclass: this.createPclass.current.getOptions('value'),
     Name:   this.createName.current.getOptions('value'),
     Sex: this.createSex.current.getOptions('value'),
     Age: this.createAge.current.getOptions('value'),
     SibSp: this.createSibSp.current.getOptions('value'),
     Parch: this.createParch.current.getOptions('value'),
     Ticket: this.createTicket.current.getOptions('value'),
     Fare: this.createFare.current.getOptions('value'),
     Cabin: this.createCabin.current.getOptions('value'),
     Embarked: this.createEmbarked.current.getOptions('value'),
    };

    this.createWindow.current.hide();
    this.props.updateData(data);
  }

  cancelCreateBtn(){
    this.createWindow.current.hide();
  }

	render(){
		return (
				<JqxWindow ref={this.createWindow} width={250} resizable={true}
                    isModal={false} autoOpen={false} modalOpacity={'0.01'}>
                    <div>Create</div>
                      <table>
                            <tbody>
                                <tr>
                                    <td align={'right'}>Passenger Id:</td>
                                    <td align={'left'}>
                                       <JqxInput ref={this.createPassengerId} width={150} height={23} disabled={true} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Pclass:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.createPclass} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Name:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.createName} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Sex:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.createSex} width={150} height={23}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Age:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.createAge} width={150} height={23} />
                                    </td>
                                </tr>
                                 <tr>
                                    <td align={'right'}>SibSp:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.createSibSp} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Parch:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.createParch} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Ticket:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.createTicket} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Fare:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.createFare} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Cabin:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.createCabin} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'}>Embarked:</td>
                                    <td align={'left'}>
                                        <JqxInput ref={this.createEmbarked} width={150} height={23} />
                                    </td>
                                </tr>
                                <tr>
                                    <td align={'right'} />
                                    <td style={{ paddingTop: '10px' }} align={'right'}>
                                        <JqxButton style={{ display: 'inline-block', marginRight: '5px' }} width={50} onClick={() => this.saveCreateButton()}>
                                            Save
                                        </JqxButton>
                                        <JqxButton style={{ display: 'inline-block', marginRight: '5px' }} width={50} onClick={() => this.cancelCreateBtn()}>
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

export default createWindow;