import React, {useState, useEffect} from "react";


import './Reservation.css';
import Popup1 from "./Popup1";
import Popup2 from "./Popup2";
import Popup3 from "./Popup3";

const Reservation = (props) => {

    const {
        isAuth
    } = props;

    const [popup3Trigger, setPopup3Trigger] = useState(false)
    const [popup2Trigger, setPopup2Trigger] = useState(false)
    const [popup1Trigger, setPopup1Trigger] = useState(false)
    const [tablesAvailable, setTablesAvailable] = useState('10')
    const [isHoliday, setIsHoliday] = useState(false);
    const [holidayList, setHolidayList] = useState(["2021-07-04"]);
    const [fullName, setFullName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [numGuests, setNumGuests] = useState('');
    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('');
    const [fullNameErr, setFullNameErr] = useState('')
    const [contactNumberErr, setContactNumberErr] = useState('')
    const [emailAddressErr, setEmailAddressErr] = useState('')
    const [numGuestsErr, setNumGuestsErr] = useState('')
    const [resDateErr, setResDateErr] = useState('')
    const [resTimeErr, setResTimeErr] = useState('')

    const clearForm = (e) => {
        setFullName('')
        setContactNumber('')
        setEmailAddress('')
        setNumGuests('')
        setResDate('')
        setResTime("")
        setFullNameErr('')
        setContactNumberErr('')
        setEmailAddressErr('')
        setNumGuestsErr('')
        setResDateErr('')
        setResTimeErr("")
        
    }
    

    const handleSubmit = (e) =>{
        const isValid = formValidation()
       
        if(isAuth === false && isValid === true && isHoliday === false){
            setPopup1Trigger(true)
        }
        if(isAuth === false && isValid === true && isHoliday === true){
            setPopup2Trigger(true)
        }
        if(isAuth === true && isValid === true && isHoliday === true){
            setPopup3Trigger(true)
        }
        
    }

    const checkHoliday =()=>{
        if (holidayList.includes(resDate)){
            setIsHoliday(true)
        } else {
            setIsHoliday(false)
        }
        
    }

    const formValidation =()=>{
        const fullNameError = {}
        const contactNumberError =  {}
        const emailAddressError = {}
        const numGuestsError = {}
        const resDateError = {}
        const resTimeError = {}
        let isValid = true

        if(fullName === ''){
            fullNameError.errFullName = "Full Name is required";
            isValid = false;
        }
        if(contactNumber === ''){
            contactNumberError.errContactNum = "Contact Number is required";
            isValid = false;
        }
        if(emailAddress === ''){
            emailAddressError.errEmail = "Email Address is required"
            isValid = false;
        }
        if(numGuests === ""){
            numGuestsError.errNumGuests = "Number of Guests is required"
            isValid = false;
        }
        if(resDate === ''){
            resDateError.errDate = "Reservation Date is required"
            isValid = false;
        }
        if(resTime === ""){
            resTimeError.errTime = "Reservation Time is required"
            isValid = false;
        }
        if(!emailAddress.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
            emailAddressError.errEmail = "Email Address is invalid"
            isValid = false;
        }
        if(!contactNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)){
            contactNumberError.errContactNum = "Contact Number is invalid";
            isValid = false;
        }
        setFullNameErr(fullNameError)
        setContactNumberErr(contactNumberError)
        setEmailAddressErr(emailAddressError)
        setNumGuestsErr(numGuestsError)
        setResDateErr(resDateError)
        setResTimeErr(resTimeError)

        return isValid;
    }

    console.log(fullName, contactNumber,emailAddress, numGuests, resDate, resTime)


    useEffect(()=> checkHoliday(),[handleSubmit])

    return (
        <div>
            <div className="res-background">
               <h1 className="title-res">Make A Reservation</h1>
                    <div className="res-form">
                        <label>Name:</label>
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
                        {Object.keys(fullNameErr).map((key)=>{
                            return <div 
                            className = "err-msg">{fullNameErr[key]}</div>
                    })}     

                         <label>Contact Number:</label>
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
                        {Object.keys(contactNumberErr).map((key)=>{
                            return <div 
                            className = "err-msg">{contactNumberErr[key]}</div>
                    })} 
                         <label>Email Address:</label>
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
                        {Object.keys(emailAddressErr).map((key)=>{
                            return <div 
                            className = "err-msg">{emailAddressErr[key]}</div>
                    })}                        
                         <label>Number of Guests:</label>
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
                        {Object.keys(numGuestsErr).map((key)=>{
                            return <div 
                            className = "err-msg">{numGuestsErr[key]}</div>
                    })} 
                         <label>Date:</label>
                         <input
                            className="form3"
                            id="resDate"
                            data-testid="testResDate"
                            required
                            value={resDate}
                            onChange={(e) => setResDate(e.target.value)}
                            type="date"
                            name="resDate"
                            placeholder="Date"
                        />  
                        {Object.keys(resDateErr).map((key)=>{
                            return <div 
                            className = "err-msg">{resDateErr[key]}</div>
                    })} 
                         <label>Time:</label>
                         <input
                            className="form3"
                            id="resTime"
                            data-testid="testResTime"
                            required
                            value={resTime}
                            onChange={(e) => setResTime(e.target.value)}
                            type="time"
                            name="resTime"
                            placeholder="Time"
                        /> 
                        {Object.keys(resTimeErr).map((key)=>{
                            return <div 
                            className = "err-msg">{resTimeErr[key]}</div>
                    })} 
                        


                    </div>

                    <div className="btn-container">
                        <button date-testid="submitRes" onClick={handleSubmit} className="btn-submit">Submit Reservation</button>
                        <button date-testid="submitRes" onClick={clearForm} className="btn-clear">Clear Form</button>
                    </div>
                    <div>
                        <Popup1 trigger={popup1Trigger} setTrigger={setPopup1Trigger}>
                            <h1>Would you like to register to earn rewards?</h1>
                        </Popup1>
                        <Popup2 trigger={popup2Trigger} setTrigger={setPopup2Trigger}>
                            <h3>You have choosen to make a reservation on a Holiday</h3>
                            <h3>We require a Credit Card on file to reserve a table on a Holiday</h3>
                            <h3>Please register</h3>
                        </Popup2>
                        <Popup3 trigger={popup3Trigger} setTrigger={setPopup3Trigger}>
                        <h3>You have choosen to make a reservation on a Holiday</h3>
                        <h3>A $10 holding fee will be automatically charged to your Credit Card</h3>
                        <h3>Your fee will be refunded, unless you "No Show"</h3>
                        </Popup3>
                    </div>
            </div>
        </div>
    )
}

export default Reservation;