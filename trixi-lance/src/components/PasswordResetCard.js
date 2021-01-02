import React from "react";

import { Link } from "react-router-dom";

import lock from "../assets/img/lock.png";

const LogInCard = () => {
  return (
    <div className="m-auto space-y-5 bg-gray-100 px-14 py-5 rounded-md border-solid border border-gray-400 items-center">
      <img src={lock} alt="Lock" className="mx-10"  />

      <div className="flex text-sm">
        <input
          placeholder="Enter e-mail"
          type="text"
          className="bg-blue-100 border-solid border border-gray-400 rounded py-2 pl-2 pr-2 w-full focus:outline-none focus:border-gray-600"
        />
      </div>
      <div className="flex">
        <button
          type="button"
          className="mx-auto bg-blue-500 py-1 px-4 rounded mt-3 text-blue-50 font-semibold hover:text-blue-200 focus:outline-none focus:bg-blue-600"
        >
          Send Login Link
        </button>
      </div>
      <div className="flex">
        <div className="h-px w-1/2 bg-gray-400 my-auto"></div>
        <div className="mx-1 text-gray-500">OR</div>
        <div className="h-px w-1/2 bg-gray-400 my-auto"></div>
      </div>
      <div className="flex text-gray-400">
        <Link to="/sign-in" className="mx-auto text-blue-400">
          Create New Account
        </Link>
      </div>
      <div className="flex text-gray-400">
        <Link to="/log-in" className="mx-auto text-blue-400">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default LogInCard;
