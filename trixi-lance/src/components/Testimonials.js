import React from "react";

import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <div className="container flex-col mx-auto mb-40 bg-blue-200 ">
      <h1 className="mx-auto text-center text-2xl font-semibold py-4">
        Why choose TrixieBox
      </h1>
      <div className="flex space-x-28 mt-4">
        <div className="flex-col mx-auto text-center">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <h4 className="pt-2 font-semibold">- Anonymous</h4>
        </div>
        <div className="flex-col mx-auto text-center">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <h4 className="pt-2 font-semibold">- Anonymous</h4>
        </div>
        <div className="flex-col mx-auto text-center">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <h4 className="pt-2 font-semibold">- Anonymous</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
