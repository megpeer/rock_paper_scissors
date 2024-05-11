
const playerCount = document.querySelector("#playerScore");
let playerWinCount = 0

const computerCount = document.querySelector("#computerScore");
let computerWinCount = 0

const roundCount = document.querySelector("#roundCount");
let rounds = 1

const WinMsg = document.querySelector("whoWon")

function computerChoice() {
    const pick = ["rock", "paper", "scissors"];
    return pick[Math.floor(Math.random() * pick.length)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result = whoWon.textContent = 'You win! Rock beats Scissors! (rock blunts scissors)', playerWinCount+=1, rounds+=1;}
    
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    result = whoWon.textContent = 'You win! Scissors beats Paper! (scissors cuts paper)', playerWinCount+=1, rounds+=1}

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = whoWon.textContent = 'You win! Paper beats Rock! (paper covers rock)', playerWinCount+=1, rounds+=1;}

    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result = whoWon.textContent = 'You lose! Rock beats Scissors! (rock blunts scissors)', computerWinCount+=1, rounds+=1;}

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result =  whoWon.textContent = 'You lose! Scissors beats Paper! (scissors cuts paper)', computerWinCount+=1, rounds+=1;}

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
    result = whoWon.textContent = 'You lose! Paper beats Rock! (paper covers rock)', computerWinCount+=1, rounds+=1;}

    else {
        result = whoWon.textContent = 'Tie!', rounds+=1;}

    }

function winner(playerWinCount, computerWinCount) {
    if (computerWinCount === 5) {
    alert("COMPUTER WINS THE GAME!"); window.location.reload();
    }
    else if (playerWinCount === 5) {
        alert("PLAYER WINS THE GAME!"), window.location.reload();
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
   playRound(button.value, computerChoice())

// count up player score in DOM

playerCount.textContent = 'player score: ' + `${playerWinCount}`,
// count up computer scroe in DOM

computerCount.textContent = 'computer score: ' + `${computerWinCount}`,
// count up rounds in DOM

roundCount.textContent = 'rounds played: ' + `${rounds}`;

//alert pop up when 5th point is reached, resets game
winner(playerWinCount, computerWinCount);
  });
 
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {location.reload()
});

