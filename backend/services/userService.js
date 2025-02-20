import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async ({ username, phone, password }) => {
  // Check for duplicate phone or username
  const userExists = await User.findOne({
    $or: [{ phone }, { username }]
  });
  
  if (userExists) {
    throw new Error("User with provided phone or username already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, phone, password: hashedPassword });

  return { _id: user._id, username: user.username, phone: user.phone };
};

export const loginUser = async ({ phone, password }) => {
  const user = await User.findOne({ phone });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

  return { token, user: { _id: user._id, username: user.username, phone: user.phone } };
};
