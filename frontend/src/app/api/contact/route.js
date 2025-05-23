import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }
    await client.create({
      _type: "contact",
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    });
    return NextResponse.json({ message: "Thank you! We received your message." }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "There was an error submitting your message." }, { status: 500 });
  }
} 