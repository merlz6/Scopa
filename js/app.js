const suits = ['gold', 'swords', 'vases', 'pots' ]
const numbers = ['1','2','3','4', '5', '6', '7', '8', '9', '10']
let player1Cards = [];
let player2Cards = [];
let deck = [];

// generate deck makes an array of cards 
const generateDeck = () => {
  for(let element of suits){
    for(let num of numbers){
      deck.push(numbers[num] + ' of ' + element)
    }
  }
  console.log(deck)
}


$(() => {

  generateDeck();


})
