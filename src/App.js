import 'bootstrap/dist/css/bootstrap.min.css';
import { Template } from './components/template';
import { HomePage } from './components/homepage';
import { Authorisation} from './components/authorisation';
import { HomePageLoggedIn } from './components/homepageloggedin';
import { Profile } from './components/profile';
import React, {useState} from 'react';



function App() {

  //Need to set up a switch using BrowserRouter and Switch to change between views/components
  return (
    <>
      <Template>
        {/* <HomePage></HomePage> */}
        {/* <Authorisation></Authorisation> */}
        {/* <HomePageLoggedIn></HomePageLoggedIn> */}
        {/* <Profile></Profile> */}
        {/* <Bookings></Bookings>*/}
      </Template>
    </>
  );
}

export default App;
