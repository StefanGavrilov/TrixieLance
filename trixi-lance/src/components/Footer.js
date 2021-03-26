import React from "react";

import { Link } from "react-router-dom";

import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/instagram.png";
import twitter from "../assets/img/twitter.png";
import youtube from "../assets/img/youtube.png";

const Footer = () => {
  return (
    <div className="flex bg-color-gray h-14">
      <div className="flex mx-auto space-x-4">
        <a href="//facebook.com" target="_blank">
          <img src={facebook} width="26" height="26" />
        </a>

        <a href="//instagram.com" target="_blank">
          <img src={instagram} width="26" height="26" />
        </a>

        <a href="//twitter.com" target="_blank">
          <img src={twitter} width="26" height="26" />
        </a>

        <a href="//youtube.com" target="_blank">
          <img src={youtube} width="26" height="26" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
