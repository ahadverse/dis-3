import { connectDB } from "../../../lib/mongodb";
import { Subscriber } from "../../../lib/models/Subscriber";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return Response.json(
        { success: false, error: "Invalid email" },
        { status: 400 },
      );
    }

    await connectDB();

    const existingSubscriber = await Subscriber.findOne({ email });

    if (existingSubscriber) {
      return Response.json(
        { success: false, error: "Already subscribed with this email" },
        { status: 400 },
      );
    }

    const subscriber = new Subscriber({ email });
    await subscriber.save();

    return Response.json(
      { success: true, message: "Subscribed successfully" },
      { status: 201 },
    );
  } catch (error) {
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
