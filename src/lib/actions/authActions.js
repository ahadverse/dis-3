"use server";

import { connectDB } from "../mongodb";
import { Admin } from "../models/Admin";
import { cookies } from "next/headers";

export async function seedAdmin() {
  try {
    await connectDB();

    const existingAdmin = await Admin.findOne({
      email: "admin@dis.com",
    });

    if (existingAdmin) {
      return { success: true, message: "Admin already exists" };
    }

    const admin = new Admin({
      email: "admin@dis.com",
      password: "admin123",
    });

    await admin.save();

    return { success: true, message: "Admin seeded successfully" };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function loginAdmin(email, password) {
  try {
    await connectDB();

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return { success: false, error: "Invalid credentials" };
    }

    const isPasswordValid = await admin.comparePassword(password);

    if (!isPasswordValid) {
      return { success: false, error: "Invalid credentials" };
    }

    const cookieStore = await cookies();
    cookieStore.set("adminToken", admin._id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60,
    });

    return { success: true, message: "Login successful" };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function logoutAdmin() {
  try {
    console.log("sdf");
    const cookieStore = await cookies();
    cookieStore.delete("adminToken");

    return { success: true, message: "Logout successful" };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function verifyAdminCredentials(email, password) {
  try {
    await connectDB();

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return { success: false, error: "Invalid credentials" };
    }

    const isPasswordValid = await admin.comparePassword(password);

    if (!isPasswordValid) {
      return { success: false, error: "Invalid credentials" };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
