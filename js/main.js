// sync check
console.log("Linked");

/*----- constants -----*/
const game = {
    playerHand: [],
}

const fullDeck = {

}

/*----- app's state (variables) -----*/

let playerWon;
let playerTie;
let playerStart;
let playerReset;

/*----- cached element references -----*/

let $innerBox = $('.innerBox');
let $buttons = $('.buttons');
let $playbutton = $('#playButton');
let $resetbutton = $('#resetButton');

/*----- event listeners -----*/

$innerBox.on('click', handleClick)


/*----- functions -----*/

function render() {
    // render all states of app to DOM
    // no business/game logic
    // display win, tie, or lose message
}

function handleClick(evt) {
    console.log(evt);
    // render();
}

// function init() {
// render();
// }

// function checkForWin()

// function genRandomHand

// function bet
// function hit
// function stand
// function generating next turn