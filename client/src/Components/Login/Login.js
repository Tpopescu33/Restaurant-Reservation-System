import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";


const Login = (props) => {

    const {
        isAuth,
        setIsAuth,
    } = props;


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = async e  => {
        e.preventDefault();
        try{
            const body = {email, password};
            const response = await fetch("http://localhost:5001/login",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
                
            });
            const jsonData = await response.json();
            console.log(jsonData);
            if (jsonData.role === "customer"){
                setIsAuth(true)
                window.localStorage.setItem("ID", JSON.stringify(jsonData.userIDs));
                window.location = "/Profile";
                
            }
            else if (jsonData.role === "admin"){
                setIsAuth(true)
                window.location = "/Admin";
                console.log(isAuth)
                setIsAuth(true)
            }
            else {
                alert("Invalid user or password");
            }
            
        } catch (err) {
            console.error(err.message);
        }
    }




    return (
        
        <div>
            <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title> Tasty- Login</title>
                
            </head>
            
            <body>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div class="login-page">
                    <h2 class="center">Member Login</h2>
                    <div class="center">
                        <form class = "login-form" onSubmit={submitForm}>
                            <div class = "form-user">
                                <input type="text" class="form-control" id= "email" name="Email" placeholder="Email" required="required"
                                value = {email}
                                onChange={e=>setEmail(e.target.value)}/>
                            </div>
                            <div class = "form-password">
                                <input type="password" class="form-control" name="password" placeholder="Password" required="required"
                                value = {password}
                                onChange={e=>setPassword(e.target.value)}/> 
                            </div>
                            <button class="btn-submit-fn" type="submit" name="Sign-in" onClick={submitForm}>Sign in</button>
                        </form>
                        <p class="Not-Register">Don't have an account? <Link to="/Registration"><u><b>   Register here!   </b></u></Link></p>
                    </div>
                </div>
                </body>
            </html>
        </div>
    )
}

export default Login;
