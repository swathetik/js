// other important loops

// for off loop --> this loop gives the values of the keys by default

let arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  //   console.log(num);
}

let greetings = "Hello World";
for (const greet of greetings) {
  if (greet == " ") {
    continue; // here continue means that if any spaces will be detected in the string we can skip the space and print the rest of the characters
  }
  //   console.log(`i want to greet you for ${greet}`);
}

// MAPS --> it is object itself. it hold the key-value pairs and remembers the original insertion order of the keys
// it does not have any duplicate value and only have unique values in it.
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

console.log(map); // this returns the object MAP.

// if you wanna print the key and the value of the map it returns it in the form of array, bu to print it we'va a different syntax

for (const [key, value] of map) {
  // in this line [key, value] this means that we are destructing the array
  //   console.log(key, ":->", value); // this returns the key and the value of the map.
}

// let's try to iterate the object

let myObject = {
  game1: "nfs",
  game2: "spiderman",
};
for (const [key, value] of myObject) {
  //here this will give error because we can't iterate object like this.
  //   console.log(key, ":->", value);
}
