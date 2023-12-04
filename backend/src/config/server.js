const express = require('express')
const server = express()
const mysql = require("mysql2")
const cors = require("cors")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "econom_db",
})

const port = 3003

server.use(cors())
server.use(express.json())

server.listen(port, function () {
    console.log(`Backend is running on port ${port}`)
})

server.get("/test-db-connection", (req, res) => {
    db.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Failed to get database connection");
        }
        console.log("Database connection successful");
        connection.release(); // Release the connection back to the pool
        res.status(200).send("Database connection successful");
    });
});

server.post("/register", (req, res) => { //cadastrar conta
    const  email  = req.body.email;
    const  password  = req.body.password;

    let SQL = "INSERT INTO users ( email, password ) VALUES ( ?,? )";

    db.query("SELECT * FROM users where email = ?", [email], (err, result) => {
        if (err) {
            res.send(err);
        }
        if (result.length == 0) {
            db.query(SQL, [email, password], (err, result) => {
                if (err) {

                    res.send(err)
                }
                res.send({ msg: "Cadastrado com sucesso!"})
            })
        }
        else {
            res.send({msg: "Usuario já cadastrado!"});
        }
    })
});

server.post("/login", (req, res) => {
    const  email  = req.body.email;
    const  password  = req.body.password;

    db.query("SELECT * FROM users where email = ? AND password = ?", [email, password], (err, result) => {
        if (err) {
            res.send(err);
        }
        if(result.length > 0){
            res.send({msg: "Usuário Logado com sucesso"})
        }else {
            res.send({msg: "Usuário não encontrado"})
        }
    })    
});


