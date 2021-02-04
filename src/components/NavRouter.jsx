import '../styled/style.css';import React from 'react';
import { 
  Switch, 
  Route,
  Link
} from 'react-router-dom';
import { HomePage } from './homepageComponents/Homepage';
import { ProtectedRoute } from './ProtectedRoute';
import { Profile } from './Profile';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { Availability } from './Availability';
import { IndividualAvailability } from './IndividualAvailability';
import { useHistory } from 'react-router-dom';
import { Nav } from '../styled/main';
import { AllBookingsFunction } from './bookingsComponents/AllBookings';
import { CreateBooking } from './bookingsComponents/CreateBooking';
import { CurrentBooking } from './bookingsComponents/CurrentBooking';
import { CreateAddress } from './CreateAddress';
import { UpdateProfile } from './UpdateProfile';
import { EditBooking } from './bookingsComponents/EditBooking';
import { UpdateAddress } from './UpdateAddress';
import { AboutPage } from './homepageComponents/About';
import { ServicesPage } from './homepageComponents/Services';

export function NavRouter() {
  const history = useHistory()
  
  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history.push("/login")
  }

  return (
    <>
      <Nav>
        <Link to="/">Home</Link>   
        <Link to="/about">About</Link>   
        <Link to="/services">Services</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/login">Login</Link>        
        <Link to="/" onClick={logout}>Logout</Link>
      </Nav>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/services" component={ServicesPage} />
        <ProtectedRoute exact path="/bookings" component={CreateBooking} />
        <ProtectedRoute exact path="/bookings/current" component={CurrentBooking} />
        <ProtectedRoute exact path="/booking/show/:id" component={EditBooking} />
        <ProtectedRoute exact path="/bookings/history" component={AllBookingsFunction} />
        <Route exact path="/contact-us" component={HomePage} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/update-profile" component={UpdateProfile} />
        <ProtectedRoute exact path="/create-address" component={CreateAddress} />
        <ProtectedRoute exact path="/update-address" component={UpdateAddress} />
        <Route exact path="/login" component={Login} /> 
        <Route exact path="/sign-up" component={SignUp} />
        <ProtectedRoute exact path="/availabilities" component={Availability} />
        <ProtectedRoute exact path="/availability/:id" component={IndividualAvailability} />
      </Switch>
    </>
  );
}