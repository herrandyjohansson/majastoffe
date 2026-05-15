import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type RsvpBody = {
  name?: string;
  person_count?: string;
  companion_name?: string;
  email?: string;
  attending?: string;
  accommodation?: string;
  dietary?: string;
};

const ATTENDING_LABEL: Record<string, string> = {
  yes: "Ja, jag kommer!",
  no: "Tyvärr, jag kan inte komma",
  maybe: "Jag återkommer senare",
};

const ACCOMMODATION_LABEL: Record<string, string> = {
  yes: "Ja, önskar boende på hotellet",
  no: "Nej, önskar inte boende på hotellet",
};

function stripCrlf(s: string, max: number): string {
  return s.replace(/[\r\n]/g, " ").trim().slice(0, max);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Comma-separated list from OSA_CC_EMAIL; returns undefined if empty or none valid. */
function parseCcList(raw: string | undefined): string | undefined {
  if (!raw?.trim()) return undefined;
  const parts = raw
    .split(",")
    .map((s) => stripCrlf(s.trim(), 254))
    .filter(Boolean);
  const valid = parts.filter((p) => isValidEmail(p));
  if (valid.length === 0) return undefined;
  return valid.join(", ");
}

export async function POST(request: Request) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const notifyTo = process.env.OSA_NOTIFY_EMAIL;

  if (!gmailUser || !gmailAppPassword || !notifyTo) {
    return NextResponse.json(
      {
        error:
          "Mejlkonfiguration saknas. Sätt GMAIL_USER, GMAIL_APP_PASSWORD och OSA_NOTIFY_EMAIL (t.ex. i Vercel → Environment Variables).",
      },
      { status: 503 }
    );
  }

  let json: RsvpBody;
  try {
    json = (await request.json()) as RsvpBody;
  } catch {
    return NextResponse.json({ error: "Ogiltig begäran." }, { status: 400 });
  }

  const name = stripCrlf(String(json.name ?? ""), 200);
  const personCount = String(json.person_count ?? "").trim();
  const companionName = stripCrlf(String(json.companion_name ?? ""), 200);
  const email = stripCrlf(String(json.email ?? ""), 254);
  const attending = String(json.attending ?? "").trim();
  const accommodation = String(json.accommodation ?? "").trim();
  const dietary = stripCrlf(String(json.dietary ?? ""), 4000);

  if (!name || !email || !attending) {
    return NextResponse.json({ error: "Fyll i alla obligatoriska fält." }, { status: 400 });
  }
  if (!["1", "2"].includes(personCount)) {
    return NextResponse.json({ error: "Ogiltigt antal personer." }, { status: 400 });
  }
  if (personCount === "2" && !companionName) {
    return NextResponse.json({ error: "Ange namn för den andra personen." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Ogiltig e-postadress." }, { status: 400 });
  }
  if (!["yes", "no", "maybe"].includes(attending)) {
    return NextResponse.json({ error: "Ogiltigt svar för närvaro." }, { status: 400 });
  }
  if (attending === "yes" && !["yes", "no"].includes(accommodation)) {
    return NextResponse.json({ error: "Ogiltigt svar för boende." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  const cc = parseCcList(process.env.OSA_CC_EMAIL);

  const attendingText = ATTENDING_LABEL[attending] ?? attending;
  const accommodationText =
    attending === "yes" ? (ACCOMMODATION_LABEL[accommodation] ?? accommodation) : null;

  const namesLine =
    personCount === "2"
      ? `Namn: ${name} & ${companionName} (${personCount} personer)`
      : `Namn: ${name} (${personCount} person)`;

  const textBody = [
    "Nytt OSA från webbplatsen",
    "",
    namesLine,
    `E-post: ${email}`,
    `Kommer: ${attendingText}`,
    ...(accommodationText ? [`Boende på hotellet: ${accommodationText}`] : []),
    dietary ? `Kost / anteckningar:\n${dietary}` : "Kost / anteckningar: (inget angivet)",
  ].join("\n");

  const subjectName = personCount === "2" ? `${name} & ${companionName}` : name;

  try {
    await transporter.verify();
    await transporter.sendMail({
      from: { name: `OSA: ${subjectName}`, address: gmailUser },
      replyTo: email,
      to: notifyTo,
      ...(cc ? { cc } : {}),
      subject: `OSA: ${subjectName}`,
      text: textBody,
    });
  } catch (e) {
    console.error("Nodemailer error", e);
    return NextResponse.json(
      {
        error:
          "Kunde inte skicka mejlet. Kontrollera Gmail app-lösenord och att miljövariabler är satta i Vercel.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
