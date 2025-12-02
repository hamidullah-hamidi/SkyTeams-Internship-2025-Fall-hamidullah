import { describe, it, expect } from 'vitest';
import { ATMSystem } from './question-8.js';

describe('ATMSystem with closure', () => {
  it('should deposit money correctly', () => {
    const atm = ATMSystem();
    expect(atm('deposit', 1000)).toBe('1000 deposited successfully');
    expect(atm('deposit', 500)).toBe('500 deposited successfully');
  });

  it('should show correct balance', () => {
    const atm = ATMSystem();
    atm('deposit', 2000);
    expect(atm('balance')).toBe('Your balance is 2000');
  });

  it('should withdraw money if sufficient balance', () => {
    const atm = ATMSystem();
    atm('deposit', 1500);
    expect(atm('withdraw', 1000)).toBe('1000 withdrawn successfully');
    expect(atm('balance')).toBe('Your balance is 500');
  });

  it('should not withdraw money if insufficient balance', () => {
    const atm = ATMSystem();
    atm('deposit', 300);
    expect(atm('withdraw', 500)).toBe('Insufficient balance');
    expect(atm('balance')).toBe('Your balance is 300');
  });

  it('should exit the system', () => {
    const atm = ATMSystem();
    expect(atm('exit')).toBe('Exiting system');
  });

  it('should handle invalid options', () => {
    const atm = ATMSystem();
    expect(atm('hello')).toBe('Invalid option');
    expect(atm('foo', 100)).toBe('Invalid option');
  });

  it('should keep balances independent between instances', () => {
    const atm1 = ATMSystem();
    const atm2 = ATMSystem();

    atm1('deposit', 1000);
    atm2('deposit', 500);

    expect(atm1('balance')).toBe('Your balance is 1000');
    expect(atm2('balance')).toBe('Your balance is 500');
  });
});
