import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container h-96 bg-gradient-to-r from-blue-500 to-green-500 flex mx-auto">
      <div className="w-1/2 flex-col my-auto text-center">
        <h1 className="text-2xl mb-4">Welcome to TrixieBox</h1>
        <p className="mx-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className="space-x-4 mt-5">
          <Link to="/" className="bg-red-600 py-2 px-4 rounded text-blue-200 ">
            Subscribe
          </Link>
          <Link to="/" className="bg-yellow-600 py-2 px-4 rounded text-blue-200">
            Give a gift
          </Link>
        </div>
      </div>
      <div className="w-1/2 flex-col m-auto">

      </div>
    </div>
  );
};

export default Hero;
