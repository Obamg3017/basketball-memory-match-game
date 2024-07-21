const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");
const attemptsMessageEl = document.querySelector("#attempts");
const attemptsCountEl = document.querySelector("#attempts-count");
const cardsEl = document.querySelectorAll(".memory-card");
const winScore = document.querySelector("#win-score");
const howToPlay = document.querySelector("#instructions");
const audioStartGame = new Audio("./audio/NBA_NBC_Theme_Song.mp3");
const audioWin = new Audio("./audio/Anything_Is_Possible.mp3");
const audioLose = new Audio("./audio/Buzzer_Loser.mp3");
const audioRightMatch = new Audio("./audio/correct_Match.mp3");
const audioWrongMatch = new Audio("./audio/H_N_KG.mp3");

let score = 0;
let attempts = 0;
let lockBoard = false;
let flippedCard = false;
let firstCard;
let secondCard;



function flipCard() {
  if (lockBoard) {
    return;
  }
  if (this === firstCard) {
    return;
  }
  this.classList.add("flip");
  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
  } else {
    flippedCard = false;
    secondCard = this;
    checkForMatchedPairs();
  }
}

function checkForMatchedPairs() {
  if (firstCard.dataset.players === secondCard.dataset.players) {
    audioRightMatch.play();
    checkWin();
  } else {
    unflippedCards();
    audioWrongMatch.play();
    attempts++;
    attemptsCountEl.textContent = attempts;
    if (attempts >= 9) {
      attemptsMessageEl.textContent = "YOU LOSE!!!!";
      attemptsMessageEl.style.fontSize = "50px";
      winScore.textContent = "0";
      cardsEl.forEach((card) => {
        card.removeEventListener("click", flipCard);
      });

      setTimeout(function () {
        audioLose.play();
      }, 1300);
    }
  }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflippedCards() {
  lockBoard = true;
  setTimeout(function () {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }, 1100);
}

function resetBoard() {
  flippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

function shuffle() {
  cardsEl.forEach((card) => {
    let shuffledDeck = Math.floor(Math.random() * 15);
    card.style.order = shuffledDeck;
  });
}

function resetGame() {
  window.location.reload();
}

function checkWin() {
  if (firstCard.dataset.players === secondCard.dataset.players) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    score++;
    winScore.textContent = score;
    winScore.textContent = `Score: ${score}`;
    winScore.style.fontSize = "35px";
    if (score >= 8) {
      winScore.textContent = "YOU WIN!!!!";
      winScore.style.fontSize = "50px";
      attemptsCountEl.textContent = "0";
      setTimeout(function () {
        audioWin.play();
      }, 1000);
    }
  }
}



cardsEl.forEach((card) => {
  card.addEventListener("click", flipCard);
});

document.addEventListener("DOMContentLoaded", () => {
  audioStartGame.play();
  howToPlay.showModal();
});

startBtn.addEventListener("click", () => {
  howToPlay.close();
  audioStartGame.pause();
});

resetBtn.addEventListener("click", resetGame);

shuffle();

//Referenced resources listed blow: 

//https://www.youtube.com/shorts/VupSmMRb4x4?feature=share
//https://www.youtube.com/watch?v=ZniVgo8U7ek
//https://forum.freecodecamp.org/t/playing-local-mp3-file-in-visual-studio-code/451363
