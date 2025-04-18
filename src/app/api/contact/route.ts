import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, phone, message }: { name: string; email: string; phone: string; message: string } =
    await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `Message from ${name}`,
      replyTo: email,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong> ${message}</p>`,
      text: message,
    });

    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Email not sent" }, { status: 500 });
  }
}
