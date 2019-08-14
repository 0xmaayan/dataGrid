import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// components
import UploadData from './UploadData';
import Search from './Search';
import TableGrid from './TableGrid';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <UploadData/>
                    </div>
                    <div className="col-lg-6">
                        <Search/>
                    </div>
                    <div className="col-lg-12">
                        <TableGrid/>                    
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
