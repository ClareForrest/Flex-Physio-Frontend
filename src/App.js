import 'bootstrap/dist/css/bootstrap.min.css';
import { Template } from './components/template';
import { HomePage } from './components/homepage';
import { Authorisation} from './components/authorisation';
import { HomePageLoggedIn } from './components/homepageloggedin';
import { Profile } from './components/profile';
import React, {useState} from 'react';
import { 
  BrowserRouter,
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';


function App() {

  //Need to set up a switch using BrowserRouter and Switch to change between views/components
  return (
    <>
      <BrowserRouter>
        <Template>
          {/* <HomePage></HomePage> */}
          {/* <Authorisation></Authorisation> */}
          {/* <HomePageLoggedIn></HomePageLoggedIn> */}
          {/* <Profile></Profile> */}
        </Template>
      </BrowserRouter>
    </>
  );
}

export default App;
