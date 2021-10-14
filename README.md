# Console Trivia - Flashcard Simulation

Turing School of Software & Design
2108 FEE, Module 2 - Solo Project

## Abstract
A web app that allows users to play a game of trivia in the console. Questions are related to Javascript. Each question displays with multiple choice answers. After cycling through all questions, users will be able to see what percentage they answered correctly.

## Languages/Technology
Javascript, Mocha, Chai, Github

## Learning Goals
* Gain familiarity with writing object-oriented code using ES6 classes
* Build a project with modular, reusable code that follows SRP
* Implement a robust testing suite using TDD, writing own tests from scratch

## Trello Project Board
[Here](https://trello.com/b/zRiyr72a/flashcards-m2-solo)

## Install & Setup 
* Using your command line interface, clone this repo down to your machine
* `cd` into the directory
* Run `node index.js`
* Once complete, use the control + c keyboard shortcut to exit the Node server

## Web App Attributes
* To get the game started, users will run `node index.js` and be greeted with the first question.

* Users can type 1, 2, or 3 into the `Answer:`section. Typing in anything other than those numbers will cause an error that will read `Please enter a valid index` so that they can try again.

* Users can also use the up/down arrows to cycle through the 2 different options. Once selected or typed in, pressing the Enter key will provide feedback on whether they guessed correctly or incorrectly. Pressing enter again will display the next question.

* After moving through all 30 questions, a message displays that the round is over. It also tells the user what percentage of questions they answered correctly. Typing control + c will exit the Node server.
