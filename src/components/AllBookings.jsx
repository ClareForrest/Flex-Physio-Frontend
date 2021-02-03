import { HeadingMain } from '../styled/main';
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';

  export function AllBookingsFunction(){
    const [allBookings, setAllBookings] = useState([])
    useEffect(() => {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bookings/history`)
      .then((response) => response.json())
      .then((body) => setAllBookings(body))
    }, []);

    return (
      allBookings && (
      <>
        <HeadingMain>Your Previous Bookings</HeadingMain>
            {allBookings.map((booking, index) => {
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
      )
    );
  }
