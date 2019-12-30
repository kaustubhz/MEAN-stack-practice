let account = function () {
    balance = 20000;
    let deposit = function (amount) {
        console.log("The amount is " + amount);
        balance += amount;
        return balance;
    }
    let currentBalance=function(){
        return balance;
    }
    return ({
        withdraw: (amount) => balance -= amount
        ,
        deposit: deposit,
        balance: currentBalance
    });
}

console.log("Welcome to My Bank!!!");
// Creating an instance of account
let myAccount = new account();
console.log("Depositing amount of 2000 in bank" + myAccount.deposit(2000));
console.log("My balance is " + myAccount.balance);