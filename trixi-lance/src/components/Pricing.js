import React from "react";

import { Link } from "react-router-dom";

import packet1 from "../assets/img/packet1.png";
import packet2 from "../assets/img/packet2.png";
import packet3 from "../assets/img/packet3.png";

const Pricing = () => {
  return (
    <div className="xl:mx-80 py-6 border-b-2">
      <h1 className="mx-auto text-center text-2xl font-semibold pb-16 pt-10 after-h1 ">
        Join TrixieLand
      </h1>
      <div className="flex">
        <div className="flex space-x-40 mx-auto">
          <div className="text-center border-2 border-gray-400 px-2 py-7">
            <img src={packet1} width="128" height="128" className="mx-auto mb-8"/>
            <p className="tracking-widest text-2xl font-semibold mb-3">Monthly</p>
            <p className="font-semibold mb-3">$25/Month</p>
            <Link
              to="/"
              className="block bg-color-green rounded text-white py-2 px-20 my-3 mx-5 tracking-wider font-bold"
            >
              SELECT
            </Link>
            <p>25$ billed monthly</p>
            <p className="mt-3 pt-6"></p>
            <p className="mt-3 font-medium text-gray-400">Non-Refundable</p>
          </div>
          <div className="text-center border-2 border-gray-400 px-2 py-7">
            <img src={packet2} width="128" height="128" className="mx-auto mb-8"/>
            <p className="tracking-widest text-2xl font-semibold mb-3">3 Months</p>
            <p className="font-semibold mb-3">$24/Month</p>
            <Link
              to="/"
              className="block bg-color-green rounded text-white py-2 px-20 my-3 mx-5 tracking-wider font-bold"
            >
              SELECT
            </Link>
            <p>Prepay 72$ for 3 months</p>
            <p className="mt-3">Save 3$ compared to monthly</p>
            <p className="mt-3 font-medium text-gray-400">Non-Refundable</p>
          </div>
          <div className="text-center border-2 border-gray-400 px-2 py-7">
            <img src={packet3} width="128" height="128" className="mx-auto mb-8"/>
            <p className="tracking-widest text-2xl font-semibold mb-3">6 Months</p>
            <p className="font-semibold mb-3">$23/Month</p>
            <Link
              to="/"
              className="block bg-color-green rounded text-white py-2 px-20 my-3 mx-5 tracking-wider font-bold"
            >
              SELECT
            </Link>
            <p>Prepay 138$ for 6 months</p>
            <p className="mt-3">Save 12$ compared to monthly</p>
            <p className="mt-3 font-medium text-gray-400">Non-Refundable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
