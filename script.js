// variables declarations
const ROCK_STRING = "rock";
const PAPER_STRING = "paper";
const SCISSORS_STRING = "scissors";
 
let userScore = 0; 
let computerScore = 0; 


const container = document.querySelector(".container");
const score = document.getElementById("score");
const paraComputerChoice = document.getElementById("game-action")

container.addEventListener("click", function(e){
    const computChoice = getComputerChoice();
    const userChoice = getUserChoice(e.target)
    playRound(computChoice, userChoice)

    score.textContent = `Score: ${userScore} : ${computerScore}`;
    paraComputerChoice.textContent = `The computer made: ${computChoice}, and you made ${userChoice}`;

    if(userScore >= 5) {
        console.log(`You win! ${userScore} : ${computerScore}`);
        container.style.display = "none";
    }
    if(computerScore >= 5) {
        console.log(`You lose! ${userScore} : ${computerScore}`)
        container.style.display = "none";
    }

    }
)

//  functions declarations

function playRound(computerChoice, userChoice){
    userChoice = userChoice.toLowerCase();
    console.log(userChoice);
    console.log(computerChoice);


    if(userChoice === computerChoice){    // Draw
        console.log("It's a draw, no point.");
    } else if(     // User Lose
        (userChoice === ROCK_STRING && computerChoice === PAPER_STRING) ||
        (userChoice === PAPER_STRING && computerChoice === SCISSORS_STRING) ||
        (userChoice === SCISSORS_STRING && computerChoice === ROCK_STRING)
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
            return ROCK_STRING;
        case 1:
            return PAPER_STRING;
        case 2:
            return SCISSORS_STRING;
        default:
            return "Error!";
    }
}

function getUserChoice(div){
    return div.id;
}