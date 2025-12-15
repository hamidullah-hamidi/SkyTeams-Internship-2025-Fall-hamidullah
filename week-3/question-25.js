// Author: hamidullah hamidi
// Date: 2025/18/11

// Question:  Number Guessing Game

// Description:
// • The program randomly selects a number between 1 and 100.
// • The user must guess the number.
// • The program gives hints like “Too High” or “Too Low”.
// • Continue until the user guesses correctly.

// way -1 (because of run test file use this function)

export const numberGuessingGame = (secretNumber, guess) => {
  if (guess > secretNumber) return 'Too High';
  if (guess < secretNumber) return 'Too Low';
  return 'Correct';
};

console.log(numberGuessingGame(50, 20));
console.log(numberGuessingGame(50, 89));
console.log(numberGuessingGame(50, 50));

// way -2 (use readline for take number from user until guess the correct number)
/*
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = Math.floor(Math.random() * 100) + 1;

export const numberGuessingGame = () => {
  rl.question('Guess a number: ', (input) => {
    const guess = +input;

    if (guess > secretNumber) {
      console.log('Too High');
      numberGuessingGame();
    } else if (guess < secretNumber) {
      console.log('Too Low');
      numberGuessingGame();
    } else {
      console.log('You guessed Correct! ');
      rl.close();
    }
  });
};
*/
