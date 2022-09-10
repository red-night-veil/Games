const cards= [
    {
        name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        img: "images/milkshake.png"
    },
    {
        name: "pizza",
        img: "images/pizza.png"
    },
    {
        name: "white",
        img: "images/white.png"
    },
    {
        name: "blank",
        img: "images/blank.png"
    }, 
        {name: "fries",
        img: "images/fries.png"
    },
    {
        name: "cheeseburger",
        img: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        img: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        img: "images/ice-cream.png"
    }
]

cards.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

const cardsChosen = []
const cardsChosenIds =[]

function createBoard() {
    for(let i = 0; i < cards.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const selectedCards = document.querySelectorAll('#grid img')
    console.log(selectedCards)
    console.log('Check for Match!')
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        selectedCards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
        selectedCards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
        selectedCards[cardsChosenIds[0]].removeEventListener('click',flipCard)
        selectedCards[cardsChosenIds[1]].removeEventListener('click',flipCard)
    }
}
function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cards[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cards[cardId].img)

    if(cardsChosen.length === 2) {
        setTimeout (checkMatch, 500)
    }
}


