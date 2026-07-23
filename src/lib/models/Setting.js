import mongoose from "mongoose";

// Single-document store for site-wide admin-editable settings.
const settingSchema = new mongoose.Schema(
  {
    tinymceApiKey: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

export const Setting =
  mongoose.models.Setting || mongoose.model("Setting", settingSchema);
