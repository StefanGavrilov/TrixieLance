import React from "react";

import { Link } from "react-router-dom";

/* import LogInCard from "../components/LogInCard"; */

import trixieLanceLogoBothColors from "../assets/img/trixieLanceLogoBothColors.png";
import flagMacedonia from "../assets/img/flagMacedonia.png";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="navbar-main-div">
        <Link to="/" className="navbar-logo1">
          <img src={trixieLanceLogoBothColors} className="navbar-logo" alt="Logo" />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="navbar-ul space-x-1">
          <li>
            <button className="lanugage">
              <img src={flagMacedonia} alt="Flag" className="lanugage-img">

              </img>
            </button>
          </li>
          <li>
            <Link to="/" className="navbar-button1">
              About us ˅
            </Link>
          </li>
          <li>
            <Link to="/" className="navbar-button2">
              TrixieBox ˅
            </Link>
          </li>
          <li>
            <Link to="/" className="navbar-button3">
              Services ˅
            </Link>
          </li>
          <li>
            <Link to="/" className="navbar-button4">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/" className="navbar-button5">
              Testing
            </Link>
          </li>
        </ul>
        {/*         <Link to="log-in" className="navbar-button">
          Log in
        </Link>
        <Link to="sign-in" className="navbar-button">
          Sign in
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
