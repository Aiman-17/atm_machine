#! /usr/bin/env node

// index.ts
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let balance = 500000;

const displayMenu = () => {
    console.log(`Enter number : `);
    console.log(`
1. Check Balance
2. Deposit
3. Withdraw
4. Quit
    `);
};

const checkBalance = () => {
    console.log(`Your balance is: $${balance}`);
    displayMenu();
};

const deposit = (amount: number) => {
    balance += amount;
    console.log(`Deposit successfully! $${amount}`);
    displayMenu();
};

const withdraw = (amount: number) => {
    if (amount > balance) {
        console.log(`Insufficient funds`);
    } else {
        balance -= amount;
        console.log(`Withdraw successfully your amount! $${amount}`);
    }
    displayMenu();
};

rl.on('line', (input) => {
    switch (input.trim()) {
        case '1':
            checkBalance();
            break;
        case '2':
            rl.question('Enter amount to deposit: ', (amount) => {
                deposit(parseFloat(amount));
            });
            break;
        case '3':
            rl.question('Enter amount to withdraw: ', (amount) => {
                withdraw(parseFloat(amount));
            });
            break;
        case '4':
            console.log('Thanks for using!');
            rl.close();
            break;
        default:
            console.log('Invalid option');
            displayMenu();
            break;
    }
});

displayMenu();

