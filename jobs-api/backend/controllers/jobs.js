import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";

export const getAllJobs = async (req, res) => {
    res.send("Get all jobs");
  };

export const getSpecificJob = async (req, res) => {
    res.send("Get specific job");
  };
export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({job})
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


