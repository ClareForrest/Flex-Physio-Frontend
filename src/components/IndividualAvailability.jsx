import React, { useState, useEffect } from "react";
import { HeadingMain, HeadingContainer } from "../styled/main";
import { Row, Card, Button } from "react-bootstrap";

// Similarly to the availability.jsx, it shows availability to employees, but only shows the currently logged in user their own availability and allows editing through a separate component.
export const IndividualAvailability = (props) => {
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
          <HeadingContainer>
            <HeadingMain>Your Current Availability</HeadingMain>
          </HeadingContainer>
        </Row>
        <Button variant="secondary" href="/availabilities">
        View All Staff Availability
      </Button>
        <Row>
          <Card className="login-card-size">
            <p>{employee.availability}</p>
            <Button
              variant="secondary"
              type="button"
              href="/update-availability"
            >
              Update
            </Button>
          </Card>
        </Row>
      </>
    )
  );
};
