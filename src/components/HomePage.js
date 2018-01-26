import React, { Component } from 'react';
import '../App.css';

class HomePage extends Component {
  render() {
    return (
      <div className="SecretSanta">
        <header className="HomePage-header">
          <h1 className="-title">Home Page</h1>
        </header>
        <ul>
          <li>
            <a href="/secret-santa">Secret Santa</a>
          </li>
          <li>
            <a href="/get-random">Get Random</a>
          </li>
          <li>
            <a href="/split">Split</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default HomePage;
