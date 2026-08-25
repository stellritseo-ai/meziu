import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import nodemailer from "nodemailer";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// Handler for /api/send-email endpoint
async function handleApiSendEmail(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const data = (await request.json()) as {
      subject?: string;
      fromName?: string;
      replyTo?: string;
      fields: Record<string, string>;
    };

    const host = process.env.ZOHO_SMTP_HOST || "smtppro.zoho.com";
    const port = Number(process.env.ZOHO_SMTP_PORT || 465);
    const user = process.env.ZOHO_SMTP_USER || "eva@stellrit.com";
    const pass = process.env.ZOHO_SMTP_PASS || "VdL71m6nRrV7";
    const recipient = process.env.ZOHO_RECIPIENT_EMAIL || user || "eva@stellrit.com";

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const tableRows = Object.entries(data.fields || {})
      .map(
        ([key, value]) => `
        <tr>
          <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e293b; background: #f8fafc; width: 35%; text-transform: capitalize;">
            ${key.replace(/([A-Z])/g, " $1").trim()}
          </td>
          <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #334155;">
            ${String(value || "").replace(/\n/g, "<br/>")}
          </td>
        </tr>
      `
      )
      .join("");

    const html = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="background: linear-gradient(135deg, #1e293b, #0f172a); padding: 24px; color: #ffffff; text-align: center;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px; color: #f97316;">MEZIU CONSTRUCTION LLC</h2>
          <p style="margin: 6px 0 0; font-size: 13px; color: #94a3b8;">${data.subject || "New Website Submission"}</p>
        </div>
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <tbody>
              ${tableRows}
            </tbody>
          </table>
        </div>
        <div style="background: #f8fafc; padding: 14px 24px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 11px; color: #64748b;">
          Submitted via MEZIU Construction Website · Instant Notification
        </div>
      </div>
    `;

    const text = Object.entries(data.fields || {})
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    let info;
    try {
      info = await transporter.sendMail({
        from: `"${data.fromName || "MEZIU Construction Website"}" <${user}>`,
        to: recipient,
        replyTo: data.replyTo || user,
        subject: data.subject || "New Website Submission - MEZIU Construction",
        text,
        html,
      });
    } catch (primaryErr) {
      console.error("Primary SMTP failed, trying fallback to smtp.zoho.com:", primaryErr);
      const fallbackTransporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port,
        secure: port === 465,
        auth: { user, pass },
      });
      info = await fallbackTransporter.sendMail({
        from: `"${data.fromName || "MEZIU Construction Website"}" <${user}>`,
        to: recipient,
        replyTo: data.replyTo || user,
        subject: data.subject || "New Website Submission - MEZIU Construction",
        text,
        html,
      });
    }

    return new Response(JSON.stringify({ success: true, messageId: info?.messageId }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("API send email error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Failed to send email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);

    // Direct API Route for Zoho Email Sending
    if (url.pathname === "/api/send-email") {
      return await handleApiSendEmail(request);
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
