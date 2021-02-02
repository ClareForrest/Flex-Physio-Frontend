import { HeadingMain } from '../styled/main';
import React, { useState, Component, useEffect } from "react";
import Select from 'react-select';
  
  export function Bookings(){
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

// map through all employees and show as options in dropdown
    // function Practitioners() {
    //   const [practitioners, setPractitioners] = useState([]);
    //   useEffect(() => {
    //     fetch('http://localhost:3000/api/employee')
    //     .then((response) => response.json())
    //     .then((body) => {
    //       console.log(body);
    //       setPractitioners(body)
    //     });
    //   }, []);
    //   return(
    //     {practitioners.map((practitioner) => {
    //       const practitionersOptions = [
    //         {value: practitioner, label: practitioner}
    //       ]
    //     }
    //       )}
    //   )
    // }

    // function handleChangePractitioners(event) {
    //   setPractitioners({id: event.target.value, value: event.label})
    // } 
    
    return (
      <>
      <form>
        <HeadingMain>Make a Booking</HeadingMain>
        <HeadingMain>Select a Location</HeadingMain>
          <Select options={locationOptions} onSelect={handleChangeLocation} />
        <HeadingMain>Select a Service</HeadingMain>
          <Select options={serviceOptions} onSelect={handleChangeService} />
        <HeadingMain>Select a Practitioner</HeadingMain>
          {/* <Select options={practitionersOptions} onSelect={handleChangePractitioners} /> */}
        <HeadingMain>Select a Date</HeadingMain>

        <HeadingMain>Select a Time</HeadingMain>
        <HeadingMain>Cost: </HeadingMain>
        <input type="submit" value="Confirm" />
      </form>
    </>
  );
}
