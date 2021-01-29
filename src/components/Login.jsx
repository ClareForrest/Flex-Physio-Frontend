import React, { useState } from "react";
import { Link } from 'react';
import { HeadingSub } from '../styled/main';

export function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  async function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      auth: { email, password },
    };
    try {
      const response = await fetch("http://localhost:3000/api/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        history.push("/..");
      }
    } catch (err) {
      setErrMessage(err.message);
    }
  }

  return (
    <>
      <div class="row justify-content-center">
      <HeadingSub>
        Not a Member? 
        <Link to="/sign-up">Sign Up </Link>
      </HeadingSub>
      </div>
      <div class="row justify-content-center">
        <Login></Login>
      </div>
      <button type="button" class="btn btn-secondary">Login</button>
      {errMessage && <span>{errMessage}</span>}
      <form onSubmit={onFormSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}