const heros = "shwet-rana";
const hero = heros.charAt(4); // this gives the character of the asked position.
console.log(hero);

const name = heros.substring(0, 4); // create a substring of the original string without changing the original one.
// -ve values will start from 0 themselves.
console.log(name);

console.log(heros.length); //gives the length of the string

const newName = heros.slice(-10, 5);
// also includes the -ve values
// extracts the value of the old string into the new string without changing the old one.
console.log(newName);

const newString = heros.indexOf("w"); //finds the index of the character in the string
console.log(newString);

const newhero = heros.toUpperCase(); //converts to uppercase, toLowerCase()--> converts to lowercase
console.log(newhero);

const one = heros.replace("-", " "); //this replaces the chars or elements of the string
console.log(one);

const two = heros.includes("shabd"); //this checks whether the asked thing is in the string or not
console.log(two);

const three = heros.split("-"); //this turns it into array
console.log(three);
