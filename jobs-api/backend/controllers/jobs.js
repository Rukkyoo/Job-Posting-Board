import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort("createdAt"); // find all jobs created by user
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

export const getSpecificJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req; // destructuring

  const job = await Job.findOne({ _id: jobId, createdBy: userId }); // find job by id and createdBy
  if (!job) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `No job with id ${jobId} found by user ${userId}` });
  }
  res.status(StatusCodes.OK).json({ job }); // send job
};
export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId; // add createdBy to req.body
  const job = await Job.create(req.body); // create job
  res.status(StatusCodes.CREATED).json({ job });
};
export const updateJob = async (req, res) => {
  res.send("Update job");
};
export const deleteJob = async (req, res) => {
  res.send("Delete job");
};

/*   export default {
    getAllJobs,
    getSpecificJob,
    createJob,
    updateJob,
    deleteJob
  } */
