// // import React from 'react'
// import { Link } from 'react-router-dom'

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen ">
//       <form className="flex flex-col justify-evenly items-left rounded-md mx-9 px-4 h-[70vh] w-[85vw] lg:w-[45vw] md:w-[65vw] bg-purple-400">
//         <h1 className="text-2xl font-bold mt-9 text-center">Login</h1>
//         <label className="flex flex-col text-sm font-bold">
//           Email:
//           <input type="email" className="border py-1 pl-3" />
//         </label>
//         <label className="flex flex-col text-sm font-bold">
//           Password:
//           <input type="password" className="border py-1 pl-3" />
//         </label>
//         <button
//           type="submit"
//           className="bg-black text-white px-5 py-1 rounded-sm hover:cursor-pointer"
//         >
//           Login
//         </button>
//         <p className="text-center mt-3 text-sm">
//           Don't have an account?{" "}
//           <Link className="text-blue-900" to="/register">
//           register here
//           </Link>
//         </p>
//       </form>
//     </div>
//   )
// }

// export default Login
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstancce";

const Login = () => {
  const navigate = useNavigate(); // Navigate to another page
  // State for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Send a POST request to the login endpoint
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      // Extract the token from the response
      const { token } = response.data;

      // Store the token in localStorage
      localStorage.setItem("token", token);

      // Log success (or redirect the user)
      console.log("Login successful! Token stored in localStorage.");
      setError(""); // Clear any previous errors

      // Redirect the user to the dashboard or another page
      // Example: history.push('/dashboard'); (if using React Router)

      navigate("/jobs");
    } catch (error) {
      // Handle errors (e.g., invalid credentials, network issues)
      console.error("Login failed:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-evenly items-left rounded-md mx-9 px-4 h-[70vh] w-[85vw] lg:w-[45vw] md:w-[65vw] bg-purple-400"
      >
        <h1 className="text-2xl font-bold mt-9 text-center">Login</h1>

        {/* Email Input */}
        <label className="flex flex-col text-sm font-bold">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border py-1 pl-3"
            required
          />
        </label>

        {/* Password Input */}
        <label className="flex flex-col text-sm font-bold">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border py-1 pl-3"
            required
          />
        </label>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white px-5 py-1 rounded-sm hover:cursor-pointer"
        >
          Login
        </button>

        {/* Register Link */}
        <p className="text-center mt-3 text-sm">
          Don't have an account?{" "}
          <Link className="text-blue-900" to="/register">
            register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
