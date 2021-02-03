import { HeadingMain } from '../styled/main';
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
  
  export function CurrentBooking(){
    const [currentBooking, setCurrentBooking] = useState([])
    useEffect(() => {
      fetch('http://localhost:3000/api/bookings/current')
      .then((response) => response.json())
      .then((body) => setCurrentBooking(body))
    }, []);
    // shows the most recently saved booking in the array

    return (
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
                </div>
              )
            }
          )}
    </>
  );
}
