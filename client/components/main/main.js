import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import Data from '../data/data'
import VPCs from '../data/vpc'
import Subnets from '../data/subnet'
import Nav from '../nav/nav';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'main'
    }
    this.loadData = this.loadData.bind(this);
    this.loadMain = this.loadMain.bind(this);
    this.loadVPCs = this.loadVPCs.bind(this);
    this.loadSubnets = this.loadSubnets.bind(this);
  }

  componentWillMount() {
    // This is empty right now
  }

  componentDidMount() {
  }

  loadData = (e) => {
      e.preventDefault()
      this.setState({ view: "data" })
    }

  loadVPCs = (e) => {
      e.preventDefault()
      this.setState({ view: "vpcs" })
    }

  loadSubnets = (e) => {
      e.preventDefault()
      this.setState({ view: "subnets" })
    }

  loadMain = (e) => {
      e.preventDefault()
      this.setState({ view: "main" })
    }


  render() {
    let middle
    if (this.state.view === "data") {
      middle = <Data />
    } else if (this.state.view === "vpcs") {
      middle = <VPCs />
    } else if (this.state.view === "subnets") {
      middle = <Subnets />
    } else {
      middle = <div />
    }
    return (
      <div>
        <Nav />
        <div className="row paddingTop20px">
          <div className="col-sm-1">
          </div>
          <div className="col-sm-11">
            <button type="button" className="btn btn-outline-primary" onClick={this.loadMain}>Main</button>
            <button type="button" className="btn btn-outline-primary" onClick={this.loadData}>Data</button>
            <button type="button" className="btn btn-outline-primary" onClick={this.loadVPCs}>Add VPCs</button>
            <button type="button" className="btn btn-outline-primary" onClick={this.loadSubnets}>Add Subnets</button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {middle}
          </div>
        </div>
      </div>
    );
  }

}


Main.propTypes = {
  params: React.PropTypes.object,
  location: React.PropTypes.object,
};

export default Main;
