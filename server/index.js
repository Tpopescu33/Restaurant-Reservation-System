const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const mysql = require('mysql');
const cors = require('cors');
/*const bcrypt = require('bcrypt');*/
const bodyParser = require('body-parser');
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '825351',
    port: 3306,
    database: 'resturant-reservation-DB'
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });


  app.post("/Registration", async(req,res) =>
{
  try{
      const {name} = req.body;
      const {email} = req.body;
      const {password} = req.body;
      const {city} = req.body;
      const {state} = req.body;
      const {zip} = req.body;
      

      const compare_email = await db.query("SELECT * FROM Users WHERE email = $1",[email]);
      if (compare_email.rows.length == 0){
        /*const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);
        const register = await pool.query("INSERT INTO Users VALUES ($1,$2)",
        [user_name, bcryptPassword]);
        console.log("register");*/
  
        const userProfile = await db.query("INSERT INTO user (name, email, address, password, role) VALUES ($1, $2 ,$3, $4, $5)",
        [name, email, address, password, "customer" ]);
        console.log(userProfile);

        res.json("user registered");
      }
      else {
        res.json("The email has been used.")
      }

      

  }catch(err){
    console.log(err.message);
  }
});


app.post("/login", async(req,res) => {
  const {email} = req.body;
  const {password} = req.body;
  try{
      console.log("helo");
      const signIn = db.query("SELECT * FROM `users` WHERE `email` = ? AND `password`= ?", [email, password]);
      console.log(signIn);
      if(signIn.rows.length === 0){
          console.log("Invalid Credentials");
          return res.status(401).json("Invalid Credentials");
      }

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
      const role = db.query("SELECT role FROM Users WHERE email = $1 AND password= $2", [email, password]);
      console.log(role);
      res.json(role);
  }catch(err){
      console.log(err.message);
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
