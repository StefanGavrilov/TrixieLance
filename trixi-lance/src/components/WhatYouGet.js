import React from "react";

import { Link } from "react-router-dom";

const WhatYouGet = () => {
  return (
    <div className="container flex-col mx-auto mb-40 bg-blue-200 ">
      <h1 className="mx-auto text-center text-2xl font-semibold py-4">
        What you Get
      </h1>
      <div className="flex space-x-28 mt-4">
        <div className="flex-col mx-auto text-center">
          <img
            src="https://cdn1.iconfinder.com/data/icons/christmas-ultra-color/60/006_-_Present-256.png"
            width="128"
            height="128"
            className="mx-auto"
          />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className="flex-col mx-auto text-center">
          <img
            src="https://cdn1.iconfinder.com/data/icons/christmas-ultra-color/60/006_-_Present-256.png"
            width="128"
            height="128"
            className="mx-auto"
          />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className="flex-col mx-auto text-center">
          <img
            src="https://cdn1.iconfinder.com/data/icons/christmas-ultra-color/60/006_-_Present-256.png"
            width="128"
            height="128"
            className="mx-auto"
          />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
