"use server";

import { connectDB } from "../mongodb";
import { Setting } from "../models/Setting";

async function getSettingsDoc() {
  let doc = await Setting.findOne();
  if (!doc) {
    doc = new Setting({});
    await doc.save();
  }
  return doc;
}

export async function getTinyMceApiKey() {
  try {
    await connectDB();
    const doc = await getSettingsDoc();
    return { success: true, apiKey: doc.tinymceApiKey || "" };
  } catch (error) {
    return { success: false, error: error.message, apiKey: "" };
  }
}

export async function updateTinyMceApiKey(apiKey) {
  try {
    await connectDB();
    const doc = await getSettingsDoc();
    doc.tinymceApiKey = (apiKey || "").trim();
    await doc.save();
    return { success: true, apiKey: doc.tinymceApiKey };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
