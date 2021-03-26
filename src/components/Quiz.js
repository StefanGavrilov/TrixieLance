import React from "react";

import { Link } from "react-router-dom";

const Quiz = () => {
  return (
    <div className="container flex-col mx-auto pt-1 pb-4 bg-blue-100">
      <div className="flex my-5 mx-auto">
        <ul className="flex items-center mx-auto space-x-4">
          <li className="h-4 w-4 bg-gray-300 rounded-full"></li>
          <li className="h-4 w-4 bg-yellow-500 rounded-full"></li>
          <li className="h-4 w-4 bg-gray-300 rounded-full"></li>
          <li className="h-4 w-4 bg-gray-300 rounded-full"></li>
          <li className="h-4 w-4 bg-gray-300 rounded-full"></li>
          <li className="h-4 w-4 bg-gray-300 rounded-full"></li>
          <li className="h-4 w-4 bg-gray-300 rounded-full"></li>
          <li className="h-4 w-4 bg-gray-300 rounded-full"></li>
        </ul>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-semibold">This is the question ?</h1>
      </div>

      <div className="bg-red-100 h-28 p-4"></div>
      <div className="flex items-center mx-auto space-x-4">
        <ul className="flex items-center mx-auto space-x-4">
          <li>
            <button className="px-4 py-2 rounded bg-blue-300">Back</button>
          </li>
          <li>
            <button className="px-4 py-2 rounded bg-blue-300">Next</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
