import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhatYouGet from "../components/WhatYouGet";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Popup from "../components/Popup";

const Homepage = () => {
  const [packets, setPackets] = useState({});
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const packetsFetched = await fetch(
        `http://localhost:3001/api/packets`
      ).then((res) => res.json());

      setPackets(packetsFetched);
    };
    fetchData();
    setTimeout(() => {
      setTimedPopup(true)
    }, 3000)
  }, []);


  return (
    <div className="relative">
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}/>
      <Navbar />
      <Hero />
      <WhatYouGet />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;
