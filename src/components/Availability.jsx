import React, { useState, useEffect }  from 'react';

export function Availability() {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/availabilities')
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
      setEmployee(body)
    });
  }, []);

  return(
    <>
    <h1>Schedule</h1>
    <div>
      {employee && employee.map((s) => {
        return (
          <p key={s.id}>
            <h2>{s.availability}</h2>
          </p>
        );
      })}
    </div>
    </> 

  )
}