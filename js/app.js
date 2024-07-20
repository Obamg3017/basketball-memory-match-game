//Setup initial variables and constants:

//DECLARE board as an array
//DECLARE turn as string
//DECLARE attempts as integer
//DECLARE matchedPairs as integer
//DECLARE IMAGES as array of NBA player images
//DECLARE TOTAL_PAIRS as integer equal to the number of pairs needed

//Cache DOM elements:

//DECLARE startButton
//DECLARE resetButton
//DECLARE attemptsMessageEl
//DECLARE attemptsCountEl
//DECLARE gameBoardEl
//DECLARE cardEl

//Event Listeners:

//ADD event listener to startButton for click to startGame function
//ADD event listener to resetButton to resetGame function
//ADD event listener to each cardEl for click to handle card click function

//Start Game Functionality:

//Function startGame
//Function initGame
//Function loadImages
//Function Random-Shuffle Images

//Rendering the Game Board:
//Function RenderBoard
//Loop through board array

//Handle Card Clicks & Matching Logic:

//Conditionals to check IF card was clicked to flip card
//Else do not flip card
//Check for match

//End Game & Reset Functionality:

//Function End Game
//check for winner
//check for loser

//Function Reset Game

/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let score = 0;
let attempts = 0;
let lockBoard = false;
let flippedCard = false;
let firstCard;
let secondCard;
/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");
const attemptsMessageEl = document.querySelector("#attempts");
const attemptsCountEl = document.querySelector("#attempts-count");
const cardsEl = document.querySelectorAll(".memory-card");
const winScore = document.querySelector("#win-score");
/*-------------------------------- Functions --------------------------------*/
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
   checkWin()
  } else {
    unflippedCards();
    attempts++
    attemptsCountEl.textContent = attempts;
    if(attempts >= 9){
      attemptsMessageEl.textContent = "You Lose!!!!"
      attemptsMessageEl.style.fontSize = "40px"
      winScore.textContent = "0"
       cardsEl.forEach((card) => {
         card.removeEventListener("click", flipCard);
       });
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
  }, 500);
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

function resetGame(){
  location.reload()
}

function checkWin(){
if (firstCard.dataset.players === secondCard.dataset.players) {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  score++;
  winScore.textContent = score;
  if (score >= 8) {
    winScore.textContent = "You Win!!!!";
    winScore.style.fontSize = "40px";
    attemptsCountEl.textContent = "0"
  }
  
}

}

/*----------------------------- Event Listeners -----------------------------*/
cardsEl.forEach((card) => {
  card.addEventListener("click", flipCard);
});


resetBtn.addEventListener("click", resetGame);

shuffle();