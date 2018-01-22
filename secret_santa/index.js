// import santa_list from './components.js';


$('.button').click(() => {

  function rows(staffLevel) {
    for (let i = 1; i <= staffLevel; i++) {
      console.log("tim".repeat(i));
        }
  }
  rows(5);


});



// <div class="name_email">
//   <label id="firstNameLabel" for="firstName" class="label">Employee</label>
//   <input id="firstName" name="firstName" type="text" size="30" placeholder="Name">
//   <label id="firstNameLabel" for="firstName" class="label">Email</label>
//   <input id="firstName" name="firstName" type="text" size="30" placeholder="name@example.com">
// </div> <br>


// function pyramid (height) {
//   for (let i = 1; i <= height; i++) {
//     console.log("*".repeat(i));
//       }
// }
// pyramid(5);

// function rows(staffLevel) {
//   for (let i = 1; i <= staffLevel; i++) {
//     console.log("tim".repeat(i));
//       }
// }
// rows(5);
