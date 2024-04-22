#! /usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
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
const deposit = (amount) => {
    balance += amount;
    console.log(`Deposit successfully! $${amount}`);
    displayMenu();
};
const withdraw = (amount) => {
    if (amount > balance) {
        console.log(`Insufficient funds`);
    }
    else {
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
