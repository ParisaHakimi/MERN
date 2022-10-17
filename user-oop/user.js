// class User {
//   constructor(username, emailAddress) {
//     this.name = username;
//     this.email = emailAddress;
//     this.accountBalance = 0;
//   }
//   makeDeposite(amount) {
//     this.accountBalance += amount;
//     return this;
//   }
//   makeWithdrawal(amount) {
//     this.accountBalance -= amount;
//     return this;
//   }
//   displayBalance() {
//     console.log(`name:${this.name}, Account Balance:${this.accountBalance}`);
//     return this;
//   }
// }
// const guido = new User("Guido Vann", "guido@email.com");
// guido.makeDeposite(200);
// guido.makeDeposite(450);
// console.log(guido.accountBalance);
// guido.makeWithdrawal(30);
// console.log(guido.makeWithdrawal);
// guido.displayBalance();
// console.log(guido.displayBalance);
// guido.makeDeposite(200).makeDeposite(50).makeWithdrawal(60).displayBalance();
class BankAccount {
  constructor(intRate = 0.08, balance = 0) {
    this.interestRate = intRate;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    return this;
  }
  withdraw(amount) {
    this.balance -= amount;
    return this;
  }
  displayAccountInfo() {
    console.log(
      `Account Balance: $${this.balance}, interest rate:${this.interestRate}`
    );
    return this;
  }
  yieldInterest() {
    this.balance += this.balance * this.interestRate;
    return this;
  }
}
// const accont1 = new BankAccount(0.02, 130);
// accont1.displayAccountInfo();
class User {
  constructor(username, emailAddress) {
    this.name = username;
    this.email = emailAddress;
    this.account = new BankAccount();
  }
  makeDeposit(amount) {
    this.account.deposit(amount);
    return this;
  }
  makeWithdrawal(amount) {
    this.account.withdraw(amount);
    return this;
  }
  displayInfo() {
    console.log(
      `Name: ${this.name}, Account Balance: $${this.account.balance}, Interest Rate: ${this.account.intRate}`
    );
    return this;
  }
}
const tom = new User("Tom Joon", "tom@email.com");
tom.makeDeposit(40);
