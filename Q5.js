class BankAccount {
    constructor(accountHolder,balance = 0) {
        this.accountHolder = accountHolder
        this.balance = balance
    }

    deposit(amount){
        if (amount > 0) {
            this.balance += amount
            console.log(`Deposited : ${amount} rupees. Balance : ${this.balance}`);
            
        } else {
            console.log(" Deposit amount atleast 1 rupees");
            
        }
    }

    withdraw(amount){
        if (amount > this.balance) {
            console.log("Insufficient balance");
            
        } else if(amount <= 0) {
            console.log("Amount cannot be zero");
            
        }
        else {
            this.balance -= amount
            console.log(`Withdrew : ${amount} rupees. Balance : ${this.balance}`);
            
        }
    }

    checkBalance(){
        console.log(`Account Holder : ${this.accountHolder} Balance : ${this.balance}`);
        
    }
}

const myAccount = new BankAccount("Aameen", 2000)
myAccount.checkBalance()
myAccount.deposit(500)
myAccount.withdraw(550)
myAccount.withdraw(2000)