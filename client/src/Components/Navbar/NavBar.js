import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";


function NavBar() {


    return (
        <div>
            <nav className='navbar'>
                <ul className='list'>
                   
                    <Link to="/" className="nav">Home</Link>
                    <Link to="/menu" className="nav">Menu</Link>
                    <Link to="/reservation" className="nav">Make A Reservation </Link>
                    <Link to="/login" className="nav">Login</Link>
                    <Link to="/about-us" className="nav">About Us</Link>
                    
                </ul>
            </nav>
        </div>
    )
}

export default NavBar