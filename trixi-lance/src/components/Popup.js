import React from "react";

import discount from "../assets/img/discount.jpg";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup flex items-center justify-center h-screen w-full pop-up-bg absolute">
      <div className="popup-inner w-1/2 h-4/6 bg-blue-100 border border-black p-3">
        <img src={discount} className=""></img>
        <input
          placeholder="Your Email"
          type="text"
          className="block mx-auto border h-10 w-1/2 px-3 mt-14 border-gray-300 rounded-lg"
        />
        <button className="block h-10 w-1/2 mx-auto px-3 mt-6 bg-color-green text-white tracking-wide font-semibold rounded-lg">SUBSCRIBE</button>
        <button onClick={() => props.setTrigger(false)} className="block mx-auto mt-10 underline">
          No thanks, I will pay full price.
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
