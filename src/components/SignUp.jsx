import React, { useState } from "react";
import { Row, Card, Button } from "react-bootstrap";
import { HeadingMain } from "../styled/main";
import { Link } from "react-router-dom";

export function SignUp({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [phone_number, setPhonenumber] = useState("");

  async function onFormSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/sign-up`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: { first_name, last_name, email, password, phone_number },
          }),
        }
      );
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/sign-in`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              auth: { first_name, last_name, email, password, phone_number },
            }),
          }
        );
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        localStorage.setItem("user", JSON.stringify({ first_name: first_name, last_name: last_name, email: email, password: password, phone_number: phone_number}));
        history.push("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <Row>
        <HeadingMain>
          Already a Member?
          <Link to="/login" id="sign-up-link">
            {" "}
            Log In
          </Link>
        </HeadingMain>
      </Row>
      <Row>
        <Card className="login-card-size">
          <form onSubmit={onFormSubmit} className="alignment">
            <label htmlFor="first_Name">First Name</label>
            <input
              className="alignment"
              type="text"
              name="first_name"
              id="first_name"
              value={first_name}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor="last_Name">Last Name</label>
            <input
              className="alignment"
              type="text"
              name="last_name"
              id="last_name"
              value={last_name}
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              className="alignment"
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              className="alignment"
              type="text"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="phone_number">Phone Number</label>
            <input
              className="alignment"
              type="number"
              name="phone_number"
              id="phone_number"
              value={phone_number}
              onChange={(e) => setPhonenumber(e.target.value)}
            />
            <Button type="submit" value="Submit" variant="secondary">
              Sign Up
            </Button>
          </form>
        </Card>
      </Row>
    </>
  );
}
