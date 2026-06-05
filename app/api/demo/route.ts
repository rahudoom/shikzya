import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const TO = process.env.RESEND_TO || "connect@shikzya.com";
const FROM = process.env.RESEND_FROM || "ShikZya Website <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly." },
        { status: 503 }
      );
    }
    const resend = new Resend(apiKey);

    const { name, institution, role, email, phone, message } = await req.json();

    if (!name || !institution || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `New Demo Request — ${institution}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg,#1E3A8A,#2563EB); padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New ShikZya Demo Request</h2>
          </div>
          <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:bold;width:140px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:bold;">Institution</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${institution}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:bold;">Role</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${role || "Not specified"}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:bold;">Email</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:bold;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${phone}</td></tr>
              <tr><td style="padding:10px 0;font-weight:bold;vertical-align:top;">Message</td><td style="padding:10px 0;white-space:pre-wrap;">${message || "—"}</td></tr>
            </table>
            <div style="margin-top:24px;padding:12px;background:#eff6ff;border-left:4px solid #2563EB;border-radius:4px;">
              <p style="margin:0;font-size:13px;color:#475569;">Reply directly to this email to respond to ${name}.</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Demo form error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
