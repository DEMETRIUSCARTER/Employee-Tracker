// importing express and mysql
const express = require("express");
const mysql = require('mysql2');
const app = express();

// database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Xira8433!',
    database: 'nodemysql',
  });
  

//mySQL connection
db.connect((err) => {
   if (err) {
  
      throw err;
  
    }
  
    console.log("MySql Connected");
  
  });

// creating database
app.get("/createdb", (req,res) => {
    let sql = "CREATE DATABASE nodemysql";
    db.query(sql,(err) => {
        if (err) {
            throw err;
        }
        res.send("Database created");
    });
});

// creating table 
app.get("/createEmployee", (req, res) => {

    let sql = 

    "CREATE TABLE employee(id int AUTO_INCREMENT,name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))";

    db.query(sql,(err)=> {
        if (err) {
            throw err;
        }
        res.send("Employee table created");
    });
});

app.get("/messages", (req, res) => {
    res.send("Hello");
 });

    //employee 1
    app.get("/employee1", (req,res) => {
        let post = {name:"Demetrius Carter", designation: "CEO"};
        let sql = "INSERT INTO employee SET ?";
        let query = db.query(sql,post, (err) => {
            if(err){
                throw err;
            }
            res.send("Employee 1 added");
        });
    });

    // update employee
    app.get("/updateemployee/:id", (req,res) => {
        let newName = "Updated name";
        let sql = `UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}`;
        let query = db.query(sql,(err) => {
            if(err){
                throw err;
            }
            res.send("Post updated...");
        });
    });

    // delete employee
     app.get("/deleteemployee/:id", (req,res) => {
        let sql = `DELETE FROM employee WHERE id = ${req.params.id}`;
        let query = db.query(sql,(err) => {
            if(err){
                throw err;
            }
            res.send("Employee deleted");
        });
    });

    app.listen("3001", () => {

        console.log("App is live at port 3001");
      
      });