import React from "react";

import { Link } from "react-router-dom";

import logoGreen from "../assets/img/logoGreen.png";
import heroBg from "../assets/img/heroBg.jpg";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-left-div">
        <h1 className="hero-left-div-h1">
          <img
            src={logoGreen}
            className="hero-left-div-img"
            alt="Logo"
          />
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className="buttons-div space-x-4">
          <Link to="/" className="hero-buttons">
            Buy Packet
          </Link>
          <Link to="/" className="hero-buttons">
            Gift Packet
          </Link>
        </div>
      </div>
      <div className="hero-background-div">
        <img
          src={heroBg}
          className="hero-bg-img"
        />
      </div>
    </div>
  );
};

export default Hero;
