import React, { Component } from 'react';
import '../App.css';

// const url = "https:api.airtable.com/v0/appZyE2xQ6elkTKnA/Users?api_key=keyrR4Ut4x5l7tqsi"
// const usersRequest = $.ajax({ url: url, dataType: 'json' });

class SecretSanta extends Component {
  render() {
    return (
      <div className="SecretSanta">
        <header className="SecretSanta-header">
          <h2 className="App-title">Secret Santa</h2>
        </header>
        <p>
          <a href="#">Assign Secret Santas!</a>
        </p>
      </div>
    );
  }
}

export default SecretSanta;
