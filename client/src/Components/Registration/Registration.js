import React from 'react';
import {Link} from 'react-router-dom';
import './Registration.css';


const Registration = () => {


    return (
        <div>
            <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                
                <title> Tasty - Register</title>                
            </head>            
            <body>
            <div class="register-page">
                <h2 class="center">New Member</h2>
                <div class="center">
                    <form class = "register-form">
                        <div class = "register-form-user">
                            <input type="text" class="form-control" name="email" placeholder="Email" required="required" 
                            />
                        </div>
                        <div class = "register-form-password">
                            <input type="password" class="form-control" id= "password" name="password" placeholder="Input Password" required="required"
                            /> 
                            
                        </div>
                        <div class = "register-form-confirm-password">
                            <input type="password" class="form-control" id= "confirmed-password" name="confirmed-password" placeholder="Confirm Password" required="required"
                            />
                            
                        </div>
                        <div><button type="submit" class="Sign-Up">Create</button></div>
                    </form>
                    <p class="Registered">Already have an account? <Link to="/login"><u><b>   Login here!   </b></u></Link></p>
                </div>
                </div>
                </body>
            </html>
        </div>
    )
}

export default Registration;