class InvalidAmountError extends Error {
    constructor(message) {
        super(message)
        this.name = "InvalidAmounterror:"
    }
}

class InsufficientBalanceError extends Error {
    constructor(message) {
        super(message)
        this.name = "InsufficientBalanceError:"
    }
}

function withdraw(amount,balance){
    try {
        if (amount <= 0) {
            throw new InvalidAmountError("Invalid Amount, must be greater than 0")
        }
        else if (amount > balance) {
            throw new InsufficientBalanceError("Insufficient balance");
            
        }
        else{
            console.log(`Withdrew: ${amount} Balance: ${balance-amount}`);
            
        }
    } catch (error) {
        console.log(error.name+ " " + error.message);
        
    }
    
}

withdraw(0,500)
withdraw(2000,500)
withdraw(300,500)