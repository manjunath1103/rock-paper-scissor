let playerScore = 0;
let computerScore = 0;

const playerScoreNode = document.querySelector('#player-score');
const computerScoreNode = document.querySelector('#computer-score');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const gameStats = document.querySelector('#game-stats');
let winnerList;
let winnerDiv;
let restartBtn;

rock.addEventListener('click', () => {
    const playerSelection = 'ROCK';
    const computerSelection = getComputerChoice();
    const winner = playRound(playerSelection, computerSelection);
    displayWinner(playerSelection, computerSelection, winner);
    updateScore();
});

paper.addEventListener('click', () => {
    const playerSelection = 'PAPER';
    const computerSelection = getComputerChoice();
    const winner = playRound(playerSelection, computerSelection);
    displayWinner(playerSelection, computerSelection, winner);
    updateScore();
});

scissor.addEventListener('click', () => {
    const playerSelection = 'SCISSOR';
    const computerSelection = getComputerChoice();
    const winner = playRound(playerSelection, computerSelection);
    displayWinner(playerSelection, computerSelection, winner);
    updateScore();
});

function createDiv(divID) {
    const div = document.createElement('div');
    div.setAttribute('id', `${divID}`);
    return div;
}

function displayWinner(playerSelection, computerSelection, winner) {
    winnerList = document.querySelector('#winner-list');
    if (!winnerList) {
        winnerList = createDiv('winner-list');
        document.body.appendChild(winnerList);
    }
    const roundWinner = document.createElement('div');
    roundWinner.textContent =
        `Player Choice: ${playerSelection} and Computer Choice: ${computerSelection}  -  Winner: ${winner}\n`;
    roundWinner.classList.add('round-winner');
    winnerList.appendChild(roundWinner);
}

function getComputerChoice() {
    const choices = { 1: "ROCK", 2: "PAPER", 3: "SCISSOR" };
    const choice = Math.floor(Math.random() * 3) + 1;
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "DRAW";
    } if (playerSelection === "ROCK" && computerSelection === "SCISSOR"
        || playerSelection === "PAPER" && computerSelection === "ROCK"
        || playerSelection === "SCISSOR" && computerSelection === "PAPER") {
        playerScore += 1;
        return `PLAYER`;
    } else {
        computerScore += 1;
        return `COMPUTER`;
    }
}

function restartGame(){
    playerScore = 0;
    computerScore = 0;
    updateScore();
    winnerDiv.remove();
    winnerList.remove();
    restartBtn.remove();
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
}

function terminateGame() {
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
    winnerDiv = createDiv('winner');
    winnerDiv.innerHTML =
        `<h3>Winner: ${playerScore > computerScore ? 'PLAYER' : 'COMPUTER'}</h3>`;
    gameStats.appendChild(winnerDiv);
    restartBtn = document.createElement('button');
    restartBtn.setAttribute('id', 'new-game');
    restartBtn.textContent = 'New Game';
    restartBtn.addEventListener('click', restartGame);
    document.querySelector('body').insertBefore(restartBtn, winnerList);
}

function updateScore() {
    playerScoreNode.textContent = `Player Score: ${playerScore}`;
    computerScoreNode.textContent = `Computer Score: ${computerScore}`;
    if (playerScore == 5 || computerScore == 5) {
        terminateGame();
    }
}