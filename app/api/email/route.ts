import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { EmailBody, MailOptions } from "@/app/lib/definitions";

export const POST = async (request: Request): Promise<NextResponse> => {
  const { firstName, lastName, email, subject, message }: EmailBody = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions: MailOptions = {
    from: `${firstName} ${lastName} ${email} <${email}>`,
    to: process.env.EMAIL,
    subject: `New Contact Form submission from ${
      firstName + " " + lastName
    }: ${subject}`,
    cc: email,
    text: message,
  };

  const sendMailPromise = (): Promise<string> =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, (error) => {
        if (!error) {
          resolve("Email sent");
        } else {
          reject(error.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
