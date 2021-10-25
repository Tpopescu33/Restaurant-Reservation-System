import React, { useState, useEffect } from "react";

import "./Admin.css";

const Admin = () => {
  const [reservations, setReservations] = useState([]);
  const selectReservations = async (e) => {
    try {
      const response = await fetch(`http://localhost:5000/Admin`);
      const jsonData = await response.json();
      setReservations(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    selectReservations();
  }, []);

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
      </head>
      <body>
        <div class="title-1">
          <h1>
            <center>Reservations List</center>
          </h1>
        </div>
        <div class="col-100">
          <div class="col-15">
          <span>this is menu tab</span>
            <div class="col-15-display">
            
            
            <div id="name-search">
              <div class="panel-body">
                
                  <div>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                    />
                  </div>
                  <button type="submit">
                    Search
                  </button>
                
              </div>
            </div>

            <div id="time-search">
              <div class="panel-body">
                
                  <div>
                    <input
                      type="time"
                      class="form-control"
                      placeholder="Search"
                    />
                  </div>
                  <button type="submit">
                    Search
                  </button>
                
              </div>
            </div>
            </div> 
          </div>

          <div class="col-37">
            <span>this is regular reserved table </span>
            <div align="center">
              <table class="table-1">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Booked at</th>
                    <th>  </th>
                  </tr>
                </thead>

                <tbody>
                  {reservations.map((users) => (
                    <tr>
                      <td>{users.userIDs}</td>
                      <td>{users.name}</td>
                      <td>{users.email}</td>
                      <td>{users.password}</td>
                      <th>
                        <button>DELETE</button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div class="col-372">
            <span>this is combined reserved table </span>
          </div>
        </div>
        
                 
      </body>
    </html>
  );
};

export default Admin;
