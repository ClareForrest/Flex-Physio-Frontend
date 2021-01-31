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

export function NavRouter() {
  return (
    <BrowserRouter>
      if (auth){
        <LoggedInNav />
      } else {
        <LoggedOutNav />
      }

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={HomePage} />
        <Route exact path="/bookings" component={Bookings} />
        <Route exact path="/contact-us" component={HomePage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} /> {/* I want to change this dynamically to be either login/sign out dependant on state */}
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/homepageloggedin" component={ProtectedRoute} /> {/*I want to have this link on the icon. That way you can still get to home/services/about us etc through home, but can also see your logged in home page*/}
      </Switch>
    </BrowserRouter>
  );
}