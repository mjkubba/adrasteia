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
    this.readSubnets = this.readSubnets.bind(this);
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
    axios.get('/vpcs')
      .then((response) => {
        this.setState({ results: response.data });
      });
  }

  readSubnets(vpc) {
    axios.get('/subnets/vpc/'+vpc)
      .then((response) => {
        console.log(response);
        this.setState({ subnets: response.data });
      });
  }

  render() {
    this.right1 = (<div/>)
    if (this.state.results) {
      this.items = this.state.results.map((item, key) =>
        <tr key={item._id} onClick={() => { this.readSubnets(item.vpcName); }}>
          <td>{item.vpcName}</td>
          <td>{item.accountNumber}</td>
          <td>{item.description}</td>
        </tr>
      );
    }
    if (this.state.subnets) {
      this.subnets = this.state.subnets.map((item, key) =>
        <tr key={item._id}>
          <td>{item.subnetName}</td>
          <td>{item.cidr}</td>
          <td>{item.description}</td>
        </tr>
      );
      this.right1 = (
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">subnetName</th>
              <th scope="col">CIDR</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {this.subnets}
          </tbody>
        </table>)
    }
    return (
      <div>
        <div className="row paddingTop20px">
          <div className="col-sm-1"></div>
          <div className="col-sm-7">
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
          <div className="col-sm-4">
            {this.right1}
          </div>
        </div>
      </div>
    );
  }

}

export default Data;
