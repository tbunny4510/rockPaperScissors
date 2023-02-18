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

let paper = (playerSelection, computerSelection) => {
    if(computerSelection === "rock") {
        return win(playerSelection, computerSelection);
    } else if (computerSelection === "scissors") {
        return lose(playerSelection, computerSelection);
    }
    return tie(playerSelection, computerSelection);
}

let rock = (playerSelection, computerSelection) => {
    if(computerSelection === "scissors") {
        return win(playerSelection, computerSelection);
    } else if(computerSelection === "paper") {
        return lose(playerSelection, computerSelection);
    }
    return tie(playerSelection, computerSelection);
}

let scissors = (playerSelection, computerSelection) => {
    if(computerSelection === "paper") {
        return win(playerSelection, computerSelection);
    } else if(computerSelection === "rock") {
        return lose(playerSelection, computerSelection);
    }
    return tie(playerSelection, computerSelection);
}

let playRound = (playerSelection, computerSelection) =>
    (playerSelection === "rock") ? rock(playerSelection,computerSelection) :
    (playerSelection === "paper") ? paper(playerSelection, computerSelection) :
        scissors(playerSelection, computerSelection);

function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, Scissors?");
        let computerSelection = getComputerChoice(randomizer());
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
        console.log(score);
    }
}

game();
