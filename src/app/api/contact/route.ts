import { NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const CONTACT_EMAIL = "somos@isvisoft.com";
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const requestCounts = new Map<string, { count: number; resetAt: number }>();

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  restaurant?: unknown;
  message?: unknown;
  website?: unknown;
};

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = requestCounts.get(key);

  if (!current || current.resetAt <= now) {
    requestCounts.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  return false;
}

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || CONTACT_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || CONTACT_EMAIL;

  if (!apiKey) {
    return NextResponse.json({ error: "Contact form is not configured yet." }, { status: 500 });
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json({ error: "Please wait before sending another request." }, { status: 429 });
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (asTrimmedString(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = asTrimmedString(payload.name);
  const email = asTrimmedString(payload.email).toLowerCase();
  const restaurant = asTrimmedString(payload.restaurant);
  const message = asTrimmedString(payload.message);

  if (!name || !email || !restaurant || !message) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (name.length > 120 || email.length > 160 || restaurant.length > 160 || message.length > 2000) {
    return NextResponse.json({ error: "Please shorten your message and try again." }, { status: 400 });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeRestaurant = escapeHtml(restaurant);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const brevoResponse = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: "CleanScan", email: fromEmail },
      to: [{ email: toEmail }],
      replyTo: { email, name },
      subject: `CleanScan demo request from ${restaurant}`,
      textContent: `Name: ${name}\nEmail: ${email}\nRestaurant/company: ${restaurant}\n\nMessage:\n${message}`,
      htmlContent: `<p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Restaurant/company:</strong> ${safeRestaurant}</p><p><strong>Message:</strong></p><p>${safeMessage}</p>`,
    }),
  });

  if (!brevoResponse.ok) {
    return NextResponse.json({ error: "We could not send your request. Please email us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
