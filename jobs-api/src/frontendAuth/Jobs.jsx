// import React from "react";
// /* import { UserContext } from './UserContext' */
// import { IoMdAdd } from "react-icons/io";
// import { MdOutlineWorkOutline } from "react-icons/md";
// import axiosInstance from "../axiosInstancce";
// import { UserContext } from "./UserContext";

// const Jobs = () => {
//   const [openModal, setOpenModal] = React.useState(false);
//   const [newJob, setNewJob] = React.useState({
//     company: "",
//     position: "",
//   });

//   const { user } = React.useContext(UserContext);

//   const handleOpenModal = () => {
//     setOpenModal(true);
//     console.log("Modal opened");
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     console.log("Modal closed");
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewJob({
//       ...newJob,
//       [name]: value,
//     });
//   };

//   const handleSubmitJob = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axiosInstance.post("/jobs", newJob, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log(response);
//       // Close the modal
//       handleCloseModal();
//     } catch (error) {
//       console.error("Error creating job:", error);
//       // Display error message to the user
      
//     }
//   };

//   /*  const { user } = React.useContext(UserContext) */ // Destructure the user object from the UserContext
//   return (
//     <div className="flex flex-col justify-around">
//       <div className="flex flex-row justify-between px-5 py-2 bg-purple-400 shadow-md">
//         <h2 className="font-bold">Welcome {user.name}!</h2>
//         <button className="bg-slate-200 px-3 py-1 rounded-sm hover:cursor-pointer border-double border-red-300 font-bold">
//           Logout
//         </button>
//       </div>
//       <div className="flex flex-row justify-center items-center gap-5 h-[92vh]">
//         <div
//           onClick={handleOpenModal}
//           className="bg-purple-400 shadow-lg p-5 font-semibold rounded-md cursor-pointer flex flex-col items-center gap-3 hover:-translate-y-1 hover:bg-purple-500 transition duration-200 ease-in-out"
//         >
//           ADD JOB <IoMdAdd />
//         </div>
//         <div className="bg-purple-400 shadow-lg p-5 font-semibold rounded-md cursor-pointer flex flex-col items-center gap-3 hover:-translate-y-1 hover:bg-purple-500 transition duration-200 ease-in-out">
//           VIEW JOBS <MdOutlineWorkOutline />
//         </div>
//         {openModal && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
//             <div className="bg-white w-5/6 md:w-2/6 p-6 rounded-lg shadow-lg relative">
//               {/* Close Button */}
//               <button
//                 onClick={handleCloseModal}
//                 className="absolute top-4 right-4 text-red-500 text-xl font-bold hover:text-red-700"
//               >
//                 &times;
//               </button>

//               {/* Form Heading */}
//               <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
//                 Add Job Application
//               </h2>
//               <form className="space-y-4" onSubmit={handleSubmitJob}>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-1">
//                     Company:
//                   </label>
//                   <input
//                     type="text"
//                     value={newJob.company}
//                     onChange={handleChange}
//                     name="company"
//                     className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//                     placeholder="Enter company name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-1">
//                     Position:
//                   </label>
//                   <input
//                     type="text"
//                     value={newJob.position}
//                     onChange={handleChange}
//                     name="position"
//                     className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//                     placeholder="Enter job position"
//                   />
//                 </div>
//                {/*  <div>
//                   <label className="block text-gray-700 font-medium mb-1">
//                     Status:
//                   </label>
//                   <select
//                     name="status"
//                     value={newJob.status}
//                     onChange={handleChange}
//                     className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
//                   >
//                     <option value="pending">Pending</option>
//                     <option value="interview">Interview</option>
//                     <option value="declined">Declined</option>
//                   </select>
//                 </div> */}
//                 <button
//                   type="submit"
//                   className="w-full bg-purple-500 text-white py-2 rounded-md font-semibold hover:bg-purple-600 transition"
//                 >
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Jobs;

import React from "react";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";
import axiosInstance from "../axiosInstancce";
import { UserContext } from "./UserContext";

const Jobs = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [newJob, setNewJob] = React.useState({
    company: "",
    position: "",
  });
  const [error, setError] = React.useState(null);

  const { user, setUser } = React.useContext(UserContext);

  const handleOpenModal = () => {
    setOpenModal(true);
    console.log("Modal opened");
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    console.log("Modal closed");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewJob({
      ...newJob,
      [name]: value,
    });
  };

  const handleSubmitJob = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    try {
      const response = await axiosInstance.post("/jobs", newJob, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      handleCloseModal();
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error creating job:", error);
      setError("Failed to create job. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token
    setUser(null); // Reset the user state in the context
    // Optionally, redirect to the login page
  };

  return (
    <div className="flex flex-col justify-around">
      <div className="flex flex-row justify-between px-5 py-2 bg-purple-400 shadow-md">
        <h2 className="font-bold">Welcome {user ? user.name : "Guest"}!</h2>
        <button
          onClick={handleLogout}
          className="bg-slate-200 px-3 py-1 rounded-sm hover:cursor-pointer border-double border-red-300 font-bold"
        >
          Logout
        </button>
      </div>
      <div className="flex flex-row justify-center items-center gap-5 h-[92vh]">
        <div
          onClick={handleOpenModal}
          className="bg-purple-400 shadow-lg p-5 font-semibold rounded-md cursor-pointer flex flex-col items-center gap-3 hover:-translate-y-1 hover:bg-purple-500 transition duration-200 ease-in-out"
        >
          ADD JOB <IoMdAdd />
        </div>
        <div className="bg-purple-400 shadow-lg p-5 font-semibold rounded-md cursor-pointer flex flex-col items-center gap-3 hover:-translate-y-1 hover:bg-purple-500 transition duration-200 ease-in-out">
          VIEW JOBS <MdOutlineWorkOutline />
        </div>
        {openModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white w-5/6 md:w-2/6 p-6 rounded-lg shadow-lg relative">
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-red-500 text-xl font-bold hover:text-red-700"
              >
                &times;
              </button>

              {/* Form Heading */}
              <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
                Add Job Application
              </h2>
              <form className="space-y-4" onSubmit={handleSubmitJob}>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Company:
                  </label>
                  <input
                    type="text"
                    value={newJob.company}
                    onChange={handleChange}
                    name="company"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Position:
                  </label>
                  <input
                    type="text"
                    value={newJob.position}
                    onChange={handleChange}
                    name="position"
                    className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                    placeholder="Enter job position"
                  />
                </div>
                {error && <div className="text-red-500 text-center">{error}</div>}
                <button
                  type="submit"
                  className="w-full bg-purple-500 text-white py-2 rounded-md font-semibold hover:bg-purple-600 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;