import React, { useState, useEffect } from "react";
import { HeadingContainer, HeadingMain } from '../styled/main';
import { Card } from "react-bootstrap";


export const Availability = () => {
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
      <HeadingContainer>
        <HeadingMain>Availabilities</HeadingMain>
      </HeadingContainer>
      {employee.map((body) => {
        return (
          <Card className="availability-cards">
            <p>{body.first_name} {body.last_name}</p>
            <p>{body.availability}</p>
          </Card>
        )
      })}
    </div>  
  )
}
