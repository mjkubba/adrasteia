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
    // This is empty right now
    this. readVPC()
  }

  componentDidMount() {
  }

  handleChange(event) {
      this.state.test = event.target.value;
      event.preventDefault()
    }

readVPC() {
  console.log('about to make a call with');
  axios.get('/vpc')
    .then((response) => {
      console.log(response);
      this.setState({ results: response.data, isOpen: true });
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
    if (this.state.results) {
      this.items = this.state.results.map((item, key) =>
        <p key={item._id}><li key={item._id}>{item.name} -- {item.description}</li><br/></p>
      );
    }
    return (
      <div>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            {this.items}
          </div>
          <div className="col-sm-2"></div>
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
