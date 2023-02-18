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

let tie = (playerSelection, computerSelection) =>
    `It's a tie! ${playerSelection} and ${computerSelection} are the same!`;

let win = (playerSelection, computerSelection) => 
    `You win! ${playerSelection} beats ${computerSelection}`;

let lose = (playerSelection, computerSelection) =>
    `You lose! ${computerSelection} beats ${playerSelection}`;

let paper = (playerSelection, computerSelection) => 
    (computerSelection === "rock") ? win(playerSelection, computerSelection) :
    (computerSelection === "scissors") ? lose(playerSelection, computerSelection):
        tie(playerSelection, computerSelection);

let rock = (playerSelection, computerSelection) => 
    (computerSelection === "scissors") ? win(playerSelection, computerSelection) :
    (computerSelection === "paper") ? lose(playerSelection, computerSelection):
        tie(playerSelection, computerSelection);

let scissors = (playerSelection, computerSelection) => 
    (computerSelection === "paper") ? win(playerSelection, computerSelection) :
    (computerSelection === "rock") ? lose(playerSelection, computerSelection) :
        tie(playerSelection, computerSelection);

let playRound = (playerSelection, computerSelection) =>
    (playerSelection === "rock") ? rock(playerSelection,computerSelection) :
    (playerSelection === "paper") ? paper(playerSelection, computerSelection) :
        scissors(playerSelection, computerSelection);

function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, Scissors?");
        let computerSelection = getComputerChoice(randomizer());
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
    }
}

game();
