import { WEB3FORMS_CONFIG } from "./site";

export interface SubmitFormOptions {
  subject?: string;
  fromName?: string;
  replyTo?: string;
}

export interface Web3FormResponse {
  success: boolean;
  message: string;
}

/**
 * Submits form data to Web3Forms API to deliver emails to eva@stellrit.com.
 */
export async function submitToWeb3Forms(
  formData: FormData,
  options: SubmitFormOptions = {}
): Promise<Web3FormResponse> {
  const accessKey =
    formData.get("access_key") ||
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
    WEB3FORMS_CONFIG.accessKey;

  if (accessKey) {
    formData.set("access_key", String(accessKey));
  }

  if (options.subject && !formData.has("subject")) {
    formData.set("subject", options.subject);
  }

  if (options.fromName && !formData.has("from_name")) {
    formData.set("from_name", options.fromName);
  } else if (!formData.has("from_name")) {
    formData.set("from_name", "MEZIU Construction Website");
  }

  // Set recipient email
  if (!formData.has("to")) {
    formData.set("to", WEB3FORMS_CONFIG.recipientEmail);
  }

  if (options.replyTo && !formData.has("replyto")) {
    formData.set("replyto", options.replyTo);
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (result.success) {
      return { success: true, message: result.message || "Form submitted successfully." };
    } else {
      console.warn("Web3Forms response status:", result);
      return {
        success: false,
        message: result.message || "Submission encountered an issue, but your request was recorded.",
      };
    }
  } catch (error) {
    console.error("Web3Forms network submission error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to connect to form delivery service.",
    };
  }
}
