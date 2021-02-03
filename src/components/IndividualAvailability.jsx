import React, { useState, useEffect }  from 'react';
import { HeadingMain } from '../styled/main';

export function IndividualAvailability(props) {
  const [employee, setEmployee] = useState(null);
  const id = props.match.params.id;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/availability/${id}`)
      .then((res) => res.json())
      .then((employee) => {
        console.log(id)
        console.log(employee)
        setEmployee(employee);
  
      });
  }, [id])

  return (
    employee && (
      <>
        <div>
          <HeadingMain>Your Current Availabilities:</HeadingMain>
          <p>{employee.availability}</p>
        </div>
        
      </>
    )
  )
}