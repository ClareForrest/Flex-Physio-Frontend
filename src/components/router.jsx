import '../styled/style.css';
import Nav from 'react-bootstrap/Nav'
import React, { useState, Component } from 'react';
import { 
  BrowserRouter,
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';
import { HomePage } from './homepage';
import { Authorisation } from './authorisation';
import { HomePageLoggedIn } from './homepageloggedin';
import { Profile } from './profile';
import { Bookings } from './bookings';


export function NavRouter() {
  /*use useEffect that checks if the user is logged in*/
  // const [disabled, setDisabled] = useState(true) 
  const view = "false" /*remove this and put in correct term in line above*/
  // const [authorisation, setAuthorisation] = useState(Sign Out) 
  const authorisation = "Sign Out" /*remove this and put in correct term in line above*/
  const selector = "#consult fees" /*this will have to change dynamically too*/


  return (
    <BrowserRouter>
      <Nav> {/*this needs to be centered*/}
        <Link to="/">Home</Link>   
        <Link to="/about">About</Link>   
        <Link to="/bookings">Bookings</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/authorisation">{authorisation}</Link>   
      </Nav>

    <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <HomePage />
        </Route>
        <Route exact path="/bookings">
          <Bookings />
        </Route>
        <Route exact path="/contact us">
          <HomePage /> 
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/authorisation"> {/* I want to change this dynamically to be either login/sign out dependant on state */}
          <Authorisation />
        </Route>
        <Route exact path="/homepageloggedin"> {/*I want to have this link on the icon. That way you can still get to home/services/about us etc through home, but can also see your logged in home page*/}
          <HomePageLoggedIn />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        </Route>
      </Switch>
  </BrowserRouter>
  );
}