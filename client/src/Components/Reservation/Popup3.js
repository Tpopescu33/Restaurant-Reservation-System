import React from 'react'
import './Popup.css'


function Popup3(props) {
    return (props.trigger) ? (
        <div className="popup2">
            <div className="popup-inner2">
                <button className="dismiss-btn" onClick={()=> props.setTrigger(false)}>Cancel</button>
                <button className="accept-btn" onClick={()=> props.setTrigger(false)}>Accept</button>
                
                {props.children}
            </div>

        </div>
    ) : "";
}

export default Popup3