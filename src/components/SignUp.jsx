import React, { useState } from "react";

export function SignUp({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  

  async function onFormSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: { first_name, last_name, email, password } }),
      });
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const response = await fetch("http://localhost:3000/api/sign-in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ auth: { first_name, last_name, email, password } }),
        });
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        history.push("/subscriptions");
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="first_Name">first name</label>
        <input
          type="first_name"
          name="first_name"
          id="first_name"
          value={first_name}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <label htmlFor="last_Name">last name</label>
        <input
          type="last_name"
          name="last_name"
          id="last_name"
          value={last_name}
          onChange={(e) => setLastname(e.target.value)}
        />
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