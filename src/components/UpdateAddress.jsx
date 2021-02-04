import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export function UpdateAddress() {
  const [street, setStreet] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");

  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"))
  const id = user.id

  useEffect(() => {
    fetch(`http://localhost:3000/api/addresses/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => res.json())
      .then((address) => {
        setStreet(address.street);
        setSuburb(address.suburb);
        setState(address.state);
        setPostcode(address.postcode);
  });
  }, [id]);

  async function onUpdateSubmit(e) {
    e.preventDefault()
    try {
      await fetch(`http://localhost:3000/api/update-address/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          address: {
            street: street,
            suburb: suburb,
            state: state,
            postcode: postcode,
          },
        }),
      });
      history.push("/update-address");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <h1>Edit Address:</h1>
      <form onSubmit={onUpdateSubmit}>
        <div>
        <label htmlFor="street">Street:</label>
          <input
            type="text"
            name="street"
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="suburb">Suburb:</label>
          <input
            type="text"
            name="suburb"
            id="suburb"
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="state">State:</label>
          <input
            type="text"
            name="state"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="postcode">Postcode:</label>
          <input
            type="number"
            name="postcode"
            id="postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
        </div>
        <input id="submit" type="submit" value="submit" />
      </form>
    </>
  )
}