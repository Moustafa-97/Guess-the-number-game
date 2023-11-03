"use strict";
const randomNumber = document.getElementById("randomNum");

const userInput = document.getElementById("userInp");
let userText = document.getElementById("brainIt");

let scoreValue = document.getElementById("scoreValue");

let score, playing, numberRand;

const newGame = function () {
  score = 20;
  playing = true;
  numberRand = Math.trunc(Math.random() * 20) + 1;
  randomNumber.textContent = `?`;
  userText.textContent = `BRAIN IT 🧠`;

  scoreValue.textContent = score;
};
newGame();

let hightScore = document.getElementById("hightScoreValue");
const changeScore = function () {
  score--;
  scoreValue.textContent = score;
};

const checkBtn = document.getElementById("check");

checkBtn.addEventListener("click", function () {
  if (playing) {
    if (!userInput.value) {
      userText.textContent = `ENTER UR 🧠`;
      changeScore();
    } else if (userInput.value === String(numberRand)) {
      userText.textContent = `CORRECT 💃💃`;
      playing = false;
      randomNumber.textContent = numberRand;
      Number(hightScore.textContent) >= Number(scoreValue.textContent)
        ? (hightScore.textContent = hightScore.textContent)
        : (hightScore.textContent = scoreValue.textContent);
      userInput.value = "";
    } else if (userInput.value != numberRand) {
      changeScore();
      userInput.value > numberRand
        ? (userText.textContent = `TOO HIGHT 🥵`)
        : (userText.textContent = `TOO LOW 🥶`);
      userInput.value = "";
    }
  }
});

const againBtn = document.getElementById("again");
againBtn.addEventListener("click", function () {
  newGame();
  console.log(numberRand);
});
