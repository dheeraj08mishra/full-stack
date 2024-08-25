document.addEventListener("DOMContentLoaded", () => {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  const form = document.querySelector("#form");
  const input = document.querySelector("#input");
  const startGame = document.querySelector("#startGame");
  const submit = document.querySelector("#submit");
  const message = document.querySelector("#message");
  const guessDisplay = document.querySelector("#guessDisplay");
  const reset = document.querySelector("#reset");

  let array = [];
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const num = parseInt(input.value);
    array.push(num);
    console.log(array);
    if (array.length === 10) {
      startGame.disabled = false;
      submit.disabled = true;
      let result = array.some((item) => {
        return item === randomNumber;
      });
      if (result) {
        message.textContent = `Congratulation! You have guessed the number! It was ${randomNumber}`;
      } else {
        message.textContent = `Game Over! The number was ${randomNumber}`;
      }
    } else {
      if (num === randomNumber) {
        message.textContent = `Congratulation! You have guessed the number! It was ${randomNumber}`;
        startGame.disabled = false;
        submit.disabled = true;
      } else if (num > randomNumber) {
        message.textContent = `Number is too high!`;
        guessDisplay.textContent = `Previous Guesses: ${array}`;
      } else {
        message.textContent = `Number is too low!`;
        guessDisplay.textContent = `Previous Guesses: ${array}`;
      }
    }
  });

  startGame.addEventListener("click", () => {
    array = [];
    randomNumber = Math.floor(Math.random() * 100) + 1;
    message.textContent = "";
    guessDisplay.textContent = "";
    startGame.disabled = true;
    submit.disabled = false;
    input.value = "";
  });

  reset.addEventListener("click", () => {
    array = [];
    randomNumber = Math.floor(Math.random() * 100) + 1;
    message.textContent = "";
    guessDisplay.textContent = "";
    startGame.disabled = true;
    submit.disabled = false;
    input.value = "";
  });
});
