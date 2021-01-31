import '../styled/style.css';
import React from 'react';
import { 
  BrowserRouter,
  Switch, 
  Route, 
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
<<<<<<< HEAD
    <>
      <Nav>
        <Link to="/">Home</Link>   
        <Link to="/about">About</Link>   
        <Link to="/bookings">Bookings</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/" onClick={logout}>Logout</Link>
      </Nav>
      
=======
    <BrowserRouter>
      if (auth){
        <LoggedInNav />
      } else {
        <LoggedOutNav />
      }
>>>>>>> 6cfa8229e2b32a67b1dd9225c114f4c3009e9a63

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