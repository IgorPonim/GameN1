document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'belka',
            img: 'images/belka.png'
        },
        {
            name: 'belka',
            img: 'images/belka.png'
        },
        {
            name: 'chicken',
            img: 'images/chicken.png'
        },
        {
            name: 'chicken',
            img: 'images/chicken.png'
        },
        {
            name: 'dog',
            img: 'images/dog-looking.png'
        },
        {
            name: 'dog',
            img: 'images/dog-looking.png'
        },
        {
            name: 'larie',
            img: 'images/larie.png'
        },
        {
            name: 'larie',
            img: 'images/larie.png'
        },
        {
            name: 'racoon',
            img: 'images/racoon.png'
        },
        {
            name: 'racoon',
            img: 'images/racoon.png'
        },
        {
            name: 'strawb',
            img: 'images/strawb.png'
        },
        {
            name: 'strawb',
            img: 'images/strawb.png'
        },
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'avocado',
            img: 'images/avocado.png'
        },
        {
            name: 'avocado',
            img: 'images/avocado.png'
        },


    ]
    cardArray.sort(() => 0.7 - Math.random())
    const grid = document.querySelector('.grid')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    let resultDisplay = document.querySelector('.result')

    //creating dom elements
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/white-king.png');
            card.classList.add('Images');
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)

        }
    }

    createBoard()


    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 700)
        }
    }


    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        let optionOneId = cardsChosenId[0]
        let optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            cardsWon.push(cardsChosen)
            cards[optionOneId].setAttribute('src', 'images/whites.png')
            cards[optionTwoId].setAttribute('src', 'images/whites.png')
            
        } else {
            
            cards[optionOneId].setAttribute('src', 'images/white-king.png')
            cards[optionTwoId].setAttribute('src', 'images/white-king.png')
           
           
        }
        
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === 8) {
            alert("Молодец! ты умница!")
            window.location.reload()
        }
        
    }


    
})