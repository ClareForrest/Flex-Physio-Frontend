import React, { useState } from "react";

export function CreateAddress( { history } ) {
  const [street, setStreet] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");


  async function onFormSubmit(e) {
    try {
      e.preventDefault();
      await fetch("http://localhost:3000/api/addresses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ address: { 
          street, 
          suburb, 
          state, 
          postcode 
        },
      }),
    });
    history.push("/");
  } catch (err) {
    console.log(err.message);
    }
  }

  return (
    <>
      <h2>Add your Address details:</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="street">Street:</label>
          <input
          type="text"
          name="street"
          id="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          />
          <label htmlFor="suburb">Suburb:</label>
          <input
          type="text"
          name="suburb"
          id="suburb"
          value={suburb}
          onChange={(e) => setSuburb(e.target.value)}
          />
          <label htmlFor="state">State:</label>
          <input
          type="text"
          name="state"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          />
          <label htmlFor="postcode">Postcode:</label>
          <input
          type="number"
          name="postcode"
          id="postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          />
          <input type="submit" value="submit" value="submit" />
        </div>
      </form>
    </>
  )
}


