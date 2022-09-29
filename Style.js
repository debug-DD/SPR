// set variables 
let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

//disable button function
function disableButtons(){
    buttons.forEach(elem => {
        elem.disabled=true
    })
}


// randomly generate computer selection
function computerGuess() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}
// get player input
function playRound(playerSelection){
    let ComputerSelection = computerGuess()
    let result = ''

    if ((playerSelection == 'rock' && ComputerSelection == 'scissors') ||
        (playerSelection == 'scissors' && ComputerSelection == 'paper') ||
        (playerSelection == 'paper' && ComputerSelection == 'rock')) {

        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + ComputerSelection 
        + "<br><br> Player Score: " + playerScore + "<br>Computer score:" + computerScore)

        if (playerScore == 5) {
                result += '<br><br> You won the game! Reload the page to play again'
                disableButtons()
            }
        }
    else if (playerSelection == ComputerSelection){
        result = ('Its a tie. You both chose ' + playerSelection
            + "<br><br> Player Score: " + playerScore + "<br>Computer score:" + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + ComputerSelection + ' beats ' + playerSelection
            + "<br><br> Player Score: " + playerScore + "<br>Computer score:" + computerScore)

        if (computerScore == 5) {
            result += '<br><br> Computer wins the game! Reload to play again'
            disableButtons()
        }
    }
    document.getElementById('result').innerHTML = result
    return
}
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
