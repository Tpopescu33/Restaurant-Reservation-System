import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";


const Login = () => {




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
                        <form class = "login-form" >
                            <div class = "form-user">
                                <input type="text" class="form-control" id= "email" name="Email" placeholder="Email" required="required"
                                />
                            </div>
                            <div class = "form-password">
                                <input type="password" class="form-control" name="password" placeholder="Password" required="required"
                                /> 
                            </div>
                            <button class="btn-submit-fn" type="submit" name="Sign-in" >Sign in</button>
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
