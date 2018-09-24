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
let cardMatched = []
let player1RoundPoints = 0
let player2RoundPoints = 0
let player1GamePoints = 0
let player2GamePoints = 0
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

if (player1GamePoints < 11 || player2GamePoints < 11) {

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
  if (player1Turn === true) {

    const $selectFirstCard = (event) => {
      let $sourceString = event.target.src

      $cardToBeUsed = parseInt($sourceString[$sourceString.length - 5])
      console.log($cardToBeUsed)
      event.target.remove()
    }

    const $selectSecondCard = (event) => {
      let $sourceString = event.target.src
      $card = parseInt($sourceString[$sourceString.length - 5])
      $cardMatched.push($card)
      console.log($cardMatched)
      event.target.remove();
    }
    const $submit = (event) => {
      let $sum = 0;
      for (let i = 0; i < $cardMatched.length; i++) {
        $sum += $cardMatched[i];
      }
      if ($cardToBeUsed === $sum) {
        console.log('sum works!')
        //add the cards matched from the middle and your card to your total pile
        $player1TotalCards += $cardMatched.length + 1;
        $cardMatched = [];
        player1Turn = !player1Turn
        console.log($player1TotalCards)
      } else {
        console.log('huh')
      }
    }
  }


}









var $card1;
var $card1Number;
const $select1 = (event) => {
  // enlarge and border selectable cards for player(*middle)
  $('.middleCards').children().css('border', '2px solid red');
  $('.middleCards').children().css('transform', 'scale(1.15)');


  var $card1 = $player1Cards[0].toString()
  var $card1Number = parseInt($card1[$card1.length - 1])
  $cardToBeUsed = $card1number
  console.log($card1Number)

}

var $card2;
var $card2Number;
const $select2 = (event) => {
  // enlarge and border selectable cards for player(*middle)
  $('.middleCards').children().css('border', '2px solid red');
  $('.middleCards').children().css('transform', 'scale(1.15)');

  // stores string card in var, then takes the number off the end,
  $card2 = $player1Cards[1].toString()
  $card2Number = parseInt($card2[$card2.length - 1])
  $cardToBeUsed = $card2Number
  console.log($card2Number)

}
var $card3;
var $card3Number;
const $select3 = (event) => {
  // enlarge and border selectable cards for player(*middle)
  $('.middleCards').children().css('border', '2px solid red');
  $('.middleCards').children().css('transform', 'scale(1.15)');

  // stores string card in var, then takes the number off the end,
  $card3 = $player1Cards[2].toString()
  $card3Number = parseInt($card3[$card3.length - 1])
  $cardToBeUsed = $card3Number
  console.log($card3Number)

}

const selector = (event) => {
  let $sourceString = event.target.src
  let $last5 = parseInt($sourceString[$sourceString.length - 5])
  console.log($last5)
  cardMatched.push($last5);
}

const $checkIfMatch = (event) => {

  if (Number($last5) === Number($cardToBeUsed)) {
    $player1TotalCards.push($last5);
    $player1TotalCards.push($cardToBeUsed)
    console.log($player1TotalCards.length)
  } else {
    alert('non match selected')
  }
}


// Select cards button will push the selected card into a player array (ex. i have a five, i click it, then the 5 on the board they are put into array and checked if theyre sums (can be 2 + 3 cards = 5))
// when selected maybe enlarge or highlight so player knows there selected
//submit button takes or puts down card

// function sumbit (){
//   if($card1Number || $card2Number |)
// }


$(() => {

  // start by creating a deck
  generateDeck();


  //deal button click will deal three cards to each player, and remove the card from the deck
  $('#dealCards').on('click', $deal)
  // $('#cardSelector').on('click', $select)

  $('#1CardP1').on('click', $select1)
  $('#2CardP1').on('click', $select2)
  $('#3CardP1').on('click', $select3)
  $('.middleCards').on('click', $checkIfMatch)
})
