import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/SignIn";

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
       
      </Switch>
    </Router>
  );
}

export default App;
