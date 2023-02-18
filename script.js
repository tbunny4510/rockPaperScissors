let randomizer = () => Math.floor(Math.random() *3);
/*
let getComputerChoice = (choice) => (choice === 0) ? "Rock" : 
    (choice === 1) ? "Paper" : "Scissors";
*/

function getComputerChoice(choice) {
    switch(choice) {
        case 0: return "paper";
            break;
        case 1: return "rock";
            break;
        case 2: return "scissors";
    }
}

let score = 0;

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "scissors") {
        score++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection === "paper" && computerSelection === "rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
        score++;
    } else if(playerSelection === "paper" && computerSelection === "scissors") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
        score++;
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `Tie! ${playerSelection} and ${computerSelection} are the same`;
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, Scissors?");
        let computerSelection = getComputerChoice(randomizer());
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
        console.log(score);
    }
}

game();
