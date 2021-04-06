import React from "react";

import { Link } from "react-router-dom";

import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/instagram.png";
import twitter from "../assets/img/twitter.png";
import youtube from "../assets/img/youtube.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left-side-footer">
        <h5>GET IN TOUCH</h5>
        <div className="social-medias space-x-8">
          <Link to="//facebook.com" target="_blank" className="social-medias">
            <img src={facebook} width="36" height="36" />
          </Link>

          <Link to="//instagram.com" target="_blank" className="social-medias">
            <img src={instagram} width="36" height="36" />
          </Link>

          <Link to="//twitter.com" target="_blank" className="social-medias">
            <img src={twitter} width="36" height="36" />
          </Link>

          <Link to="//youtube.com" target="_blank" className="social-medias">
            <img src={youtube} width="36" height="36" />
          </Link>
        </div>
      </div>

      <div className="right-side-footer">
        <h5>NEWSLETTER SIGN IN</h5>
        <p>Sign up for our Newsletters with Rouge News and Product Releases</p>
        <input placeholder="Your Email" type="text" className="footer-input" />
      </div>
    </div>
  );
};

export default Footer;
