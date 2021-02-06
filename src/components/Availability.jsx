import React, { useState, useEffect } from "react";


export function Availability() {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/availabilities`)
      .then((response) => response.json())
      .then((body) => {
        console.log(body);
        setEmployee(body);
      });
  }, []);

  return (
    <div>
      <h1>Availabilities:</h1>
      {employee.map((body) => {
        return (
          <div>
            <p>{body.first_name} {body.last_name}</p>
            <p>{body.availability}</p>
          </div>
        )
      })}
    </div>  
  )
}
