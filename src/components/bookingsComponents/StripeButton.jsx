import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "react-bootstrap";
import { HeadingSub } from "../../styled/main";

const stripePromise = loadStripe(
  "pk_test_51Ho5dVFmgeBEAT7KoH3k5qPewwkvipHdsNdjJB9ekThFbMCvj25FEi5ZX7xhMjNzGmF4OSUQL2MPFoklKV3DE6TT00tbGcIBFh"
);

export function StripeButton(props) {
  console.log(props)
  
  const onStripeButtonClick = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/charges/new`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({id: props.currentBooking.id})
      }
    );

    const session = await response.json();

    console.log(session);
    // this works like the redirect to method in rails - redirects to stripe page.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };
  return (
    <>
      <HeadingSub>You can optionally make a payment now!</HeadingSub>
      <Button
        type="button"
        id="checkout-button"
        role="link"
        variant="secondary"
        onClick={onStripeButtonClick}
      >
        Make Payment
      </Button>
    </>
  );
}
