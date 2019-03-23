import React from 'react';
import axios from 'axios';

import { browserHistory } from 'react-router';

class Subnet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'test',
      isOpen: false
    }
    this.saveData = this.saveData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    // This is empty right now
  }

  componentDidMount() {
  }

  handleChange(event) {
      this.state.test = event.target.value;
      event.preventDefault()
    }

saveData(subnetName, vpcName, description) {
  var bodyOut = { subnetName, vpcName,  description }
  console.log('about to make a call with');
  console.log(bodyOut);
  axios.post('/subnets', bodyOut)
    .then((response) => {
      console.log(response.data);
      this.refs.subnetName.value = ""
      this.refs.description.value = ""
      this.refs.VPC.value = ""
      this.setState({ results: response.data });
    });
}


  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <form>
                <div className="form-group">
                  <label htmlFor="subnetName">Subnet Name</label>
                  <input type="text" className="form-control" id="subnetName" ref="subnetName" aria-describedby="subnetHelp" />
                  <small id="subnetHelp" className="form-text text-muted">Enter your subnet name</small>
                </div>
                <div className="form-group">
                  <label htmlFor="VPC">VPC Name</label>
                  <input type="text" className="form-control" id="VPC" ref="VPC" aria-describedby="vpcHelp" />
                  <small id="vpcHelp" className="form-text text-muted">Your VPC Name</small>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input type="text" className="form-control" id="description" ref="description" aria-describedby="descHelp" placeholder="" />
                  <small id="descHelp" className="form-text text-muted">VPC description</small>
                </div>

                <button type="button" className="btn btn-primary" onClick={() => { this.saveData(
                  this.refs.subnetName.value,
                  this.refs.VPC.value,
                  this.refs.description.value,
                ); }}>Add!</button>
              </form>
            </div>
            <div className="col-sm-2"></div>
          </div>
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              {this.state.results}
            </div>
          </div>
      </div>
    );
  }

}

export default Subnet;
