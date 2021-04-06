import React from "react";

const Testimonials = () => {
  return (
    <div className="testimonials container">
      <h1 className="h1s after-h1">What They’re Saying</h1>
      <div className="main-div-testimonials space-x-24">
        <div className="card-div-testimonials">
          <p>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s"
          </p>
          <h6 className="pt-2 font-semibold">- Anonymous</h6>
        </div>
        <div className="card-div-testimonials">
          <p>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s"
          </p>
          <h6>- Anonymous</h6>
        </div>
        <div className="card-div-testimonials">
          <p>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s"
          </p>
          <h6>- Anonymous</h6>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
