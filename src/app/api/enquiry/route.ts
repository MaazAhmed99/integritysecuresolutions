import { NextResponse } from "next/server";
import type { Transporter } from "nodemailer";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type EnquiryKind = "quote" | "contact" | "careers" | "interest";

type Message = {
  subject: string;
  html: string;
  text: string;
  /** The enquirer's own address, so hitting Reply answers them directly. */
  replyTo: string;
};

const LABELS: Record<string, string> = {
  name: "Name",
  title: "Title",
  firstName: "First name",
  lastName: "Last name",
  city: "City or region",
  services: "Services interested in",
  email: "Email",
  phone: "Phone",
  company: "Company",
  service: "Service required",
  subject: "Subject",
  location: "Site location",
  /* Job application screening answers. */
  rightToWork: "Rights to work",
  siaLicence: "SIA licence",
  drivingLicence: "Driving licence",
  carAvailable: "Car available",
  cctvCertificate: "CCTV certificate",
  dogHandling: "Dog handling unit",
  nasduTraining: "NASDU training",
  securityExperience: "Worked in the security industry",
  companies: "Companies worked for",
  message: "Message",
};

const REQUIRED: Record<EnquiryKind, string[]> = {
  quote: ["firstName", "lastName", "email", "phone", "location", "service"],
  contact: ["name", "email", "message"],
  careers: [
    "firstName",
    "lastName",
    "phone",
    "email",
    "rightToWork",
    "siaLicence",
    "drivingLicence",
    "carAvailable",
    "cctvCertificate",
    "dogHandling",
    "nasduTraining",
    "securityExperience",
    "companies",
  ],
  interest: [
    "title",
    "firstName",
    "lastName",
    "city",
    "email",
    "phone",
    "company",
    "services",
  ],
};

const SUBJECTS: Record<EnquiryKind, string> = {
  quote: "New quote request",
  contact: "New website enquiry",
  careers: "New job application",
  interest: "New service enquiry",
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);

/* -------------------------------------------------------------------------- */
/* Delivery                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * ENQUIRY_TO_EMAIL takes a comma-separated list, so one submission can land in
 * several inboxes — typically a Gmail plus the info@ mailbox.
 */
function recipients() {
  const list = (process.env.ENQUIRY_TO_EMAIL ?? "")
    .split(",")
    .map((address) => address.trim())
    .filter(Boolean);

  // An empty or blank variable must not mean "send to nobody".
  return list.length ? list : [site.email];
}

/** Null unless every SMTP variable is present — a half-filled config is no config. */
function smtpConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;

  return { host, user, pass, port: Number(process.env.SMTP_PORT ?? 465) };
}

const resendConfigured = () =>
  Boolean(process.env.RESEND_API_KEY && process.env.ENQUIRY_FROM_EMAIL);

/* One transporter per server process; env vars do not change at runtime. */
let transporter: Transporter | null = null;

async function sendViaSmtp(message: Message, config: NonNullable<ReturnType<typeof smtpConfig>>) {
  if (!transporter) {
    // Imported lazily so nodemailer is only loaded when SMTP is actually in use.
    const { createTransport } = await import("nodemailer");
    transporter = createTransport({
      host: config.host,
      port: config.port,
      // 465 is implicit TLS; 587 starts plain and upgrades via STARTTLS.
      secure: config.port === 465,
      auth: { user: config.user, pass: config.pass },
    });
  }

  await transporter.sendMail({
    // Most mail servers reject a From address that is not the authenticated
    // mailbox, so SMTP_USER is the default rather than site.email.
    from: { name: `${site.name} website`, address: process.env.ENQUIRY_FROM_EMAIL || config.user },
    to: recipients(),
    replyTo: message.replyTo,
    subject: message.subject,
    text: message.text,
    html: message.html,
  });
}

async function sendViaResend(message: Message) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM_EMAIL,
      to: recipients(),
      reply_to: message.replyTo,
      subject: message.subject,
      html: message.html,
      text: message.text,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend rejected the message: ${await response.text()}`);
  }
}

/**
 * SMTP first (the domain mailbox), Resend second. Returns false when neither is
 * configured, which tells the caller to log the submission instead of losing it.
 */
async function deliver(message: Message) {
  const smtp = smtpConfig();

  if (smtp) {
    try {
      await sendViaSmtp(message, smtp);
      return true;
    } catch (error) {
      // A dead mail server should not cost us the enquiry if Resend can take it.
      if (!resendConfigured()) throw error;
      transporter = null;
      console.error("[enquiry] SMTP failed, falling back to Resend", error);
    }
  }

  if (resendConfigured()) {
    await sendViaResend(message);
    return true;
  }

  return false;
}

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

  // The interest form splits the name across two fields.
  const senderName =
    fields.name ?? [fields.firstName, fields.lastName].filter(Boolean).join(" ") ?? "Website";

  const rows = Object.entries(fields)
    .map(([key, value]) => `${LABELS[key] ?? key}: ${value}`)
    .join("\n");

  const message: Message = {
    subject: `${SUBJECTS[kind]} — ${senderName}`,
    replyTo: fields.email,
    text: `${SUBJECTS[kind]}\n\n${rows}`,
    html: `<h2>${SUBJECTS[kind]}</h2><table cellpadding="6">${Object.entries(fields)
      .map(
        ([key, value]) =>
          `<tr><td><strong>${escapeHtml(LABELS[key] ?? key)}</strong></td><td>${escapeHtml(
            value,
          ).replace(/\n/g, "<br>")}</td></tr>`,
      )
      .join("")}</table>`,
  };

  try {
    const delivered = await deliver(message);

    // Without mail credentials the form still validates and confirms — the
    // submission is written to the server log so nothing is silently lost.
    if (!delivered) {
      console.info(`[enquiry:${kind}]\n${rows}`);
    }

    return NextResponse.json({ ok: true, delivered });
  } catch (error) {
    console.error("[enquiry] Delivery failed", error);
    return NextResponse.json(
      { error: "We could not send your message. Please call us instead." },
      { status: 502 },
    );
  }
}
