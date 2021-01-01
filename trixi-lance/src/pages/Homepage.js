import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhatYouGet from "../components/WhatYouGet";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhatYouGet/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default Homepage;
