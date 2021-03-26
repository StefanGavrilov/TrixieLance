import React from "react";

import { Link } from "react-router-dom";

import bothColorsWithSlogan from "../assets/img/bothColorsWithSlogan.png";

const Hero = () => {
  return (
    <div className="h-96 bg-gray-100 flex xl:mx-60">
      
      <div className="w-1/2 flex-col my-auto text-center px-20">
        <h1 className="text-2xl mb-4">
          <img
            src={bothColorsWithSlogan}
            className="inline-block h-24 mb-1"
            alt="Logo"
          />
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className="space-x-4 mt-5">
          <Link to="/" className="bg-color-green py-2 px-4 rounded text-blue-200 ">
            Buy Packet
          </Link>
          <span className="font-black">-</span>
          <Link to="/" className="bg-color-green py-2 px-4 rounded text-blue-200">
            Gift Packet
          </Link>
        </div>
      </div>
      <div className="w-1/2 flex-col h-full m-auto bg-gray-400">
      </div>
    </div>
  );
};

export default Hero;
