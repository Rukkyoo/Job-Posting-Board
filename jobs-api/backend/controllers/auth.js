import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { name, email, password } = req.body
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  const tempUser = { name, email, password: hashedPassword }
  if (!name || !email || !password) {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Please enter name, email and password" });
  }
  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
  res.send("Login user");
};

