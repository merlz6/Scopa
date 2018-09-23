const suits = ['gold', 'swords', 'vases', 'pots']
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
let player1Cards = [];
let player2Cards = [];
let deck = [];

let player1Turn = true;






// generate deck makes an array of cards
const generateDeck = () => {
  // for each suit
  for (let i = 0; i < suits.length; i++) {
    //for each number
    for (let n = 0; n < numbers.length; n++) {
      // push that card to deck
      deck.push(suits[i] + '_' + numbers[n])
    }
  }
  console.log(deck)
}


const $deal = () => {
  // check to see if game has started
  if (deck.length === 40) {
    // generate 3 cards random
    for (let i = 0; i < 3; i++) {
      // 40 cards, values generated 0 - 40
      let cardNum = Math.floor(Math.random() * (deck.length));
      let card = deck[cardNum];
      console.log(cardNum);

      //appending a img of each CARD to player 1
      $('#1sCards').append('<img src="images/' + card + '.png">')
      // remove card from deck so cannot be used again
      deck.splice((deck[cardNum] - 1), 1);
      console.log(deck)
    }
    // Now deal player 2
    for (let n = 0; n < 3; n++) {
      // 40 cards, values generated 0 - 40
      let cardNum = Math.floor(Math.random() * (deck.length));
      let card = deck[cardNum];
      //appending a img of each CARD to player 1
      $('#2sCards').append('<img src="images/' + card + '.png">')
      // remove card from deck so cannot be used again
      deck.splice((deck[cardNum] - 1), 1);

    }
  }
    // After the  3 player cards come out need to deal 4 middle cardS

    for(let j = 0; j < 4; j++){
      let cardNum = Math.floor(Math.random() * (deck.length));
      let card = deck[cardNum];
      $('.middleCards').append('<img src="images/' + card + '.png">')
      // remove card from deck so cannot be used again
      deck.splice((deck[cardNum] - 1), 1);
    }



}




$(() => {
  // start by creating a deck
  generateDeck();
  //deal button click will deal three cards to each player, and remove the card from the deck
  $('#dealCards').on('click', $deal)
})
