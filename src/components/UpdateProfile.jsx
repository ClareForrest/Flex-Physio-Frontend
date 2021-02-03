import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

export function UpdateProfile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [phone_number, setPhonenumber] = useState("");
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3000/api/profile/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((profile) => {
        setEmail(profile.email);
        setPassword(profile.password);
        setFirstname(profile.first_name)
        setLastname(profile.last_name);
        setPhonenumber(profile.phone_number);
      });
  }, [id]);


  async function onFormSubmit(e) {
    try {
      e.preventDedault();
      await fetch(`http://localhost:3000/api/profile/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          profile: {
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
            phone_number: phone_number,
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
      <h1>Edit Profile:</h1>
      <form onSubmit={onFormSubmit}>
        <div>
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="first_name"></label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            value={first_name}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="last_name"></label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            value={last_name}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone_number"></label>
          <input
            type="number"
            name="phone_number"
            id="phone_number"
            value={phone_number}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>
        <input id="submit" type="submit" value="submit" />
      </form>
    </>
)
  }
