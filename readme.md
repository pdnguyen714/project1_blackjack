=========================================
Welcome to House of Blackjack:
=========================================

Name: Peter Nguyen 

Purpose: Project 1 for GA's SEI-71

Game: Blackjack

=========================================
Description:
=========================================

// Blackjack is the American version of a popular global banking game known as Twenty-One, whose relatives include Pontoon and Vingt-et-Un.[1] It is a comparing card game between one or more players and a dealer, where each player in turn competes against the dealer. Players do not compete against each other. It is played with one or more decks of 52 cards, and is the most widely played casino banking game in the world.[2]:342

// House of Blackjack is a digital version of the game we all know and love that is now available to play for free!

A screenshot of the game:

(https://github.com/pdnguyen714/project1_blackjack/blob/gh-pages/assets/images/screenshot1.png)

=========================================
Technologies Used:
=========================================

The creation of this application was made possible with - 

 - HTML
 - CSS
 - Javascript / jQuery

=========================================
Getting Started:
=========================================

Click to play!
https://pdnguyen714.github.io/project1_blackjack/

// The user begins with two cards in hand. Then the user decides whether to "Hit" and draw an additional card, or "Stay" and keep the current hand.

// The goal of the game is to reach, or get as close to as possible to 21. Users can “Hit” or “Stay” depending on the user’s hand to defeat the dealer or “House”.

// All face cards (K, Q, J,) are worth ten with the exception of the “Ace” (A), which can be used as eleven or one. The other numbers are as seen.

// Enjoy your stay and may you draw well!

=========================================
Code walk-through:
=========================================

// Store all data that will not change in constants section (# of players & win states)

// Store app's state variables (things app needs to remember are mutable)

// Once initialized game begins with fresh slate using the startGame() function

// When game begins deck will deal two cards to each player with initialHand() function

// A card will be pushed to userHand everytime player clicks "Hit" with hit() function

// The dealer draws if current hand is under 17 and player hits "Stay" using stay() function

// If a winner is found, the "Reset" button will appear and will reset the states back to initial state using reset() function

// The “Reset” button will be attached to an event listener that will clear all locally stored data and start the game over if clicked.

// Throughout game calculateScore() function will calculate pScore and dScore to keep the totals updated for rendering

// Render() function is used to render cards to the DOM

// When user cicks any button, event listeners need to be set to account for results

Wireframe Link:
 https://balsamiq.cloud/sf4ytat/pn3zgy1

=========================================
Next Steps:
=========================================

1. Refactoring code and making code more efficient and DRY

2. Adding sound to the game

3. Increasing number of players

4. Adding money and bet options
