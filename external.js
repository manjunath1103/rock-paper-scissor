function getComputerChoice() {
    const choices = { 1: "rock", 2: "paper", 3: "scissor" };
    const choice = Math.floor(Math.random() * 3) + 1;
    return choices[choice];
}

function getPlayerChoice() {
    let choice = window.prompt("Rock, Paper, Scissor\nEnter Your Choice:");
    choice = choice.toLowerCase();
    while (!(choice === "rock" || choice === "paper" || choice === "scissor")) {
        alert("Invalid Choice!\nPlease Check Spelling.");
        choice = window.prompt("Rock, Paper, Scissor\nEnter Your Choice:");
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw";
    } if (playerSelection === "rock" && computerSelection === "scissor"
        || playerSelection === "paper" && computerSelection === "rock"
        || playerSelection === "scissor" && computerSelection === "paper") {
        return `player`;
    } else {
        return `computer`;
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let gameNumber = 1; gameNumber <= 5; ++gameNumber) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);

        let playerSelectionName = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        let computerSelectionName = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

        console.log(`Game Number: ${gameNumber}`);
        console.log(`Player Choice: ${playerSelectionName}`);
        console.log(`Computer Choice: ${computerSelectionName}`);

        if (winner === "player") {
            console.log(`You Win! ${playerSelectionName} beats ${computerSelectionName}\n`);
            playerWins++;
        } else if (winner === "computer") {
            console.log(`You Lose! ${computerSelectionName} beats ${playerSelectionName}\n`);
            computerWins++;
        } else {
            console.log("It's a Draw\n");
        }
    }
    console.log(`Player Wins: ${playerWins}`);
    console.log(`Computer Wins: ${computerWins}`);
    if (playerWins > computerWins) {
        console.log("PLayer Wins the Game");
    } else if (computerWins > playerWins) {
        console.log("Computer Wins the Game");
    } else {
        console.log("Draw!!!");
    }
}

game();