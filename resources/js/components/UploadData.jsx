import React, {Component} from 'react'
import axios, { post } from 'axios';
import connect from "react-redux/es/connect/connect";
// Actions
import { siteAddData } from '../redux/actions/data';

class UploadData extends Component {

	constructor(props){
		super(props);
	}

	onChange(file) {
		if (!file.length)
			return;
		this.fileUpload(file[0]);
	}

	async fileUpload (file){
		var formData = new FormData();
		formData.append('data_file',file);

		await this.props.siteAddData(formData);
	
	}

	render(){
		return(
			<div className="custom-file">
			<input type="file" className="custom-file-input" id="dataFile" accept=".csv" onChange={ (e) => this.onChange(e.target.files) }/>
			<label className="custom-file-label" htmlFor="customFile">Choose file</label>
			</div>
			)
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    siteAddData: (data) => dispatch(siteAddData(data)),
  }
}

export default connect(null, mapDispatchToProps)(UploadData);