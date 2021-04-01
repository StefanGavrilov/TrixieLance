import React from "react";

import get1 from "../assets/img/get1.png";
import get2 from "../assets/img/get2.png";
import get3 from "../assets/img/get3.png";

const WhatYouGet = () => {
  return (
    <div className="what-you-get container">
      <h1 className="h1s after-h1">
        What you Get
      </h1>
      <div className="main-div-what-you-get space-x-20">
        <div className="card-div-what-you-get">
          <img
            src={get1}
            width="128"
            height="128"
          />
          <h5 className="h5-card-what-you-get">Full & Deluxe Travel Sizes</h5>
          <p className="p-card-what-you-get">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className="card-div-what-you-get">
          <img
            src={get2}
            width="128"
            height="128"
          />
          <h5 className="h5-card-what-you-get">Exclusive Savings</h5>
          <p className="p-card-what-you-get">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
        <div className="card-div-what-you-get">
          <img
            src={get3}
            width="128"
            height="128"
          />
          <h5 className="h5-card-what-you-get">Premium Products</h5>
          <p className="p-card-what-you-get">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
