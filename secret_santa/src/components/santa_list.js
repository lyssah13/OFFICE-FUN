import React, { Component } from 'react';

class santa_list extends React.Component {
  render() {



    return(
      <div className="contact">
      <form>
      <p> Contact Me </p>
        <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="First name"/>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name"/>
        </div>
        </div>
      </form>



      </div>
    )
  }
}

export default santa_list;
