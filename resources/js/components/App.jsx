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
                    <UploadData/>
                    <Search/>
                    <TableGrid/>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
