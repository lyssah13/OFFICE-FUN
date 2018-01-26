import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';


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

          <div id="get-random" ClassName="row">
            <div ClassName="">
              <center>
                <img src="images/iconRandom.png"
                border="0" alt="" title=""/>
              </center>
            </div>
          </div>
          { this.state.random_user === null
            ? <UsersTable records={records} />
            : <DisplayRandomUser random_user={ this.state.random_user } />
          }
          <p>
            <a href="#" className="btn btn-warning btn-lg" onClick={ (e) => { this.setRandomUser(e) } }>SUBMIT</a>
          </p>

        </div>
      );
    }
  }
}

function DisplayRandomUser(props) {
  if (props.random_user != null) {
    return (
      <div className="card jumbotron-card">
        <div className="jumbotron card-body">
          <h2>
            { props.random_user.fields.name }
          </h2>
        </div>
      </div>
    );
  }
  else {
    return false;
  }
}

function UsersTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        { props.records.map((record) => {
          return (
            <tr key={ record.id }>
              <td>{ record.fields.id }</td>
              <td>{ record.fields.name }</td>
              <td>{ record.fields.email }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export default GetRandom;
