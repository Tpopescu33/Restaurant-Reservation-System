import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css";


function NavBar(props) {

    const {
        isAuth,
        setIsAuth,
    } = props;

    const handleSignOut = (e) => {
        setIsAuth(false)
    }

    return (
        <div>
            <nav className='navbar'>
                <ul className='list'>
                   
                    <Link to="/" className="nav">Home</Link>
                    <Link to="/menu" className="nav">Menu</Link>
                    <Link to="/reservation" className="nav">Make A Reservation </Link>
                    <Link to="/about-us" className="nav">About Us</Link>

                    {(isAuth === true) ? (
                        <Link to="/login"><button className="btn-signin" onClick={handleSignOut}>Sign Out</button></Link>
                    ) : (
                        <div>
                            <Link to="/login"> <button className="btn-signin">Sign In</button> </Link>
                            <Link to="/Registration"> <button className="btn-register">Register</button> </Link>
                        </div>
                    )}
                    
                </ul>
            </nav>
        </div>
    )
}

export default NavBar