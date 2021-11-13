const express = require("express");
const PORT = process.env.PORT || 5001;
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    port: 3306,
    database: 'resturant-reservation-DB'
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

//---------------------------RESERVATION-START---------------------------------------//


app.get('/GetReservedTables', (req,res) => {
  const resDate = req.query.resDate
  const resTime = req.query.resTime
  db.query("SELECT `table` FROM `reservation` WHERE (`resTime` = ? && `resDate` = ?)", [resTime, resDate], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
      console.log(result, resDate, resTime)
    }
  })
})


app.post('/MakeReservation', (req,res) => {
  const userID = req.body.userID
  const fullName = req.body.fullName
  const contactNumber = req.body.contactNumber
  const emailAddress = req.body.emailAddress
  const numGuests = req.body.numGuests
  const resDate = req.body.resDate
  const resTime = req.body.resTime
  const table = req.body.table
  const sqlinsert = "INSERT INTO `reservation` (`userID`, `fullName`, `contactNumber`, `emailAddress`, `numGuests`, `resDate`, `resTime`, `table`) VALUES (?,?,?,?,?,?,?,?)"
  console.log(userID, fullName, contactNumber,emailAddress, numGuests, resDate, resTime, table)

  db.query(sqlinsert, 
    [userID, fullName, contactNumber, emailAddress, numGuests,resDate, resTime, table], 
    (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log("success")
      res.send("Values inserted")
    }
  })
  
})








//---------------------------RESERVATION-END---------------------------------------//

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});