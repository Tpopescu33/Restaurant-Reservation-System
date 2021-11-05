const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const mysql = require("mysql");
const cors = require("cors");
/*const bcrypt = require('bcrypt');*/
const bodyParser = require("body-parser");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "825351",
  port: 3306,
  database: "resturant-reservation-DB",
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/Registration", async (req, res) => {
  try {
    const { name } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { address } = req.body;
    const { city } = req.body;
    const { state } = req.body;
    const { zip } = req.body;
    const wholeAddress = address + ", " + city + " " + state + " " + zip;
    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      (_err, rows, fields) => {
        console.log(rows.length);
        if (rows.length === 0) {
          db.query(
            "INSERT INTO users (name, email, address, password, role) VALUES (?,?,?,?,?)",
            [name, email, wholeAddress, password, "customer"]
          );
          res.json("user registered");
        } else {
          res.json("existed email");
        }
      }
    );
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/login", async (req, res) => {
  const { email } = req.body;
  const { password } = req.body;
  try {
    
    db.query(
      "SELECT userIDs, role FROM users WHERE email = ? AND password= ?",
      [email, password],
      (_err, rows, fields) => {
        console.log(rows[0]);
        if (rows.length === 0) {
          console.log("Invalid Credentials");
          return res.json("Invalid Credentials");
        } else {
          return res.json(rows[0]);
        }
      }
    );

    /*const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(password, salt);
      console.log(bcryptPassword);
      console.log(signIn.rows[0].password);*/
    /*const validPassword = await bcrypt.compare(password, signIn.rows[0].password);
      console.log(validPassword);
      if(!validPassword){
          console.log("Invalid Credentials");
          return res.status(401).json("Invalid Credentials");
      }*/
    
  } catch (err) {
    console.log(err.message);
  }
});


app.get('/Admin', async(req,res) => {
  
  
  try{        
      db.query("SELECT userIDs, name, email, password FROM users", 
      (_err, rows, fields) => {
        return res.json(rows);

      } );
      
      
  }catch(err){
      console.log(err.message);
  }
});

app.post('/Admin-searchByName', async(req,res) =>{
  const {searchName} = req.body;
  console.log(searchName);
  try {
    db.query("SELECT userIDs, name, email, password FROM users WHERE name=? ",
    searchName,
    (_err, rows, fields) => {
      return res.json(rows);
    });
  } catch (err) {
    console.log(err.message);
  }
})

app.post('/Admin-searchByTime', async(req,res) =>{
  const {searchTime} = req.body;
  console.log(searchTime);
  try {
    db.query("SELECT userIDs, name, email, password FROM users WHERE time=? ",
    searchTime,
    (_err, rows, fields) => {
      return res.json(rows);
    });
  } catch (err) {
    console.log(err.message);
  }
})

app.post('/Admin-cancel', async(req,res) => {
  try {
    const {id} = req.body;
    console.log(id);
    db.query("DELETE FROM users WHERE userIDs=?", id, (_err, rows, fields) => {
      return res.json("deleted");
    });
  } catch (err) {
    console.log(err.message);
  }
})

app.get('/Profile-info/:id', async(req,res) => {

  try {
    var id = req.params.id;
    db.query("SELECT address, name, email FROM users WHERE userIDs = ?",
    id,
    (err, rows, fields) => {
      return res.json(rows[0]);
    } );
  } catch (err) {
    console.log(err.message)
  }
})

app.post('/Profile-edit', async(req, res) => {
  try {
    const { name } = req.body;
    const { email } = req.body;
    const { id } = req.body;
    const { address } = req.body;
    db.query("UPDATE users SET name=?, email=?, address=? WHERE userIDs=?",
    [name, email, address,id]);
    console.log("1");
    res.json("updated");
  
  } catch (err) {
    console.log(err.message);
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
