import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
// components
import UploadData from './UploadData';
import Data from './TableGrid/Index';
// Actions
import { siteUpdateData, siteDeleteData } from '../redux/actions/data';

class App extends Component {

    constructor(props){
        super(props)
    }

    render() {
        const {data, siteDeleteData} = this.props;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <UploadData/>
                    </div>
                    {
                        data.length !== 0 && 
                        <div className="col-lg-12">
                            <Data data={data} 
                            siteDeleteData={(data) => siteDeleteData(data)}
                            />                    
                        </div>
                    }
                </div>
            </div>
        );
    }
}

App.propTypes = {
    siteDeleteData: PropTypes.func,
    data: PropTypes.array
}

const mapDispatchToProps = (dispatch) => {
  return {
    siteDeleteData: (data) => dispatch(siteDeleteData(data))
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
