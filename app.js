const rockBtn = document.querySelector("#rock")
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")
const playerPoints = document.querySelector("#playerPoints")
const computerPoints = document.querySelector("#computerPoints")
const round = document.querySelector("#round")
const result = document.querySelector("#result")
const playerMove = document.querySelector("#playerMove")
const computerMove = document.querySelector("#computerMove")

let playerWin = 0
let computerWin = 0
let startRound = 0

function computerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log("Compuer choice:", computerChoice)
    computerMove.textContent = computerChoice
    return computerChoice}

function playGame(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
        alert("It's tie")
        startRound++
        round.textContent = startRound
    }
    else if((playerSelection == "rock" && computerSelection == "scissors")
    || (playerSelection == "paper" && computerSelection == "rock")
    || (playerSelection == "scissors" && computerSelection == "paper")){
        alert("Player win")
        playerWin++
        startRound++
        playerPoints.textContent = playerWin
        round.textContent = startRound
    }
    else{
        alert("Computer win")
        computerWin++
        startRound++
        computerPoints.textContent = computerWin
        round.textContent = startRound
    }
}
function gameOver(reset){
    const resultShow = document.querySelector("#winnerText")
    result.removeChild(resultShow)
    startRound = reset
    playerWin = reset
    computerWin = reset
    round.textContent = startRound
    playerPoints.textContent = playerWin
    computerPoints.textContent = computerWin
}

function showWiner(winer){
    const winners = "Game end by " + winer +"!"
    const resultShow = document.createElement("span")
    result.appendChild(resultShow)
    resultShow.setAttribute("id", "winnerText")
    resultShow.textContent = winners
   //resultShow.textContent = "Game end by tie!"
}
function game(playerSelection, computerSelection){
    playGame(playerSelection, computerSelection)
    if (startRound == 5){
        if (playerWin == computerWin){
            showWiner("tie")
        }
        else if(playerWin > computerWin){
            showWiner("player win")
        }
        else{
            showWiner("computer win")
        }
    }
    else if (startRound > 5){
        gameOver(0)
    }
}
    
rockBtn.addEventListener("click", () => {
    game("rock", computerChoice())
    playerMove.textContent = "rock"
})
paperBtn.addEventListener("click", () => {
    game("paper", computerChoice())
    playerMove.textContent = "paper"
   
})
scissorsBtn.addEventListener("click", () => {
    game("scissors", computerChoice())
    playerMove.textContent = "scissors"
})
