import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import connect from "react-redux/es/connect/connect";
// components
import UploadData from './UploadData';
import Search from './Search';
import TableGrid from './TableGrid/Index';
// Actions
import { siteUpdateData } from '../redux/actions/data';

class App extends Component {

    constructor(props){
        super(props)
    }

    render() {
        const {data, siteUpdateData} = this.props;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <UploadData/>
                    </div>
                    <div className="col-md-6">
                        <Search/>
                    </div>
                    {
                        data && !!data.length && 
                        <div className="col-lg-12">
                            <TableGrid data={data} siteUpdateData={(data) => siteUpdateData(data)}/>                    
                        </div>
                    }
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    siteUpdateData: (data) => dispatch(siteUpdateData(data)),
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
