class BankAccount {
  constructor(balance, accountType) {
    this.balance = balance;
    this.accountType = accountType;
  }
  deposit(amount) {
    this.balance += 100;
  }
  withdraw(amount) {
    if (amount < this.balance) {
      this.balance -= amount;
    }
  }
}

let newAccount = new BankAccount(100, "checking");
newAccount.deposit(100);
newAccount.withdraw(50);
console.log(newAccount.balance);
