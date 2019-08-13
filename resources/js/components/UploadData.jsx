import React, {Component} from 'react'
import axios, { post } from 'axios';

export default class UploadData extends Component {

	constructor(props){
		super(props);
	}

	onChange(file) {
		if (!file.length)
			return;
		this.fileUpload(file[0]);
	}

	fileUpload(file){
		var formData = new FormData();
		formData.append('data_file',file);

		const url = '/api/import';
		axios.post(url, formData,{
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
		.then(response => console.log(response))
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