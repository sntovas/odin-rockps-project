let humanChoice = ["rock", "paper", "scissors"];
let computerChoice = ["rock", "paper", "scissors"];





console.log(humanChoice, computerChoice);

/* while(true) {
    if(humanChoice === NaN || humanChoice !== 0 || humanChoice!== 1 || humanChoice !== 2) {
        humanChoice = parseInt(prompt("You must enter a valid number(0, 1, or 2). Rock(0), Paper(1), Scissors(2)"));
    }
    break;
} */

playGame();

function getHumanChoice() {
    return prompt("Rock(0), Paper(1), Scissors(2)").toLowerCase();
}

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function playRound(hChoice, cChoice) {
    let flag = 0;

    if(hChoice === "rock" && cChoice === "rock") {
        flag = 2;
        console.log("Tie!");
    }
    else if(hChoice === "rock" && cChoice === "paper") {
        flag = 1;
        console.log("Computer had ", cChoice, ", Computer wins.");
    }
    else if(hChoice === "rock" && cChoice === "scissors") {
        flag = 0;
        console.log("Computer had ", cChoice, ", Human wins.");
    }
    else if(hChoice === "paper" && cChoice === "rock") {
        flag = 0;
        console.log("Computer had ", cChoice, ", Human wins.");
    }
    else if(hChoice === "paper" && cChoice === "paper") {
        flag = 2;
        console.log("Tie!");
    }
    else if(hChoice === "paper" && cChoice === "scissors") {
        flag = 1;
        console.log("Computer had ", cChoice, ", Computer wins.");
    }
    else if(hChoice === "scissors" && cChoice === "rock") {
        flag = 1;
        console.log("Computer had ", cChoice, ", Computer wins.");
    }
    else if(hChoice === "scissors" && cChoice === "paper") {
        flag = 0;
        console.log("Computer had ", cChoice, ", Human wins.");
    }
    else if(hChoice === "scissors" && cChoice === "scissors") {
        flag = 2;
        console.log("Tie!");
    }

    return flag;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let playerChoice = "";
    let random = "";
    let flag = 0;
    for(let i = 0; i < 5; i++) {
        playerChoice = getHumanChoice();
        while(true) {
            if(playerChoice === humanChoice[0] || playerChoice === humanChoice[1] || playerChoice === humanChoice[2]) {               
                break;
            }
            alert("Please input a valid option.");
            playerChoice = getHumanChoice();
        }
        random = computerChoice[getComputerChoice()];
        console.log(humanChoice, computerChoice);
        flag = playRound(playerChoice, random);
        if(flag === 0) {
            humanScore++;
            console.log("Score: ", humanScore, " - ", computerScore);
        }
        else if(flag == 1) {
            computerScore++;
            console.log("Score: ", humanScore, " - ", computerScore);
        }
        else {
            humanScore++;
            computerScore++;
            console.log("Score: ", humanScore, " - ", computerScore);
        }
    }
}