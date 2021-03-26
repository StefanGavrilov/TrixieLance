import React from "react";

import { Link } from "react-router-dom";

import LogInCard from "../components/LogInCard";

import trixieLanceLogoGray from "../assets/img/trixieLanceLogoGray.png";

const Navbar = () => {
  return (
    <nav className="px-4 py-1 flex items-center justify-between bg-color-green">
      <div className="flex items-center space-x-4">
        <Link to="/" className="px-2">
          <img
            src={trixieLanceLogoGray}
            className="h-14"
            alt="Logo"
          />
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <a href="//google.com" target="_blank" className="text-center m-auto text-blue-100 font-bold hover:text-blue-200">
              <p>About us</p>
            </a>
          </li>
          <li>
            <div className="text-center m-auto text-blue-100 font-bold hover:text-blue-200">
              <button className="font-bold">TrixieBox ˅</button>
            </div>
          </li>
          <li>
            <Link to="/" className="text-center m-auto text-blue-100 font-bold hover:text-blue-200">
              <p>Services</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="log-in" className="text-center m-auto text-blue-100 font-bold hover:text-blue-200">
          <p>Log in</p>
        </Link>
        <Link to="sign-in" className="text-center m-auto text-blue-100 font-bold hover:text-blue-200">
          <p>Sign in</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
