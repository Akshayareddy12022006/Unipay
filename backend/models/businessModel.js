import mongoose from "mongoose";

const businessSchema = new mongoose.Schema(
  {
    businessName: { type: String, required: true },
    category: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Business", businessSchema);
