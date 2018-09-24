const suits = ['gold', 'swords', 'vases', 'pots']
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
let deck = [];
// cards for players, middle
let $player1Cards = [];
let $player2Cards = [];
let $middleCards = [];

//players collected cardS
let $player1TotalCards = []


let player1Turn = true;
//card to be selected from hand
let $cardToBeUsed;
//card to be selected from middle
let $cardMatched = []
let player1RoundPoints = 0
let player2RoundPoints = 0

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
      let pusherCard = deck.splice(cardNum, 1);
      // console.log(pusherCard)
      $player1Cards.push(pusherCard);
    }
    // Now deal player 2
    for (let n = 0; n < 3; n++) {
      // 40 cards, values generated 0 - 40
      let cardNum = Math.floor(Math.random() * (deck.length));
      let card = deck[cardNum];



      //appending a img of each CARD to player 1
      $('#2sCards').append('<img src="images/' + card + '.png">')
      // remove card from deck so cannot be used again
      let pusher = deck.splice(cardNum, 1);

      //add removedCard from deck to players hand
      $player2Cards.push(pusher);
      console.log(deck.length)
    }
  }
  // After the  3 player cards come out need to deal 4 middle cardS

  for (let j = 0; j < 4; j++) {
    let cardNum = Math.floor(Math.random() * (deck.length));
    let card = deck[cardNum];
    let $divR = $('<div>')
    $divR.append('<img src="images/' + card + '.png">')
    $('.middleCards').append($divR);

    // remove card from deck so cannot be used again
    let removedCard = deck.splice(cardNum, 1);
    $middleCards.push(removedCard)
    // console.log(removedCard)
  }

} // ends deal function


const $selectFirstCard = (event) => {
  let $sourceString = event.target.src
   $cardToBeUsed = parseInt($sourceString[$sourceString.length - 5])
  console.log($cardToBeUsed)
}

const $selectSecondCard = (event) => {
  let $sourceString = event.target.src
   $card = parseInt($sourceString[$sourceString.length - 5])
   $cardMatched.push($card)
   console.log($cardMatched)
}

const $submit = (event) => {
  let $sum = 0;
  for(let i = 0; i < $cardMatched.length; i++){
    $sum += $cardMatched[i];
  }
  if($cardToBeUsed === $sum){
    console.log('sum works!')
  } else {
    console.log('huh')
  }
}

$(() => {

  // start by creating a deck
  generateDeck();


  //deal button click will deal three cards to each player, and remove the card from the deck
  $('#dealCards').on('click', $deal)
  // $('#cardSelector').on('click', $select)

  $('#1sCards').on('click', $selectFirstCard)

  $('.middleCards').on('click', $selectSecondCard)
  $('#submit').on('click', $submit)
})
