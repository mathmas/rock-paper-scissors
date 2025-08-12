// variables declarations
const rockString = "rock";
const paperString = "paper";
const scissorsString = "scissors";

let userScore = 0;
let computerScore = 0;

playRound(getComputerChoice(), getUserChoice());

//  functions declarations

function playRound(computerChoice, userChoice){
    userChoice = userChoice.toLowerCase();
    console.log(userChoice);
    console.log(computerChoice);


    if(userChoice === computerChoice){    // Draw
        console.log("It's a draw, no point.");
    } else if(     // User Lose
        (userChoice === rockString && computerChoice === paperString) ||
        (userChoice === paperString && computerChoice === scissorsString) ||
        (userChoice === scissorsString && computerChoice === rockString)
    ){
        console.log(`You lose! ${computerChoice} beats ${userChoice}.`);
        computerScore++;
    } else {    // User Win
        console.log(`You win! ${userChoice} beats ${computerChoice}.`);
        userScore++;
    }
}

function getComputerChoice(){
    switch (Math.floor(Math.random()*3)) {
        case 0:
            return rockString;
        case 1:
            return paperString;
        case 2:
            return scissorsString;
        default:
            return "Error!";
    }
}

function getUserChoice(){
    return prompt(`${rockString}, ${paperString} or ${scissorsString} ?`, rockString);
}