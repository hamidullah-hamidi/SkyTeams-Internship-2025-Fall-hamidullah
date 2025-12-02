// Author: hamidullah hamidi
// Date: 2025/02/11

// Question:  Rock, Paper, Scissors Game

// Description: Simulate a game using random computer choices.

export const rockPaperScissorsGame = (userSelection) => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const randomSelector = choices[randomIndex];

  if (randomSelector === userSelection) return 'draw';

  if (
    (randomSelector === 'scissors' && userSelection === 'rock') ||
    (randomSelector === 'rock' && userSelection === 'paper') ||
    (randomSelector === 'paper' && userSelection === 'scissors')
  ) {
    return 'user win';
  } else return 'computer win';
};

console.log(rockPaperScissorsGame('rock'));
