import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import validator from 'validator'


const Profile = () => {
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState('');
    const [point, setEarnedPoint] = useState([]);
   
    const token = "a"; //this token need to retrieve from the sign in. This token is generated and shared for each page once user logging in 
    

    const getAddress = async e => {
        try {
            const response = await fetch(`http://localhost:5000/${token}`);
            const jsonData = await response.json();
            getAddress(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getAddress();
    });

    const getEmail = async e => {
        try {
            const response = await fetch(`http://localhost:5000/${token}`);
            const jsonData = await response.json();
            getEmail(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getEmail();
    });

    const getName = async e => {
        try {
            const response = await fetch(`http://localhost:5000/${token}`);
            const jsonData = await response.json();
            getName(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getName();
    });

    const getPoint = async e => {
        try {
            const response = await fetch(`http://localhost:5000/${token}`);
            const jsonData = await response.json();
            setEarnedPoint(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getPoint();
    },[]);
    

    const submitForm = async e  => {
        e.preventDefault();
        try{
            if (validator.isEmail(email)) {
                setEmailError('');            
            } else {
                setEmailError('Not Valid Email');
            }                                
            const body ={address, name, email};
            const response = await fetch(`http://localhost:5000/Profile/${token}`,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            const jsonData = await response.json();
            if (jsonData === "Complete"){
                alert("Edit Completed");
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
            <html lang="en">
            <head>
                <meta charSet="UTF-8"/>
                
                <title> Tasty - Register</title>                
            </head>            
            <body>
            <div class="register-page">
                <h2 id="title">Edit</h2>
                
                    <form class = "register-form" onSubmit={submitForm}>
                        <div class="register-form-group">
                            <label id="name-label" for="name">Name</label><br></br>
                            <input type="text" name="name" id="name" class="form-control" placeholder={name} required
                            value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div class = "register-form-group">
                            <label id="email-label" for="email">Email</label><br></br>
                            <input type="text" class="form-control" name="email" placeholder={email} required="required" 
                            value={email} onChange={e => setEmail(e.target.value)}/> <span style={{
                                fontWeight: 'bold', color: 'red'
                            }}>{emailError}</span>
                        </div>
                        <div class="register-form-group">
                            <label id="address-label" for="address">Address</label><br></br>
                            <input type="text" name="address" id="address" class="form-control" placeholder={address} required
                            value={address} onChange={e => setAddress(e.target.value)}/>
                        </div>
                        <div class="register-form-group">
                            <table styles="width: 1055px; height: 100px; margin-bottom: 100px;" class="center">
                                <thead>
                                <tr>
                                    <th>Earned points: </th>                                    
                                </tr>
                                </thead>
    
                                <tbody>
                                    {point.map(tableUserInfo => (
                                        <tr>
                                            <td>{tableUserInfo.points}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <Link to="/Profile"><button>Submit Changes</button></Link>
                        </div>
                    </form>
                </div>


            </body>
            </html>
    )
}
export default Profile;