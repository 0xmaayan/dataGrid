import React, {Component} from 'react';

import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';
import JqxGrid, {jqx} from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

export default class TableGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
        { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right' },
        { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', width: 100 },
        { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued', align: 'center' }
      ]
    }
  }

  render() {
    return (
        <div>
          <JqxGrid
            width={"100%"} columns={this.state.columns}
            pageable={true} autoheight={true} sortable={true} altrows={true}
            enabletooltips={true} editable={true}
          />
        </div>
    );
  }
}