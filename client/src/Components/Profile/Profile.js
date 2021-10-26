import React, {useState, useEffect} from "react";

import validator from 'validator'


const Profile = () => {
    var [address, setAddress] = useState("");
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    const [address1, setAddress1] = useState("");
    const [name1, setName1] = useState("");
    const [email1, setEmail1] = useState("");
    const [emailError, setEmailError] = useState('');
    const [point, setEarnedPoint] = useState([]);
   
    
    

    const getInfo = async e => {
        try {
            const id = JSON.parse(localStorage.getItem('ID'));
            const response = await fetch(`http://localhost:5000/Profile-info/${id}`);
            const jsonData = await response.json();
            setAddress1(jsonData.address);
            setName1(jsonData.name);
            setEmail1(jsonData.email);
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        getInfo();
    });
    
    const getPoint = async e => {
        try {
            const id = JSON.parse(localStorage.getItem('ID'));
            const response = await fetch(`http://localhost:5000/Profile/${id}`);
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
            const id = JSON.parse(localStorage.getItem('ID'));
            if (name === "") {
                name = name1;}
            if (email === "") {
                email = email1;}
            if (address === "") {
                address = address1;
            } else {
                
            }

            if (validator.isEmail(email)) {
                setEmailError('');            
            } else {
                setEmailError('Not Valid Email');
                return;
            }                                
            const body ={address, name, email, id};
            const response = await fetch(`http://localhost:5000/Profile-edit`,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            const jsonData = await response.json();
            if (jsonData === "updated"){
                alert("Changes Completed");
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
                            <input type="text" name="name" id="name" class="form-control" placeholder={name1}
                            value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div class = "register-form-group">
                            <label id="email-label" for="email">Email</label><br></br>
                            <input type="text" class="form-control" name="email" placeholder={email1} 
                            value={email} onChange={e => setEmail(e.target.value)}/> <span style={{
                                fontWeight: 'bold', color: 'red'
                            }}>{emailError}</span>
                        </div>
                        <div class="register-form-group">
                            <label id="address-label" for="address">Address</label><br></br>
                            <input type="text" name="address" id="address" class="form-control" placeholder={address1} 
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
                            <button type="submit">Submit Changes</button>
                        </div>
                    </form>
                </div>


            </body>
            </html>
    )
}
export default Profile;