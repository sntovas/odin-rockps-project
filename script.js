let humanChoice = ["rock", "paper", "scissors"];
let computerChoice = ["rock", "paper", "scissors"];
let choiceCheck = "";
let humanScore = 0;
let computerScore = 0;
let scoreFlag = 0;
let playAgain = 0;
const rock = document.querySelector(".rock-btn");
const paper = document.querySelector(".paper-btn");
const scissors = document.querySelector(".scissors-btn");
const playBtn = document.querySelector(".play-btn");
const displayUserScore = document.querySelector(".user-score-num");
const displayCPUScore = document.querySelector(".cpu-score-num");
const results = document.querySelector(".results");

rock.addEventListener("click", function() {
    choiceCheck = "rock";
    playGame(choiceCheck);
});

paper.addEventListener("click", function() {
    choiceCheck = "paper";
    playGame(choiceCheck);
});

scissors.addEventListener("click", function() {
    choiceCheck = "scissors";
    playGame(choiceCheck);
});

playBtn.addEventListener("click", function() {
    humanScore = 0;
    computerScore = 0;
    scoreFlag = 0;
    displayUserScore.innerText = `0`;
    displayCPUScore.innerText = `0`;
    results.innerText = `Test your skill!`;
});


function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(hChoice, cChoice) {
    let flag = 0;

    if(hChoice === "rock" && cChoice === "rock") {
        flag = 2;
        results.innerText = `Computer had: ${cChoice.charAt(0).toUpperCase() + cChoice.slice(1)}. It's a tie!`;
    }
    else if(hChoice === "rock" && cChoice === "paper") {
        flag = 1;
        results.innerText = `Computer had: ${cChoice.charAt(0).toUpperCase() + cChoice.slice(1)}. Computer Wins!`;
    }
    else if(hChoice === "rock" && cChoice === "scissors") {
        flag = 0;
        results.innerText = `Computer had: ${cChoice.charAt(0).toUpperCase() + cChoice.slice(1)}. You Win!`;
    }
    else if(hChoice === "paper" && cChoice === "rock") {
        flag = 0;
        results.innerText = `Computer had: ${cChoice.charAt(0).toUpperCase() + cChoice.slice(1)}. You Win!`;
    }
    else if(hChoice === "paper" && cChoice === "paper") {
        flag = 2;
        results.innerText = `Computer had: ${cChoice.charAt(0).toUpperCase() + cChoice.slice(1)}. It's a tie!`;
    }
    else if(hChoice === "paper" && cChoice === "scissors") {
        flag = 1;
        results.innerText = `Computer had: ${cChoice.charAt(0).toUpperCase() + cChoice.slice(1)}. Computer Wins!`;
    }
    else if(hChoice === "scissors" && cChoice === "rock") {
        flag = 1;
        results.innerText = `Computer had: ${cChoice.charAt(0).toUpperCase() + cChoice.slice(1)}. Computer Wins!`;
    }
    else if(hChoice === "scissors" && cChoice === "paper") {
        flag = 0;
        results.innerText = `Computer had: ${cChoice.charAt(0).toUpperCase() + cChoice.slice(1)}. You Win!`;
    }
    else if(hChoice === "scissors" && cChoice === "scissors") {
        flag = 2;
        results.innerText = `Computer had: ${cChoice.charAt(0).toUpperCase() + cChoice.slice(1)}. It's a tie!`;
    }

    return flag;
}

function playGame(playerChoice) {
    let random = "";
    let flag = 0;
    if(scoreFlag === 0) {
        random = computerChoice[getComputerChoice()];
        flag = playRound(playerChoice, random);
        if(flag === 0) {
            humanScore++;
            displayUserScore.innerText = `${humanScore}`;
            
        }
        else if(flag == 1) {
            computerScore++;
            displayCPUScore.innerText = `${computerScore}`;
        }
    }
    if(humanScore === 5) {
        scoreFlag = 1;
        results.innerText = `Congrats! You Won!`;
    }
    else if(computerScore === 5) {
        results.innerText = `Sad! Computer Wins!`;
        scoreFlag = 1;
    }
}