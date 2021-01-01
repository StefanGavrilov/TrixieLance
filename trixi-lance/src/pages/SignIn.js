import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignInCard from "../components/SignInCard";

const SignIn = () => {
  return (
    <div class="flex flex-col h-screen justify-between bg-gray-200">
      <SignInCard className="m-auto" />
      <Footer/>
    </div>
  );
};

export default SignIn;
