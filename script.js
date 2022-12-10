var playerScore = 0;
var round = 0;
var computerScore = 0;

document.getElementById("win-message").textContent = `Let's play rock paper scissors!`;
document.getElementById("round").textContent = round;
document.getElementById("playerScore").textContent = playerScore;
document.getElementById("computerScore").textContent = computerScore;

const outcomeDiv = document.querySelector('.outcome')
const p = document.createElement('p');

function computerPlay() {
    var choices = ['rock', 'paper', 'scissors'];
    return choices [Math.floor(Math.random() * choices.length)];
}

function playRound(playerHand, computerHand) {
    // var playerWin = `You win, ${playerHand} beats ${computerHand}`;
    // var computerWin = `You lose, ${computerHand} beats ${playerHand}`;
    // var gameTie = `It's a tie, you both chose ${playerHand}`
    round++;
    if (playerHand === computerHand) {
        // return gameTie;
        p.innerText = `It's a tie, you both chose ${playerHand}`
        outcomeDiv.appendChild(p)
    }
    else if ((playerHand === 'rock' & computerHand === 'scissors') ||
        (playerHand === 'paper' & computerHand === 'rock') ||
        (playerHand === 'scissors' & computerHand === 'paper')) {
        playerScore++;
        // return playerWin;
        p.innerText = `You win, ${playerHand} beats ${computerHand}`
        outcomeDiv.appendChild(p)
    } else {
        computerScore++;
        // return computerWin;
        p.innerText = `You lose, ${computerHand} beats ${playerHand}`
        outcomeDiv.appendChild(p)
       }
    }

function game(player) {
    if (playerScore < 5 && computerScore < 5) {
        var playerSelection = player;
        var computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        document.getElementById("round").textContent = round;
        document.getElementById("playerScore").textContent = playerScore;
        document.getElementById("computerScore").textContent = computerScore;
    }
    if (playerScore == 5) {
        // return `You beat the computer!`
        p.innerText = `You beat the computer!`
        outcomeDiv.appendChild(p)
    }
    if (computerScore == 5) {
        // return `The computer wins`
        p.innerText = `The computer wins, try again!`
        outcomeDiv.appendChild(p)
    }
}

var rockBtn = document.querySelector('#rock-btn');
var paperBtn = document.querySelector('#paper-btn');
var scissorsBtn = document.querySelector('#scissors-btn');
var resetButton = document.querySelector('#reset-button');

rockBtn.addEventListener('click', ()=>  {
    game('rock');
});

paperBtn.addEventListener('click', ()=>  {
    game('paper');
});

scissorsBtn.addEventListener('click', ()=>  {
    game('scissors');
});

resetButton.addEventListener('click', ()=>  {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    document.getElementById("round").textContent = round;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
});