import { HeadingMain, HeadingSub } from '../styled/main';
import React, { useState, useEffect } from "react";
import Select from 'react-select';
  
  export function CreateBooking(){
    // Select a location. Dropdown menu from bookings.
    // Bookings table has location, date, time (this will need to connect to employees availability)
    // Services is separate table with name (massage/physio) and cost 
    // Employees table has availability
    const locationOptions = [
      {value: 'cbd', label: 'CBD'},
      {value: 'suburbs', label: 'Suburbs'}
    ]
    const [location, setLocation] = useState(null)

    function handleChangeLocation(event) {
      setLocation({id: event.target.value, value: event.label})
    } 

    const serviceOptions = [
      {value: 'massage', label: 'Massage'},
      {value: 'physiotherapy', label: 'Physiotherapy'},
    ]
    const [service, setService] = useState(null)

    function handleChangeService(event) {
      setService({id: event.target.value, value: event.label})
    } 

// maps through all employees and show as options in Select dropdown
      const [allPractitioners, setAllPractitioners] = useState([]);
      useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/employees`)
        .then((response) => response.json())
        .then((body) => {
          const names = body.map((employee) => {
            return {
              value: `${employee.first_name} ${employee.last_name}`,
              label: `${employee.first_name} ${employee.last_name}`
            }
          })
          console.log(body)
          setAllPractitioners(names)
        });
      }, []);

    const [practitioners, setPractitioners] = useState(null)
    
    function handleChangePractitioners(event) {
      setPractitioners({id: event.target.value, value: event.label})
    } 

    // would like to get this displayed and selected through the calendar app
    // pulled from employees availability
    const dateOptions = [
      {value: 'Monday', label: 'Monday'},
      {value: 'Tuesday', label: 'Tuesday'},
      {value: 'Wednesday', label: 'Wednesday'},
      {value: 'Thursday', label: 'Thursday'},
      {value: 'Friday', label: 'Friday'},
    ]
    const [date, setDate] = useState(null)

    function handleChangeDate (event) {
      setDate({id: event.target.value, value: event.label})
    } 
    
    const timeOptions = [
      // will be good to get this displayed and selected through a calendar app
      {value: '09:00', label: '09:00'},
      {value: '10:00', label: '10:00'},
      {value: '11:00', label: '11:00'},
      {value: '12:00', label: '12:00'},
      {value: '13:00', label: '13:00'},
      {value: '14:00', label: '14:00'},
      {value: '15:00', label: '15:00'},
      {value: '16:00', label: '16:00'},
    ]
    const [time, setTime] = useState(null)

    function handleChangeTime(event) {
      setTime({id: event.target.value, value: event.label})
    } 

    async function onFormSubmit(event) {
      event.preventDefault();
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/booking`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ booking: { location, service, date, time } }),
        });
        if (response.status >= 400) {
          throw new Error("incorrect credentials");
        } else {
          const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/booking`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ booking: { location, service, date, time } }),
            // ask why practitioner and cost aren't required
          });
          const { jwt } = await response.json();
          localStorage.setItem("token", jwt);
          // want to redirect to CurrentBooking page 
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    return (
      <>
      <form onSubmit={onFormSubmit}>
        <HeadingMain>Make a Booking</HeadingMain>
        <HeadingMain>Select a Location</HeadingMain>
          <Select options={locationOptions} onSelect={handleChangeLocation} />
        <HeadingMain>Select a Service</HeadingMain>
          <Select options={serviceOptions} onSelect={handleChangeService} />
        <HeadingMain>Select a Practitioner</HeadingMain>
          <Select options={allPractitioners} onSelect={handleChangePractitioners} />
        <HeadingMain>Select a Date</HeadingMain>
          <Select options={dateOptions} onSelect={handleChangeDate} />
        <HeadingMain>Select a Time</HeadingMain>
          <Select options={timeOptions} onSelect={handleChangeTime} />
        <HeadingMain>Cost: </HeadingMain>
          <HeadingSub>{cost}</HeadingSub>
        <input type="submit" value="Confirm" />
      </form>
    </>
  );
}
