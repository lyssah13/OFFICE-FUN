import React, { Component } from 'react';
// import '../App.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <section id="options" class="">
          <div id="" class="row">
            <div class="col-xs-12 col-md-6 col-lg-2 offset-lg-2">
              <center>
                <img id="my-img" className="homepage-icon"
                src="images/icons1.png"
                onmouseover="this.src='images/icons1hover.png'"
                onmouseout="this.src='images/icons1.png'"
                border="0" alt="" title=""/>
                <p>Send a private email to all the participants in a second! And to you, the organizar, we will also send a random person to be the First to start! </p>
            </center>
            </div>

            <div id="" class="col-xs-12 col-md-6 col-lg-2">
              <center>
                <img className="homepage-icon" src="images/icons2.png"
                onmouseover="this.src='images/icons2hover.png'"
                onmouseout="this.src='images/icons2.png'"
                border="0" alt="" title=""/>
                <p>Need 2 teams?
                Are you organizing a sports event in your office or any kind of activity and you need to split your team?
                and you dont want to be bias.
                Our users usually need to split a team for:
                - Sport team
                - Winners / Losers
                - Assign duties or roles</p>
              </center>
            </div>

            <div id="" class="col-xs-12 col-md-6 col-lg-2">
              <center>
                <img className="homepage-icon" src="images/icons3.png"
                onmouseover="this.src='images/icons3hover.png'"
                onmouseout="this.src='images/icons3.png'"
                border="0" alt="" title=""/>
                <p>Are you organizing a contest, giveaway, raffle* or survey  between coand need to draw a winner or winners, and you can also
                allocate prizes to winners.
                Our users usually need to choose a winner from: </p>
              </center>
            </div>

            <div id="" class="col-xs-12 col-md-6 col-lg-2">
              <center>
                <img className="homepage-icon" src="images/icons4.png"
                onmouseover="this.src='images/icons4hover.png'"
                onmouseout="this.src='images/icons4.png'"
                border="0" alt="" title=""/>
                <p>Are you organizing a contest, giveaway, raffle* or survey amongst the office and need to draw a random name / number? Our customers usually need to choose a winner from: </p>
              </center>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
