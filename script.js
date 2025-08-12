console.log(getComputerChoice());
console.log(getUserChoice());

function getComputerChoice(){
    switch (Math.floor(Math.random()*3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "Error!";
    }
}

function getUserChoice(){
    return prompt("rock, paper or scissors ?", "rock");
}