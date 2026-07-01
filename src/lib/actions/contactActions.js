"use server";

import { connectDB } from "../mongodb";
import { Contact } from "../models/Contact";

export async function createContact(data) {
  try {
    await connectDB();

    const contact = new Contact({
      name: data.name,
      email: data.email,
      phone: data.phone || undefined,
      message: data.message,
      package: data.package || undefined,
      replied: false,
    });

    await contact.save();

    return { success: true, contact };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getContacts({
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
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    const sortOrder = sort === "asc" ? 1 : -1;
    const totalCount = await Contact.countDocuments(query);
    const contacts = await Contact.find(query)
      .sort({ createdAt: sortOrder })
      .skip(skip)
      .limit(limitNum)
      .lean(); // Convert to plain objects

    // Convert _id and dates to strings for serialization (handle Date or string)
    const serializedContacts = contacts.map((contact) => {
      const createdAt =
        contact.createdAt == null
          ? null
          : typeof contact.createdAt === "string"
            ? contact.createdAt
            : contact.createdAt.toISOString();

      const updatedAt =
        contact.updatedAt == null
          ? null
          : typeof contact.updatedAt === "string"
            ? contact.updatedAt
            : contact.updatedAt.toISOString();

      return {
        ...contact,
        _id:
          contact._id && contact._id.toString
            ? contact._id.toString()
            : contact._id,
        createdAt,
        updatedAt,
      };
    });

    const totalPages = Math.ceil(totalCount / limitNum);

    return {
      success: true,
      contacts: serializedContacts,
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
      contacts: [],
      pagination: {
        totalCount: 0,
        totalPages: 0,
        currentPage: 1,
        pageSize: 10,
      },
    };
  }
}

export async function getAllContacts() {
  try {
    await connectDB();

    const contacts = await Contact.find().sort({ createdAt: -1 });

    return { success: true, contacts };
  } catch (error) {
    return { success: false, error: error.message, contacts: [] };
  }
}

export async function markContactAsReplied(id) {
  try {
    await connectDB();

    const contact = await Contact.findByIdAndUpdate(
      id,
      { replied: true },
      { new: true },
    );

    if (!contact) {
      return { success: false, error: "Contact not found" };
    }

    return { success: true, contact };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getBookedSlots(date) {
  try {
    await connectDB();
    const contacts = await Contact.find({
      date,
      time: { $exists: true, $ne: "" },
    })
      .select("time")
      .lean();
    const times = contacts.map((c) => c.time).filter(Boolean);
    return { success: true, times };
  } catch (error) {
    return { success: false, times: [], error: error.message };
  }
}

export async function deleteContact(id) {
  try {
    await connectDB();

    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return { success: false, error: "Contact not found" };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
