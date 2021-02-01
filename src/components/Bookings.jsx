import { HeadingMain } from '../styled/main';
import React, { useState, Component } from "react";
import Select from 'react-select';
  
  export function Bookings({history}){
    // Select a location. Dropdown menu from bookings.
    // Bookings table has location, date, time (this will need to connect to employees availability)
    // Services is separate table with name (massage/physio) and cost 
    // Employees table has availability
    const locationOptions = [
      {value: 'cbd', label: 'CBD'},
      {value: 'suburbs', label: 'Suburbs'}
    ]
    const [selectedOption, setSelectedOption] = useState(null);

    handleChange = (event) => {
      setSelectedOption({id: event.value, name: event.label});
    }

  return (
    <>
        <HeadingMain>Make a Booking</HeadingMain>
        <HeadingMain>Select a Location</HeadingMain>
          <Select options={locationOptions} onChange={handleChange} />
    </>
  );
}
