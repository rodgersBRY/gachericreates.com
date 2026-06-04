import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: send to CONTACT_EMAIL via a transactional email service (e.g. Resend, SendGrid)
  // Example with Resend:
  //   import { Resend } from 'resend';
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({ from: ..., to: process.env.CONTACT_EMAIL, subject, ... });

  console.log("Contact form submission:", { name, email, subject, message });

  return NextResponse.json({ ok: true });
}
