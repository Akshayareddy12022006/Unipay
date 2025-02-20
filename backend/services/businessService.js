import Business from "../models/businessModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerBusiness = async ({ businessName, category, phoneNumber, password }) => {
  // Check if a business with the same phone number already exists
  const businessExists = await Business.findOne({ phoneNumber });
  if (businessExists) {
    throw new Error("Business with this phone number already exists");
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);
  const business = await Business.create({
    businessName,
    category,
    phoneNumber,
    password: hashedPassword,
  });

  // Optionally, create a JWT for the new business
  const token = jwt.sign({ id: business._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

  return { token, business: { _id: business._id, businessName: business.businessName, category: business.category, phoneNumber: business.phoneNumber } };
};

export const loginBusiness = async ({ businessName, password }) => {
    // Find the business by businessName
    const business = await Business.findOne({ businessName });
    if (!business || !(await bcrypt.compare(password, business.password))) {
      throw new Error("Invalid credentials");
    }
  
    // Create a JWT (optional)
    const token = jwt.sign({ id: business._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  
    return { token, business: { _id: business._id, businessName: business.businessName, phoneNumber: business.phoneNumber, category: business.category } };
  };