import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HeadingMain } from "../styled/main";
import { Row, Card, Button } from "react-bootstrap";
// import { useParams } from "react-router-dom";

export function UpdateProfile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [phone_number, setPhonenumber] = useState("");
  // const { id } = useParams();
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/profile/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((user) => {
        setEmail(user.email);
        setPassword(user.password);
        setFirstname(user.first_name);
        setLastname(user.last_name);
        setPhonenumber(user.phone_number);
      });
  }, [id]);

  async function onEditSubmit(e) {
    e.preventDefault();
    try {
      await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/update-profile/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            user: {
              email: email,
              password: password,
              first_name: first_name,
              last_name: last_name,
              phone_number: phone_number,
            },
          }),
        }
      );
      history.push("/");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <Row>
        <HeadingMain>Edit Profile</HeadingMain>
      </Row>
      <Row>
        <Card className="login-card-size">
          <form onSubmit={onEditSubmit}>
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
            <label htmlFor="first_name">First Name</label>
            <input
              className="alignment"
              type="text"
              name="first_name"
              id="first_name"
              value={first_name}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <label htmlFor="last_name">Last Name</label>
            <input
              className="alignment"
              type="text"
              name="last_name"
              id="last_name"
              value={last_name}
              onChange={(e) => setLastname(e.target.value)}
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
