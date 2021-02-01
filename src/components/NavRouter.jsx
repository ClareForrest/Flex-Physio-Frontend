import '../styled/style.css';
import React from 'react';
import { 
  BrowserRouter,
  Switch, 
  Route,
  Link
} from 'react-router-dom';
import { HomePage } from './Homepage';
import { ProtectedRoute } from './ProtectedRoute';
import { Profile } from './Profile';
import { Bookings } from './Bookings'; 
import { Login } from './Login';
import { SignUp } from './SignUp';
import { LoggedInNav } from './LoggedInNav';
import { LoggedOutNav } from './LoggedOutNav';
import { Availability } from './Availability';
import { useHistory } from 'react-router-dom'



export function NavRouter() {
  const history = useHistory()
  
  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/login")
  }

  return (
    <>
      <nav>
        <Link to="/">Home</Link>   
        <Link to="/about">About</Link>   
        <Link to="/bookings">Bookings</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/" onClick={logout}>Logout</Link>
      </nav>
      

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={HomePage} />
        <Route exact path="/bookings" component={Bookings} />
        <Route exact path="/contact-us" component={HomePage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} /> 
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/availabilities" component={Availability} />
      </Switch>
    </>
  );
}