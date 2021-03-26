import React from "react";

import Footer from "../components/Footer";
import LogInCard from "../components/LogInCard";

const LogIn = () => {
  return (
    <div class="flex flex-col h-screen justify-between bg-gray-200">
      <LogInCard className="m-auto" />
      <Footer/>
    </div>
  );
};

export default LogIn;
