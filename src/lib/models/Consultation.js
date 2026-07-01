import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    message: { type: String, required: false },
    date: { type: String, required: true },
    time: { type: String, required: true },
    replied: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Consultation =
  mongoose.models.Consultation ||
  mongoose.model("Consultation", consultationSchema);
