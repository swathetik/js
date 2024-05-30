// const marvel_heros = ["spiderman", "ironman", "widdow"];
// const dc_heros = ["superman", "batman", "superwoman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); //this shows that arrays take anything as the data, even another array itself.
/// now dc_heros has become the 4th element in the marvel_heros.
//here the 4th element is dc_heros and to access anything from in side the dc_heros we've to ask for another location.
// console.log(marvel_heros[3][1]); // this is not an good syntax to do it.

// const all_heros = marvel_heros.concat(dc_heros); // concat is the method which merge the 2 array into one and returns the new array.
// console.log(all_heros);

// spread operator (...{arryay name})
// this changes the array into individual elements and combine them to one new operator, and to use spread operator we have to apply (...) in the front of an arrays you want to combine.
// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const usable_another_Array = another_array.flat(Infinity); // flat operator Returns a new array with all sub-array elements concatenated into the new array.
// console.log(usable_another_Array);

/// From and isArray Exmaples

//// isArray checks whether the asked one is array or not.
// console.log(Array.isArray(marvel_heros)); // true

// //// from coverts anything into the array as it feels confortable.
// console.log(Array.from("shwet"));

// console.log(Array.from({ name: "shwet" })); //this directly doesn't change the object into the array, you have to tell that whether you want array of keys or of values.

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;

// console.log(Array.of(score1, score2, score3)); // of method takes the elements and converts it into the array.
