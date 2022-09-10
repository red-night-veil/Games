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
    }
]

cards.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

const cardsChosen = []

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

function flipCard() {
    console.log(cards)
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cards[cardId].name)
    console.log('clicked',cardId)
    console.log(cardsChosen)
    this.setAttribute('src', cards[cardId].img)
}


