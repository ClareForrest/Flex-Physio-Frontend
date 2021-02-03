import '../styled/style.css';
import React from 'react';
import { 
  Switch, 
  Route,
  Link
} from 'react-router-dom';
import { HomePage } from './Homepage';
import { ProtectedRoute } from './ProtectedRoute';
import { Profile } from './Profile';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { Availability } from './Availability';
import { IndividualAvailability } from './IndividualAvailability';
import { useHistory } from 'react-router-dom';
import { Nav } from '../styled/main';
import { AllBookingsFunction } from './AllBookings';
import { CreateBooking } from './CreateBooking';
import { CurrentBooking } from './CurrentBooking';
import { CreateAddress } from './CreateAddress';
import { UpdateProfile } from './UpdateProfile';
import { EditBooking } from './EditBooking';


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
        <Link to="/bookings">Bookings</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/" onClick={logout}>Logout</Link>
      </Nav>
      

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={HomePage} />
        <Route exact path="/bookings" component={CreateBooking} />
        <Route exact path="/contact-us" component={HomePage} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} /> 
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/availabilities" component={Availability} />
        <Route exact path="/availability/:id" component={IndividualAvailability} />
        <Route exact path="/bookings/history" component={AllBookingsFunction} />
        <Route exact path="/bookings/current" component={CurrentBooking} />
        <Route exact path="/create-address" component={CreateAddress} />
        <Route exact path="/update-profile" component={UpdateProfile} />
        <Route exact path="/booking/show/:id" component={EditBooking} />
      </Switch>
    </>
  );
}