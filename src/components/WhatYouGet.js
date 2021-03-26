import React from "react";

import get1 from "../assets/img/get1.png";
import get2 from "../assets/img/get2.png";
import get3 from "../assets/img/get3.png";

const WhatYouGet = () => {
  return (
    <div className="xl:mx-80 bg-blue-0 py-6 border-b-2">
      <h1 className="text-center text-2xl font-semibold py-10 font-serif after-h1">
        What you Get
      </h1>
      <div className="flex space-x-20">
        <div className="text-center">
          <img
            src={get1}
            width="128"
            height="128"
            className="mx-auto"
          />
          <p className="font-bold text-lg my-2">Full & Deluxe Travel Sizes</p>
          <p className="bg-blue-300 rounded-2xl p-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className="text-center ">
          <img
            src={get2}
            width="128"
            height="128"
            className="mx-auto"
          />
          <p className="font-bold text-lg my-2">Exclusive Savings</p>
          <p className="bg-blue-300 rounded-2xl p-5">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
        <div className="text-center">
          <img
            src={get3}
            width="128"
            height="128"
            className="mx-auto"
          />
          <p className="font-bold text-lg my-2">Premium Products</p>
          <p className="bg-blue-300 rounded-2xl p-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
