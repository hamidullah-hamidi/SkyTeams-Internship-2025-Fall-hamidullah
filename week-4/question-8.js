// Author: hamidullah hamidi
// Date: 2025/02/11

// Question:  Menu-Based ATM System

// Description: Handle options for balance, withdraw, deposit, exit.
// Example: "100 withdrawn successfully"

export const ATMSystem = () => {
  let balance = 0;

  return (method, value) => {
    if (method === 'balance') return `Your balance is ${balance}`;

    if (method === 'deposit') {
      balance += value;
      return `${value} deposited successfully`;
    }
    if (method === 'withdraw') {
      if (balance < value) return 'Insufficient balance';
      balance -= value;
      return `${value} withdrawn successfully`;
    }
    if (method === 'exit') return 'Exiting system';
    else return 'Invalid option';
  };
};

const myATM = ATMSystem();

console.log(myATM('deposit', 10000));
console.log(myATM('balance'));
console.log(myATM('withdraw', 1000));
console.log(myATM('balance'));
console.log(myATM('exit'));
