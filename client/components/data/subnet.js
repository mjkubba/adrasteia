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
    this.readVPC = this.readVPC.bind(this);
  }

  componentWillMount() {
    // This is empty right now
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
        this.setState({ vpcs: response.data });
      });
  }
saveData(subnetName, vpcName, cidr, description) {
  var bodyOut = { subnetName, vpcName, cidr, description }
  console.log('about to make a call with');
  console.log(bodyOut);
  axios.post('/subnets', bodyOut)
    .then((response) => {
      console.log(response.data);
      this.refs.subnetName.value = ""
      this.refs.description.value = ""
      this.refs.cidr.value = ""
      this.refs.VPC.value = ""
      this.setState({ results: response.data });
    });
}


  render() {
    if (this.state.vpcs) {
      this.items = this.state.vpcs.map((item, key) =>
        <option key={item._id}>{item.vpcName}</option>
      );
    }
    return (
      <div>
        <div className="row paddingTop20px">
          <div className="col-sm-1"></div>
            <div className="col-sm-9">
              <form>
                <div className="form-group">
                  <label htmlFor="VPC">VPC Name</label>
                  <select className="form-control" id="VPC" ref="VPC">
                    {this.items}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="subnetName">Subnet Name</label>
                  <input type="text" className="form-control" id="subnetName" ref="subnetName" aria-describedby="subnetHelp" />
                  <small id="subnetHelp" className="form-text text-muted">Enter your subnet name</small>
                </div>
                  <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input type="text" className="form-control" id="description" ref="description" aria-describedby="descHelp" placeholder="" />
                  <small id="descHelp" className="form-text text-muted">VPC description</small>
                </div>
                <div className="form-group">
                  <label htmlFor="cidr">cidr</label>
                  <input type="text" className="form-control" id="cidr" ref="cidr" aria-describedby="cidrHelp" placeholder="" />
                  <small id="cidrHelp" className="form-text text-muted">cidr</small>
                </div>

                <button type="button" className="btn btn-primary" onClick={() => { this.saveData(
                  this.refs.subnetName.value,
                  this.refs.VPC.value,
                  this.refs.cidr.value,
                  this.refs.description.value,
                ); }}>Add!</button>
              </form>
            </div>
            <div className="col-sm-2"></div>
          </div>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-9">
              {this.state.results}
            </div>
          </div>
      </div>
    );
  }

}

export default Subnet;
