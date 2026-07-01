"use server";

import { connectDB } from "../mongodb";
import { Subscriber } from "../models/Subscriber";

export async function subscribeEmail(email) {
  try {
    await connectDB();

    const existingSubscriber = await Subscriber.findOne({ email });

    if (existingSubscriber) {
      return { success: false, error: "Already subscribed with this email" };
    }

    const subscriber = new Subscriber({ email });
    await subscriber.save();

    return { success: true, subscriber };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getSubscribers({
  page = 1,
  limit = 10,
  search = "",
  sort = "desc",
} = {}) {
  try {
    await connectDB();

    const pageNum = Math.max(1, parseInt(page));
    const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
    const skip = (pageNum - 1) * limitNum;

    const query = {};
    if (search) {
      query.email = { $regex: search, $options: "i" };
    }

    const sortOrder = sort === "asc" ? 1 : -1;
    const totalCount = await Subscriber.countDocuments(query);
    const subscribers = await Subscriber.find(query)
      .sort({ createdAt: sortOrder })
      .skip(skip)
      .limit(limitNum)
      .lean(); // Convert to plain objects

    // Convert _id and dates to strings for serialization (handle Date or string)
    const serializedSubscribers = subscribers.map((sub) => {
      const createdAt =
        sub.createdAt == null
          ? null
          : typeof sub.createdAt === "string"
            ? sub.createdAt
            : sub.createdAt.toISOString();

      const updatedAt =
        sub.updatedAt == null
          ? null
          : typeof sub.updatedAt === "string"
            ? sub.updatedAt
            : sub.updatedAt.toISOString();

      return {
        ...sub,
        _id: sub._id && sub._id.toString ? sub._id.toString() : sub._id,
        createdAt,
        updatedAt,
      };
    });

    const totalPages = Math.ceil(totalCount / limitNum);

    return {
      success: true,
      subscribers: serializedSubscribers,
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
      subscribers: [],
      pagination: {
        totalCount: 0,
        totalPages: 0,
        currentPage: 1,
        pageSize: 10,
      },
    };
  }
}

export async function deleteSubscriber(id) {
  try {
    await connectDB();

    const subscriber = await Subscriber.findByIdAndDelete(id);

    if (!subscriber) {
      return { success: false, error: "Subscriber not found" };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
