import React, {Component} from 'react';
import $ from "jquery";

class SecretSanta extends Component{
  constructor(props) {
    super(props);

    this.state = { user_records: [], santa_assignments: [] };
    // [
    //   {
    //     sender: 1,
    //     receiver: 2,
    //   }
    // ]
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
  render () {
    const records = this.state.user_records;
    const assignments = this.state.santa_assignments;

    return (
      <div>
        {assignments.length === 0
         ? <UsersTable records={records} />
         : <AssignmentsTable assignments={assignments} />}

        <p>
          <a href="#" onClick={ (e) => { this.setSecretSantaList(e) } }>Generate Secret Santas!</a>
        </p>
      </div>
    )
  }

  setSecretSantaList(e) {
    e.preventDefault();

    const shuffled_user_records = this.shuffleUsers();
    const santa_assignments = this.assignSantas(shuffled_user_records);

    console.log(santa_assignments);

    this.setState({ santa_assignments });
  }

  shuffleUsers() {
    let users = this.state.user_records.slice(0);

    for (var i = users.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = users[i];
        users[i] = users[j];
        users[j] = temp;
    }

    return users;
  }

  assignSantas(shuffled_user_records) {
    let santa_assignments = [];

    for(let i = 0; i < shuffled_user_records.length; i++) {
      const santa_index = i;
      let receiver_index = i + 1;

       if( i == shuffled_user_records.length - 1){
         receiver_index = 0
       }

       const sender = shuffled_user_records[santa_index];
       const receiver = shuffled_user_records[receiver_index];
       const assignment_object = { sender, receiver };

       santa_assignments.push(assignment_object);
     }

     return santa_assignments;
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

function AssignmentsTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Secret Santa</th>
          <th scope="col">Receiver</th>
        </tr>
      </thead>
      <tbody>
        { props.assignments.map((assignment) => {
          const sender = assignment.sender;
          const receiver = assignment.receiver;

          return (
            <tr key={ `santa-${sender.id}` }>
              <td>{ sender.fields.name }</td>
              <td>{ receiver.fields.name }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export default SecretSanta;
