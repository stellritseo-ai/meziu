import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  User,
  ShieldCheck,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import { BUSINESS } from "@/lib/site";
import { Reveal } from "./Reveal";
import { sendZohoEmail } from "@/lib/email";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "");
    const lastName = String(data.get("lastName") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "General Inquiry");
    const details = String(data.get("details") || "");

    try {
      await sendZohoEmail({
        data: {
          subject: `New Free Estimate Request (${service}) - ${firstName} ${lastName}`,
          fromName: `${firstName} ${lastName}`.trim() || "Website Visitor",
          replyTo: email || undefined,
          fields: {
            "First Name": firstName,
            "Last Name": lastName,
            "Phone Number": phone,
            "Email Address": email,
            "Service Requested": service,
            "Project Scope / Details": details,
            "Submitted At": new Date().toLocaleString("en-US", { timeZone: "America/New_York" }) + " EST",
          },
        },
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Zoho Email Error:", err);
      setErrorMessage("Unable to send inquiry automatically. Please call us directly at (201) 844-2427.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative py-[60px] bg-background border-b border-border/40 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container-x">
        {/* Section Header */}
        <Reveal className="text-center max-w-4xl mx-auto mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 bg-card border border-border/80 rounded-full px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Get Free Estimate</span>
          </div>

          <h2 className="text-foreground tracking-tight leading-tight font-extrabold capitalize text-2xl sm:text-3xl lg:text-[36px]">
            Get Your Free{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-500 to-primary">
              On-Site Estimate
            </span>{" "}
            Today
          </h2>

          <p className="mt-3 text-muted-foreground text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Share a few details about your construction, masonry, or remodeling project and we'll follow up to discuss scope, timing, and transparent pricing.
          </p>
        </Reveal>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch relative z-10">
          {/* Left Column (5 Cols): Dispatch Office Info Card */}
          <Reveal className="lg:col-span-5 relative overflow-hidden rounded-3xl bg-slate-950 border border-border/80 text-white p-8 sm:p-10 shadow-2xl flex flex-col justify-between group">
            <div className="relative z-10 space-y-6">
              {/* Top Status Pill */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Cliffwood HQ Dispatch Center</span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
                  Contact Information
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  We stand ready for urgent project inquiries, emergency repairs, and free on-site consultations across Northern NJ.
                </p>
              </div>

              {/* Contact Info List */}
              <div className="space-y-5 pt-2">
                {/* Phone */}
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-start gap-3.5 group/item cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-primary group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-white transition-all shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-400 block">
                      Call / Text Directly
                    </span>
                    <span className="text-sm font-extrabold text-white group-hover/item:text-primary transition-colors">
                      {BUSINESS.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-3.5 group/item cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-primary group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-white transition-all shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-400 block">
                      Email Address
                    </span>
                    <span className="text-sm font-extrabold text-white group-hover/item:text-primary transition-colors">
                      {BUSINESS.email}
                    </span>
                  </div>
                </a>

                {/* Owner */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Owner &amp; Master Contractor
                    </p>
                    <p className="font-extrabold text-sm text-white">{BUSINESS.owner}</p>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-400 block">
                      Headquarters &amp; Service Radius
                    </span>
                    <span className="text-xs font-bold text-white block">
                      {BUSINESS.city}, {BUSINESS.state}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Serving a {BUSINESS.radius} radius across NJ
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-400 block">
                      Working Hours
                    </span>
                    <span className="text-xs font-bold text-white block">
                      {BUSINESS.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom License Footer */}
            <div className="relative z-10 pt-6 mt-8 border-t border-white/15 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                Licensed &amp; Insured NJ Master Contractor
              </span>
            </div>
          </Reveal>

          {/* Right Column (7 Cols): Quote Request Form */}
          <Reveal delay={120} className="lg:col-span-7 bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-center">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center shadow-lg animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                  Estimate Request Received!
                </h3>
                <p className="text-muted-foreground text-sm font-medium max-w-md leading-relaxed">
                  Thank you for reaching out to MEZIU CONSTRUCTION LLC. Your request was delivered directly to our team via Zoho Mail. Master contractor Luan Meziu will contact you shortly to confirm your on-site estimate appointment.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="flex items-center justify-between pb-2 border-b border-border/60">
                  <h3 className="font-extrabold text-foreground text-lg sm:text-xl">
                    Request Your Free Project Quote
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-primary">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>No Obligation</span>
                  </span>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      First Name *
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      placeholder="Jane"
                      className="w-full rounded-xl border bg-background px-4 py-3 text-xs font-semibold text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Last Name *
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      placeholder="Doe"
                      className="w-full rounded-xl border bg-background px-4 py-3 text-xs font-semibold text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="(201) 844-2427"
                      className="w-full rounded-xl border bg-background px-4 py-3 text-xs font-semibold text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border bg-background px-4 py-3 text-xs font-semibold text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Project / Service Needed
                  </label>
                  <select
                    name="service"
                    className="w-full rounded-xl border border-border/80 bg-background px-4 py-3 text-xs font-semibold text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 cursor-pointer"
                  >
                    <option value="Masonry & Stone Work">Masonry &amp; Stone Work</option>
                    <option value="Concrete Flatwork & Driveways">Concrete Flatwork &amp; Driveways</option>
                    <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                    <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                    <option value="Full Home Remodeling">Full Home Remodeling</option>
                    <option value="Pavers & Patios">Pavers &amp; Patios</option>
                    <option value="Retaining Walls">Retaining Walls</option>
                    <option value="Structural Home Addition">Structural Home Addition</option>
                    <option value="Handyman & Home Repairs">Handyman &amp; Home Repairs</option>
                    <option value="Electrical Work">Electrical Work</option>
                    <option value="Commercial Project">Commercial Project</option>
                    <option value="Other Construction Service">Other Construction Service</option>
                  </select>
                </div>

                {/* Details Textarea */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Project Scope / Details *
                  </label>
                  <textarea
                    name="details"
                    required
                    rows={4}
                    placeholder="Tell us about your project dimensions, materials, timeline, or address..."
                    className="w-full rounded-xl border bg-background px-4 py-3 text-xs font-semibold text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 resize-none border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-amber-500 to-primary hover:opacity-95 text-primary-foreground text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl py-4 transition-all duration-300 shadow-lg shadow-primary/25 hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{submitting ? "Sending to eva@stellrit.com..." : "Send Free Estimate Request"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[10px] text-muted-foreground font-medium pt-1">
                  100% Privacy Guaranteed. Your details are securely delivered directly to eva@stellrit.com via Zoho Mail.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}