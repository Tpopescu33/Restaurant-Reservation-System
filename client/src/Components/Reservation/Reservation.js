import React, {useState} from "react";
import { Link } from 'react-router-dom';

import './Reservation.css';

const Reservation = () => {


    return (
        <div>
            <html lang="en">
                <head>
                    <meta charSet="UTF-8"/>
                
                    <title> Tasty - Register</title>                
                </head>            
                <body>
                    <div class="reservation-form">
                        <form action= "#">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Full Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Full Name"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Contact Number</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Contact Number"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">No.of guests</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" placeholder="# of guests"/>
                            </div>
                            <div class="form-group">
                                <label>Reservation Date</label>
                                <input class="form-control" id="reservere" placeholder="date"type="date"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Reservation Time</label>
                                <input type="time" class="form-control" id="exampleInputEmail1" placeholder="Time"/>
                            </div>
                
                            <br/>
                            <button class="btn btn-primary btn-lg">SUBMIT</button>
                        </form>
                    </div>
                </body>
            </html>
        </div>
    )
}

export default Reservation;