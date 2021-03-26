import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import SignUpCard from "../components/SignUpCard";

const SignIn = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/api/users")
      .then((res) => res.json())
      .then((users) => setUsers(users))
      .catch((err) => console.log("error"));
  }, [formData]);

  const handleChange = (e) => {
    let test = formData;
    test[e.target.name] = e.target.value;
    setFormData(test);
  };

  const eventHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log("error"));
  };
  return (
    <div className="flex flex-col h-screen justify-between bg-gray-200">
      <div className="my-auto mx-auto space-y-5 bg-gray-100 px-14 py-5 rounded-md border-solid border border-gray-400 items-center">
        <h1 className="text-3xl font-semibold text-center mb-10">
          TrixieBox Logo
        </h1>
        <form className="space-y-5 flex-col" id="signUpForm">
          <div className="flex text-sm">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email or Phone Number"
              type="text"
              className="bg-blue-100 border-solid border border-gray-400 rounded py-2 pl-2 pr-10 mx-auto focus:outline-none focus:border-gray-600"
            />
          </div>
          <div className="flex text-sm ">
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              type="text"
              className="bg-blue-100 border-solid border border-gray-400 rounded py-2 pl-2 pr-10 mx-auto focus:outline-none focus:border-gray-600"
            />
          </div>
          <div className="flex text-sm ">
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              type="text"
              className="bg-blue-100 border-solid border border-gray-400 rounded py-2 pl-2 pr-10 mx-auto focus:outline-none focus:border-gray-600"
            />
          </div>
          <div className="flex text-sm ">
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              type="password"
              className="bg-blue-100 border-solid border border-gray-400 rounded py-2 pl-2 pr-10 mx-auto focus:outline-none focus:border-gray-600"
            />
          </div>
          <div className="flex">
            <button
              onClick={eventHandler}
              type="submit"
              className="mx-auto bg-blue-500 py-1 px-4 rounded mt-3 text-blue-50 font-semibold hover:text-blue-200 focus:outline-none focus:bg-blue-600"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="flex w-48 text-gray-400 text-center mt-1">
          By signing up, you agree to our Terms , Data Policy and Cookies Policy
          .
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
      <Footer />
    </div>
  );
};

export default SignIn;
