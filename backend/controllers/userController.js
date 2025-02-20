import asyncHandler from "express-async-handler";
import { registerUser, loginUser } from "../services/userService.js";

export const signup = asyncHandler(async (req, res) => {
  const { username, phone, password } = req.body;
  if (!username || !phone || !password)
    return res.status(400).json({ message: "All fields are required" });

  try {
    const user = await registerUser({ username, phone, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export const signin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  try {
    const data = await loginUser({ username, password });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
