
// Database script

// create table students(
// id int auto_increment primary key,
// name varchar(100),
// age int,
// course varchar(100),
// email varchar(100));


const mysql = require('mysql2');

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "college"
})

db.connect((err) =>{
    if (err) {
        throw err
    } else {
        console.log("Connection success...");
        
    }
})

function insertStudent(name,age,course,email){
    const sql = "insert into students(name,age,course,email) values(?,?,?,?)"
    db.query(sql,[name,age,course,email],(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log("Inserted successfully... " + result.insertId);
            
        }
    })
}

// insertStudent("Tom",20,"IT","tom@mail.com")
// insertStudent("Harry",22,"CS","harry@mail.com")
// insertStudent("Peter",17,"DS","peter@mail.com")
// insertStudent("Pedro",30,"ML","pedro@mail.com")
// insertStudent("Jerry",25,"AI","jerry@mail.com")


function updateStudent(name,age,course,email,id) {
    const sql = "update students set name=?, age=?, course=?, email=? where id = ?"

    db.query(sql,[name,age,course,email,id],(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log("Update success..." );
            
        }
    })
}

//updateStudent("Tom",21,"CS","123@g.com",1)

function deletestudent(id) {

    const sql = "delete from students where id = ?"

    db.query(sql,[id],(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log("Deleted...");
            
        }
    })
    
}

//deletestudent(2)

function showAll() {
    const sql = "select * from students"

    db.query(sql,(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log(result);
            
        }
    })
}

//showAll()

function searchStudent(value) {
    const sql = "select * from students where id = ? OR name LIKE ?"

    db.query(sql,[value,`%${value}%`],(err,result)=>{
        if (err) {
            throw err
        } else {
            console.log(result);
            
        }
    })
}

searchStudent(1)
searchStudent("Jerry")
