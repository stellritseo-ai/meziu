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
} from "lucide-react";
import { BUSINESS } from "@/lib/site";
import { Reveal } from "./Reveal";

const PROJECT_TYPES = [
  "Masonry & Stone Work",
  "Concrete Flatwork & Driveways",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Full Home Remodeling",
  "Pavers & Patios",
  "Retaining Walls",
  "Structural Home Addition",
  "Handyman & Home Repairs",
  "Electrical Work",
  "Commercial Project",
  "Other Construction Service",
];

import { submitToWeb3Forms } from "@/lib/web3forms";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
    details?: string;
  }>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({});

    const form = event.currentTarget;
    const data = new FormData(form);
    const next: { firstName?: string; lastName?: string; phone?: string; email?: string; details?: string } = {};

    if (!String(data.get("firstName") ?? "").trim()) next.firstName = "First name is required.";
    if (!String(data.get("lastName") ?? "").trim()) next.lastName = "Last name is required.";
    const phone = String(data.get("phone") ?? "").replace(/\D/g, "");
    if (phone.length < 10) next.phone = "Enter a valid 10-digit phone number.";
    const email = String(data.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!String(data.get("details") ?? "").trim()) next.details = "Please tell us a bit about your project.";

    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }

    setSubmitting(true);

    try {
      const firstName = String(data.get("firstName") ?? "");
      const lastName = String(data.get("lastName") ?? "");
      const service = String(data.get("service") ?? "General Inquiry");

      await submitToWeb3Forms(data, {
        subject: `New Free Estimate Request: ${service} - ${firstName} ${lastName}`,
        fromName: `${firstName} ${lastName}`,
        replyTo: email,
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitted(true);
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
                  <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 text-primary flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Direct Phone / Hotline
                    </p>
                    <p className="font-extrabold text-base text-white group-hover/item:text-primary transition-colors">
                      {BUSINESS.phone}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-3.5 group/item cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-amber-400 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Email Inquiries
                    </p>
                    <p className="font-extrabold text-xs sm:text-sm text-white group-hover/item:text-amber-400 transition-colors truncate max-w-[220px] sm:max-w-none">
                      {BUSINESS.email}
                    </p>
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

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-sky-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Headquarters &amp; Service Radius
                    </p>
                    <p className="font-extrabold text-sm text-white">Cliffwood, NJ (~40 Miles)</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-purple-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Operational Hours
                    </p>
                    <p className="font-extrabold text-sm text-white">{BUSINESS.hours}</p>
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
                  Thank you for reaching out to MEZIU CONSTRUCTION LLC. Master contractor Luan Meziu and our project crew will contact you directly within business hours to discuss your scope and schedule an on-site visit.
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      First Name *
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="Jane"
                      className={`w-full rounded-xl border bg-background px-4 py-3 text-xs font-semibold text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 ${errors.firstName ? "border-destructive ring-2 ring-destructive/20" : "border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        }`}
                    />
                    {errors.firstName && <p className="text-destructive text-[11px] font-medium mt-1">{errors.firstName}</p>}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Last Name *
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      className={`w-full rounded-xl border bg-background px-4 py-3 text-xs font-semibold text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 ${errors.lastName ? "border-destructive ring-2 ring-destructive/20" : "border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        }`}
                    />
                    {errors.lastName && <p className="text-destructive text-[11px] font-medium mt-1">{errors.lastName}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="(201) 555-0199"
                      className={`w-full rounded-xl border bg-background px-4 py-3 text-xs font-semibold text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 ${errors.phone ? "border-destructive ring-2 ring-destructive/20" : "border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        }`}
                    />
                    {errors.phone && <p className="text-destructive text-[11px] font-medium mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      className={`w-full rounded-xl border bg-background px-4 py-3 text-xs font-semibold text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 ${errors.email ? "border-destructive ring-2 ring-destructive/20" : "border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20"
                        }`}
                    />
                    {errors.email && <p className="text-destructive text-[11px] font-medium mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Project / Service Needed
                  </label>
                  <select
                    name="projectType"
                    className="w-full rounded-xl border border-border/80 bg-background px-4 py-3 text-xs font-semibold text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 cursor-pointer"
                  >
                    <option value="">Select project type...</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Details Textarea */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Project Scope / Details *
                  </label>
                  <textarea
                    name="details"
                    rows={4}
                    placeholder="Tell us about your project dimensions, materials, timeline, or address..."
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-xs font-semibold text-foreground outline-none transition-all duration-200 placeholder:text-muted-foreground/60 resize-none ${errors.details ? "border-destructive ring-2 ring-destructive/20" : "border-border/80 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      }`}
                  />
                  {errors.details && <p className="text-destructive text-[11px] font-medium mt-1">{errors.details}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-amber-500 to-primary hover:opacity-95 text-primary-foreground text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl py-4 transition-all duration-300 shadow-lg shadow-primary/25 hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{submitting ? "Submitting Estimate..." : "Send Free Estimate Request"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-center text-[10px] text-muted-foreground font-medium pt-1">
                  100% Privacy Guaranteed. Your details are used strictly to provide your on-site estimate.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}