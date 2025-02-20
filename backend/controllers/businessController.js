import asyncHandler from "express-async-handler";
import { registerBusiness,loginBusiness } from "../services/businessService.js";

export const signupBusiness = asyncHandler(async (req, res) => {
  const { businessName, category, phoneNumber, password } = req.body;
  if (!businessName || !category || !phoneNumber || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const data = await registerBusiness({ businessName, category, phoneNumber, password });
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export const signinBusiness = asyncHandler(async (req, res) => {
    const { businessName, password } = req.body;
    if (!businessName || !password) {
      return res.status(400).json({ message: "Business name and password are required" });
    }
  
    try {
      const data = await loginBusiness({ businessName, password });
      res.json(data);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });