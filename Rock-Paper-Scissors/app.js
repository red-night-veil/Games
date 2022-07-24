const computerDisplay = document.getElementById('computer-choice')
const userDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button') // gets all buttons change to class when sytling
let userChoice

// for each grabs all buttons and gets the choice thats been clicked, want to pass through event (e) and stores choice to user display by id
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userDisplay.innerHTML = userChoice
}))