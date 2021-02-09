import React, { useState, useEffect } from "react";
import { HeadingContainer, HeadingMain } from "../styled/main";
import { Card, Button } from "react-bootstrap";

// This function renders the current availabilities of all employees through the index method in the API. It does this by mapping through them.
export const Availability = () => {
  const [employee, setEmployee] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;

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
        <HeadingMain>All Staff Availabilities</HeadingMain>
      </HeadingContainer>
      <Button variant="secondary" href={`/availability/${id}`}>
        View Your Own Availability
      </Button>
      {employee.map((body) => {
        return (
          <>
            <Card className="availability-cards">
              <p>
                {body.first_name} {body.last_name}
              </p>
              <p>{body.availability}</p>
            </Card>
          </>
        );
      })}
    </div>
  );
};
