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

server.listen(port, function() {
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


server.post("/register", (req,res) => { //cadastrar conta
    const { name } = req.body;
    const { email } = req.body;
    const { password } = req.body;

    let SQL = "INSERT INTO account (name, email, password ) VALUES ( ?,?,? )";

    db.query(SQL, [name, email, password], (err, result) => {
        console.log(err);
    })
})