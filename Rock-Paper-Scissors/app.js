const computerDisplay = document.getElementById('computer-choice')
const userDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button') // gets all buttons change to class when sytling
let userChoice
let computerChoice
let result

// for each grabs all buttons and gets the choice thats been clicked, want to pass through event (e) and stores choice to user display by id
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

// get random number times*3 or possiblechoice.length - math floor rounds down to get a full integer; no decimals 
function generateComputerChoice (){
    const randomNumber = Math.floor(Math.random() *3) +1 // add 1 for readability since index starts at 0 
    
    if ( randomNumber === 1){
        computerChoice = 'rock'
    }
    if ( randomNumber === 2){
        computerChoice = 'paper'
    }
    if ( randomNumber === 3){
        computerChoice = 'scissors'
    }
    computerDisplay.innerHTML = computerChoice
}

//very beginner friendly and easy to read but can be less lines of code

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "You WIN"
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "You Lost"
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "You WIN"
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "You Lost"
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "You Lost"
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "You WIN"
    }
    resultDisplay.innerHTML = result
}
    