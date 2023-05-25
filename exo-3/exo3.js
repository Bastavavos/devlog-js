// you can write js here
console.log('exo-3');

var playerInput = prompt("Your choice (rock, paper, scissor) ?")

function getPlayerChoice(playerInput) {
    playerInput = playerInput.toLowerCase()
    if (playerInput == "rock" || playerInput == "paper" || playerInput == "scissor" || playerInput == "attaque mortelle"){
        return playerInput
    } else {
        console.log("erreur, selectionner rock, paper ou scissor")
    }
}

let resultPlayer = getPlayerChoice(playerInput)
console.log (resultPlayer)

function getComputerChoice() {
    let random = Math.floor(Math.random()*3)
    if (random == 0){
        console.log("rock")
        return "rock"
    }
    
    if (random == 1) {
        console.log("paper")
        return "paper"
    }
    
    if (random == 2) {
        console.log("scissor")
        return "scissor"
    }
}

//console.log (getComputerChoice())
let resultComputer = getComputerChoice() 

//console.log(getComputerChoice())


function findWinner(playerChoice,computerChoice) {
    if(playerChoice==computerChoice) {
        console.log("Tied")
    }
    if(playerChoice=="rock") {
        if(computerChoice=="scissor") {
        console.log("Won")   
    }else{
        console.log("Lost")
    }
}
    if(playerChoice=="paper") {
        if(computerChoice=="rock") {
        console.log("Won")
        }else{
        console.log("Lost")
    }
}
    if(playerChoice=="scissor") {
        if(computerChoice=="paper") {
        console.log("Won" )   
    }else{
        console.log("Lost")
    }
}
    if (playerChoice == "attaque mortelle"){
        console.log("Won" )  
     }
}


//console.log(findWinner(playerChoice,computerChoice))

findWinner(resultPlayer,resultComputer)

function playGame() {
   let uChoice = getPlayerChoice(playerInput)
   let computerChoice = getComputerChoice()
   console.log(findWinner(uChoice,computerChoice))
}
