import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, fullName, budget, hearAboutUs, message, services } = body;

    if (!email || !fullName) {
      return NextResponse.json(
        { error: "Email and full name are required." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 },
      );
    }

    const servicesText =
      Array.isArray(services) && services.length > 0
        ? services.join(", ")
        : "Not specified";

    // 1) NOTIFY YOU — the form submission details
    const { error: notifyError } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL as string,
      replyTo: email,
      subject: `New inquiry from ${fullName}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
          <p><strong>Heard about us via:</strong> ${hearAboutUs || "Not specified"}</p>
          <p><strong>Services interested in:</strong> ${servicesText}</p>
          <p><strong>Message:</strong></p>
          <p>${(message || "").replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (notifyError) {
      console.error("Resend notify error:", notifyError);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 },
      );
    }

    // 2) AUTO-REPLY — confirmation back to the sender
    const { error: autoReplyError } = await resend.emails.send({
      from: "Vorklye <onboarding@resend.dev>",
      to: email,
      subject: "We've received your message",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <p>Hi ${fullName},</p>
          <p>Thanks for reaching out — we've received your message and will get back to you within 1–2 business days.</p>
          <p>Here's a copy of what you sent us:</p>
          <blockquote style="border-left: 3px solid #ddd; margin: 12px 0; padding-left: 12px; color: #555;">
            ${(message || "").replace(/\n/g, "<br/>")}
          </blockquote>
          <p>Talk soon,<br/>Vorklye</p>
        </div>
      `,
    });

    if (autoReplyError) {
      // Don't fail the whole request if only the auto-reply fails —
      // the main notification already went through.
      console.error("Resend auto-reply error:", autoReplyError);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 },
    );
  }
}
