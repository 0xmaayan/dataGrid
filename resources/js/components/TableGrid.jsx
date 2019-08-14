import React, {Component} from 'react';

import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';
import JqxGrid, {jqx} from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

export default class TableGrid extends Component {

  constructor(props) {
    super(props);
    const source =
    {
      datafields: [
      { name: 'CompanyName', type: 'string', map: '0' },
      { name: 'ContactName', type: 'string', map: '1' },
      { name: 'Title', type: 'string', map: '2' },
      { name: 'Address', type: 'string', map: '3' },
      { name: 'City', type: 'string', map: '4' },
      { name: 'Country', type: 'string', map: '5' }
      ],
      datatype: 'array',
      localdata: [
      ['Alfreds Futterkiste', 'Maria Anders', 'Sales Representative', 'Obere Str. 57', 'Berlin', 'Germany'],
      ['Ana Trujillo Emparedados y helados', 'Ana Trujillo', 'Owner', 'Avda. de la Constitucin 2222', 'Mxico D.F.', 'Mexico'],
      ['Antonio Moreno Taquera', 'Antonio Moreno', 'Owner', 'Mataderos 2312', 'Mxico D.F.', 'Mexico'],
      ['Around the Horn', 'Thomas Hardy', 'Sales Representative', '120 Hanover Sq.', 'London', 'UK'],
      ['Berglunds snabbkp', 'Christina Berglund', 'Order Administrator', 'Berguvsvgen 8', 'Lule', 'Sweden'],
      ['Blauer See Delikatessen', 'Hanna Moos', 'Sales Representative', 'Forsterstr. 57', 'Mannheim', 'Germany'],
      ['Blondesddsl pre et fils', 'Frdrique Citeaux', 'Marketing Manager', '24, place Klber', 'Strasbourg', 'France'],
      ['Blido Comidas preparadas', 'Martn Sommer', 'Owner', 'C\/ Araquil, 67', 'Madrid', 'Spain'],
      ['Bon app', 'Laurence Lebihan', 'Owner', '12, rue des Bouchers', 'Marseille', 'France'],
      ['Bottom-Dollar Markets', 'Elizabeth Lincoln', 'Accounting Manager', '23 Tsawassen Blvd.', 'Tsawassen', 'Canada'],
      ['B`s Beverages', 'Victoria Ashworth', 'Sales Representative', 'Fauntleroy Circus', 'London', 'UK'],
      ['Cactus Comidas para llelet', 'Patricio Simpson', 'Sales Agent', 'Cerrito 333', 'Buenos Aires', 'Argentina'],
      ['Centro comercial Moctezuma', 'Francisco Chang', 'Marketing Manager', 'Sierras de Granada 9993', 'Mxico D.F.', 'Mexico'],
      ['Chop-suey Chinese', 'Yang Wang', 'Owner', 'Hauptstr. 29', 'Bern', 'Switzerland'],
      ['Comrcio Mineiro', 'Pedro Afonso', 'Sales Associate', 'Av. dos Lusadas, 23', 'Sao Paulo', 'Brazil'],
      ['Consolidated Holdings', 'Elizabeth Brown', 'Sales Representative', 'Berkeley Gardens 12 Brewery', 'London', 'UK'],
      ['Drachenblut Delikatessen', 'Sven Ottlieb', 'Order Administrator', 'Walserweg 21', 'Aachen', 'Germany'],
      ['Du monde entier', 'Janine Labrune', 'Owner', '67, rue des Cinquante Otages', 'Nantes', 'France'],
      ['Eastern Connection', 'Ann Devon', 'Sales Agent', '35 King George', 'London', 'UK'],
      ['Ernst Handel', 'Roland Mendel', 'Sales Manager', 'Kirchgasse 6', 'Graz', 'Austria']
      ]
    };
    this.state = {
      columns: [
      { text: 'Company Name', datafield: 'CompanyName'},
      { text: 'Contact Name', datafield: 'ContactName'},
      { text: 'Contact Title', datafield: 'Title'},
      { text: 'Address', datafield: 'Address'},
      { text: 'City', datafield: 'City'},
      { text: 'Country', datafield: 'Country' }
      ],
      source: new jqx.dataAdapter(source)
    }
  }

  render() {
    return (
      <div>
      <JqxGrid
      width={"100%"} columns={this.state.columns} source={this.state.source}
      pageable={true} autoheight={true} sortable={true} altrows={true}
      enabletooltips={true} editable={true}
      />
      </div>
      );
  }
}