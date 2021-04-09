import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Popup from "../components/Popup";
import Hero from "../components/Hero";
import WhatYouGet from "../components/WhatYouGet";
import Testimonials from "../components/Testimonials";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";


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
    }, 300)
  }, []);

  return (
    
    <div className="position-relative">
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}/>
      <Navbar />
      <Hero />
      <WhatYouGet />
      <Testimonials />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Homepage;
