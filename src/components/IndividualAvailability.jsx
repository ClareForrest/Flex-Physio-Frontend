import React, { useState, useEffect } from "react";
import { HeadingMain } from "../styled/main";
import { Row, Card, Button } from "react-bootstrap";

export function IndividualAvailability(props) {
  const [employee, setEmployee] = useState(null);
  const id = props.match.params.id;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/availability/${id}`)
      .then((res) => res.json())
      .then((employee) => {
        console.log(id);
        console.log(employee);
        setEmployee(employee);
      });
  }, [id]);

  return (
    employee && (
      <>
        <Row>
          <HeadingMain>Your Current Availabilities</HeadingMain>
        </Row>
        <Row>
          <Card className="login-card-size">
            <p>{employee.availability}</p>
            <Button variant="secondary" type="button" href="/update-availability" >
              Edit
            </Button>
          </Card>
        </Row>
      </>
    )
  );
}
