// singleton --> when we declare object literal they can never become singleton, they have to be declared by constructor.

// syntax to declare a symbol.

// const sym1 = Symbol("symbol"); // unlike other data-types we have to use Symbol() to delcare the symbol.

// ///////////////// object literals ////////////////////

// // this is how we declare object literal
// const obj = {
//   name: "shwet",
//   age: 20,
//   "full name": "Shwet Rana", //another key and it's value
//   // to access the symbol in the string we also have to declare it first as a variable otherwise it'll throw an error.
//   [sym1]: "mysymbol", //in object we have to declare symbol like this otherwise it'll be treated as string.
//   email: "shwet@google.com",
//   place: "mohali",
// };

// console.log(obj.name); //one way of accessing keys from the object but it'll create an issue so the right way to declare the object is.
// console.log(obj["email"]);
// console.log(obj["full name"]); // by this method we can access the string key and all other keys from the object.
// console.log(obj[sym1]); // by this method we can access the symbol key from the object.

// to change the value of any key we'll do this.

// obj.email = "shwetrana980@gmail.com";
// console.log(obj["email"]);
// and if you want that no one can change the object you can use freeze to freeze the object.
// Object.freeze(obj); //now this object is freezed that means no one can change the keys and the values from the object.

// obj.email = "shwetrana123@gmail.com";
// console.log(obj["email"]); // now the previous changed value will be declared because now the object is freezed.

/////////////////////////// adding functions in objects /////////////////////////////////

// obj.greetings = function () {
//   console.log("hello object");
// };

// console.log(obj.greetings); //this gives function reference but by this function does not execute.
// /// to execute the function we have to add greetings().
// console.log(obj.greetings());

//to access the object key by function we have to use "this" keyword to access the key and it's value.
// obj.greetings2 = function () {
//   console.log(`Hello there my age is ${this.age}`); // using backticks `` instead of "" is called as string interpolation  and to add any value in that we can do ${ variable or value.}
// };
// console.log(obj.greetings2());
