import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

export const register = async (req, res) => {
  /*  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const tempUser = { name, email, password: hashedPassword };
  if (!name || !email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please enter name, email and password" });
  } */
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token }); // returns username and token in the api response
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error("Please provide email and password"); // checks for the absence of username in the mongodb
  }
  const user = await User.findOne({ email }); // finds specific email in the db

  // compare password
  if (!user) {
    throw new Error("Invalid credentials"); // checks for the absence of user in the mongodb
  }
  const isPasswordCorrect = await user.comparePassword(password); // compares the password entered by the user with the hashed password in the db
  if (!isPasswordCorrect) {
    throw new Error("Invalid credentials"); // checks for the absence of user in the mongodb
  }
  const token = user.createJWT(); // creates a jwt token for the user
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token }); // returns username and token in the api response
};
