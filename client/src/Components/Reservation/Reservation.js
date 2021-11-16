import React, {useState, useEffect} from "react";
import Axios from 'axios';

import './Reservation.css';
import Popup1 from "./Popup1";
import Popup2 from "./Popup2";
import Popup3 from "./Popup3";
import Popup4 from "./Popup4";
import TablePicker from "./TablePicker";
import Select from "react-dropdown-select"

const Reservation = (props) => {

    const {
        isAuth,
        userID
    } = props;

    const times = [{
                    value: '11:00',
                    text:"11:00"
                },{
                    value: '11:30',
                    text:"11:30"
                },
                    {
                    value: '12:00',
                    text:"12:00"
                },{
                    value:'12:30',
                    text: '12:30'
                    
                },
                    {
                    value: '1:00',
                    text:"1:00"
                },{
                    value: '1:30',
                    text:"1:30"},
                    {
                        value: '2:00',
                        text:"2:00"
                    },{
                        value: '2:30',
                        text:"2:30"
                    },
                        {
                        value: '3:00',
                        text:"3:00"
                    },{
                        value:'3:30',
                        text: '3:30'
                        
                    },
                        {
                        value: '4:00',
                        text:"4:00"
                    },{
                        value: '4:30',
                        text:"4:30"},
                        {
                            value: '5:00',
                            text:"5:00"
                        },{
                            value: '5:30',
                            text:"5:30"
                        },
                            {
                            value: '6:00',
                            text:"6:00"
                        },{
                            value:'6:30',
                            text: '6:30'
                            
                        },
                            {
                            value: '7:00',
                            text:"7:00"
                        },{
                            value: '7:30',
                            text:"7:30"},
                            {
                                value: '8:00',
                                text:"8:00"
                            },{
                                value: '8:30',
                                text:"8:30"
                            },
                                {
                                value: '9:00',
                                text:"9:00"
                            },{
                                value:'9:30',
                                text: '9:30'
                                
                            }]

    const [table, setTable] = useState([])
    const [tablePicked, setTablePicked] = useState(false)
    const [tablePickerTrigger, setTablePickerTrigger] = useState(false)
    const [popup4Trigger, setPopup4Trigger] = useState(false)
    const [popup3Trigger, setPopup3Trigger] = useState(false)
    const [popup2Trigger, setPopup2Trigger] = useState(false)
    const [popup1Trigger, setPopup1Trigger] = useState(false)
    const [popup5Trigger, setPopup5Trigger] = useState(false)
    const [tablesAvailable, setTablesAvailable] = useState(true)
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
    const [reservedTables, setReservedTables] = useState([""])
    const [tempReservedTables, setTempReservedTables] = useState([''])
    const [tempResTime, setTempResTime] = useState(['']);
    const [tableString, setTableString] = useState('')
    const [tempReservedTablesArray, setTempReservedTablesArray] = useState([""])

    // const handleArray = () => {
        

    //     table.map((val, key)=> {
    //         return <div>
    //             {
                
    //                 setTableString(table.toString())
                    
                
    //             }

    //         </div>
    //     })

       
    // }

    

//     const mapResTime = () => {
//         setResTime('')
// setResTime(tempResTime)
//     }            

//     const handleChange = (e, result) => {
        
//         setTempResTime(e)
        

//       }


    const pickTable = (e) => {
        setTablePickerTrigger(true)
    }

    const checkArray = ()=> {
        
        var tempString = tempReservedTablesArray.toString()
        var tempArray = tempString.split(',')
        setReservedTables(tempArray)
    }

    const mapReservedTables = () => {
        setReservedTables([])
        setTempReservedTablesArray([])

        tempReservedTables.map((val, key)=> {
            return <div>

                {setTempReservedTablesArray(table=> [...table, val.table])}
            </div>
        })
        
    }

    const handleResTime = (resTime, resDate) => {
        if (resTime != null && resDate != null) {

        Axios.get(`http://localhost:5001/GetReservedTables`, {
            params: {
                resTime: resTime,
                resDate: resDate
            }
        }).then((response) => {
            
            setTempReservedTables(response.data)
            // mapReservedTables()
            
        }).catch((error)=> {
            console.log(error)
        } )
    }}

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
        setTablePicked(false)
        setTable([])
        setTableString('')
    }
    
    const handleTableString = () =>{

        setTableString('')
        table.map((val, key)=> {
            return <div>
                {
                
                    setTableString(table.toString())
                    
                
                }

            </div>
        }) 
        console.log("tablestring",tableString)
    }


    const handleSubmit = (e) =>{
        const isValid = formValidation()

        // table.map((val, key)=> {
        //     return <div>
        //         {
                
        //             setTableString(table.toString())
                    
                
        //         }

        //     </div>
        // }) 
        // console.log("tablestring",tableString)
        if (tableString != ''){

        if(isAuth === true && isValid === true && isHoliday === false && tablesAvailable === true){


           
            

           Axios.post('http://localhost:5001/MakeReservation', {
                userID: userID,
                fullName: fullName,
                contactNumber: contactNumber,
                emailAddress: emailAddress, 
                numGuests: numGuests, 
                resDate: resDate, 
                resTime: resTime,  
                table: tableString

            }).then(() => {
                console.log("sent")
                clearForm()
            }) 
        }
       
        if(isAuth === false && isValid === true && isHoliday === false && tablesAvailable === true){
           

          

           Axios.post('http://localhost:5001/MakeReservation', {
                userID: userID,
                fullName: fullName,
                contactNumber: contactNumber,
                emailAddress: emailAddress, 
                numGuests: numGuests, 
                resDate: resDate, 
                resTime: resTime,  
                table: tableString

            }).then(() => {
                console.log("sent")
                clearForm()
            }) 
        }
        if(isAuth === false && isValid === true && isHoliday === true && tablesAvailable === true){
            setPopup2Trigger(true)
        }
        if(isAuth === true && isValid === true && isHoliday === true && tablesAvailable === true){
            setPopup3Trigger(true)



            Axios.post('http://localhost:5001/MakeReservation', {
                userID: userID,
                fullName: fullName,
                contactNumber: contactNumber,
                emailAddress: emailAddress, 
                numGuests: numGuests, 
                resDate: resDate, 
                resTime: resTime,  
                table: tableString

            }).then(() => {
                console.log("sent")
                clearForm()
            }) 

        }
        if(isValid === true && tablesAvailable === false){
            setPopup4Trigger(true)
        }
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
        } else if(!contactNumber.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/)){
            contactNumberError.errContactNum = "Contact Number is invalid";
            isValid = false;
        }
        if(emailAddress === ''){
            emailAddressError.errEmail = "Email Address is required"
            isValid = false;
        } else if (!emailAddress.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
                emailAddressError.errEmail = "Email Address is invalid"
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
        
        setFullNameErr(fullNameError)
        setContactNumberErr(contactNumberError)
        setEmailAddressErr(emailAddressError)
        setNumGuestsErr(numGuestsError)
        setResDateErr(resDateError)
        setResTimeErr(resTimeError)

        return isValid;
    }

    console.log(userID,fullName, contactNumber,emailAddress, numGuests, resDate, resTime, tablePicked, table, tableString)

    const testResTable=() => {
        console.log(reservedTables)
    }
    const checkIfUser =()=> {
        if (isAuth == false) {
            setPopup1Trigger(true)
        }
    }

    const checkGuestNumber = () => {
        var tempGuests = parseInt(numGuests)
        if (tempGuests > 16){
            setPopup5Trigger(true)
            setNumGuests(0)
        }
    }

    useEffect(()=> checkIfUser(),[])
    useEffect(()=> checkHoliday(),[handleSubmit])
    useEffect(()=> handleResTime(resTime, resDate),[resTime, resDate])
 //   useEffect(() => mapResTime(tempResTime), [tempResTime] )
    useEffect(()=> testResTable(), [reservedTables])
    useEffect(()=> mapReservedTables(), [tempReservedTables])
    useEffect(()=> checkArray(), [tempReservedTablesArray])
    useEffect(()=> handleTableString(), [table])
    useEffect(()=> checkGuestNumber(), [numGuests])

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
                            min="1"
                            name="numGuests"
                            placeholder="Number of Guests"
                        />  
                        {Object.keys(numGuestsErr).map((key)=>{
                            return <div 
                            className = "err-msg">{numGuestsErr[key]}</div>
                    })} 

                        {/* <label>Table # Picked</label>
                        <h1 className="form3">{table}</h1> */}


                         <label>Date:</label>
                         <input
                            className="form3"
                            id="resDate"
                            data-testid="testResDate"
                            
                            min='2021-11-14'
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

                    {/* <Select 
                    className="form4"
                    data-testid="testResTime"
                    placeholder= "Select Time"
                    value={resTime}
                    type ="text"
                    required
                    select
                    labelField= "value"
                    options= {times} 
                    onChange={(e) => handleChange(e)}/> */}

                <select 
                className="form4"
                name="selectList" 
                id="selectList"
                type ="text"
                value={resTime}
                placeholder= "Select Time"
                onChange={(e) => setResTime(e.target.value)}>
                <option value="11:00">11:00</option>
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="1:00">1:00</option>
                <option value="1:30">1:30</option>
                <option value="2:00">2:00</option>
                <option value="2:30">2:30</option>
                <option value="3:00">3:00</option>
                <option value="3:30">3:30</option>
                <option value="4:00">4:00</option>
                <option value="4:30">4:30</option>
                <option value="5:00">5:00</option>
                <option value="5:30">5:30</option>
                <option value="6:00">6:00</option>
                <option value="6:30">6:30</option>
                <option value="7:00">7:00</option>
                <option value="7:30">7:30</option>
                <option value="8:00">8:00</option>
                <option value="8:30">8:30</option>
                <option value="9:00">9:00</option>
                <option value="9:30">9:30</option>
                </select>

                      
                        


                    </div>

                    <div className="btn-container">

                        {(tablePicked===true)? (
                            <div>
                            <button date-testid="submitRes" onClick={handleSubmit} className="btn-submit">Submit Reservation</button>
                            <button date-testid="submitRes" onClick={pickTable} className="btn-submit">Edit Table</button> 
                            <button date-testid="submitRes" onClick={clearForm} className="btn-clear">Clear Form</button>
                            </div>):(
                            <div>
                            <button date-testid="submitRes" onClick={pickTable} className="btn-submit">Pick a Table</button> 
                            <button date-testid="submitRes" onClick={clearForm} className="btn-clear">Clear Form</button>  
                            </div> 
                        )}
                        
                        
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
                        <Popup4 trigger={popup4Trigger} setTrigger={setPopup4Trigger}>
                            <h2>There are no tables available, Please choose another date</h2>
                            <h2>We are very sorry for the inconvenience</h2>
                        </Popup4>
                        <Popup4 trigger={popup5Trigger} setTrigger={setPopup5Trigger}>
                            <h2>The max party size is 16</h2>
                            <h2>If you wish to book a larger party please call the resturant</h2>
                            <h2>We are very sorry for the inconvenience</h2>
                        </Popup4>
                        <TablePicker trigger={tablePickerTrigger} setTrigger={setTablePickerTrigger} setTablePicked={setTablePicked} setTable={setTable} table={table} numGuests={numGuests} setNumGuests={setNumGuests} setReservedTables={setReservedTables} reservedTables={reservedTables}>
                            <h1>Please pick a table</h1>
                        </TablePicker>

                    </div>
            </div>
        </div>
    )
}

export default Reservation;