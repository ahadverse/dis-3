import { connectDB } from "../../../lib/mongodb";
import { Consultation } from "../../../lib/models/Consultation";

export async function POST(request) {
  try {
    const { name, email, phone, message, date, time } = await request.json();

    if (!name || !email || !date || !time) {
      return Response.json(
        { success: false, error: "Name, email, date and time are required" },
        { status: 400 },
      );
    }

    await connectDB();

    const consultation = new Consultation({ name, email, phone, message, date, time });
    await consultation.save();

    return Response.json(
      { success: true, message: "Consultation booked successfully" },
      { status: 201 },
    );
  } catch (error) {
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
