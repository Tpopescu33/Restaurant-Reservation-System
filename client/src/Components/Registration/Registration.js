import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import validator from 'validator'
import './Registration.css';


const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState("");
    const [confirmedPassword, setCPassword] = useState("");

    

    const submitForm = async e  => {
        e.preventDefault();
        if (validator.isEmail(email)) {
            setEmailError('');            
        } else {
            setEmailError('Not Valid Email');
        }

        if (confirmedPassword !== password){
            alert("Confirm password not match");
        } else{
            try{                                
                const body = {name, email, password};
                const response = await fetch("http://localhost:5000/Registration",{
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });
                const jsonData = await response.json();
                if (jsonData === "existed email"){
                    alert("The email has been used. Please choose another one");
                    window.location = "/Registration";
                }
                if (jsonData === "user registered"){
                    window.location = "/";
                }
            } catch (err) {
                console.error(err.message);
            }
        }
        
    }


    return (
        <div>
            <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                
                <title> Tasty - Register</title>                
            </head>            

            <div class="register-page">
                <h2 id="title">New Member</h2>
                
                    <form class = "register-form" onSubmit={submitForm}>
                        <div class="register-form-group">
                            <label id="name-label" for="name">Name</label>
                            <input type="text" name="name" id="name" class="form-control" placeholder="Enter your name" required
                            value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div class = "register-form-group">
                            <label id="email-label" for="email">Email</label>
                            <input type="text" class="form-control" name="email" placeholder="Enter your email" required="required" 
                            value={email} onChange={e => setEmail(e.target.value)}/> <span style={{
                                fontWeight: 'bold', color: 'red'
                            }}>{emailError}</span>
                        </div>
                        <div class = "register-form-group">
                            <label id="password-label" for="password">Password</label>
                            <input type="password" class="form-control" id= "password" name="password" placeholder="Enter your password" required="required"
                            value={password} onChange={e => setPassword(e.target.value)}/> 
                            
                        </div>
                        <div class = "register-form-group">
                            <label id="confirmedPassword-label" for="confirmedPassword">Confirm Password</label>
                            <input type="password" class="form-control" id= "confirmedPassword" name="confirmedPassword" placeholder="Confirm  your password" required="required"
                            value={confirmedPassword} onChange={e => setCPassword(e.target.value)}/>
                            
                        </div>
                        <div><button type="submit" class="Sign-Up">Create</button></div>
                    </form>
                    <p class="Registered">Already have an account? <Link to="/login"><u><b>   Login here!   </b></u></Link></p>
                </div>
                

            </html>
        </div>
    )
}

export default Registration;