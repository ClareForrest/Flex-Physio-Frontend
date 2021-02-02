import { HeadingMain } from '../styled/main';
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
  
  export function CurrentBooking(){
    const [currentBooking, setCurrentBooking] = useState([])
    useEffect(() => {
      fetch('http://localhost:3000/api/bookings/current')
      .then((response) => response.json())
      .then((body) => {
        // needs to show the most recently saved booking. Would that be .last??
        console.log(body.last)
        setCurrentBooking(body.last)
      });
    }, []);

    async function onFormSubmit(event) {
      event.preventDefault();
      try {
        const response = await fetch("http://localhost:3000/api/booking/:id", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ booking: { location, service, date, time } }),
        });
        if (response.status >= 400) {
          throw new Error("incorrect credentials");
        } else {
          const response = await fetch("http://localhost:3000/api/booking/:id", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ booking: { location, service, date, time } }),
          });
          const { jwt } = await response.json();
          localStorage.setItem("token", jwt);
          // redirect to loggedin home page
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    return (
      <>
      <form onSubmit={onFormSubmit} >
        <HeadingMain>Your Current Booking</HeadingMain>
        <Card>


        </Card>
        <input type="submit" value="Delete Booking" />
      </form>
    </>
  );
}
