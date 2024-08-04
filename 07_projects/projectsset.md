# Projects Related to DOM

## Project Link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-oa6cpr?file=index.html)

# Solution Codes

# Project 1 :- Color Changer

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

# Project 2 :- BMI Calculator

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

# Project 3 :- Display Time

```javascript
const clock = document.getElementById("clock");
// const clock = document.querySelector("#clock"); they both will give the same output.

// this setIntervel method controls the events of the javascript
// time always go in miliseconds so we have to write it in miliseconds, here 1000 means 1sec
// setInterval always have 2 parameters, so in first we give the function we want it to perform and 2nd we give it time interval of performing that same function.

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  // here we have manipulated the innerHTML of the project and updated it with the digital clock.
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

# Project 4 :- Guess the Number

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

//until here we have taken the code and prepared it for the further process or the logic

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //this will check if the guess is between 1 or 10
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number bigger than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuesses === 11) {
      displayGuess(guess);
      displayMessage(`Game user. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // this prints the message after validation of the guess
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuesses++;
  remaining.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  // this will interact with the DOM and gives the final message.

  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuesses = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);

    playGame = true;
  });
}
```

# Project 5 :- Keyboard

```javascript
const insert = document.getElementById("insert");
window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  <div class = "color">
  <table>
  <tr>
    <th>key </th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  
  `;
});
```

# Project 6 :- Color Changer

```javascript
// generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF"; // this is the range of the hex code value (color values)
  let color = "#";

  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]; //16 because hex values go to 16
  }
  return color;
};

// console.log(randomColor());
let intervalId;
const startChangingColor = function () {
  // we have done this to make the code more reliable and good.
  // it checks whether if the value of intervalId is null or not if it is null, we change it with the setInterval().
  if (!intervalId) {
    intervalId = setInterval(changeBGcolor, 1000);
  }
  function changeBGcolor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId); //this clears the interval and stops the proccess.
  intervalId = null;
};
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
```
