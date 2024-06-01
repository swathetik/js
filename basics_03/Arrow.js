// const user = {
//   username: "shwet",
//   price: 999,
//   welcomeMessage: function () {
//     // console.log(`${this.username}, welcome to website `); // here "this" keyword refers the current context.
//     // console.log(this);
//   },
// };

// user.welcomeMessage();
// user.username = "shreya"; // here this changes the current context to shreya
// user.welcomeMessage();
// console.log(this); // this will give window object in browser and emply object in node.

////////////////// "this" keyword in function will not work and will show undefined.

// function chai() { // globally scoped function has their own this.
//   let username = "shwetrana";
//   console.log(this.username); // now this will give undefined.
//   //   console.log(this); // now this will give some values present in the node itself.
// }

// chai();

/////////////// another way of declaring function

const chai = () => {
  //here this has to take the value of the variable it is put in.
  let username = "shwetrana";
  console.log(this.username);
  console.log(this);
};
chai();
