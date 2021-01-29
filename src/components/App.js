import 'bootstrap/dist/css/bootstrap.min.css';
import { Template } from './template';
import { HomePage } from './homepage';
import { Authorisation} from './authorisation';
import { HomePageLoggedIn } from './homepageloggedin';
import { Profile } from './profile';
import React, {useState} from 'react';
import { 
  BrowserRouter,
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { LoggedOutNav } from "./LoggedOutNav";


function App() {

  return (
  <>
    <Template>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
    </Switch>
    </Template>
  </>
  );
}

export default App;
