import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';

class returnName extends Component {
  componentWillMount() {
    // chances are we either need to move this, or implement actions to dispatch
    const url = "https:api.airtable.com/v0/appZyE2xQ6elkTKnA/Users?api_key=keyrR4Ut4x5l7tqsi"
    const usersRequest = $.ajax({ url: url, dataType: 'json' });

    console.log(usersRequest);
  }

  render() {
    return (
      <div className="returnName">
        <p>
          <a href="#">Get Random!</a>
        </p>
      </div>
    );
  }
}

export default returnName;
