import React from "react";

import endlesslayout from "../assets/img/endlessLayout.png";
import fullyCompatible from "../assets/img/fullyCompatible.png";
import unlimitedRedos from "../assets/img/unlimitedRedos.png";
import typography from "../assets/img/typography.png";

const Benefits = () => {
  return (
    <div className="benefits container">
      <div className="after-h1 header-div">
        <h1 className="h1-benefits">Why Choose Us</h1>
        <p className="text-header-benefits">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div className="features-benefits">
        <div className="card-benefits">
          <div className="img-div">
            <img src={endlesslayout} height="100"></img>
          </div>
          <div className="card-content">
            <span>POSSIBILITIES</span>
            <h4>Endless Layout</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
        </div>
        <div className="card-benefits">
          <div className="img-div">
            <img src={fullyCompatible} height="100"></img>
          </div>
          <div className="card-content">
            <span>TAKE CONTROL</span>
            <h4>Fully Compatiable</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
        </div>
        <div className="card-benefits">
          <div className="img-div">
            <img src={unlimitedRedos} height="100"></img>
          </div>
          <div className="card-content">
            <span>FUNCTIONS</span>
            <h4>Unlimited Redos</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
        </div>
        <div className="card-benefits">
          <div className="img-div">
            <img src={typography} height="100"></img>
          </div>
          <div className="card-content">
            <span>MODERN FONT</span>
            <h4>Typography</h4>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
