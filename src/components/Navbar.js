import React from "react";

import { Link } from "react-router-dom";

/* import LogInCard from "../components/LogInCard"; */


import bothColorsWithoutSlogan from "../assets/img/bothColorsWithoutSlogan.png";
import flagMacedonia from "../assets/img/flagMacedonia.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-main-div">
        <Link to="/">
          <img
            src={bothColorsWithoutSlogan}
            className="navbar-logo"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="navbar-ul space-x-1">

          <li className="dropdown">
            <button className="drop-button">About us ￬</button>
            <div className="dropdown-content">
              <Link to="/our-story">Our story</Link>
              <Link to="our-mantras">Our mantras</Link>
              <Link to="our-founders#">Our founders</Link>
            </div>
          </li>

          <li className="dropdown">
            <button className="drop-button">Services ￬</button>
            <div className="dropdown-content">
              <Link to="/join-trixie-lance">Join TrixieLance</Link>
              <Link to="/marketing-consulting">Marketing consulting</Link>
              <Link to="/pr-and-promotion">PR and promotion</Link>
              <Link to="/small-business-consulting">Small business consulting</Link>
            </div>
          </li>

          <li>
            <button className="drop-button">
              <Link to="/blog" className="no-dropdown-button">Blog</Link>
            </button>
          </li>
          <li>
            <button className="lanugage">
              {
                <img
                  src={flagMacedonia}
                  alt="Flag"
                  className="lanugage-img"
                ></img>
              }
            </button>
          </li>
        </ul>
        {/*         <Link to="log-in" className="navbar-button2>
          Log in
        </Link>
        <Link to="sign-in" className="navbar-button2>
          Sign in
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
