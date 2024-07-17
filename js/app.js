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
let board = [];
let attempts = 0;
let matchedPairs = 0;
let firstCard = null;
let secondCard = null;
let totalPairs = 2;
/*------------------------ Cached Element References ------------------------*/
const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");
const attemptsMessageEl = document.querySelector("#attempts");
const attemptsCountEl = document.querySelector("#attempts-count");
const gameBoardEl = document.querySelector(".memory-game");
const cardEl = document.querySelectorAll(".memory-card"); 
const frontDisplay = document.querySelectorAll(".front-display");
const flipDisplay = document.querySelectorAll(".flip-display")
/*-------------------------------- Functions --------------------------------*/
// function init(){
//     board = 
// }

// function render(){

// }

// function handleClick(){

// }

// function randomShuffle(){

// }
/*----------------------------- Event Listeners -----------------------------*/
cardEl.forEach((img)=>{
    img.addEventListener("click", handleClick)
})
