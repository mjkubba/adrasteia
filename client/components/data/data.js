import React from 'react';
import axios from 'axios';

import { browserHistory } from 'react-router';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'test',
      isOpen: false
    }
    this.readVPC = this.readVPC.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.readVPC()
  }

  componentDidMount() {
  }

  handleChange(event) {
      this.state.test = event.target.value;
      event.preventDefault()
    }

readVPC() {
  axios.get('/vpc')
    .then((response) => {
      this.setState({ results: response.data });
    });
}


  render() {
    if (this.state.results) {
      this.items = this.state.results.map((item, key) =>
        <tr key={item._id}>
          <td>{item.vpcName}</td>
          <td>{item.accountNumber}</td>
          <td>{item.description}</td>
        </tr>
      );
    }
    return (
      <div>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">VPC Name</th>
                <th scope="col">accountNumber</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {this.items}
            </tbody>
          </table>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    );
  }

}

export default Data;
