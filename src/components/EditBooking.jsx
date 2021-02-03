import React from "react";
// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { HeadingMain } from './styled/HeadingMain';
// import { CurrentBooking } from './CurrentBooking';

export function EditBooking() {
  // Do I need to invoke CurrentBooking function to give me the details to edit.
  // or will this already be in params in the URL?
  // CurrentBooking already has these. Just need to get the :id out in order to edit??

  // const [location, setLocation] = useState("");
  // const [service, setService] = useState("");
  // const [employee, setEmployee] = useState("");
  // const [date, setDate] = useState("");
  // const [time, setTime] = useState("");
  // const history = useHistory();

  // const user = JSON.parse(localStorage.getItem("user"))
  // const id = user.id

  // useEffect(() => {
  //   fetch(`http://localhost:3000/api/bookings/show/${id}`, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((user) => {
  //       setLocation(user.booking.location)
  //       setService(user.service);
  //       setEmployee(user.booking.employee)
  //       setDate(user.booking.date);
  //       setTime(user.booking.time);
  //     });
  // }, [id]);

  async function onEditSubmit(e) {
    e.preventDefault()
    try {
      
      await fetch(`http://localhost:3000/api/bookings/show/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          user: {
            location: location,
            service: service,
            employee: practitioner,
            date: date,
            time: time,
          },
        }),
      });
      history.push("/");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <HeadingMain>Edit Booking:</HeadingMain>
      <form onSubmit={onEditSubmit}>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="service">Service:</label>
          <input
            type="text"
            name="service"
            id="service"
            value={service}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="employee">Practitioner:</label>
          <input
            type="text"
            name="employee"
            id="employee"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="time"
            name="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <input id="submit" type="submit" value="submit" />
      </form>
    </>
)
  }
