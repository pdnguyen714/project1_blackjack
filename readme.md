Peter Nguyen - Project 1
Game: Blackjack
Pseudocode:

// Welcome to Peter’s House of Blackjack

=========================================
Rules of the Game:
=========================================

// The user selects the Play button to begin the game, and Reset to start the game over.

// The goal of the game is to reach, or get as close to as possible to 21. Users can “Hit” or “Stay” depending on the user’s hand to defeat the dealer or “House”.

// All face cards (K, Q, J,) are worth ten with the exception of the “Ace” (A), which can be used as eleven, ten or one. The other numbers are as seen.

// Enjoy your stay and may you draw well!

=========================================
Code walk-through:
=========================================

// Store all data that will not change in constants section (# of players & win states)

// Store app's state variables (things app needs to remember)

// When player hits "Play" button render() function will initialize all state variables

// Once initialized game begins with fresh slate

// When game begins deck will deal two cards to each player

// A card will be pushed to userHand everytime player clicks "Hit"

// playersArr will move to next player when user clicks "Stay"

// The DOM will continue to generate new cards to the user, or stop based on the user’s selection of “Hit” or “Stay”.

// The “Reset” button will be attached to an event listener that will clear all locally stored data and start the game over if clicked.

Wireframe Link:
 https://balsamiq.cloud/sf4ytat/pn3zgy1
