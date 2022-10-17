class User {
  constructor(username, emailAddress) {
    this.name = username;
    this.email = emailAddress;
    this.accountBalance = 0;
  }
  makeDeposite(amount) {
    this.accountBalance += amount;
  }
  makeWithdrawal(amount) {
    this.accountBalance -= amount;
  }
  displauBalance() {
    this.username, this.accountBalance;
  }
}
const guido = new User("Guido Vann", "guido@email.com");
guido.makeDeposite(200);
guido.makeDeposite(450);
// console.log(guido.accountBalance);
guido.makeWithdrawal(30);
// console.log(guido.makeWithdrawal);
guido.displauBalance()
console.log(guido.displauBalance);

