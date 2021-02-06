import React, { useState, useEffect } from "react";
import { HeadingMain, HeadingSub } from "../styled/main";
import { Row, Card } from "react-bootstrap";

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
    <>
      <Row>
        <HeadingMain>Trainer Availabilities</HeadingMain>
      </Row>
      <Row>
        <Card>
          {employee &&
            employee.map((a) => {
              return (
                <p key={a.id}>
                  <HeadingSub>{a.availability}</HeadingSub>
                </p>
              );
            })}
        </Card>
      </Row>
    </>
  );
}
