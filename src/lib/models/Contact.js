import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: false,
    },
    time: {
      type: String,
      required: false,
    },
    package: {
      type: String,
      required: false,
    },
    replied: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);
