import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import PasswordReset from "./pages/PasswordReset";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/about-us">
          <AboutUs/>
        </Route>
        <Route exact path="/sign-in">
          <SignIn/>
        </Route>
        <Route exact path="/log-in">
          <LogIn/>
        </Route>
        <Route exact path="/password-reset">
          <PasswordReset/>
        </Route>
       
      </Switch>
    </Router>
  );
}

export default App;
