const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const database = mysql.createConnection({
    host: "localhost",
    user:'root',
    password:'',
    database:"gameusers"
})

app.post('/signup',(req,res) => {
    const sql = "INSERT INTO players (`first_name`,`last_name`,`email`,`phone_number`,`password`) Values (?)";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.phone,
        req.body.password
    ];
    database.query(sql,[values],(err,data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

// app.get('/',(req,res) => {
//     return res.json("From backend side")
// })

// app.get('/users',(req,res) => {
//     const sql = "SELECT * FROM employees";
//     database.query(sql,(err,data) => {
//         if(err) return res.json(err);
//         return res.json(data);
//     })
// })

app.listen(8081,() => {
    console.log('listening...')
})

