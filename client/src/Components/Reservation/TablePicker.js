import React, {useState, useEffect} from 'react'
import './TablePicker.css'
import './Reservation.js'




function TablePicker(props) {



const [reservedTables, setReservedTables] = useState(["C2","C1","D3","D4","B1"])
const [table, setTable] = useState("please pick a table")  
const [activeButtonA1, setActiveButtonA1] = useState(false)
const [activeButtonA2, setActiveButtonA2] = useState(false)
const [activeButtonB1, setActiveButtonB1] = useState(false)
const [activeButtonB2, setActiveButtonB2] = useState(false)
const [activeButtonC1, setActiveButtonC1] = useState(false)
const [activeButtonC2, setActiveButtonC2] = useState(false)
const [activeButtonC3, setActiveButtonC3] = useState(false)
const [activeButtonC4, setActiveButtonC4] = useState(false)
const [activeButtonD1, setActiveButtonD1] = useState(false)
const [activeButtonD2, setActiveButtonD2] = useState(false)
const [activeButtonD3, setActiveButtonD3] = useState(false)
const [activeButtonD4, setActiveButtonD4] = useState(false)


const clearButtons = () => {
    setTable("please pick a table")
    setActiveButtonA1(false)
    setActiveButtonA2(false)
    setActiveButtonB1(false)
    setActiveButtonB2(false)
    setActiveButtonC1(false)
    setActiveButtonC2(false)
    setActiveButtonC3(false)
    setActiveButtonC4(false)
    setActiveButtonD1(false)
    setActiveButtonD2(false)
    setActiveButtonD3(false)
    setActiveButtonD4(false)
    
}

const handleA1 = (e) => {
    clearButtons()
    setTable("A1")
    setActiveButtonA1(true)
}

const handleActiveA1 = (e) => {
    setTable("please pick a table")
    setActiveButtonA1(false)
}

const handleA2 = (e) => {
    clearButtons()
    setTable("A2")
    setActiveButtonA2(true)
}

const handleActiveA2 = (e) => {
    setTable("please pick a table")
    setActiveButtonA2(false)
}

const handleB1 = (e) => {
    clearButtons()
    setTable("B1")
    setActiveButtonB1(true)
}

const handleActiveB1 = (e) => {
    setTable("please pick a table")
    setActiveButtonB1(false)
}

const handleB2 = (e) => {
    clearButtons()
    setTable("B2")
    setActiveButtonB2(true)
}

const handleActiveB2 = (e) => {
    setTable("please pick a table")
    setActiveButtonB2(false)
}

const handleC1 = (e) => {
    clearButtons()
    setTable("C1")
    setActiveButtonC1(true)
}

const handleActiveC1 = (e) => {
    setTable("please pick a table")
    setActiveButtonC1(false)
}

const handleC2 = (e) => {
    clearButtons()
    setTable("C2")
    setActiveButtonC2(true)
}

const handleActiveC2 = (e) => {
    setTable("please pick a table")
    setActiveButtonC2(false)
}
const handleC3 = (e) => {
    clearButtons()
    setTable("C3")
    setActiveButtonC3(true)
}

const handleActiveC3 = (e) => {
    setTable("please pick a table")
    setActiveButtonC3(false)
}

const handleC4 = (e) => {
    clearButtons()
    setTable("C4")
    setActiveButtonC4(true)
}

const handleActiveC4 = (e) => {
    setTable("please pick a table")
    setActiveButtonC4(false)
}
const handleD1 = (e) => {
    clearButtons()
    setTable("D1")
    setActiveButtonD1(true)
}

const handleActiveD1 = (e) => {
    setTable("please pick a table")
    setActiveButtonD1(false)
}

const handleD2 = (e) => {
    clearButtons()
    setTable("D2")
    setActiveButtonD2(true)
}

const handleActiveD2 = (e) => {
    setTable("please pick a table")
    setActiveButtonD2(false)
}
const handleD3 = (e) => {
    clearButtons()
    setTable("D3")
    setActiveButtonD3(true)
}

const handleActiveD3 = (e) => {
    setTable("please pick a table")
    setActiveButtonD3(false)
}

const handleD4 = (e) => {
    clearButtons()
    setTable("D4")
    setActiveButtonD4(true)
}

const handleActiveD4 = (e) => {
    setTable("please pick a table")
    setActiveButtonD4(false)
}

const loadInfo = (e) => {
    setTable(props.table)
}
   
const handleAccept=(e) =>  {
    props.setTrigger(false)
    if (table === "please pick a table"){
        props.setTablePicked(false)
        props.setTable(table)
    } else {
        props.setTablePicked(true)
        props.setTable(table)
    }

}

const handleDismiss = (e) => {
    props.setTrigger(false)
    props.setTable("please pick a table")
    setTable("please pick a table")
    props.setTablePicked(false)
    clearButtons()
    
}
useEffect(() => loadInfo, [])




console.log(activeButtonA1, table)
  

    return (props.trigger) ? (
        <div className="table-popup">
            <div className="table-popup-inner">
                <button className="table-dismiss-btn" onClick={handleDismiss}>Dismiss</button>
                <button className="table-accept-btn" onClick={handleAccept}>Accept</button>

                
                {(activeButtonA1===true && !reservedTables.includes("A1"))? 
                (<button className="table-a1-btn-active" onClick={handleActiveA1}>8 Persons</button>) : (!reservedTables.includes("A1"))?
                (<button className="table-a1-btn" onClick={handleA1}>8 Persons</button>) : 
                (<button className="table-a1-btn-reserved">8 Persons</button>)}
                
                {(activeButtonA2===true && !reservedTables.includes("A2"))? 
                (<button className="table-a2-btn-active" onClick={handleActiveA2}>8 Persons</button>) : (!reservedTables.includes("A2"))?
                (<button className="table-a2-btn" onClick={handleA2}>8 Persons</button>) : 
                (<button className="table-a2-btn-reserved">8 Persons</button>)}

                {(activeButtonB1===true && !reservedTables.includes("B1"))? 
                (<button className="table-b1-btn-active" onClick={handleActiveB1}>6 Persons</button>) : (!reservedTables.includes("B1"))?
                (<button className="table-b1-btn" onClick={handleB1}>6 Persons</button>) : 
                (<button className="table-b1-btn-reserved">6 Persons</button>)}

                {(activeButtonB2===true && !reservedTables.includes("B2"))? 
                (<button className="table-b2-btn-active" onClick={handleActiveB2}>6 Persons</button>) : (!reservedTables.includes("B2"))?
                (<button className="table-b2-btn" onClick={handleB2}>6 Persons</button>) : 
                (<button className="table-b2-btn-reserved">6 Persons</button>)} 

                {(activeButtonC1===true && !reservedTables.includes("C1"))? 
                (<button className="table-c1-btn-active" onClick={handleActiveC1}>4 Persons</button>) : (!reservedTables.includes("C1"))?
                (<button className="table-c1-btn" onClick={handleC1}>4 Persons</button>) : 
                (<button className="table-c1-btn-reserved">4 Persons</button>)}

                {(activeButtonC2===true && !reservedTables.includes("C2"))? 
                (<button className="table-c2-btn-active" onClick={handleActiveC2}>4 Persons</button>) : (!reservedTables.includes("C2"))?
                (<button className="table-c2-btn" onClick={handleC2}>4 Persons</button>) : 
                (<button className="table-c2-btn-reserved">4 Persons</button>)}

                {(activeButtonC3===true && !reservedTables.includes("C3"))? 
                (<button className="table-c3-btn-active" onClick={handleActiveC3}>4 Persons</button>) : (!reservedTables.includes("C3"))?
                (<button className="table-c3-btn" onClick={handleC3}>4 Persons</button>) : 
                (<button className="table-c3-btn-reserved">4 Persons</button>)}

                {(activeButtonC4===true && !reservedTables.includes("C4"))? 
                (<button className="table-c4-btn-active" onClick={handleActiveC4}>4 Persons</button>) : (!reservedTables.includes("C4"))?
                (<button className="table-c4-btn" onClick={handleC4}>4 Persons</button>) : 
                (<button className="table-c4-btn-reserved">4 Persons</button>)} 

                {(activeButtonD1===true && !reservedTables.includes("D1"))? 
                (<button className="table-d1-btn-active" onClick={handleActiveD1}>2 Persons</button>) : (!reservedTables.includes("D1"))?
                (<button className="table-d1-btn" onClick={handleD1}>2 Persons</button>) : 
                (<button className="table-d1-btn-reserved">2 Persons</button>)}

                {(activeButtonD2===true && !reservedTables.includes("D2"))? 
                (<button className="table-d2-btn-active" onClick={handleActiveD2}>2 Persons</button>) : (!reservedTables.includes("D2"))?
                (<button className="table-d2-btn" onClick={handleD2}>2 Persons</button>) : 
                (<button className="table-d2-btn-reserved">2 Persons</button>)}

                {(activeButtonD3===true && !reservedTables.includes("D3"))? 
                (<button className="table-d3-btn-active" onClick={handleActiveD3}>2 Persons</button>) : (!reservedTables.includes("D3"))?
                (<button className="table-d3-btn" onClick={handleD3}>2 Persons</button>) : 
                (<button className="table-d3-btn-reserved">2 Persons</button>)}

                {(activeButtonD4===true && !reservedTables.includes("D4"))? 
                (<button className="table-d4-btn-active" onClick={handleActiveD4}>2 Persons</button>) : (!reservedTables.includes("D4"))?
                (<button className="table-d4-btn" onClick={handleD4}>2 Persons</button>) : 
                (<button className="table-d4-btn-reserved">2 Persons</button>)} 


            </div>

        </div>
    ) : "";
}

export default TablePicker