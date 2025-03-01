import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    {" "}
    <h1 className=" text-center text-xl font-bold">
      Hello user, welcome to Rukky's <span className='text-purple-800'>JobPostBoard</span> 
      <br />
      <br />
      Click to{" "}
      <span className="underline text-purple-800">
        <Link to="/register">Register</Link>
      </span>{" "}
      or{" "}
      <span className="underline text-purple-800">
        <Link to="/login">Login</Link>
      </span>
    </h1>
  </div>
  )
}

export default Landing