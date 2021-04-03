import React from "react";

import { Link } from "react-router-dom";

import LogInCard from "../components/LogInCard";

import trixieLanceLogoGray from "../assets/img/trixieLanceLogoGray.png";

const Navbar = () => {
  return (
    <nav className="navbar bg-color-green">
      <div className="navbar-main-div space-x-4"> 
        <Link to="/" className="pl-2">
          <img
            src={trixieLanceLogoGray}
            className="navbar-logo"
            alt="Logo"
          />
        </Link>
        <ul className="navbar-ul space-x-4">
          <li>
            <Link to="/" className="navbar-button">
              About us
            </Link>
          </li>
          <li>
            <div className="navbar-button">
              TrixieBox ˅
            </div>
          </li>
          <li>
            <Link to="/" className="navbar-button">
              Services
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="log-in" className="navbar-button">
          Log in
        </Link>
        <Link to="sign-in" className="navbar-button">
          Sign in
        </Link>
      </div> 
    </nav>
  );
};

export default Navbar;
