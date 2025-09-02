// variables declarations
const ROCK_STRING = "rock";
const PAPER_STRING = "paper";
const SCISSORS_STRING = "scissors";

//playGame();

const container = document.querySelector(".container");
container.addEventListener("click", (e) => console.log(getUserChoice(e.target)))
//  functions declarations

function playGame(){
    // variables declarations
    let userScore = 0;
    let computerScore = 0;

    // Main

    playRound(getComputerChoice(), getUserChoice());   
    
    if(userScore > computerScore) {console.log(`You win! ${userScore} : ${computerScore}`);}
    else if(userScore < computerScore) {console.log(`You lose! ${userScore} : ${computerScore}`);}
    else {console.log(`It's a draw! ${userScore} : ${computerScore}`)}

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