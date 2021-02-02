import { HeadingMain, HeadingSub } from '../styled/main';
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
  
  export function AllBookings(){
    const [allBookings, setAllBookings] = useState([])
    useEffect(() => {
      fetch('http://localhost:3000/api/bookings/history')
      .then((response) => response.json())
      .then((body) => {
        console.log(body)
        // needs to show all bookings
        setAllBookings(body)
        // needs to show the most recently saved booking. Would that be .last??
        // setCurrentBooking(body)
      });
    }, []);

    
  return (
    <>
      <HeadingMain>Your Previous Bookings</HeadingMain>
        <div>
          {allBookings && allBookings.map((booking) => {
            return (
              <Card key={booking.id}>
                {booking.id}
              </Card>
            )
          })}
        </div>
    </>
  );
}
