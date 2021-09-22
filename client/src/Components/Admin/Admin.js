import React, {useState} from "react";
import {Link} from "react-router-dom";


const Admin = () => {



    return (
        <html>
            <head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body>
              <div class="title-1">
                <h1><center>Reservations List</center></h1>
              </div>
              <div  class="col-100">
                
                <div class="col-15">
                    <span>this is menu tab</span>
                </div>

                <div class="col-37">
                    <span>this is regular reserved table  </span>
                </div>

                <div class="col-372">
                    <span>this is combined reserved table  </span>
                </div>
              </div>
            </body>
        </html>
    )
}

export default Admin;