let cards = [] // array of cards
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let player= {     // creating an object for player
    name:"Per",
    chips: 145
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name+" : $"+player.chips

let messageEl= document.getElementById("message-el")
console.log(messageEl)

let sumEl=document.getElementById("sum-el")
console.log(sumEl)

let cardsEl = document.querySelector("#cards-el")

function randomCard(){
    // generate random number between 1 and 13
    let randomNumber = Math.floor(Math.random() * 13 )+ 1
    if (randomNumber>10) {
        return 10        
    }
    else if(randomNumber===1){
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame(){
    isAlive=true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame(){
     cardsEl.textContent="Cards: "
    // renders all cards
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent+=cards[i]+" "
    }
    //cardsEl.textContent=cards
    sumEl.textContent="Sum: "+sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent=message
}

function newCard(){
    if ( isAlive === true && hasBlackJack == false ) {
        console.log("Drawing a new card from the deck!");
    let card = randomCard()
    cards.push(card) // pushing the new card in cards array
    sum+=card
    renderGame()
    }
    
}