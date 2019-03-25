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
    this.readAccounts = this.readAccounts.bind(this);
    this.readVPCs = this.readVPCs.bind(this);
    this.readSubnets = this.readSubnets.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.readAccounts()
  }

  componentDidMount() {
  }

  handleChange(event) {
      this.state.test = event.target.value;
      event.preventDefault()
    }

  readAccounts() {
    axios.get('/accounts')
      .then((response) => {
        this.setState({ accounts: response.data });
      });
  }

  readVPCs(account) {
    axios.get('/vpcs/account/'+account)
      .then((response) => {
        this.setState({ vpcs: response.data, subnets: null });
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
    this.right2 = (<div/>)
    this.accounts = (<div/>)
    if (this.state.accounts) {
      this.accounts = this.state.accounts.map((item, key) =>
        <tr key={item._id} onClick={() => { this.readVPCs(item.accountNumber); }}>
          <td>{item.accountNumber}</td>
          <td>{item.description}</td>
        </tr>
      );
    }
    if (this.state.vpcs) {
      this.vpcs = this.state.vpcs.map((item, key) =>
        <tr key={item._id} onClick={() => { this.readSubnets(item.vpcName); }}>
          <td>{item.vpcName}</td>
          <td>{item.description}</td>
        </tr>
      );
      this.right1 = (
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">vpcName</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {this.vpcs}
          </tbody>
        </table>)
    }
    if (this.state.subnets) {
      this.subnets = this.state.subnets.map((item, key) =>
        <tr key={item._id}>
          <td>{item.subnetName}</td>
          <td>{item.cidr}</td>
          <td>{item.description}</td>
        </tr>
      );
      this.right2 = (
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
          <div className="col-sm-3">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">accountNumber</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {this.accounts}
            </tbody>
          </table>
          </div>
          <div className="col-sm-4">
            {this.right1}
          </div>
          <div className="col-sm-4">
            {this.right2}
          </div>
        </div>
      </div>
    );
  }

}

export default Data;
