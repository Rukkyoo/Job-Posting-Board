import React from "react";
/* import { UserContext } from './UserContext' */
import { IoMdAdd } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";

const Jobs = () => {
  /*  const { user } = React.useContext(UserContext) */ // Destructure the user object from the UserContext
  return (
    <div className="flex flex-col justify-around">
      <div className="flex flex-row justify-between px-5 py-2 bg-purple-400 shadow-md">
        <h2 className="font-bold">Welcome!</h2>
        <button className="bg-slate-200 px-3 py-1 rounded-sm hover:cursor-pointer border-double border-red-300 font-bold">
          Logout
        </button>
      </div>
      <div className="flex flex-row justify-center items-center gap-25 h-[92vh]">
        <div className="bg-purple-400 shadow-lg p-5 font-semibold rounded-md cursor-pointer flex flex-col items-center gap-3">
          ADD JOB <IoMdAdd />
        </div>
        <div className="bg-purple-400 shadow-lg p-5 font-semibold rounded-md cursor-pointer flex flex-col items-center gap-3">
          VIEW JOBS <MdOutlineWorkOutline />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
