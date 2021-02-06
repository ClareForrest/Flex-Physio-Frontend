import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export function UpdateEmployee() {
  
  const [availability, setAvailability] = useState("");
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("user"))
  const id = user.id

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/availability/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((employee) => {
        setAvailability(employee.availability);
      });
  }, [id]);


  async function onEditSubmit(e) {
    e.preventDefault()
    try {
      
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/update-availability/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          employee: {
            availability: availability,
          },
        }),
      });
      history.push(`/availability/${id}`);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <h1>Edit Profile:</h1>
      <form onSubmit={onEditSubmit}>
        <div>
          <label htmlFor="availability">Availability:</label>
          <input
            type="text"
            name="availability"
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
          />
        </div>
        <input id="submit" type="submit" value="submit" />
      </form>
    </>
)
}