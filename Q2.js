let student = {
    name : "Rahul",
    age : 21,
    city : "Mumbai"
};

const {name, age, city : studentCity, course = "Unknown"} = student

console.log("Name : " + name);
console.log("Age : " + age);
console.log("Student City : " + studentCity);
console.log("Course : " + course);
