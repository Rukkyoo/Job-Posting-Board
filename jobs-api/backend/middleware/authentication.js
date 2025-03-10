// import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

const auth = (req, res, next) => {
  // check header
  const authHeader = req.header("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "Missing or invalid Authorization header" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    //attach user to job routes
    req.user = { userId: payload.userId, name: payload.name }; //attaches the user to the request object
    next();
  } catch (error) {
    throw new Error("You are not authorized to access this route", error);
  }
};

export default auth;

