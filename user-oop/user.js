class User {
  constructor(username, emailAddress) {
    this.name = username;
    this.email = emailAddress;
    this.accountBalance = 0;
  }
  makeDeposite(amount) {
    this.accountBalance += amount;
    return this;
  }
  makeWithdrawal(amount) {
    this.accountBalance -= amount;
    return this;
  }
  displayBalance() {
    console.log(`name:${this.name}, Account Balance:${this.accountBalance}`);
    return this;
  }
}
const guido = new User("Guido Vann", "guido@email.com");
// guido.makeDeposite(200);
// guido.makeDeposite(450);
// console.log(guido.accountBalance);
// guido.makeWithdrawal(30);
// console.log(guido.makeWithdrawal);
// guido.displayBalance();
// console.log(guido.displayBalance);
guido.makeDeposite(200).makeDeposite(50).makeWithdrawal(60).displayBalance();
