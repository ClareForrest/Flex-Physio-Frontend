import React, { useState, useEffect }  from 'react';

export function IndividualAvailability(props) {
  const [employee, setEmployee] = useState(null);
  const id = props.match.params.id;

  useEffect(() => {
    fetch(`REACT_APP_BACKEND_URL/api/availability/${id}`)
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
          <h2>Your Current Availabilities:</h2>
          <p>{employee.availability}</p>
        </div>
        
      </>
    )
  )
}