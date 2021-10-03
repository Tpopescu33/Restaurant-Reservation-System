const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql');


const db = mysql.createConnection({
    user: 'root',
    host: '127.0.0.1',
    password: 'password',
    port: 3306,
    database: 'sys'
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  db.query("INSERT INTO users (userID, test) VALUES (?,?)", ["1", "test"])


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});