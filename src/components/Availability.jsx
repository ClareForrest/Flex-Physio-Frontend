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
    <h1>Trainer Availabilities:</h1>
    <div>
      {employee && employee.map((a) => {
        return (
          <p key={a.id}>
            <h2>{a.availability}</h2>
          </p>
        );
      })}
    </div>
    </> 

  )
}