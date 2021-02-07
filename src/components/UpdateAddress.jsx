import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Card, Button } from "react-bootstrap";
import { HeadingMain } from "../styled/main";

export function UpdateAddress() {
  const [street, setStreet] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");

  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/addresses/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((address) => {
        console.log(address) 
        setStreet(address.street);
        setSuburb(address.suburb);
        setState(address.state);
        setPostcode(address.postcode);
      });
  }, [id]);

  async function onUpdateSubmit(e) {
    e.preventDefault();
    try {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/update-address/${id}`, {
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
      <Row>
        <HeadingMain>Edit Address</HeadingMain>
      </Row>
      <Row>
        <Card className="login-card-size">
          <form onSubmit={onUpdateSubmit}>
            <label htmlFor="street">Street</label>
            <input
              className="alignment"
              type="text"
              name="street"
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <label htmlFor="suburb">Suburb</label>
            <input
              className="alignment"
              type="text"
              name="suburb"
              id="suburb"
              value={suburb}
              onChange={(e) => setSuburb(e.target.value)}
            />
            <label htmlFor="state">State</label>
            <input
              className="alignment"
              type="text"
              name="state"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <label htmlFor="postcode">Postcode</label>
            <input
              className="alignment"
              type="number"
              name="postcode"
              id="postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
            <Button
              variant="secondary"
              id="submit"
              type="submit"
              value="Submit"
            >
              Update
            </Button>
          </form>
        </Card>
      </Row>
    </>
  );
}
