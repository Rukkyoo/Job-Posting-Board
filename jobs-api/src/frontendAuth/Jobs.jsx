import React from "react";
/* import { UserContext } from './UserContext' */
import { IoMdAdd } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";

const Jobs = () => {
  const [openModal, setOpenModal] = React.useState(false);
  
  const handleOpenModal = () => {
    setOpenModal(true);
    console.log("Modal opened");
  }

  const handleCloseModal = () => {
    setOpenModal(false);
    console.log("Modal opened");
  }



  /*  const { user } = React.useContext(UserContext) */ // Destructure the user object from the UserContext
  return (
    <div className="flex flex-col justify-around">
      <div className="flex flex-row justify-between px-5 py-2 bg-purple-400 shadow-md">
        <h2 className="font-bold">Welcome!</h2>
        <button className="bg-slate-200 px-3 py-1 rounded-sm hover:cursor-pointer border-double border-red-300 font-bold">
          Logout
        </button>
      </div>
      <div className="flex flex-row justify-center items-center gap-5 h-[92vh]">
        <div onClick={handleOpenModal} className="bg-purple-400 shadow-lg p-5 font-semibold rounded-md cursor-pointer flex flex-col items-center gap-3 hover:-translate-y-1 hover:bg-purple-500 transition duration-200 ease-in-out">
          ADD JOB <IoMdAdd />
        </div>
        <div className="bg-purple-400 shadow-lg p-5 font-semibold rounded-md cursor-pointer flex flex-col items-center gap-3 hover:-translate-y-1 hover:bg-purple-500 transition duration-200 ease-in-out">
          VIEW JOBS <MdOutlineWorkOutline />
        </div>
        {openModal && (
            <div className="fixed top-30  h-3/5 w-5/6 md:w-3/6 bg-purple-100  bg-opacity-50 flex justify-center items-center">
                <form>

                </form>
            </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
