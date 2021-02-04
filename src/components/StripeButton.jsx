import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Ho5dVFmgeBEAT7KoH3k5qPewwkvipHdsNdjJB9ekThFbMCvj25FEi5ZX7xhMjNzGmF4OSUQL2MPFoklKV3DE6TT00tbGcIBFh')


async function StripeButton(e) {

  const handleClick = async (event) => {

    const stripe = await stripePromise;

    const response = await fetch("session controller url", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const session = await response.json();

    // this works like the redirect to method in rails - redirects to stripe page.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(err.message);
    }
  }
  return (
    <>
      <button type="button" role="link" onClick={StripeButton}>
        Make Payment
  </button>

    </>
  )

}







