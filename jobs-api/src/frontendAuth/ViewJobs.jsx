import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { UserProvider } from "./UserContext";

const ViewJobs = () => {
const [viewAvailableJobs, setViewAvailableJobs] = React.useState([]);

  return (
    <div className="flex flex-col h-screen">
      <div className=" bg-red-400 shadow-md">
        {" "}
        <h1 className="text-center text-2xl">View Jobs</h1>
      </div>
    </div>
  );
};

export default ViewJobs;
