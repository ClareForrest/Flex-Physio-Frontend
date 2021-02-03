import { HeadingMain } from '../styled/main';
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
  
  export function CurrentBooking(){
    const [currentBooking, setCurrentBooking] = useState([])
    useEffect(() => {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bookings/current`)
      .then((response) => response.json())
      .then((body) => setCurrentBooking(body))
    }, []);
    // shows the most recently saved booking in the array

    return (
      currentBooking && (
      <>
        <HeadingMain>Your Current Booking</HeadingMain>
          {currentBooking.map((booking, index) => {
            return (
              <div key={index}>
                <Card class="booking-cards">
                  <p>Location: {booking.location}</p>
                  <p>Date: {booking.date}</p>
                  <p>Time: {booking.time}</p>
                  <p>Service: {booking.service}</p>
                  <p>Cost: ${booking.cost}</p>
                </Card>
                <Link to="/booking/show/:id">Edit Booking</Link>
              </div>
            )
          }
        )}
      </>
      )
    )
  }
