import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import axiosInstance from "../axiosInstancce";
/* import { UserContext } from "./UserContext"; */

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

/*   const { setUser } = React.useContext(UserContext); */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("clicked")
      
      const response = await axiosInstance.post(
        "/auth/register",
        formData
      );
/*       const { user } = response.data;
      setUser(user); */

      navigate("/jobs");
      console.log(response);
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-left rounded-md mx-9 px-4 h-[70vh] w-[85vw] lg:w-[45vw] md:w-[65vw] bg-purple-400 shadow-md"
      >
        <h1 className="text-2xl font-bold mt-9 text-center">Register</h1>
        <label className="flex flex-col mt-5 text-sm font-bold ">
          Name:
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="border py-1 pl-3 border-slate-600"
          />
        </label>
        <label className="flex flex-col text-sm font-bold mt-5">
          Email:
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="border py-1 pl-3 border-slate-600"
          />
        </label>
        <label className="flex flex-col text-sm font-bold mt-5">
          Password:
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            className="border py-1 pl-3 border-slate-600"
          />
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
