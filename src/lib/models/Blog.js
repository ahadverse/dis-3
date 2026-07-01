import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    metaKey: {
      type: String,
      trim: true,
    },
    metaDesc: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      enum: ["published", "draft"],
      default: "draft",
    },
  },
  { timestamps: true },
);

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
