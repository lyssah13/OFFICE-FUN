import React from 'react';
import app from './components/app' ;



let users = [{name:"tim", email: "tim@gmail.com"},{name:"lisa", email:"lisa@gmail.com"}];
// users.push({name:"bar", email: "bar@gmail.com"});




$("#winnerButton").click(function(event){
    event.preventDefault();
    let i = Math.round(Math.random()*(users.length-1))
    document.write(users[i].name);

  });



  $("#addEmployee").click(function(event){
      event.preventDefault();
      console.log(users.push(document.getElementById("firstNameLabel").value));
      console.log(users);

    });
