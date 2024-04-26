// prompt player choice
//get random computer choice
//play out the round
//score a win for the computer or player
// print # of rounds played

// loop 5 times




let playerWinCount = 0
let computerWinCount = 0
let rounds = 0

// loop until player or computer get 5 points
const playGame = () => {
for (let i = 0; i < 5; i++) {

rounds+=1;


//   prompt player choice
const playerSelection = prompt('rock, paper or scissors? ').toLocaleLowerCase();
if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
    console.log("you chose " + playerSelection)
}


//   get random computer choice
function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)]
}

const computerSelection = getComputerChoice();
if (computerSelection === "rock" || computerSelection === "paper" || computerSelection === "scissors") {
    console.log("computer chose " + computerSelection)}
    

//  play out the round


function playRound(playerSelection, computerSelection) {


    if (playerSelection === computerSelection) {
    result = console.log('Tie!');}

    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    result = playerWinCount+=1, console.log('You win! Rock beats Scissors! (rock blunts scissors)');}
    
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    result = playerWinCount+=1, console.log('You win! Scissors beats Paper! (scissors cuts paper)'); }

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
    result = playerWinCount+=1, console.log('You win! Paper beats Rock! (paper covers rock)');}

    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    result = computerWinCount+=1, console.log('You lose! Rock beats Scissors! (rock blunts scissors)'); }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    result =  computerWinCount+=1, console.log('You lose! Scissors beats Paper! (scissors cuts paper)'); }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
    result =  computerWinCount+=1, console.log('You lose! Paper beats Rock! (paper covers rock)');}

    return result

    }
console.log(playRound(playerSelection, computerSelection));

//  score a win for the computer or player
//  print # of rounds played
console.log(`player score = ${playerWinCount}`)
console.log(`computer score = ${computerWinCount}`)
console.log(`you have played ${rounds} rounds`)
}
}

playGame()

function winner(playerWinCount, computerWinCount) {

    if (playerWinCount === computerWinCount) {
        result = "THE GAME IS A TIE!";
    }    
    else if (playerWinCount <= computerWinCount) {
    result = "COMPUTER WINS THE GAME!"
    }
    else if (playerWinCount >= computerWinCount) {
        result = "PLAYER WINS THE GAME!"
        }

    return result
}
console.log(winner(playerWinCount, computerWinCount))