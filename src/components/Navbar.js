import React from "react";

import { Link } from "react-router-dom";

/* import LogInCard from "../components/LogInCard"; */

import trixieLanceLogoBothColors from "../assets/img/trixieLanceLogoBothColors.png";
import flagMacedonia from "../assets/img/flagMacedonia.png";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="navbar-main-div">
        <Link to="/" className="navbar-logo-outside-shadow">
          <img
            src={trixieLanceLogoBothColors}
            className="navbar-logo"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="navbar-ul space-x-1">
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
          <li class="dropdown">
            <button class="dropbtn">About us ˅</button>
            <div class="dropdown-content">
              <a href="#">Our story</a>
              <a href="#">Our mantras</a>
              <a href="#">Our founders</a>
            </div>
          </li>

          <li class="dropdown">
            <button class="dropbtn">Services ˅</button>
            <div class="dropdown-content">
              <a href="#">Small business consulting</a>
              <a href="#">Marketing consulting</a>
              <a href="#">PR and promotion</a>
            </div>
          </li>

          <li class="dropdown">
            <button class="dropbtn">
              <Link class="no-dropdown-button">TrixieBox</Link>
            </button>
          </li>

          <li>
            <button class="dropbtn">
              <Link class="no-dropdown-button">Blog</Link>
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
