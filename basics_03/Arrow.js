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

// const chai = () => {
//   //here this has to take the value of the variable it is put in.
//   let username = "shwetrana";
//   console.log(this.username);
//   console.log(this);
// };
// chai();

// syntax for the arrow function

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(3, 4));

/// what do you mean by implicit return?  implicit return is something where we don't use paranthisis{} and return the function in the same line of declaration.

// const addTwo = (num1, num2) => num1 + num2; another way to write the arrow function
// const addTwo = (num1, num2) => num1 + num2;

// returning object by arrow function

// const addTwo = (num1, num2) => ({ username: "shwet" });
// console.log(addTwo(3, 4));

// const myArray = [1, 2, 3, 4, 5];
// myArray.forEach(()=>{}); //this is arrow function in array in foreach loop
