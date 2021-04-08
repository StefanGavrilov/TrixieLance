import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from "./pages/Homepage";

import OurStory from "./pages/OurStory";
import OurMantras from "./pages/OurMantras";
import OurFounders from "./pages/OurFounders";

import JoinTrixieLance from "./pages/JoinTrixieLance";
import MarketingConsulting from "./pages/MarketingConsulting";
import PRAndPromotion from "./pages/PRAndPromotion";
import SmallBusinessConsulting from "./pages/SmallBusinessConsulting";

import Blog from "./pages/Blog";


import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import PasswordReset from "./pages/PasswordReset";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        {/* About Us Drop Down Menu */}
        <Route exact path="/our-story">
          <OurStory />
        </Route>
        <Route exact path="/our-mantras">
          <OurMantras />
        </Route>
        <Route exact path="/our-founders">
          <OurFounders />
        </Route>


        {/* About Us Drop Down Menu */}
        <Route exact path="/join-trixie-lance">
          <JoinTrixieLance />
        </Route>
        <Route exact path="/marketing-consulting">
          <MarketingConsulting />
        </Route>
        <Route exact path="/pr-and-promotion">
          <PRAndPromotion />
        </Route>
        <Route exact path="/small-business-consulting">
          <SmallBusinessConsulting />
        </Route>

        <Route exact path="/blog">
          <Blog />
        </Route>



        <Route exact path="/sign-in">
          <SignUp />
        </Route>
        <Route exact path="/log-in">
          <LogIn />
        </Route>
        <Route exact path="/password-reset">
          <PasswordReset />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
