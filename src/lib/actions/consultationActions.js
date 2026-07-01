"use server";

import { connectDB } from "../mongodb";
import { Consultation } from "../models/Consultation";

export async function getBookedSlots(date) {
  try {
    await connectDB();
    const consultations = await Consultation.find({
      date,
      time: { $exists: true, $ne: "" },
    })
      .select("time")
      .lean();
    const times = consultations.map((c) => c.time).filter(Boolean);
    return { success: true, times };
  } catch (error) {
    return { success: false, times: [], error: error.message };
  }
}

export async function getConsultations({ page = 1, limit = 10, search = "", sort = "desc" } = {}) {
  try {
    await connectDB();

    const pageNum = Math.max(1, parseInt(page));
    const limitNum = Math.min(100, Math.max(1, parseInt(limit)));
    const skip = (pageNum - 1) * limitNum;

    const query = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    const sortOrder = sort === "asc" ? 1 : -1;
    const totalCount = await Consultation.countDocuments(query);
    const consultations = await Consultation.find(query)
      .sort({ createdAt: sortOrder })
      .skip(skip)
      .limit(limitNum)
      .lean();

    const serialized = consultations.map((c) => ({
      ...c,
      _id: c._id.toString(),
      createdAt: c.createdAt ? c.createdAt.toISOString() : null,
      updatedAt: c.updatedAt ? c.updatedAt.toISOString() : null,
    }));

    return {
      success: true,
      consultations: serialized,
      pagination: {
        totalCount,
        totalPages: Math.ceil(totalCount / limitNum),
        currentPage: pageNum,
        pageSize: limitNum,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      consultations: [],
      pagination: { totalCount: 0, totalPages: 0, currentPage: 1, pageSize: 10 },
    };
  }
}

export async function markConsultationAsReplied(id) {
  try {
    await connectDB();
    const c = await Consultation.findByIdAndUpdate(id, { replied: true }, { new: true });
    if (!c) return { success: false, error: "Consultation not found" };
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function deleteConsultation(id) {
  try {
    await connectDB();
    const c = await Consultation.findByIdAndDelete(id);
    if (!c) return { success: false, error: "Consultation not found" };
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
