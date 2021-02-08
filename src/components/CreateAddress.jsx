import React, { useState } from "react";
import { HeadingMain, HeadingContainer } from "../styled/main";
import { Row, Card, Button } from "react-bootstrap";

export function CreateAddress({ history }) {
  const [street, setStreet] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");
  const [postcode, setPostcode] = useState("");

  async function onFormSubmit(e) {
    try {
      e.preventDefault();
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/addresses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          address: {
            street,
            suburb,
            state,
            postcode,
          },
        }),
      });
      history.push("/profile");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <Row>
        <HeadingContainer>
          <HeadingMain>Add your Address Details</HeadingMain>
        </HeadingContainer>
      </Row>
      <Row>
        <Card>
          <form onSubmit={onFormSubmit} className="alignment">
            <div>
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
              <Button type="submit" value="Submit" variant="secondary">
                Submit
              </Button>
            </div>
          </form>
        </Card>
      </Row>
    </>
  );
}
