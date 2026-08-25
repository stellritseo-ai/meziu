export interface EmailPayload {
  subject: string;
  fromName?: string;
  replyTo?: string;
  fields: Record<string, string>;
}

export async function sendZohoEmail(payload: { data: EmailPayload }) {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload.data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error || `Failed to send email (Status: ${response.status})`
    );
  }

  return response.json();
}
