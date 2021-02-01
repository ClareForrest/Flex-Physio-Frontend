import { HeadingMain } from '../styled/main';
import React, { useState, Component } from "react";
import Select from 'react-select';
  
  export function Bookings({history}){
    // Select a location. Dropdown menu from bookings.
    // Bookings table has location, date, time (this will need to connect to employees availability)
    // Services is separate table with name (massage/physio) and cost 
    // Employees table has availability
    const [locationOptions, setLocationOptions] = useState([
      {value: 'cbd', label: 'CBD'},
      {value: 'suburbs', label: 'Suburbs'}
    ])
    const LocationOptions = () => (
      <Select options={locationOptions} />
    )
    const [serviceOptions, setServiceOptions] = useState([
      {value: 'massage', label: 'Massage'},
      {value: 'physiotherapy', label: 'Physiotherapy'}
    ])
    const ServiceOptions = () => (
      <Select options={serviceOptions} />
    )
    const [practitionerOptions, setPractitionerOptions] = useState([
      {value: 'name1', label: 'Name1'},
      {value: 'name2', label: 'Name2'}
    ])
    const PractitionerOptions = () => (
      <Select options={practitionerOptions} />
    )
    const DateOptions = () => (
      <Select />
      // this will need to be pulled from the employees availability
    )
    const TimeOptions = () => (
      <Select />
      // this will need to be pulled from the employees availability
    )

  async function onFormSubmit(event) {
    event.preventDefault();
    // try {
    //   const response = await fetch("http://localhost:3000/api/sign-up", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ user: { email, password } }),
    //   });
    //   if (response.status >= 400) {
    //     throw new Error("incorrect credentials");
    //   } else {
    //     const response = await fetch("http://localhost:3000/api/sign-in", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ auth: { email, password } }),
    //     });
    //     const { jwt } = await response.json();
    //     localStorage.setItem("token", jwt);
    //     history.push("/subscriptions");
    //   }
    // } catch (err) {
    //   console.log(err.message);
    // }
  }

  return (
    <>
      <form>
        <HeadingMain>Make a Booking</HeadingMain>
        <HeadingMain>Select a Location</HeadingMain>
          <LocationOptions onSelect={(e) => setLocationOptions(e.target.value)}/>
        <HeadingMain>Select a Service</HeadingMain>
          <ServiceOptions onSelect={(e) => setServiceOptions(e.target.value)}/>
        <HeadingMain>Select a Practitioner</HeadingMain>
          <PractitionerOptions onSelect={(e) => setPractitionerOptions(e.target.value)}/>
        <HeadingMain>Select a Date</HeadingMain>
        <HeadingMain>Select a Time</HeadingMain>
          <TimeOptions />
        <HeadingMain>Cost</HeadingMain>
        {/* this needs to pre-fill. Details pulled from Service*/}
        <HeadingMain>Booking Summary</HeadingMain>
          {locationOptions.value}
        {/* this needs to fill from above selections */}
        <input type="submit" value="Confirm" />
      </form>
    </>
  );
}
