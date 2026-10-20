class InvalidAgeError extends Error{
    constructor(message){
        super(message)
        this.name = "InvalidAgeError:"
    }
}

function checkAge(age){
    try {
        if (age < 18) {
            throw new InvalidAgeError("Age must be 18")
        } else {
            console.log("Age is valid");
            
        }
    } catch (error) {
        console.log(error.name +" "+ error.message);
        
    }
}

checkAge(17)
checkAge(20)