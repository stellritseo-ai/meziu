import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

export interface EmailPayload {
  subject: string;
  fromName?: string;
  replyTo?: string;
  fields: Record<string, string>;
}

export const sendZohoEmail = createServerFn({ method: "POST" })
  .validator((payload: EmailPayload) => payload)
  .handler(async ({ data }) => {
    const { subject, fromName, replyTo, fields } = data;

    // Create Zoho SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: "eva@stellrit.com",
        pass: "VdL71m6nRrV7",
      },
    });

    // Build clean HTML table
    const tableRows = Object.entries(fields)
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
          <p style="margin: 6px 0 0; font-size: 13px; color: #94a3b8;">${subject}</p>
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

    const text = Object.entries(fields)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");

    try {
      const info = await transporter.sendMail({
        from: `"${fromName || "MEZIU Construction Website"}" <eva@stellrit.com>`,
        to: "eva@stellrit.com",
        replyTo: replyTo || "eva@stellrit.com",
        subject: subject || "New Website Submission - MEZIU Construction",
        text,
        html,
      });

      return { success: true, messageId: info.messageId };
    } catch (err: unknown) {
      console.error("Zoho SMTP Error:", err);
      // Try fallback to smtp.zoho.com if smtppro fails
      try {
        const fallbackTransporter = nodemailer.createTransport({
          host: "smtp.zoho.com",
          port: 465,
          secure: true,
          auth: {
            user: "eva@stellrit.com",
            pass: "VdL71m6nRrV7",
          },
        });

        const info = await fallbackTransporter.sendMail({
          from: `"${fromName || "MEZIU Construction Website"}" <eva@stellrit.com>`,
          to: "eva@stellrit.com",
          replyTo: replyTo || "eva@stellrit.com",
          subject: subject || "New Website Submission - MEZIU Construction",
          text,
          html,
        });

        return { success: true, messageId: info.messageId };
      } catch (fallbackErr: unknown) {
        console.error("Zoho SMTP Fallback Error:", fallbackErr);
        throw new Error(
          fallbackErr instanceof Error
            ? fallbackErr.message
            : "Failed to send email via Zoho SMTP"
        );
      }
    }
  });
