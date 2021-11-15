import React, { useState, useEffect } from "react";

import "./Admin.css";

const Admin = () => {
  const [reservations, setReservations] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchTime, setSearchTime] = useState("");
 
  const selectReservations = async (e) => {
    try {
      const response = await fetch(`http://localhost:5001/Admin`);
      const jsonData = await response.json();
      setReservations(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  const cancelReservation = async (id) => {
    try {
      
      const body = {id};
      console.log(body);
      const response = await fetch("http://localhost:5001/Admin-cancel",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            const jsonData = await response.json();
            if (jsonData === "deleted") {
              alert("Reservation is canceled.");
              window.location=("/Admin");
            }
    } catch (err) {
      console.log(err.message);
    }
  }

  const searchByName = async e => {
    try {
      const body = {searchName};
            const response = await fetch("http://localhost:5001/Admin-searchByName",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            const jsonData = await response.json();
            setReservations(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  const searchByTime = async (e)=> {
    try {
      const body = {searchTime};
            const response = await fetch("http://localhost:5001/Admin-searchByTime",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
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
    <div >
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
                  <input type="text" class="form-control" id= "search-name" name="search-name" placeholder="Search by Name" required
                                value = {searchName}
                                onChange={e=>setSearchName(e.target.value)}/>
                  </div>
                  <button type="submit" onClick={searchByName}>Search</button>
                </div>
              </div>

              <div id="time-search">
                <div class="panel-body">
                  <div>
                  <input type="time" class="form-control" id= "search-time" name="search-time"  required
                                value = {searchTime}
                                onChange={e=>setSearchTime(e.target.value)}/>
                  </div>
                  <button type="submit" onClick={searchByTime}>Search</button>
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
                    <th>Delete </th>
                  </tr>
                </thead>

                <tbody>
                  {reservations.map((users) => (
                    <tr key={users.userIDs}>
                      <td>{users.userIDs}</td>
                      <td>{users.name}</td>
                      <td>{users.email}</td>
                      <td>{users.password}</td>
                      <td>
                        <button type="button" onClick={() => cancelReservation(users.userIDs)}>x</button>
                      </td>
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
        </div>
  );
};

export default Admin;
