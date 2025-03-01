import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <form className="flex flex-col items-left rounded-md mx-9 px-4 h-[70vh] w-[85vw] lg:w-[45vw] md:w-[65vw] bg-purple-400">
        <h1 className="text-2xl font-bold mt-9 text-center">Register</h1>
        <label className="flex flex-col mt-5 text-sm font-bold ">
          Name:
          <input type="text" className="border py-1 pl-3" />
        </label>
        <label className="flex flex-col text-sm font-bold mt-5">
          Email:
          <input type="email" className="border py-1 pl-3" />
        </label>
        <label className="flex flex-col text-sm font-bold mt-5">
          Password:
          <input type="password" className="border py-1 pl-3" />
        </label>
        <button
          type="submit"
          className="bg-black text-white px-5 py-1 mt-10 rounded-sm hover:cursor-pointer"
        >
          Register
        </button>
        <p className="text-center mt-3 text-sm">
          Already have an account?{" "}
          <Link className="text-blue-900" to="/login">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
