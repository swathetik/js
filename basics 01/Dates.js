//////////////////////////////////////////////////////////////////////////////////////////////////
// in js months starts from 0 to 11
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString()); //this converts the above date in more readable way or in string with the time-zone and everything.
// console.log(myDate.toISOString()); //returns a string representing this date in the date time string format.
// console.log(myDate.toDateString()); //this gives Date with the day itself.
// console.log(myDate.toLocaleDateString()); //this gives only todays date.
// console.log(myDate.toLocaleString()); //this gives the time with the date too.
// console.log(myDate.toJSON()); // returns the string representing this date in the same ISO format as ".toISOString()".
// console.log(myDate.toLocaleTimeString()); //this gives the time only.

//Different syntaxs for typing dates in js
// const newDate = new Date(2003, 9, 3); // 1st
// console.log(newDate.toDateString());
// const newDate = new Date(2003, 9, 3, 9, 27); // 2nd this includes the time and date
// console.log(newDate.toLocaleString());

// const newDate = new Date("10-03-2003"); //3rd this gives the indian format of date.
// console.log(newDate.toLocaleString());
// console.log(newDate.getTime()); //this getTime will also give the same result as the timeStamp which is in milisecond.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//learning about timestamp (fetching the exact time of that period)

// const myTimeStamp = Date.now();
// console.log(myTimeStamp); //this will give the exact time in milisecond
//to convert this in seconds we have to divide the timestamp by 1000. and add a floor function to it, to get the required ans.
// console.log(Math.floor(Date.now() / 1000)); //date.now() this gives the exact time or date of the time it is excecuted.

// to get the specific month or date or year or second or anything just initialize a variable and then add .get it'll show you the desired result.

// const newwDate = new Date();
// console.log(newwDate);
// console.log(newwDate.getMonth() + 1); //this will give the today's month which is May and months in js starts with 0

// let newDate = new Date();
// newDate.toLocaleString("default", {
//   weekday: "long",
// });

// console.log(newDate.weekday);
