const container = document.getElementById("container");
const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissorcs_button = document.getElementById("scissors");
const paragraph = document.querySelector("p");

container.addEventListener("click", (e) => {
    console.log("Container clicked, target: " + e.target);

    switch (e.target) {
        case rock_button:
            console.log(rock_button.id);
            playRound(rock_button.id, getComputerChoice());
            break;
        case paper_button:
            playRound(paper_button.id, getComputerChoice());
            break;
        case scissorcs_button:
            playRound(scissorcs_button.id, getComputerChoice());
            break;
        default:
            break;
    }
})

function getComputerChoice() {
    let rnd = Math.random() * 3;

    if (rnd < 1) {
        return "rock"
    }
    if (rnd < 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

/*
function getHumanChoice() {
    return prompt("Enter your Choice: (\"rock\" \"paper\" \"scissors\")")
}
*/

function playRound(humanChoice, computerChoice) {
    humanChoice.toLowerCase()

    if (humanChoice === computerChoice) {
        paragraph.textContent = "Draw!";
    } else if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"
    ) {
        paragraph.textContent = "You loose!"
        computerScore++
    } else if (computerChoice === "rock" && humanChoice === "paper" ||
        computerChoice === "paper" && humanChoice === "scissors" ||
        computerChoice === "scissors" && humanChoice === "rock"
    ) {
        paragraph.textContent = "You Won!"
        humanScore++
    }
    paragraph.textContent += " You have: " + humanScore + " computer has: " + computerScore;
}

let humanScore = 0
let computerScore = 0

