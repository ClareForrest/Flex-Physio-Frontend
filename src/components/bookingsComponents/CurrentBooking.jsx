import { HeadingContainer, HeadingMain } from "../../styled/main";
import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { StripeButton } from "./StripeButton";

export function CurrentBooking(props) {
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

  async function onCancelClick(e) {
    e.preventDefault();
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/bookings/delete`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    props.history.push("/bookings");
  }
  return (
    currentBooking && (
      <>
      <HeadingContainer>
        <HeadingMain>Your Current Booking</HeadingMain>
      </HeadingContainer>
        <div>
          <Card class="booking-cards">
            <p>Location: {currentBooking.location}</p>
            <p>Date: {currentBooking.date}</p>
            <p>Time: {currentBooking.time}</p>
            <p>Service: {currentBooking.name}</p>
            <p>Cost: ${currentBooking.cost}</p>
          {/* <Link to='/' onClick={onCancelClick}>Cancel Booking</Link> */}
            <Button variant="secondary" onClick={onCancelClick}>
            Cancel Booking
            </Button>
          </Card>
        </div>
        <div>
          <StripeButton />
        </div>
      </>
    )
  );
}
