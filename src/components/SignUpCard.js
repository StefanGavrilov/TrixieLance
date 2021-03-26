import React from "react";

import { Link } from "react-router-dom";

const SingInComp = () => {
  return (
    <div className="my-auto mx-auto space-y-5 bg-gray-100 px-14 py-5 rounded-md border-solid border border-gray-400 items-center">
      <h1 className="text-3xl font-semibold text-center mb-10">
        TrixieBox Logo
      </h1>
      <form className="space-y-5 flex-col" id="signUpForm">
        <div className="flex text-sm">
          <input
            id="test"
            placeholder="Email or Phone Number"
            type="text"
            className="bg-blue-100 border-solid border border-gray-400 rounded py-2 pl-2 pr-10 mx-auto focus:outline-none focus:border-gray-600"
          />
        </div>
        <div className="flex text-sm ">
          <input
            placeholder="Full Name"
            type="text"
            className="bg-blue-100 border-solid border border-gray-400 rounded py-2 pl-2 pr-10 mx-auto focus:outline-none focus:border-gray-600"
          />
        </div>
        <div className="flex text-sm ">
          <input
            placeholder="Username"
            type="text"
            className="bg-blue-100 border-solid border border-gray-400 rounded py-2 pl-2 pr-10 mx-auto focus:outline-none focus:border-gray-600"
          />
        </div>
        <div className="flex text-sm ">
          <input
            placeholder="Password"
            type="password"
            className="bg-blue-100 border-solid border border-gray-400 rounded py-2 pl-2 pr-10 mx-auto focus:outline-none focus:border-gray-600"
          />
        </div>
        <div className="flex">
          <button
            type="submit"
            className="mx-auto bg-blue-500 py-1 px-4 rounded mt-3 text-blue-50 font-semibold hover:text-blue-200 focus:outline-none focus:bg-blue-600"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="flex w-48 text-gray-400 text-center mt-1">
        By signing up, you agree to our Terms , Data Policy and Cookies Policy .
      </div>
      <div className="flex w-48 text-gray-400 w-full mx-auto mt-1">
        <div className="mx-auto">
          Have an account?
          <Link to="/log-in" className="pl-1 text-blue-400">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingInComp;
