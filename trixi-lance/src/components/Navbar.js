import React from "react";

import { Link } from "react-router-dom";

const url = "//google.com"

const Navbar = () => {
  return (
    <nav className="px-4 py-1 bg-blue-600 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link to="/" className="px-2">
          <img
            src="https://cdn3.iconfinder.com/data/icons/payment-method-1/64/_American_Express-256.png"
            className="inline-block"
            width="75px"
            alt="Logo"
          />
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <a href={url} target="_blank" className="text-center m-auto text-blue-200 font-bold hover:text-blue-300">
              <p>About us</p>
            </a>
          </li>
          <li>
            <div className="text-center m-auto text-blue-200 font-bold hover:text-blue-300">
              <button className="font-bold">TrixieBox ˅</button>
            </div>
          </li>
          <li>
            <Link className="text-center m-auto text-blue-200 font-bold hover:text-blue-300">
              <p>Services</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <Link className="text-center m-auto text-blue-200 font-bold hover:text-blue-300">
          <p>Log in</p>
        </Link>
        <Link to="sign-in" className="text-center m-auto text-blue-200 font-bold hover:text-blue-300">
          <p>Sign in</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
