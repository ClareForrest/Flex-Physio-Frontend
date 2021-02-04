import { HeadingMain } from '../../styled/main';
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export function CurrentBooking() {
  const [currentBooking, setCurrentBooking] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bookings/current`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((body) => setCurrentBooking(body));
  }, []);
  // shows the most recently saved booking in the array

  console.log(currentBooking);
  return (
    currentBooking && (
      <>
        <HeadingMain>Your Current Booking</HeadingMain>
        <div>
          <Card class="booking-cards">
            <p>Location: {currentBooking.location}</p>
            <p>Date: {currentBooking.date}</p>
            <p>Time: {currentBooking.time}</p>
            <p>Service: {currentBooking.name}</p>
            <p>Cost: ${currentBooking.cost}</p>
          </Card>
          <Link to="/booking/show/:id">Edit Booking</Link>
        </div>
      </>
    )
  );
}
