import React from "react";

import { Link } from "react-router-dom";

const SingInComp = () => {
  return (
    <div className="my-auto mx-auto space-y-5 bg-gray-100 p-14 rounded-md border-solid border border-current items-center">
      <h1 className="text-3xl font-semibold text-center mb-10">TrixieBox Logo</h1>
      <form className="space-y-5 flex-col">
        <div className="flex text-sm">
          <input
            placeholder="Email or Phone Number"
            type="text"
            id="fname"
            name="fname"
            className="bg-blue-100 border-solid border border-gray-400 rounded py-2 pl-2 pr-10 mx-auto"
          />
        </div>
        <div className="flex text-sm ">
          <input
            placeholder="Full Name"
            type="text"
            id="fname"
            name="fname"
            className="bg-blue-100 border-solid border border-gray-400 rounded py-2 pl-2 pr-10 mx-auto"
          />
        </div>
        <div className="flex text-sm ">
          <input
            placeholder="Username"
            type="text"
            id="fname"
            name="fname"
            className="bg-blue-100 border-solid border border-gray-400 rounded py-2 pl-2 pr-10 mx-auto"
          />
        </div>
        <div className="flex text-sm ">
          <input
            placeholder="Password"
            type="text"
            id="fname"
            name="fname"
            className="bg-blue-100 border-solid border border-gray-400 rounded py-2 pl-2 pr-10 mx-auto"
          />
        </div>
        <div className="flex">
          <button
            type="submit"
            className="mx-auto bg-blue-300 py-1 px-4 rounded mt-3"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="flex w-48 text-gray-400 text-center mx-auto mt-1">
        By signing up, you agree to our Terms , Data Policy and Cookies Policy .
      </div>
      <div className="flex w-48 text-gray-400 text-center mx-auto mt-1">
        Have an account?<Link to="/log-in" className="mx-auto text-blue-400">Log in</Link>
      </div>
    </div>
  );
};

export default SingInComp;
