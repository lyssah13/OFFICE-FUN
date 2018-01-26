import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';
import './returnName';

class GetRandom extends Component {
  constructor(props) {
    super(props);

    this.state = { user_records: [], random_user: null }
  }


  componentDidMount() {
    const url = "https:api.airtable.com/v0/appZyE2xQ6elkTKnA/Users?api_key=keyrR4Ut4x5l7tqsi"
    $.ajax({ url: url, dataType: 'json' })
      .done(function(data, _t, _q) {
        this.setState({
          user_records: data.records
        });
      }.bind(this));
  }

  setRandomUser(e) {
    e.preventDefault();
    const i = Math.round(Math.random()*(this.state.user_records.length-1));
    const user_record = this.state.user_records[i];

    console.log(user_record)
    this.setState({
      random_user: user_record
    });
  }


  render() {
    const records = this.state.user_records;

    console.log(records);

    if (records.length === 0) {
      return <p>Loading...</p>
    }
    else {
      return (
        <div className="GetRandom">
          <header className="GetRandom-header">
            <h2 className="App-title">Get Random</h2>
          </header>
          <p>
            <a href="#" onClick={ (e) => { this.setRandomUser(e) } }>Get Random!</a>
          </p>
          <DisplayRandomUser random_user={ this.state.random_user } />
        </div>
      );
    }
  }
}

function DisplayRandomUser(props) {
  if (props.random_user != null) {
    return (
      <p>{ props.random_user.fields.name }</p>
    );
  }
  else {
    return false;
  }
}

export default GetRandom;
