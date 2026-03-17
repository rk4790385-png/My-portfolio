// app/api/contact/route.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// POST handler
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    console.log("Received:", name, email, message);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // your email
      subject: `Portfolio Message from ${name}`,
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    console.log("Email sent:", info);

    return NextResponse.json({ message: "Message sent successfully ✅" });

  } catch (error: any) {
    console.error("ERROR:", error);
    return NextResponse.json({ message: error.message });
  }
}