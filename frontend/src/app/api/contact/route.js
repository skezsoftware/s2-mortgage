import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    const data = await resend.emails.send({
      from: 'contact@s2mortgage.com',
      to: 'dwvasquez97@gmail.com', // replace this with actual email
      subject: 'New Contact Form Submission',
      reply_to: 'contact@s2mortgage.com',
      html: `
        <h2>New Contact Form Submission!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully! We will get back to you as soon as possible." });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

















// import { NextResponse } from "next/server";
// import { client } from "@/lib/sanity";

// const ZAPIER_WEBHOOK_URL = process.env.ZAPIER_WEBHOOK_URL; 

// export async function POST(req) {
//   try {
//     const { name, email, message } = await req.json();
//     if (!name || !email || !message) {
//       return NextResponse.json({ message: "All fields are required." }, { status: 400 });
//     }
//     await client.create({
//       _type: "contact",
//       name,
//       email,
//       message,
//       submittedAt: new Date().toISOString(),
//     });
//     return NextResponse.json({ message: "Thank you! We received your message." }, { status: 200 });
//   } catch (err) {
//     return NextResponse.json({ message: "There was an error submitting your message." }, { status: 500 });
//   }
// } 