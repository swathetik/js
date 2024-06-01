// let a = 10;
// const b = 20;
// var c = 30;

// var c = 300; // this to understand how var is globally scoped variable.
// let c = 30; // to understand why let is block scoped variable
// if (true) {
//   // whatever we write in side the scope {} that must not be accessible outside the scope or it'll make an error.
//   let a = 10; // let is block scoped i.e. that the value can be changed inside the scope.
//   const b = 20; // const is constant i.e. that if it is declared you can't change the value anywhere.
//   //   var c = 30; // we don't use var because it is an globally scoped variable that it can accessed throughout the code.
//   let c = 3;
//   console.log(`INNER ${c}`); // this shows that the let inside the scope has different value than the let outside the scope.
// }
// console.log(a);
// console.log(b);
// console.log(c);

/// global scope is different in browser console and code editor (node).

/// nested scopes and closures.

// function one() {
//   const username = "shwet";
//   //closure means that the child function can access the parent function's variables.
//   function two() {
//     const website = "youtube";
//     console.log(username);
//   }
//   //   console.log(website); // here it'll give error because it is scoped inside the scope and printed outside the scope.
//   two(); // here we executed function two() // if i comment out this execution thn 2nd function will never be executed and it'll not print the username.
// }
// // the parent function will be executed first then child functions will be executed otherwise they'll not run.
// one(); // here we executed function one()

// another example to learn scopes in js.

// if (true) {
//   const username = "shwet";
//   if (username === "shwet") {
//     const surname = " rana";
//     console.log(username + surname);
//   }
//   // console.log(website); // this line will give error bcz it is printed outside the scope.
// }
// console.log(username); // this will also give error because it is printerd outside the scope.

// +++++++++++++++++++++++++++++++ interesting and important ++++++++++++++++++++++++++++++++++++++ //

// console.log(addone(5)); //here it can access addOne before declaration because it is not initialized in the variable.
// function addone(num) {
//   // this is called function only
//   return num + 1;
// }
// // addone(5);

// // addTwo(5);  this will give error because js can't access addTwo(5) before it's declaration.
// const addTwo = function addtwo(num) {
//   // this type of initializing function is also called as the expression in js
//   return num + 2;
// };
// console.log(addTwo(5));
