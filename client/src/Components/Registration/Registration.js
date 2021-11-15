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
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    

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
                const body = {name, email, password, address, city, state, zip};
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
                    window.location = "/login";
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
                            <label id="name-label" for="name">Name</label><br></br>
                            <input type="text" name="name" id="name" class="form-control" placeholder="Enter your name" required
                            value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div class = "register-form-group">
                            <label id="email-label" for="email">Email</label><br></br>
                            <input type="text" class="form-control" name="email" placeholder="Enter your email" required="required" 
                            value={email} onChange={e => setEmail(e.target.value)}/> <span style={{
                                fontWeight: 'bold', color: 'red'
                            }}>{emailError}</span>
                        </div>
                        <div class = "register-form-group">
                            <label id="password-label" for="password">Password</label><br></br>
                            <input type="password" class="form-control" id= "password" name="password" placeholder="Enter your password" required="required"
                            value={password} onChange={e => setPassword(e.target.value)}/> 
                            
                        </div>
                        <div class = "register-form-group">
                            <label id="confirmedPassword-label" for="confirmedPassword">Confirm Password</label><br></br>
                            <input type="password" class="form-control" id= "confirmedPassword" name="confirmedPassword" placeholder="Confirm  your password" required="required"
                            value={confirmedPassword} onChange={e => setCPassword(e.target.value)}/>
                            
                        </div>
                        <h3>Mailing Address</h3>
                        <div class="register-form-group">
                            <label id="address-label" for="address">Address</label><br></br>
                            <input type="text" name="address" id="address" class="form-control" placeholder="789 Hennessey Dr" required
                            value={address} onChange={e => setAddress(e.target.value)}/>
                        </div>
                        <div class="register-form-group">
                            <label id="city-label" for="city">City</label><br></br>
                            <input type="text" name="city" id="city" class="form-control" placeholder="fineWine" required
                            value={city} onChange={e => setCity(e.target.value)}/>
                        </div>
                        <div class="register-form-group col-50">
                            <label id="state-label" for="state">State</label><br></br>
                            <input type="text" name="state" id="state" class="form-control" placeholder="TX" required
                            value={state} onChange={e => setState(e.target.value)}/>
                        </div>
                        <div class="register-form-group col-50">
                            <label id="zip-label" for="zip">Zip code</label><br></br>
                            <input type="text" name="zip" id="zip" class="form-control" placeholder="77467" pattern="[0-9]*" maxlength="9" minlength="5" size = "10" required
                            value={zip} onChange={e => setZip(e.target.value)}/>
                        </div>
                        <div class="checkAddress">
                            <input type="hidden" name="differentAddress" value="no"/>
                            <input type="checkbox" name="sameAddress" value="yes"/> 
                            <label for="billingAddress" >Billing address same as mailing</label>
                        </div> <br></br>         
                        <div><button type="submit" class="Sign-Up">Create</button></div>
                    </form>
                    <p class="Registered">Already have an account? <Link to="/login"><u><b>   Login here!   </b></u></Link></p>
                </div>
                

            </html>
        </div>
    )
}

export default Registration;