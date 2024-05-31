// this is how we declare the function
// here function is the keyword then () is the syntax of the function and whatever comes in between the {} these are called the declaration

// function sayMyName() {
//   console.log("S");
//   console.log("H");
//   console.log("W");
//   console.log("E");
//   console.log("T");
// }

// // to call the function 1stly we have to mention the reference of the function and then ().

// sayMyName();

// function add2numbers(number1, number2) {
//   //here number1 and number2 are parameters
//   console.log(number1 + number2);
// }
// add2numbers(3, 4); // here 3 and 4 are the arguments
// we can declare this function output in a different varaible also.

// const result = add2numbers(3, 4); // this will give the output of the function
// console.log("result: ", result); // the value that result have inside it is undefined.

//////////////////declaring the function in a different way.

// function add2numbers(number1, number2) {
// let result = number1 + number2;
// return result; // this means that jb function execute ho jayega tb result return krdo
// console.log("SHWET"); // return statement ke baad kbhi b koi b chij print nhi kr skte hum us fnc me... return se pehle kr skte h.
// another way to write the code.
// return number1 + number2;
// }

// const result = add2numbers(3, 5);
// console.log("Result: ", result); // now this will not give undefined because result humne return kr diya h

/////////////////////// what are the different methods to take values in the function.

// function loginUserMessage(username) {
//   if (username === undefined) {
//     // or we can write it like if(!username) --> this means that the username is undefined.
//     console.log("please enter your username");
//     return; //putting return here will not further execute the code and will stop the code here itself.
//   }
//   return `${username} just logged in`;
// }

// js automatically takes ("") (undefined) as a false statement.

// loginUserMessage("shwet"); //this will only return but not print anything in the console and to do that we have to print it using console.log
// console.log(loginUserMessage("shwet"));

// function loginUserMessage(username = "sam") {
// this will automatically fill the empty username as the default value provided in the function
// by doing this undefined will never occure.
//   if (!username) {
//     console.log("please enter your username");
//     return;
//   }
//   return `${username} has logged in`;
// }

// //if user has not put any value at the parameter then undefined will be printed.
// // console.log(loginUserMessage()); // or agr esa na ho iske liye hum if-else conditionals use krte h function me hi taake baad me bkchodi na ho.

// // in functions (!) this is the symbol which converts true to false and false to true.

// function calculatecartPrice(...num1) {
// this ... is also rest operator and spread operator
//here it is rest operator by using rest operator we can add the values into the array.
//   return num1;
// }

// // console.log(calculatecartPrice(200, 300, 400, 2000));

// /////////////////////// how to add object in the function

// // basic way to add object to function

// const user = {
//   username: "shwet",
//   price: 199,
// };

// function handleObject(anyobject) {
//   // anyobject is written to make it easy to understant that we can add any object it here.
//   console.log(`username is ${anyobject.name} and price is ${anyobject.price}.`);
// }
// handleObject(user); // here we put the object as the argument to execute the object.

// another but complex way to access the object.

// handleObject({
//   username: "Sam",
//   price: 399,
// });

///////////// adding array to the function

// const newArray = ["sam", 399];

// function returnSecondValue(getArray) {
//   return getArray[1]; // here we have to return the statement and add the index of value we want to access.
// }

// console.log(returnSecondValue(newArray));
// console.log(returnSecondValue(["sam", 400, "deep"]));
