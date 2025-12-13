import { describe, it, expect } from 'vitest';
import { ATMSystem } from './question-8';

describe('ATMSystem with class', () => {
  it('should deposit money correctly', () => {
    const atm = new ATMSystem();
    expect(atm.deposit(1000)).toBe('1000 deposited successfully');
    expect(atm.deposit(500)).toBe('500 deposited successfully');
  });

  it('should show correct balance', () => {
    const atm = new ATMSystem();
    atm.deposit(2000);
    expect(atm.checkBalance()).toBe('Your balance is 2000');
  });

  it('should withdraw money if sufficient balance', () => {
    const atm = new ATMSystem();
    atm.deposit(1500);
    expect(atm.withDraw(1000)).toBe('1000 withdrawn successfully');
    expect(atm.checkBalance()).toBe('Your balance is 500');
  });

  it('should not withdraw money if insufficient balance', () => {
    const atm = new ATMSystem();
    atm.deposit(300);
    expect(atm.withDraw(500)).toBe('Insufficient balance');
    expect(atm.checkBalance()).toBe('Your balance is 300');
  });

  it('should exit the system', () => {
    const atm = new ATMSystem();
    expect(atm.exit()).toBe('Exiting system');
  });

  it('should keep balances independent between instances', () => {
    const atm1 = new ATMSystem();
    const atm2 = new ATMSystem();

    atm1.deposit(1000);
    atm2.deposit(500);

    expect(atm1.checkBalance()).toBe('Your balance is 1000');
    expect(atm2.checkBalance()).toBe('Your balance is 500');
  });
});
