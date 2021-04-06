import React from "react";

import discount from "../assets/img/discount.jpg";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-bg"></div>
      <div className="popup-inner">
        <img src={discount} className="popup-img"></img>
        <input placeholder="Your Email" type="text" className="popup-input"/>
        <button className="popup-subscribe bg-color-green">SUBSCRIBE</button>
        <button
          onClick={() => props.setTrigger(false)}
          className="popup-close-button"
        >
          No thanks, I will pay full price.
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
