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
              <a href="/secret-santa">
                <img id="my-img" className="homepage-icon"
                src="images/icons1.png"
                onmouseover="this.src='images/icons1hover.png'"
                onmouseout="this.src='images/icons1.png'"
                border="0" alt="" title=""/>
                </a>
                <p>The easy way to assign secret santa!</p>

            </center>
            </div>

            <div id="" class="col-xs-12 col-md-6 col-lg-2">
              <center>
                <img className="homepage-icon" src="images/icons2.png"
                onmouseover="this.src='images/icons2hover.png'"
                onmouseout="this.src='images/icons2.png'"
                border="0" alt="" title=""/>
                <p>Need 2 teams?
                Divide and Conquer</p>
              </center>
            </div>

            <div id="" class="col-xs-12 col-md-6 col-lg-2">
              <center>
                <img className="homepage-icon" src="images/icons3.png"
                onmouseover="this.src='images/icons3hover.png'"
                onmouseout="this.src='images/icons3.png'"
                border="0" alt="" title=""/>
                <p>Allocate prizes to multiple winners.</p>
              </center>
            </div>

            <div id="" class="col-xs-12 col-md-6 col-lg-2">
              <center>
                <a href="/get-random">
                <img className="homepage-icon" src="images/icons4.png"
                onmouseover="this.src='images/icons4hover.png'"
                onmouseout="this.src='images/icons4.png'"
                border="0" alt="" title=""/>
                </a>
                <p>Who's the lucky winner? </p>
              </center>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
