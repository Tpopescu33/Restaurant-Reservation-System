import React, {useState} from 'react'
import './TablePicker.css'




function TablePicker(props) {

   

    

    return (props.trigger) ? (
        <div className="table-popup">
            <div className="table-popup-inner">
                <button className="table-dismiss-btn" onClick={()=> props.setTrigger(false)}>Dismiss</button>
                <button className="table-accept-btn" onClick={()=> props.setTrigger(false)}>Accept</button>
                <button className="table-a1-btn" onClick={()=>props.setTable('A1')}>8 Persons</button>
                <button className="table-a2-btn" onClick={()=>props.setTable('A2')}>8 Persons</button>
                {props.children}
            </div>

        </div>
    ) : "";
}

export default TablePicker