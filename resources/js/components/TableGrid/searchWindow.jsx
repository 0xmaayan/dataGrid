import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import PropTypes from 'prop-types';
// jxwidgets
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
// Actions
import { siteFilterData, siteClearFilterData } from '../../redux/actions/data';

class searchWindow extends Component {

	constructor(props){
    	super(props);
        this.searchWindow = React.createRef();
        this.myDropDownList = React.createRef();
        this.searchInput = React.createRef();

        this.state = {
            dropDownSource: ['Passenger Id', 'Pclass', 'Name', 'Sex', 'Age', 'SibSp', 'Parch', 'Ticket', 'Fare', 'Cabin', 'Embarked']
        }
	}

    openWindow(){
        this.searchWindow.current.open();
    }


  async findBtnOnClick(){
    var searchText = this.searchInput.current.getOptions('value');
    var searchColumnValue = this.myDropDownList.current.getSelectedItem().label;

    let filter = {
      searchText:searchText,
      searchColumnValue:searchColumnValue.replace(/\s/g, '')
    }
console.log(this.props);
    await this.props.siteFilterData(filter)
    this.props.reloadTableData();
  }
  async clearFilterBtnOnClick() {

        await this.props.siteClearFilterData()
        this.props.reloadTableData();
        this.searchWindow.current.close();
    }

	render(){
		return (
				<JqxWindow ref={this.searchWindow} width={210} height={180} autoOpen={false} resizable={false}>
                    <div>Find Record</div>
                    <div style={{ overflow: 'hidden' }}>
                        <div>Find what:</div>
                        <div style={{ marginTop: '5px' }}>
                            <JqxInput ref={this.searchInput} width={194} height={23} />
                        </div>
                        <div style={{ marginTop: '7px', clear: 'both' }}>Look in:</div>
                        <div style={{ marginTop: '5px' }}>
                            <JqxDropDownList ref={this.myDropDownList}
                                width={200} height={23} selectedIndex={0}
                                source={this.state.dropDownSource} autoDropDownHeight={true} />
                        </div>
                        <div>
                            <JqxButton style={{ marginTop: '15px', float: 'left' }}
                                onClick={() => this.findBtnOnClick()} width={70}>
                                Find
                            </JqxButton>
                            <JqxButton style={{ marginLeft: '5px', marginTop: '15px', float: 'left' }}
                                onClick={() => this.clearFilterBtnOnClick()} width={70}>
                                Clear
                            </JqxButton>
                        </div>
                    </div>
                </JqxWindow>
			)
	}
}

searchWindow.propTypes = {
    siteUpdateData: PropTypes.func,
    siteClearFilterData: PropTypes.func,
    reloadTableData: PropTypes.func
}

const mapDispatchToProps = (dispatch) => {
  return {
    siteFilterData: (data) => dispatch(siteFilterData(data)),
    siteClearFilterData: () => dispatch(siteClearFilterData())
  }
}

export default connect(null, mapDispatchToProps,null,{ forwardRef: true })(searchWindow);