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

Code walk-through:

// Each card will be stored in an object called fullDeck separated by suits and values

// The fullDeck array will be looped through with a forEach method, and at random with the Math function

// The DOM will be manipulated with methods like textContent and append() so that the fullDeck array will deal the cards to all users once the user clicks the “Play” button, which will be attached to an event listener.

// The DOM will continue to generate new cards to the user, or stop based on the user’s selection of “Hit” or “Stay”.

// The “Reset” button will be attached to an event listener that will clear all locally stored data and start the game over if clicked.
Wireframe Link:
 https://balsamiq.cloud/sf4ytat/pn3zgy1

