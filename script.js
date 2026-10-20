function getComputerChoice(){
    let rnd = Math.random() * 3;

    if (rnd < 1){
        return "rock"
    }
    if (rnd < 2){
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice(){
    return prompt("Enter your Choice: (\"rock\" \"paper\" \"scissors\")")
}

function playRound(humanChoice, computerChoice){
    humanChoice.toLowerCase()

    if(humanChoice === computerChoice){
        console.log("Draw!")
    }else if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"
    ) {
        console.log("You loose!")
        computerScore++
    }else if(computerChoice === "rock" && humanChoice === "paper" ||
        computerChoice === "paper" && humanChoice === "scissors" ||
        computerChoice === "scissors" && humanChoice === "rock"
    ) {
        console.log("You Won!")
        humanScore++
    }
}

function playGame(){
    for (let index = 0; index < 5; index++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    console.log("Final score is: " + humanScore + " vs " + computerScore)
}

let humanScore = 0
let computerScore = 0

playGame()