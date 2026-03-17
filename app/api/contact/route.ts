import nodemailer from "nodemailer";

export async function POST(req: Request) {
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
      to: process.env.EMAIL_USER,
      subject: `Portfolio Message from ${name}`,
      text: `From: ${email}\n\nMessage:\n${message}`,
    });

    console.log("Email sent:", info);

    return Response.json({ message: "Message sent successfully ✅" });

  } catch (error: any) {
    console.error("ERROR:", error);
    return Response.json({ message: error.message });
  }
}