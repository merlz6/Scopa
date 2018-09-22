const suits = ['gold', 'swords', 'vases', 'pots' ]
const numbers = ['1','2','3','4', '5', '6', '7', '8', '9', '10']
let player1Cards = [];
let player2Cards = [];
let deck = [];







// generate deck makes an array of cards
const generateDeck = () => {
  // for each suit
  for(let i = 0; i < suits.length; i++){
    //for each number
    for(let n = 0; n < numbers.length; n++){
      // push that card to deck
      deck.push(numbers[n] + ' of ' + suits[i])
    }
  }
  console.log(deck)
}


const $deal = () => {
  // generate 3 cards random
  for(let i = 0; i < 3; i++){
  let card = Math.floor(Math.random() * 41);
  // remove card from deck so cannot be used again
  deck.splice(deck[card], 1);
  console.log(deck.length)
}
}




$(() => {

  generateDeck();
  $deal();

})
