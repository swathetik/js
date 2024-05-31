// const tinderUser = new Object(); // this is singleton object

const tinderUser = {};

//another way to add the keys into the object.

tinderUser.id = "123abc"; //this is we giving an unique id to the user in the object.
tinderUser.name = "Sammy"; //this is we giving a name to the user in the object.
tinderUser.isLoggedin = false; //either the user is logged in or not.

// // console.log(tinderUser);

// ////////////////////// adding objects in objects, we can nest any number of objects in the parent object.

// const regularUser = {
//   email: "sumAgmail.com",
//   fullname: {
//     userFullName: {
//       firstName: "Shwet",
//       lastName: "Rana",
//     },
//   },
// };

// to access the objects from the object we have to console.log() it.

// console.log(regularUser.fullname); // this is how we access the 1st nested object from the parent object.

// console.log(regularUser.fullname.userFullName.firstName); //this is how we access the keys from the object nested in the parent object.

// if fullname doesn't exist we have to add "?" by this we protect the object which is incase not available.
//  console.log(regularUser.fullname?.userFullname.firstName);

/// combinig objects.

const newObj1 = { 1: "a", 2: "b" };

const newObj2 = { 3: "a", 4: "b" };

// const obj3 = { newObj1, newObj2 }; //we can't do this because this will add the object into the parent object which creates a nested object.
// console.log(obj3);

// const obj3 = Object.assign(newObj1, newObj2); ///this takes the properties from the previous object and return a new object combining all the keys and values from the previous arrays.
// console.log(obj3);

// another way to combine objects. // adding {} in the first makes sure that the return statement will be an object for sure.
// const obj3 = Object.assign({}, newObj1, newObj2); ///this takes the properties from the previous object and return a new object combining all the keys and values from the previous arrays.
// console.log(obj3);
// {} this is the target and the other are the sourse to put in the target.

// we can also use spread operator in combining the objects.

// const obj3 = { ...newObj1, ...newObj2 };
// console.log(obj3);

// when we have to access the values from the database, the values come in the form of an array of objects. foreg:

// const users = [
//   {
//     id: 1,
//     email: "h@gmail.com,",
//   },
//   {
//     id: 2,
//     email: "c@gmail.com",
//   },
//   {
//     id: 3,
//     email: "b@gmail.com",
//   },
// ];

// users[1].email; //this is how we access the object from the array
// console.log(tinderUser);

// // to access the keys of any object we have to apply this syntax and the datatype of those keys will be array.
// //by this we put the keys into an array and we can put loops and other things on it. ## this is important and will be applicable further.
// console.log(Object.keys(tinderUser)); //this will return the keys in array.
// console.log(Object.values(tinderUser)); //this will return the values in array.
// console.log(Object.entries(tinderUser)); //this will return the keys and values in form of array in array.

// /// how to check whether the property is present in the object or not?

// console.log(tinderUser.hasOwnProperty("isLoggedOut")); //this checks the object and return the boolean value of if the property is present or not.

////////////////////////////////// DESTRUCTURING OF AN OBJECT.

const course = {
  name: "js in hindi",
  price: "999",
  teacher: "hitesh",
};

//another way to fetch the keys and values from the object.
// const { teacher } = course;
// console.log(teacher); // this is as same as the (course.teacher)

const { teacher: sir } = course; //this is destructuring the object
console.log(sir);
