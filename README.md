# Console Trivia - Flashcard Simulation

Turing School of Software & Design

2108 FEE, Mod 2 - Solo Project

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
* Using your command line interface, clone this repo
* `cd` into the directory
* Run `node index.js`
* Once complete, use the control + c keyboard shortcut to exit the Node server

## Web App Attributes
* To get the game started, users will run `node index.js` and be greeted with the first question.
![Start](https://user-images.githubusercontent.com/49960644/137399586-cb4faba1-af4d-4f0c-920e-10cf52b5ba4f.gif)


* Users can type 1, 2, or 3 into the `Answer:`section. Typing in anything other than those numbers will cause an error that will read `Please enter a valid index` so that they can try again.
![Type-Answer-Error](https://user-images.githubusercontent.com/49960644/137399858-02221526-dd41-454a-9385-dfd729465745.gif)


* Users can also use the up/down arrows to cycle through the 3 different options. Once selected or typed in, pressing the *Enter* key will provide feedback on whether they guessed correctly or incorrectly. Pressing *Enter* again will display the next question.
![Arrow_Answer](https://user-images.githubusercontent.com/49960644/137399639-8617a588-c915-48ed-9f5a-362cfbee89df.gif)


* After moving through all 30 questions, a message displays that the round is over. It also tells the user what percentage of questions they answered correctly. Typing *control + c* will exit the Node server.
![Endgame](https://user-images.githubusercontent.com/49960644/137399659-899efce1-16d8-4b7e-ad91-6f54869cd253.gif)

