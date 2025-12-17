// Author: hamidullah hamidi
// Date: 2025/02/11

// Question:  Menu-Based ATM System

// Description: Handle options for balance, withdraw, deposit, exit.
// Example: "100 withdrawn successfully"

export class ATMSystem {
  constructor() {
    this.balance = 0;
  }

  deposit(value) {
    this.balance += value;
    return `${value} deposited successfully`;
  }

  withDraw(value) {
    if (this.balance < value) return 'Insufficient balance';
    this.balance -= value;
    return `${value} withdrawn successfully`;
  }

  checkBalance() {
    return `Your balance is ${this.balance}`;
  }

  exit() {
    return 'Exiting system';
  }
}

const myATM = new ATMSystem();
console.log(myATM.checkBalance());
console.log(myATM.deposit(10000));
console.log(myATM.checkBalance());
console.log(myATM.withDraw(1000));
console.log(myATM.checkBalance());
