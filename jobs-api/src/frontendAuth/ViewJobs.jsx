import React from "react";
import { FaPencilAlt } from "react-icons/fa";

const ViewJobs = () => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <div className="bg-white w-5/6 md:w-2/6 p-6 rounded-lg shadow-lg relative">
          {/* Close Button */}
          <button
            onClick={handleCloseViewJobsModal}
            className="absolute top-4 right-4 text-red-500 text-xl font-bold hover:text-red-700"
          >
            &times;
          </button>

          {/* Form Heading */}
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
            View Jobs
          </h2>
          <div className="flex flex-row gap-5">
            <div className="flex flex-row justify-between w-full">
              <div>
                <h3>Company</h3>
                <h3>Position</h3>
                <h3>Status</h3>
              </div>
              <div>
                <h3>
                  <FaPencilAlt />
                </h3>
                <h3>IBM</h3>
                <h3>Software Engineer</h3>
                <h3>Pending</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewJobs;
