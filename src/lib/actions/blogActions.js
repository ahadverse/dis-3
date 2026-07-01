"use server";

import { connectDB } from "../mongodb";
import { Blog } from "../models/Blog";

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function createBlog(data) {
  try {
    await connectDB();

    const slug = generateSlug(data.title);
    const existingBlog = await Blog.findOne({ slug });

    if (existingBlog) {
      return {
        success: false,
        error: "A blog with this title already exists",
      };
    }

    const blog = new Blog({
      title: data.title,
      slug,
      description: data.description,
      content: data.content || "",
      thumbnail: data.thumbnail || "",
      metaKey: data.metaKey || "",
      metaDesc: data.metaDesc || "",
      status: data.status,
    });

    await blog.save();

    return { success: true, blog };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function updateBlog(id, data) {
  try {
    await connectDB();

    const slug = generateSlug(data.title);
    const existingBlog = await Blog.findById(id);

    if (!existingBlog) {
      return { success: false, error: "Blog not found" };
    }

    const duplicateSlug = await Blog.findOne({
      slug,
      _id: { $ne: id },
    });

    if (duplicateSlug) {
      return {
        success: false,
        error: "A blog with this title already exists",
      };
    }

    const blog = await Blog.findByIdAndUpdate(
      id,
      {
        title: data.title,
        slug,
        description: data.description,
        thumbnail: data.thumbnail,
        metaKey: data.metaKey || "",
        metaDesc: data.metaDesc || "",
        content: data.content || "",
        status: data.status,
      },
      { new: true },
    );

    return { success: true, blog };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteBlog(id) {
  try {
    await connectDB();

    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return { success: false, error: "Blog not found" };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getBlogs({
  page = 1,
  limit = 10,
  search = "",
  sort = "desc",
  onlyPublished = false,
} = {}) {
  try {
    await connectDB();

    const pageNum = Math.max(1, parseInt(page));
    const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
    const skip = (pageNum - 1) * limitNum;

    const query = {};
    if (onlyPublished) query.status = "published";
    if (search) query.title = { $regex: search, $options: "i" };

    const sortOrder = sort === "asc" ? 1 : -1;
    const totalCount = await Blog.countDocuments(query);
    const blogs = await Blog.find(query)
      .sort({ createdAt: sortOrder })
      .skip(skip)
      .limit(limitNum)
      .lean();

    const totalPages = Math.ceil(totalCount / limitNum);

    const serialized = blogs.map((b) => ({
      ...b,
      _id: b._id.toString(),
      createdAt: b.createdAt ? b.createdAt.toISOString() : null,
      updatedAt: b.updatedAt ? b.updatedAt.toISOString() : null,
    }));

    return {
      success: true,
      blogs: serialized,
      pagination: {
        totalCount,
        totalPages,
        currentPage: pageNum,
        pageSize: limitNum,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      blogs: [],
      pagination: {
        totalCount: 0,
        totalPages: 0,
        currentPage: 1,
        pageSize: 10,
      },
    };
  }
}

export async function getBlogBySlug(slug) {
  try {
    await connectDB();

    const blog = await Blog.findOne({ slug, status: "published" });

    if (!blog) {
      return { success: false, error: "Blog not found", blog: null };
    }

    return { success: true, blog };
  } catch (error) {
    return { success: false, error: error.message, blog: null };
  }
}

export async function getAllBlogs(onlyPublished = false) {
  try {
    await connectDB();

    const query = onlyPublished ? { status: "published" } : {};
    const blogs = await Blog.find(query).sort({ createdAt: -1 });

    return { success: true, blogs };
  } catch (error) {
    return { success: false, error: error.message, blogs: [] };
  }
}

export async function getBlogById(id) {
  try {
    await connectDB();

    const blog = await Blog.findById(id).lean();

    if (!blog) {
      return { success: false, error: "Blog not found", blog: null };
    }

    return {
      success: true,
      blog: {
        ...blog,
        _id: blog._id.toString(),
        createdAt: blog.createdAt ? blog.createdAt.toISOString() : null,
        updatedAt: blog.updatedAt ? blog.updatedAt.toISOString() : null,
      },
    };
  } catch (error) {
    return { success: false, error: error.message, blog: null };
  }
}
