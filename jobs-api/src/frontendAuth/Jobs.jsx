import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { CiTrash } from "react-icons/ci";
import axiosInstance from "../axiosInstancce";
import { UserContext } from "./UserContext";
import ViewJobs from "./ViewJobs";

const Jobs = () => {
  const [openAddJobModal, setOpenAddJobModal] = React.useState(false);
  const [newJob, setNewJob] = React.useState({
    company: "",
    position: "",
  });
  const [error, setError] = React.useState(null);
  const [viewJobsModal, setViewJobsModal] = React.useState(false);
  const { user, setUser } = React.useContext(UserContext);
  const [availableJobs, setAvailableJobs] = useState([]);
  const [newAvJob, setNewAvJob] = useState("");

  const handleCloseViewJobsModal = () => {
    setViewJobsModal(false);
    console.log("Modal opened");
  };

  const handleOpenAddJobModal = () => {
    setOpenAddJobModal(true);
    console.log("Modal opened");
  };

  const handleCloseAddJobModal = () => {
    setOpenAddJobModal(false);
    console.log("Modal closed");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewJob({
      ...newJob,
      [name]: value,
    });
  };

  const fetchJobs = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("No token found. Please log in.");
      return;
    }

    try {
      const response = await axiosInstance.get("/jobs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAvailableJobs(response.data); // Update the availableJobs state
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError("Failed to fetch jobs. Please try again.");
    }
  };

  const handleSubmitJob = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
  
    if (!token) {
      setError("No token found. Please log in.");
      return;
    }
  
    try {
      await axiosInstance.post("/jobs", newJob, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      // Fetch the updated list of jobs
      await fetchJobs();
  
      // Reset the form
      setNewJob({
        company: "",
        position: "",
      });
  
      // Close the modal
      handleCloseAddJobModal();
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error creating job:", error);
      setError("Failed to create job. Please try again.");
    }
  };

  const handleOpenViewJobsModal = async () => {
    console.log("Opening View Jobs Modal");
  console.log("Available Jobs:", availableJobs); 
    await fetchJobs();
    setViewJobsModal(true);
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
          onClick={handleOpenAddJobModal}
          className="bg-purple-400 shadow-lg p-5 font-semibold rounded-md cursor-pointer flex flex-col items-center gap-3 hover:-translate-y-1 hover:bg-purple-500 transition duration-200 ease-in-out"
        >
          ADD JOB <IoMdAdd />
        </div>
        <div
          onClick={handleOpenViewJobsModal}
          className="bg-purple-400 shadow-lg p-5 font-semibold rounded-md cursor-pointer flex flex-col items-center gap-3 hover:-translate-y-1 hover:bg-purple-500 transition duration-200 ease-in-out"
        >
          VIEW JOBS <MdOutlineWorkOutline />
        </div>
        {openAddJobModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white w-5/6 md:w-2/6 p-6 rounded-lg shadow-lg relative">
              {/* Close Button */}
              <button
                onClick={handleCloseAddJobModal}
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
                {error && (
                  <div className="text-red-500 text-center">{error}</div>
                )}
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

        {/* View Jobs Modal */}
        {viewJobsModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white h-[90vh] w-[90vw] md:w-[90vw] p-6 rounded-lg shadow-lg relative flex flex-col">
              {/* Close Button */}
              <button
                onClick={handleCloseViewJobsModal}
                className="absolute top-4 right-4 text-red-500 text-xl font-bold hover:text-red-700"
              >
                &times;
              </button>

              {/* Modal Header */}
              <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
                View Job Applications
              </h2>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 rounded-md max-h-[75vh]">
                <div className="flex flex-col gap-6 items-center">
                  {availableJobs.map((job, index) => (
                    <div
                      key={index}
                      className="bg-slate-200 rounded-lg shadow-lg w-80 flex flex-col justify-start overflow-hidden"
                    >
                      {/* Header Section */}
                      <div className="flex flex-row px-6 py-3 items-center justify-between w-full bg-purple-400 gap-2">
                        <CiTrash
                          className="text-red-500 hover:text-red-600 cursor-pointer transition-colors"
                          size={25}
                        />
                        <GoPencil
                          className="text-slate-700 hover:text-slate-800 cursor-pointer transition-colors"
                          size={25}
                        />
                      </div>
                      {/* Content Section */}
                      <div className="flex flex-col px-6 py-4 gap-4">
                        <p className="text-slate-700">
                          Company:{" "}
                          <span className="font-bold text-slate-900 ml-2">
                            {job.company}
                          </span>
                        </p>
                        <p className="text-slate-700">
                          Position:{" "}
                          <span className="font-bold text-slate-900 ml-2"></span>
                        </p>
                        <div className="flex flex-row justify-between gap-3">
                          <p className="text-slate-700">
                            Posted by:{" "}
                            <span className="font-bold text-slate-900 ml-2">{user ? user.name : "Unknown"}</span>
                          </p>
                          <p className="text-slate-700">
                            Status:{" "}
                            <span className="font-bold text-purple-600 ml-2"></span>
                          </p>
                        </div>
                      </div>

                      {/* Footer Section (Optional) */}
                      <div className="mt-auto px-6 py-3 bg-slate-100 border-t border-slate-300">
                        <p className="text-sm text-slate-500">Last updated:</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
