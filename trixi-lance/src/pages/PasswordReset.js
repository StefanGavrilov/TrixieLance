import React from "react";

import Footer from "../components/Footer";
import PasswordResetCard from "../components/PasswordResetCard";

const PasswordReset = () => {
  return (
    <div class="flex flex-col h-screen justify-between bg-gray-200">
      <PasswordResetCard className="m-auto" />
      <Footer/>
    </div>
  );
};

export default PasswordReset;
