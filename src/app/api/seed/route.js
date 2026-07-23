import { connectDB } from "../../../lib/mongodb";
import { Admin } from "../../../lib/models/Admin";

export async function GET() {
  try {
    await connectDB();

    const existingAdmin = await Admin.findOne({
      email: "ziacaptcha@gmail.com",
    });

    if (existingAdmin) {
      return Response.json({ success: true, message: "Admin already exists" });
    }

    const admin = new Admin({
      email: "ziacaptcha@gmail.com",
      password: "$$zia£$%256.",
    });

    await admin.save();

    return Response.json(
      { success: true, message: "Admin seeded successfully" },
      { status: 201 },
    );
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
