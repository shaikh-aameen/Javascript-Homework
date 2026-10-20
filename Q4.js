let students = [
    {name : "Amit", marks : 75},
    {name : "Priya", marks : 90},
    {name : "Rahul", marks : 45},
    {name : "Sneha", marks : 80}
]

const filter = students.filter(students=> students.marks > 60)

const map = filter.map(students=> students.name)

const total = students.reduce((marks,students)=> marks + students.marks, 0)
const average = total / students.length

console.log(filter);

console.log(map);

console.log(average);
