# Projects Related to DOM

## project link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-oa6cpr?file=index.html)

# Solution Codes

# Project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// now we'll have to do some work by taking events and some sort of that stuff so here i'll learn it as well.

buttons.forEach(function (button) {
  // this [addEventListener] listens to all the events that will occur in the browser or in the website. here we have added the call back function and then put the "e" in that and here 'e' refers to the events that'll occur in the browser.
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target); // target btata hai ki jo event h vo aa kaha se rha hai
    // ab hum conditions lgayenge taaki button pe click krke background color change ho jaaye

    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id; //e.target.id this also holds the color property of the block
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id; //e.target.id this also holds the color property of the block
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id; //e.target.id this also holds the color property of the block
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id; //e.target.id this also holds the color property of the block
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id; //e.target.id this also holds the color property of the block
    }
  });
});
```

# Project 2

```javascript
const form = document.querySelector("form");
// if we take the value of the weight and height here thn this usecase will give you empty values.
// const weight = parseInt(document.querySelector("#weight").value)

form.addEventListener("submit", function (e) {
  e.preventDefault(); //this stops the default action of the 'e'

  const height = parseInt(document.querySelector("#height").value); // here value gives the value from the form and parseInt converts the string value to integer

  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results"); //this is just the element

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show the result

    // results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      results.innerHTML = `<span>You are underweight. BMI: ${bmi}</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>You are normal weight. BMI: ${bmi}</span>`;
    } else {
      results.innerHTML = `<span>You are overWeight. BMI: ${bmi}</span>`;
    }
  }
});
```
