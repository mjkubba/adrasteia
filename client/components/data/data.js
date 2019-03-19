import React from 'react';
import axios from 'axios';
import mongoose from 'mongoose/browser';

import { browserHistory } from 'react-router';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'test',
      isOpen: false
    }
    this.testFun = this.testFun.bind(this);
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

testFun() {
  mongoose.connect('mongodb://localhost:27017/mydb');
  const vpc = new Schema({
    name: { type: String, default: 'hahaha' }
  });
  const MyVpc = mongoose.model('vpc', vpc);
  MyModel.find({}, function (err, docs) {
    console.log(docs);
  });
}


  render() {
    let lgClose = () => this.setState({ isOpen: false });
    const style={
      border: '1px solid black'
    }
    const displayStyle={
      margin: '2%'
    }
    return (
      <div>
        <div className="row">
          <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <form>
                <button type="button" className="btn btn-primary" onClick={() => { this.testFun(); }}>Do IT!</button>
              </form>
            </div>
            <div className="col-sm-2"></div>
          </div>
          <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                {this.state.results}
              </div>
            </div>
          </div>
      </div>
    );
  }

}


Data.propTypes = {
  params: React.PropTypes.object,
  location: React.PropTypes.object,
};

export default Data;
