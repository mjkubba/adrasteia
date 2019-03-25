import React from 'react';
import axios from 'axios';

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
      <div className="navBG">
        <div className="row">
          <div className="col-sm-2">
            <img src="images/db.svg" width="70"/>
          </div>
          <div className="col-sm-10">
            <h1 className="centerText paddingTop8px marginLeft20pc">adrasteia</h1>
          </div>
        </div>
      </div>
    );
  }

}

export default Nav;
