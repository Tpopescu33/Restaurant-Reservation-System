const express = require("express");
const PORT = process.env.PORT || 5000;
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

//---------------------------RESERVATION----------------------------------------//


app.post('/MakeReservation', (req,res) => {
  const fullName = req.body.fullName
  const contactNumber = req.body.contactNumber
  const emailAddress = req.body.emailAddress
  const numGuests = req.body.numGuests
  const resDate = req.body.resDate
  const resTime = req.body.resTime
  const table = req.body.table

  console.log(fullName, contactNumber,emailAddress, numGuests, resDate, resTime, table)

})








//---------------------------RESERVATION----------------------------------------//

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});