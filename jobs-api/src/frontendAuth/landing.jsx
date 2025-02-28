import React from "react";
import { Link } from "react-router-dom";

const landing = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {" "}
      <h1 className="text-purple-800 text-center text-xl">
        Hello user, welcome to Rukky's JobPostBoard
        <br />
        <br />
        Do you want to to{" "}
        <span className="underline">
          <Link to="/register">Register</Link>
        </span>{" "}
        or{" "}
        <span className="underline">
          <a href="">Login</a>
        </span>
      </h1>
    </div>
  );
};

export default landing;
