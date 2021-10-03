const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql');


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'resturant-reservation-system'
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });




app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});