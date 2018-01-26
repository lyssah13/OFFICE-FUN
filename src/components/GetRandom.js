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

          <div id="" ClassName="row">
            <div ClassName="">
              <center>
                <img src="images/iconSanta.png"
                border="0" alt="" title=""/>
              </center>
            </div>
            <div id="" ClassName="">
                <p>Need 2 teams?
                Are you organizing a sports
                event in your office or any
                kind of activity and you need
                to split your team?
                and you dont want to be bias.
                Our users usually need to split a team for:
                <ul>
                  <li> Sport team</li> <li> Winners / Losers</li> <li> Assign duties or roles</li>
                </ul>
              </p>
            </div>
          </div>
          <header className="GetRandom-header">
            <h2 className="App-title">Get Random</h2>
          </header>
          { this.state.random_user === null
            ? <UsersTable records={records} />
            : <DisplayRandomUser random_user={ this.state.random_user } />
          }
          <p>
            <a href="#" onClick={ (e) => { this.setRandomUser(e) } }>Get Random!</a>
          </p>

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

function UsersTable(props) {
  return (
    <table>
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
