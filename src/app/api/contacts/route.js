import { connectDB } from "../../../lib/mongodb";
import { Contact } from "../../../lib/models/Contact";

export async function POST(request) {
  try {
    const { name, email, phone, message, date, time } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 },
      );
    }

    await connectDB();

    const contact = new Contact({
      name,
      email,
      phone,
      message,
      date,
      time,
      replied: false,
    });

    await contact.save();

    return Response.json(
      { success: true, message: "Contact submitted successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact submission error:", error);
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
