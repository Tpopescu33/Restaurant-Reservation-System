import React, {useState} from "react";
import { Link } from 'react-router-dom';

import './Reservation.css';

const Reservation = (props) => {

    const {
        isAuth
    } = props;

    const [isHoliday, setIsHoliday] = useState();
    const [fullName, setFullName] = useState();
    const [contactNumber, setContactNumber] = useState();
    const [emailAddress, setEmailAddress] = useState();
    const [numGuests, setNumGuests] = useState();
    const [resDate, setResDate] = useState();
    const [resTime, setResTime] = useState();




    return (
        <div>
            <div className="res-background">
               <h1 className="title-res">Reservations</h1>
                    <div className="res-form">

                        <input
                            className="form1"
                            id="fullName"
                            data-testid="testFullName"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                        />   
                         <input
                            className="form1"
                            id="contactNumber"
                            data-testid="testContactNumber"
                            required
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            type="text"
                            name="contactNumber"
                            placeholder="Contact Number"
                        />  
                         <input
                            className="form1"
                            id="emailAddress"
                            data-testid="testEmail"
                            required
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            type="text"
                            name="emailAddress"
                            placeholder="Email Address"
                        />  
                         <input
                            className="form2"
                            id="numGuests"
                            data-testid="testGuests"
                            required
                            value={numGuests}
                            onChange={(e) => setNumGuests(e.target.value)}
                            type="number"
                            name="numGuests"
                            placeholder="Number of Guests"
                        />  
                         <input
                            className="form2"
                            id="resDate"
                            data-testid="testResDate"
                            required
                            value={resDate}
                            onChange={(e) => setResDate(e.target.value)}
                            type="date"
                            name="resDate"
                            placeholder="Date"
                        />  
                         <input
                            className="form2"
                            id="resTime"
                            data-testid="testResTime"
                            required
                            value={resTime}
                            onChange={(e) => setResTime(e.target.value)}
                            type="time"
                            name="resTime"
                            placeholder="Time"
                        /> 


                    </div>
            </div>
        </div>
    )
}

export default Reservation;