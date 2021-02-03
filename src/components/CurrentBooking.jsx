import { HeadingMain } from '../styled/main';
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
  
  export function CurrentBooking(){
    const [currentBooking, setCurrentBooking] = useState([])
    useEffect(() => {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bookings/current`)
      .then((response) => response.json())
      .then((body) => {
        // needs to show the most recently saved booking. Would that be .last??
        console.log(body)
        setCurrentBooking(body.last)
      });
    }, []);

    return (
      <>
        <HeadingMain>Your Current Booking</HeadingMain>
        <Card>


        </Card>
    </>
  );
}
