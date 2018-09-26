const suits = ['gold', 'swords', 'vases', 'pots']
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
let deck = [];
// cards for players, middle
let $player1Cards = [];
let $player2Cards = [];
let $middleCards = [];

//players collected cardS
let $player1Total = 0
let $player2Total = 0

let player1Turn = true;
//card to be selected from hand
let $cardToBeUsed;
//card to be selected from middle
let $cardMatched = []
// player who wins round +1
let $player1Rounds = 0
let $player2Rounds = 0

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
  $checkForWinner();
  // check to see if game has started
  if (deck.length === 40) {
    // generate 3 cards random
    for (let i = 0; i < 3; i++) {
      // 40 cards, values generated 0 - 40
      let cardNum = Math.floor(Math.random() * (deck.length));
      let card = deck[cardNum];
      let $img = $('<img>').attr('id', i)
      $img.attr('src', 'images/' + card + '.png ')
            //appending a img of each CARD to player 1
      $('#1sCards').append($img)
      //console.log(cardNum);




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
      let $img = $('<img>').attr('id', n)
      $img.attr('src', 'images/' + card + '.png ')
            //appending a img of each CARD to player 1
      $('#2sCards').append($img)


      //appending a img of each CARD to player 1
      // $('#2sCards').append('<img src="images/' + card + '.png">')
      // remove card from deck so cannot be used again
      let pusher = deck.splice(cardNum, 1);

      //add removedCard from deck to players hand
      $player2Cards.push(pusher);
      //console.log(deck.length)
    }
      // After the  3 player cards come out need to deal 4 middle cardS
    for (let j = 0; j < 4; j++) {
      let cardNum = Math.floor(Math.random() * (deck.length));
      let card = deck[cardNum];
      let $img = $('<img>').attr('id', j)
      $img.attr('src', 'images/' + card + '.png ')
            //appending a img of each CARD to player 1
      $('.middleCards').append($img)


      // remove card from deck so cannot be used again
      let removedCard = deck.splice(cardNum, 1);
      $middleCards.push(removedCard)
      // console.log(removedCard)
    }

  } else if ($('#1sCards').children().length === 0){
    for (let i = 0; i < 3; i++) {
      // 40 cards, values generated 0 - 40
      let cardNum = Math.floor(Math.random() * (deck.length));
      let card = deck[cardNum];
      let $img = $('<img>').attr('id', i)
      $img.attr('src', 'images/' + card + '.png ')
            //appending a img of each CARD to player 1
      $('#1sCards').append($img)
      // console.log(cardNum);

      // remove card from deck so cannot be used again
      let pusherCard = deck.splice(cardNum, 1);
      // console.log(pusherCard)
      $player1Cards.push(pusherCard);
    }
    for (let n = 0; n < 3; n++) {
      // 40 cards, values generated 0 - 40
      let cardNum = Math.floor(Math.random() * (deck.length));
      let card = deck[cardNum];
      let $img = $('<img>').attr('id', n)
      $img.attr('src', 'images/' + card + '.png ')
            //appending a img of each CARD to player 1
      $('#2sCards').append($img)

      // remove card from deck so cannot be used again
      let pusher = deck.splice(cardNum, 1);

      //add removedCard from deck to players hand
      $player2Cards.push(pusher);
      //console.log(deck.length)
    }
  }

  }// ends deal function






let $sourceString1;
let $cardTarget;
const $selectFirstCard = (event) => {
   $sourceString1 = event.target.src
   $cardTarget = event.target
   // give clicked card a border and enlarge 10% so player knows whats been clicked
   $($cardTarget).css('border', '5px solid red')
   $($cardTarget).css('transform', 'scale(1.1)')
   // $(event.target)
   $cardToBeUsed = parseInt($sourceString1[$sourceString1.length - 5])
   if($cardToBeUsed === 0){
     $cardToBeUsed = 10;
   }
  //console.log($cardToBeUsed)
  // event.target.remove()
}
// middle cards to be used in turn
  let $sourceString2;
  let $cardTarget2 = [];
const $selectSecondCard = (event) => {
  //getting the value from the event targets src
  let $sourceString2 = event.target.src
  let $middleCardToBeUsed = event.target
  //give middle cards the same css effect when clicked as the other cards.
  $($middleCardToBeUsed).css('border', '5px solid red')
  $($cardTarget2).css('transform', 'scale(1.1)')
  $cardTarget2.push(event.target)
   $card = parseInt($sourceString2[$sourceString2.length - 5])
   if($card === 0){
     $card = 10;
   }
   $cardMatched.push($card)
   console.log($cardMatched)
   // event.target.remove();
}

const $submit = (event) => {

  let $sum = 0;
  for(let i = 0; i < $cardMatched.length; i++){
    $sum += $cardMatched[i];

  }
  if($cardToBeUsed === $sum){
    console.log('sum works!')
    //add the cards matched from the middle and your card to your total pile
    if(player1Turn === true){
      // adding the 1(for your own card used) + how ever many are in $cardTarget2
    $player1Total += 1 + $cardMatched.length;
  } else {
    $player2Total += 1 + $cardMatched.length;
  }
    $cardMatched = [];
    $cardToBeUsed = ''
    // console.log($player1TotalCards.length)
    $($cardTarget).remove();
    for(let n = 0; n < $cardTarget2.length; n++){
      $($cardTarget2[n]).remove()
    }

    //update turn
    player1Turn = !player1Turn
// make computer check cards for a match a function?
    // computerTurn();
  } else {
    console.log('huh')
    $cardMatched = [];
    $cardTarget2 = [];
  }


  //update card numbers

  $('.player1Score').children('p').text($player1Total);
  $('.player2Score').children('p').text($player2Total);

}

let $sourceStringP2;
let $cardTargetP2;
let compCardToBeUsed;
const $compMove = (event) => {
   $sourceStringP2 = event.target.src
   $cardTargetP2 = event.target

   $compCardToBeUsed = parseInt($sourceString1[$sourceString1.length - 5])
  //console.log($cardToBeUsed)
  // event.target.remove()

}

// check who won the round, should i end when the deck ends or when it gets low to a certain num?

const $checkForWinner = () => {

    if(deck.length === 0){ // testing purpose use half deck
      if($player1Total > $player2Total){
        alert('player 1 won the round!');
        $player1Rounds += 1
        $('.score1').children('p').text($player1Rounds);
        //need to reset board and redo deck.
        generateDeck();
      } else if ($player2Total > $player1Total){
        alert('player 2 won the round!')
        $player2Rounds +=1
        // update rounds score board
        $('.score2').children('p').text($player2Rounds);
      } else {
        alert("TIE GAME!!")
      }
      //check to see if someone won
      if($player1Rounds === 3){
        alert('player 1 wins the game')
        $player1Rounds = 0
        $player2Rounds = 0
        $('.score1').children('p').text($player1Rounds);
        $('.score2').children('p').text($player2Rounds);
      } else if($player2Rounds === 3){
        alert('player 2 wins the game')
        $player1Rounds = 0
        $player2Rounds = 0
        $('.score1').children('p').text($player1Rounds);
        $('.score2').children('p').text($player2Rounds);
      }
      // remove cards left on table
      $('.middleCards').children().remove();


      // turn round score back too zero
      $player1Total = 0;
      $player2Total = 0;
      //change score board
      $('.player1Score').children('p').text($player1Total);
      $('.player2Score').children('p').text($player2Total);
      //generate new deck amd deal,
      generateDeck();
      $deal();
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
  $('#2sCards').on('click', $selectFirstCard)
  $('#submit').on('click', $submit)

  // drop a card,
  $('#1CardP1').on('click', () => {
    let $dropper = $('#1sCards').children().eq(0);
    $('.middleCards').append($dropper)
    player1Turn = !player1Turn;
  })
  $('#2CardP1').on('click', () => {
    player1Turn = false;

    let $dropper = $('#1sCards').children().eq(1);
    $('.middleCards').append($dropper)

  })
  $('#3CardP1').on('click', () => {
    player1Turn = false;

    let $dropper = $('#1sCards').children().eq(2);
    $('.middleCards').append($dropper)
  })
  // other player drop card
  $('#1CardP2').on('click', () => {
    player1Turn = true;
    let $dropper = $('#2sCards').children().eq(0);
    $('.middleCards').append($dropper)

  })
  $('#2CardP2').on('click', () => {
    player1Turn = true;

    let $dropper = $('#2sCards').children().eq(1);
    $('.middleCards').append($dropper)
  })
  $('#3CardP2').on('click', () => {
    player1Turn = true;
    let $dropper = $('#2sCards').children().eq(2);
    $('.middleCards').append($dropper)

  })

  $('.use_drop').on('click', () => {
    player1Turn = !player1Turn
  })

//reset button will reset everything to original
  $('#reset').on('click', () => {
    location.reload(false)
  })


$checkForWinner();

})
