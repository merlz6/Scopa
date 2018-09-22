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
      deck.push(suits[i] + '_' + numbers[n])
    }
  }
  console.log(deck)
}


const $deal = () => {
  // generate 3 cards random
  for(let i = 0; i < 3; i++){
    // 40 cards, values generated 0 - 40
  let cardNum = Math.floor(Math.random() * (deck.length + 1));
  let card = deck[cardNum];
  //appending a img of each CARD to player 1
  $('#1sCards').append('<img src="images/' + card + '.png">' )
  // remove card from deck so cannot be used again
  deck.splice(deck[cardNum], 1);
  console.log(deck.length)
}
}




$(() => {

  generateDeck();
  $deal();

})
