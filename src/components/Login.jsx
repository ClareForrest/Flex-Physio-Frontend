import React, { useState } from "react";
import { Row, Card, Button } from "react-bootstrap";
import { HeadingMain, HeadingContainer } from "../styled/main";
import { Link } from "react-router-dom";

// this function allows users to login and uses knock authentication - submits a token to local storage that must match one in the rails API (authentication function).
export const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  async function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      auth: { email, password },
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/sign-in`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        history.push("/");
      }
    } catch (err) {
      setErrMessage(err.message);
    }
  }

  return (
    <>
      {errMessage && <span>{errMessage}</span>}
      <Row>
        <HeadingContainer>
          <HeadingMain>
            Not a Member?
            <Link to="/sign-up" id="black-text-link">
              {" "}
              Sign Up
            </Link>
          </HeadingMain>
        </HeadingContainer>
      </Row>
      <Row>
        <Card className="login-card-size">
          <form onSubmit={onFormSubmit} className="alignment">
            <label htmlFor="email">Email</label>
            <input
              className="alignment"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              className="alignment"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" value="Login" variant="secondary">
              Login
            </Button>
          </form>
        </Card>
      </Row>
    </>
  );
};
