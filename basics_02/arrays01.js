// arrays

//basic way to declare an array
// const myArr = [0, 1, 2, 3, 4, 5, 6];
// console.log(myArr); //this is how we define an arr and console it further to get the output

//another way to declare an array
// const myArr2 = new Array(0, 1, 2, 3, 4, 5);
// console.log(myArr2);
// console.log(myArr2[3]); //this is how we find the value of the asked index.
//indexing starts from 0 to n-1(number of elements present in the array)

///////////////////////////////////////////////////////////////////////////

// Array Methods
// myArr.push(7, 8); //this adds the elements to the end of an array.
// console.log(myArr);

// myArr.pop(); //this removes the last element of the array
// console.log(myArr);

// myArr.shift(); //this removes the starting element of the array
// console.log(myArr);

// myArr.unshift(1);
// console.log(myArr); //this adds the elements to the starting of the array

// console.log(myArr.includes(10)); //this checks whether the asked element is present in it or not.
// console.log(myArr.indexOf(4)); //this checks whether the element is present. if yes thn returns it's index number or will return -1.

// const newArr = myArr.join(); //this converts the array into a string.
// console.log(myArr); // this is the original array.
// console.log(newArr); // this returns the string.
// console.log(typeof newArr); // this returns the string.

//////// slice and splice

// console.log("A ", myArr);
// const myn1 = myArr.slice(1, 3); //ye original array me change ni krta h blki usko copy krke uska subarray bnata h jisme range include nhi hoti hai
// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3); //ye original array ko change kr deta h or limit b include krta h subarray me.
// console.log("C ", myArr);
// console.log(myn2);
