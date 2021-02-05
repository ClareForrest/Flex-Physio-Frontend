import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Ho5dVFmgeBEAT7KoH3k5qPewwkvipHdsNdjJB9ekThFbMCvj25FEi5ZX7xhMjNzGmF4OSUQL2MPFoklKV3DE6TT00tbGcIBFh')


export function StripeButton(e) {

  const StripeButton = async (event) => {

    const stripe = await stripePromise;

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/charges/new`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const session = await response.json();

    console.log(session)
    // this works like the redirect to method in rails - redirects to stripe page.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message)
    }
  }
  return (
    <>
      <h4>You can optionally make a payment now!</h4>
      <button type="button" id="checkout-button" role="link" onClick={StripeButton}>
        Make Payment
      </button>
    </>
  );
}







