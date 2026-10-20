class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}

class Employee extends Person {
    constructor(name,age,id,salary) {
        super(name,age)
        this.id = id
        this.salary = salary
    }

    details(){
        console.log(`ID: ${this.id} Name: ${this.name} Age: ${this.age} Salary: ${this.salary}`);
        
    }
}

const emp1 = new Employee("Aameen",20,1,20000)
emp1.details()