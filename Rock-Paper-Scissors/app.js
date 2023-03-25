// selector h2 tag
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
// selector all button tag
const possibleChoice = document.querySelectorAll('button')

let userChoice;
let computerChoice;
let result;

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id; // (rock / paper / scissors)
  userChoiceDisplay.innerHTML = userChoice

  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor((Math.random() * possibleChoice.length) + 1) // return one number 1->3

  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!"
  }
  else if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'You win!'
  }
  else if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'You lose!'
  }
  else if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'You win!'
  }
  else if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'You lose!'
  }
  else if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'You lose!'
  }
  else if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'You win!'
  }
  resultDisplay.innerHTML = result
}