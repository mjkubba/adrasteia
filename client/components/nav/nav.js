import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'test'
    }
  }

  componentWillMount() {
    // This is empty right now
  }

  componentDidMount() {
  }




  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-2">
            <img src="images/db.png" width="100"/>
          </div>
          <div className="col-xs-10">
            <h1> Barnabas </h1>
          </div>
        </div>
      </div>
    );
  }

}


Nav.propTypes = {
  params: React.PropTypes.object,
  location: React.PropTypes.object,
};

export default Nav;
