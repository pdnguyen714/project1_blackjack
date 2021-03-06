/* ===== constants ===== */
const dealer = "Dealer";
const player = "You";
const tie = "tie";

/* ===== app states (mutables) ===== */
let playerHand = [];
let dealerHand = [];
let isWinner = null;
let pScore = 0;
let dScore = 0;

/* ===== functions ===== */

// retrieve and append user's name into DOM
function getName() {
  let input = prompt('Welcome to House of Blackjack! What is your name friend?');
  if (input === null || input === '') return; //break out of the function early
  document.getElementById('person').innerHTML = input; 
};

getName();

// closes rules modal
let $getRules = $('.rules');
let $closeX = $('#closeRules');

$('#closeRules').on('click', function() {
  $('.rules').hide();
})

//Fisher-Yate's Shuffle algorithm
function shuffle(deck) {
  let i, j = 0,

  temp = null;
  for (i = deck.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}

// begins the initial state of game
function startGame() {
  hideResetBtn();
  initialHand();
  calculateScore(dealerHand);
  calculateScore(playerHand);
  render();
}

startGame();

//distributes 2 cards to the dealer and player at the start
function initialHand() {
  shuffle(deck);

  for (let i = 0; i < 2; i++) {
    playerHand.push(deck.pop());
    dealerHand.push(deck.pop());
  }

  document.getElementById("player-score").innerHTML = "Score: " + calculateScore(playerHand);

  // only renders score for face up card
  document.getElementById("dealer-score").innerHTML = "Score: " + dealerHand[0].value;

  dScore = dealerHand[0].value;

  return playerHand, dealerHand;
}

//calculates the score
function calculateScore(hand) {
  let score = 0;
  let aces = 0;

  hand.forEach(function(card) {
    score += card.value;
    if (card.value === 11) {
      aces++;
    }
  });
  while (score > 21 && aces) {
    score -= 10;
    aces--;
  }
  return score;
}

//adds a card to the player's hand
function hit() {
  playerHand.push(deck.pop());
  pScore = calculateScore(playerHand);
  dScore = calculateScore(dealerHand);

  document.getElementById('player-score').innerHTML = "Score: " + pScore;

  if (pScore > 21) {
    isWinner = dealer;
    checkForWinner()
  }
  render();
}

//ends turn and keeps hand
function stay() {
  dScore = calculateScore(dealerHand);
  pScore = calculateScore(playerHand);

  while (dScore < 17 && !isWinner) {
    dealerHand.push(deck.pop());
    dScore = calculateScore(dealerHand);
  }
  if (dScore > 21) {
    isWinner = player;
  } else if (dScore > pScore) {
    isWinner = dealer;
  } else if (dScore < pScore) {
    isWinner = player;
  } else if (dScore === pScore) {
    isWinner = tie;
  }
  checkForWinner();
  render();
}

//renders cards to browser
function render() {
  document.getElementById("dealer-hand").innerHTML = "";
  dealerHand.forEach((card, idx) => {
    let dealerCards = `<div class="card ${
      idx === 1 && !isWinner ? "back" : card.face
    }"></div>`;
    document.getElementById("dealer-hand").innerHTML += dealerCards;
  });
  document.getElementById("player-hand").innerHTML = "";
  playerHand.forEach(card => {
    let playerCards = `<div class="card ${card.face}"></div>`;
    document.getElementById("player-hand").innerHTML += playerCards;
  });
}

// checks for winner
function checkForWinner() {
  if (isWinner !== null) {
    if (isWinner === player) {
      document.getElementById('dealer-score').innerHTML = "Score: " + dScore;
      document.getElementById("winner").innerHTML = "You won! Double or nothing?";
    } else if (isWinner === dealer) {
      document.getElementById('dealer-score').innerHTML = "Score: " + dScore;
      document.getElementById("winner").innerHTML = "You lost. Better luck next time!";
    } else if (isWinner === tie) {
      document.getElementById('dealer-score').innerHTML = "Score: " + dScore;
      document.getElementById("winner").innerHTML = "You tied. Go for broke!";
    }
  } 
  document.getElementById("player-score").innerHTML = "Score: " + pScore;
  hide();
  showResetBtn();
}

//hide buttons when there is a winner
function hide() {
  $('#hit').hide();
  $('#stay').hide();
}

// hides reset button when there is no winner
function hideResetBtn() {
  $('#reset').hide()
}

// shows reset button when there is a winner
function showResetBtn() {
  $('#reset').show()
}

//show hit & stay buttons when player resets
function showBtns() {
  $('#hit').show();
  $('#stay').show();
}

//clears scores of previous game
function clearScores() {
  document.getElementById("dealer-score").innerHTML = "Score: ";
  document.getElementById("player-score").innerHTML = "Score: ";
}

/* ===== event listeners ===== */
$('.rules').hide();
let $toggleRules = $('#rulesBtn').on('click', function(e) {
  $('.rules').fadeToggle('slow', "linear");
})

let $hitButton = $('#hit').on('click', function(e) {
  hit();
})

let $stayButton = $('#stay').on('click', function(e){
  stay();
})

let resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function(e) {
  document.getElementById("winner").innerHTML = " ";
  clearScores();
  playerHand = [];
  dealerHand = [];
  isWinner = null;
  startGame();
  showBtns();
});