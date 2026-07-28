import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type EnquiryKind = "quote" | "contact" | "careers";

const LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  service: "Service required",
  siteType: "Site type",
  location: "Site location",
  startDate: "Required from",
  role: "Role applied for",
  siaLicence: "SIA licence",
  experience: "Experience",
  message: "Message",
};

const REQUIRED: Record<EnquiryKind, string[]> = {
  quote: ["name", "email", "phone", "service"],
  contact: ["name", "email", "message"],
  careers: ["name", "email", "phone", "role"],
};

const SUBJECTS: Record<EnquiryKind, string> = {
  quote: "New quote request",
  contact: "New website enquiry",
  careers: "New job application",
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] as string,
  );
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const kind = payload.kind as EnquiryKind;
  if (!kind || !(kind in REQUIRED)) {
    return NextResponse.json({ error: "Unknown enquiry type." }, { status: 400 });
  }

  // Honeypot: bots fill every field, humans never see this one.
  if (typeof payload.website === "string" && payload.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const fields: Record<string, string> = {};
  for (const [key, value] of Object.entries(payload)) {
    if (key === "kind" || key === "website") continue;
    if (typeof value !== "string") continue;
    const trimmed = value.trim().slice(0, 4000);
    if (trimmed) fields[key] = trimmed;
  }

  const missing = REQUIRED[kind].filter((key) => !fields[key]);
  if (missing.length) {
    return NextResponse.json(
      { error: `Please complete: ${missing.map((key) => LABELS[key] ?? key).join(", ")}.` },
      { status: 422 },
    );
  }

  if (!isEmail(fields.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 422 });
  }

  const rows = Object.entries(fields)
    .map(([key, value]) => `${LABELS[key] ?? key}: ${value}`)
    .join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL ?? site.email;
  const from = process.env.ENQUIRY_FROM_EMAIL;

  // Without mail credentials the form still validates and confirms — the
  // submission is written to the server log so nothing is silently lost.
  if (!apiKey || !from) {
    console.info(`[enquiry:${kind}]\n${rows}`);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: fields.email,
        subject: `${SUBJECTS[kind]} — ${fields.name}`,
        html: `<h2>${SUBJECTS[kind]}</h2><table cellpadding="6">${Object.entries(fields)
          .map(
            ([key, value]) =>
              `<tr><td><strong>${escapeHtml(LABELS[key] ?? key)}</strong></td><td>${escapeHtml(
                value,
              ).replace(/\n/g, "<br>")}</td></tr>`,
          )
          .join("")}</table>`,
        text: `${SUBJECTS[kind]}\n\n${rows}`,
      }),
    });

    if (!response.ok) {
      console.error("[enquiry] Resend rejected the message", await response.text());
      return NextResponse.json(
        { error: "We could not send your message. Please call us instead." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("[enquiry] Transport failure", error);
    return NextResponse.json(
      { error: "We could not send your message. Please call us instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
