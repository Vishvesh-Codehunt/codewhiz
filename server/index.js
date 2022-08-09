const express = require('express');
const app = express();
const mysql = require('mysql');
const bp = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cruddb',
    port: 3307
});

app.use(bp.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

app.get("/", function(req, res){
    const sqlCreate = "CREATE TABLE subscribe (id INT NOT NULL AUTO_INCREMENT, email VARCHAR(255) NOT NULL, PRIMARY KEY(id))"
    db.query(sqlCreate, function(err, result){
        res.send("Hello Vishvesh!");
    });

});

app.post("/insert", function(req, res){
    const email = req.body.email;
    console.log(email);

    const sqlInsert = "INSERT INTO subscribe(email) VALUES ('patelvishvesh100@gmail.com')";
    db.query(sqlInsert, function(err, result){
        res.send("done");
    });
});

app.listen(3001, function(){
    console.log("The server is started on port 3001");
});