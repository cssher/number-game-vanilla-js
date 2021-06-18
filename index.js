let getRandomNum = () => {
  return Math.ceil(Math.random() * 20);
};

let randomNum = getRandomNum();

console.log(randomNum);

const guess = document.querySelector(".guessed");
const button = document.querySelector("#btn");
const message = document.querySelector(".hint-text");
const currentScore = document.querySelector(".current-score");
const currentHighScore = document.querySelector(".high-score");
const playAgain = document.querySelector(".play-again");

currentScore.innerHTML = 20;
let highScore = 0;

button.addEventListener("click", () => {
  if (guess.value === "") {
    alert("EMPTY ! Please enter a number.");
  } else if (guess.value > randomNum) {
    document.body.style.background = "#CD5C5C";
    message.innerHTML = "Guess is High 🔺";
    currentScore.innerHTML--;
  } else if (guess.value < randomNum) {
    document.body.style.background = "#CD5C5C";
    message.innerHTML = "Guess is Low 🔻";
    currentScore.innerHTML--;
  } else {
    document.body.style.background = "#7FFFD4";
    message.innerHTML = `Correct ✅. It was ${randomNum}.`;
    guess.readOnly = true;
    playAgain.style.display = "block";
    playAgain.style.background = "blue";
    playAgain.style.color = "yellow";
    playAgain.style.fontSize = "20px";
    playAgain.style.marginTop = "5px";
    currentScore.innerHTML++;
    highScore > currentScore.innerHTML
      ? (highScore = highScore)
      : (highScore = currentScore.innerHTML);
    currentHighScore.innerHTML = highScore;
    guess.value = "";
  }
  console.log(randomNum);
});

const reset = document.querySelector(".reset-game");
reset.addEventListener("click", () => {
  window.location.reload();
});

playAgain.addEventListener("click", () => {
  playAgain.style.display = "none";
  playAgain.style.textAlign = "center";
  message.innerHTML = `Start Guessing A New Number Again... 🤔`;
  randomNum = getRandomNum();
  guess.readOnly = false;
});
