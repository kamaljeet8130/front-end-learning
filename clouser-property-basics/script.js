function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(
      `hello your name is : ${name} and your current Balance is : ${balance}`
    );
  }
  function creditMoney(amount) {
    balance += amount;
    console.log(
      `${amount} has been credited to your account and your current balance is ${balance} `
    );
  }
  function debitMoney(amount) {
    balance -= amount;
    console.log(
      `${amount} has been debited to your account and your current balance is ${balance}`
    );
  }
  return {
    initialBalance: balance,
    showBalance: showBalance,
    creditMoney: creditMoney,
    debitMoney: debitMoney,
  };
}
const jhon = newAccount('jhon', 400);
jhon.showBalance();
jhon.creditMoney(200);
