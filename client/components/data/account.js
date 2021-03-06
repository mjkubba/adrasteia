import React from 'react';
import axios from 'axios';

class account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'test'
    }
    this.saveData = this.saveData.bind(this);
  }

  componentWillMount() {
    // This is empty right now
  }

  componentDidMount() {
  }


saveData(accountNumber, description) {
  var bodyOut = { accountNumber,  description }
  console.log('about to make a call with');
  console.log(bodyOut);
  axios.post('/accounts', bodyOut)
    .then((response) => {
      console.log(response.data);
      this.refs.accountNumber.value = ""
      this.refs.description.value = ""
      this.setState({ results: response.data });
    });
}


  render() {
    return (
      <div>
        <div className="row paddingTop20px">
          <div className="col-sm-1"></div>
            <div className="col-sm-9">
              <form>
                <div className="form-group">
                  <label htmlFor="accountNumber">Account Number</label>
                  <input type="text" className="form-control" id="accountNumber" ref="accountNumber" aria-describedby="accountHelp" placeholder="############" />
                  <small id="accountHelp" className="form-text text-muted">Please enter your account number</small>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input type="text" className="form-control" id="description" ref="description" aria-describedby="descHelp" placeholder="" />
                  <small id="descHelp" className="form-text text-muted">Account description</small>
                </div>

                <button type="button" className="btn btn-primary" onClick={() => { this.saveData(
                  this.refs.accountNumber.value,
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

export default account;
