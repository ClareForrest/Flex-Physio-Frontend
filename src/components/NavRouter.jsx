import '../styled/style.css';
import Nav from 'react-bootstrap/Nav'
import React from 'react';
import { 
  BrowserRouter,
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';
import { HomePage } from './Homepage';
import { HomePageLoggedIn } from './HomePageLoggedIn';
import { Profile } from './Profile';
import { Bookings } from './Bookings'; 
import { Login } from './Login';
import { SignUp } from './SignUp';
import { Availability } from './Availability';


export function NavRouter() {
  return (
    <BrowserRouter>
      <Nav>
        <Link to="/">Home</Link>   
        <Link to="/about">About</Link>   
        <Link to="/bookings">Bookings</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/profile">Profile</Link>
      </Nav>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={HomePage} />
        <Route exact path="/bookings" component={Bookings} />
        <Route exact path="/contact-us" component={HomePage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} /> 
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/availabilities" component={Availability} />
        <Route exact path="/homepageloggedin" component={HomePageLoggedIn} /> {/*I want to have this link on the icon. That way you can still get to home/services/about us etc through home, but can also see your logged in home page*/}
      </Switch>
    </BrowserRouter>
  );
}