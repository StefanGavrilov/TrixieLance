import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";

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
       
      </Switch>
    </Router>
  );
}

export default App;
