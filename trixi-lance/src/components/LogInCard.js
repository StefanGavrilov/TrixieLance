import React from "react";

import { Link } from "react-router-dom";

import blackNoSlogan from "../assets/img/blackNoSlogan.png";

const LogInCard = () => {
  return (
    <div className="my-auto mx-auto space-y-5 bg-gray-100 px-10 py-5 rounded-md border-solid border border-gray-400 items-center">
      <img
        src={blackNoSlogan}
        className="text-3xl font-semibold text-center h-12 mb-10"
      />
      <form className="space-y-5 flex-col">
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
            Log In
          </button>
        </div>
        <div className="flex">
          <Link to="password-reset" className="mx-auto text-blue-400">
            Forgot password ?
          </Link>
        </div>
      </form>
      <div className="text-gray-400 mt-1 text-center">
        Don't have account?
        <Link to="/sign-in" className="ml-1 text-blue-400">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default LogInCard;
