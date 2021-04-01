import React from "react";

import { Link } from "react-router-dom";

import packet1 from "../assets/img/packet1.png";
import packet2 from "../assets/img/packet2.png";
import packet3 from "../assets/img/packet3.png";

const Pricing = () => {
  return (
    <div className="pricing container">
      <h1 className="h1s after-h1">Join TrixieLand</h1>
      <div className="main-div-pricing space-x-24">
        <div className="card-pricing">
          <img
            src={packet1}
            width="128"
            height="128"
          />
          <h5>Monthly</h5>
          <p className="price-per-month">$25/Month</p>
          <Link
            to="/"
            className="select-subscription"
          >
            SELECT
          </Link>
          <p>25$ billed monthly</p>
          <p className="empty-p mt-3 pt-6"></p>
          <p className="p-non-refundable">Non-Refundable</p>
        </div>
        <div className="card-pricing">
          <img
            src={packet2}
            width="128"
            height="128"
          />
          <h5>
            3 Months
          </h5>
          <p className="price-per-month">$24/Month</p>
          <Link
            to="/"
            className="select-subscription"
          >
            SELECT
          </Link>
          <p>Prepay 72$ for 3 months</p>
          <p className="mt-3">Save 3$ compared to monthly</p>
          <p className="p-non-refundable">Non-Refundable</p>
        </div>
        <div className="card-pricing">
          <img
            src={packet3}
            width="128"
            height="128"
          />
          <h5>
            6 Months
          </h5>
          <p className="price-per-month">$23/Month</p>
          <Link
            to="/"
            className="select-subscription"
          >
            SELECT
          </Link>
          <p>Prepay 138$ for 6 months</p>
          <p className="mt-3">Save 12$ compared to monthly</p>
          <p className="p-non-refundable">Non-Refundable</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
