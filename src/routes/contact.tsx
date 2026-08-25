import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  Award,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Hammer,
  Clock,
  ChevronRight,
  Building2,
  Users,
  Star,
  Check,
  Calendar,
  Home,
  MessageSquare,
  DollarSign,
  Lock,
  FileText,
  AlertCircle,
  UploadCloud,
  Send,
  HelpCircle,
  ChevronDown,
  PhoneCall,
  Languages,
  Navigation,
  ExternalLink,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BUSINESS } from "@/lib/site";
import { sendZohoEmail } from "@/lib/email";

// Existing authentic image assets
import aboutImg from "@/assets/about.jpg";
import heroImg from "@/assets/hero.jpg";
import stoneworkImg from "@/assets/stonework.jpg";

const TITLE = "Contact MEZIU CONSTRUCTION LLC | General Contractor in Cliffwood, NJ";
const DESCRIPTION =
  "Contact MEZIU CONSTRUCTION LLC for expert masonry, concrete, kitchen, bathroom, and remodeling services in Cliffwood, NJ, and surrounding New Jersey. Call (201) 844-2427 or email meziullc@gmail.com.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact MEZIU CONSTRUCTION LLC",
          description: DESCRIPTION,
          mainEntity: {
            "@type": "GeneralContractor",
            name: "MEZIU CONSTRUCTION LLC",
            telephone: "+1-201-844-2427",
            email: "meziullc@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Cliffwood",
              addressLocality: "Cliffwood",
              addressRegion: "NJ",
              addressCountry: "US",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "07:00",
                closes: "18:00",
              },
            ],
            founder: {
              "@type": "Person",
              name: "Luan Meziu",
              jobTitle: "Master Contractor & Owner",
            },
            areaServed: [
              "Cliffwood, NJ",
              "Clifton, NJ",
              "Passaic, NJ",
              "Paterson, NJ",
              "Hackensack, NJ",
              "Paramus, NJ",
              "Wayne, NJ",
              "Ridgewood, NJ",
            ],
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

/* ── Business Hours ── */
const BUSINESS_HOURS = [
  { day: "Monday", hours: "7:00 AM – 6:00 PM", status: "Open" },
  { day: "Tuesday", hours: "7:00 AM – 6:00 PM", status: "Open" },
  { day: "Wednesday", hours: "7:00 AM – 6:00 PM", status: "Open" },
  { day: "Thursday", hours: "7:00 AM – 6:00 PM", status: "Open" },
  { day: "Friday", hours: "7:00 AM – 6:00 PM", status: "Open" },
  { day: "Saturday", hours: "Closed", status: "Closed" },
  { day: "Sunday", hours: "Closed", status: "Closed" },
];

/* ── Service Area Towns ── */
const SERVICE_TOWNS = [
  "Cliffwood (HQ)",
  "Clifton",
  "Passaic",
  "Paterson",
  "Hackensack",
  "Elmwood Park",
  "Lodi",
  "Saddle Brook",
  "Paramus",
  "Wayne",
  "Allendale",
  "Fair Lawn",
  "Glen Rock",
  "Ridgewood",
  "Wyckoff",
  "Bergen County",
  "Passaic County",
  "Essex County",
];

/* ── 6 FAQs ── */
const FAQS = [
  {
    q: "How can I schedule a free estimate?",
    a: "Simply call us at (201) 844-2427 or fill out our contact form. We'll coordinate a convenient date and time to visit your property, evaluate your project scope, and provide a 100% free, no-obligation estimate.",
  },
  {
    q: "Do you offer emergency services?",
    a: "Yes, we offer emergency masonry, concrete, and structural repair services—available strictly during our working hours (Monday–Friday, 7:00 AM – 6:00 PM). Please call us immediately at (201) 844-2427 for urgent assistance.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes! MEZIU CONSTRUCTION LLC is fully licensed, insured, and bonded in the state of New Jersey. Your safety, property protection, and peace of mind are our absolute top priorities.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Cliffwood, NJ, and a comprehensive 40-mile radius covering Monmouth, Middlesex, and surrounding Counties. We regularly work across Aberdeen, Old Bridge, Matawan, Hazlet, Marlboro, Keyport, and surrounding towns.",
  },
  {
    q: "Do you speak Spanish?",
    a: "¡Sí! Hablamos español. Founder and master contractor Luan Meziu is fully bilingual in English and Spanish, ensuring crystal-clear communication and on-site project coordination.",
  },
  {
    q: "What types of projects do you handle?",
    a: "We handle masonry, concrete, kitchen remodeling, bathroom remodeling, pavers, driveways, stone retaining walls, home additions, general contracting, handyman services, electrical work, and commercial construction build-outs.",
  },
];

function ContactPage() {
  const [inquiryType, setInquiryType] = useState<string>("Request a Free Estimate");
  const [selectedService, setSelectedService] = useState<string>("Masonry Services");
  const [preferredContact, setPreferredContact] = useState<string>("Phone");
  const [bestTime, setBestTime] = useState<string>("Morning (8AM – 12PM)");
  const [hearAbout, setHearAbout] = useState<string>("Google Search");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "");
    const lastName = String(data.get("lastName") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const streetAddress = String(data.get("streetAddress") || "");
    const message = String(data.get("message") || "");

    try {
      await sendZohoEmail({
        data: {
          subject: `New Contact Us Message (${inquiryType}) - ${firstName} ${lastName}`,
          fromName: `${firstName} ${lastName}`.trim() || "Website Visitor",
          replyTo: email || undefined,
          fields: {
            "Inquiry Type": inquiryType,
            "First Name": firstName,
            "Last Name": lastName,
            "Phone Number": phone,
            "Email Address": email,
            "Street Address": streetAddress || "Not provided",
            "Service of Interest": selectedService,
            "Preferred Contact Method": preferredContact,
            "Best Time to Contact": bestTime,
            "How Did You Hear About Us": hearAbout,
            "Project Message": message,
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
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen flex flex-col selection:bg-[#E56E1A] selection:text-white">
      <Header />

      <main className="flex-1">
        {/* ──────────────────────────────────────────────────────────────────────────
            1. HERO SECTION (LIGHT THEME)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-slate-50/60 pt-12 pb-16 lg:pt-18 lg:pb-24 border-b border-slate-200/70">
          <div className="pointer-events-none absolute -top-24 right-10 w-96 h-96 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl" />

          <div className="container-x relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
              <Link to="/" className="hover:text-[#E56E1A] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#E56E1A] font-bold">Contact</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column Text */}
              <div className="lg:col-span-7 space-y-5">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#B85008] shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-[#E56E1A]" />
                  <span>Cliffwood, NJ Headquarters • 40-Mile Service Area</span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.1]">
                  Contact Us
                </h1>

                {/* Sub-headline */}
                <h2 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E56E1A] via-amber-600 to-[#E56E1A] tracking-tight">
                  We're Here to Help. Reach Out Today.
                </h2>

                {/* Body Text */}
                <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-600">
                  Have a question about your project? Ready to schedule a free on-site estimate?
                  Looking for emergency assistance during business hours? Contact MEZIU
                  CONSTRUCTION LLC today. Luan Meziu and our team are standing by to assist you.
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#E56E1A] to-[#F17B24] px-8 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Call Now: {BUSINESS.phone}</span>
                  </a>

                  <Link
                    to="/free-estimate"
                    className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-white border border-slate-300 px-7 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-50 shadow-sm transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#E56E1A]" />
                    <span>Request a Free Estimate</span>
                  </Link>
                </div>

                {/* Trust Badges Strip */}
                <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>24-Hour Response Time</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Direct Owner Line</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Hablamos Español</span>
                  </div>
                </div>
              </div>

              {/* Right Column Visual Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white p-3 shadow-xl group">
                  <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden">
                    <img
                      src={heroImg}
                      alt="MEZIU Construction team on jobsite in Cliffwood NJ"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                      <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-[#E56E1A] text-white px-2.5 py-0.5 rounded-full">
                        <Award className="w-3 h-3" />
                        <span>Direct Personal Service</span>
                      </span>
                      <h3 className="text-base font-bold text-white">
                        Luan Meziu &amp; Master Team
                      </h3>
                      <p className="text-xs text-slate-200 font-medium">
                        Personally answering calls and supervising every project on-site.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            2. CONTACT INFORMATION & DIRECT DETAILS (LIGHT THEME)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 bg-white border-b border-slate-200/70">
          <div className="container-x">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-[#B85008]">
                <PhoneCall className="w-3.5 h-3.5 text-[#E56E1A]" />
                <span>Get in Touch</span>
              </div>
              <h2 className="font-display text-3xl font-black text-slate-950">
                We'd Love to Hear From You
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Reach us directly through any of our primary communication channels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              
              {/* Phone */}
              <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#E56E1A] flex items-center justify-center shadow-inner">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Phone / Hotline
                  </span>
                  <h3 className="text-lg font-black text-slate-950">
                    <a href={`tel:${BUSINESS.phone}`} className="hover:text-[#E56E1A]">
                      {BUSINESS.phone}
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Direct line to master contractor Luan Meziu.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-inner">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Email Inquiries
                  </span>
                  <h3 className="text-lg font-black text-slate-950">
                    <a href={`mailto:${BUSINESS.email}`} className="hover:text-[#E56E1A]">
                      {BUSINESS.email}
                    </a>
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    We respond to all emails within 24 hours.
                  </p>
                </div>
              </div>

              {/* Headquarters */}
              <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center shadow-inner">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Headquarters
                  </span>
                  <h3 className="text-lg font-black text-slate-950">Cliffwood, NJ</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Serving Cliffwood and 40-mile radius since 2009.
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-inner">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Business Hours
                  </span>
                  <h3 className="text-base font-black text-slate-950">
                    Mon–Fri · 7:00 AM – 6:00 PM
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Saturday &amp; Sunday: Closed.
                  </p>
                </div>
              </div>

              {/* Emergency Service */}
              <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center shadow-inner">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Emergency Service
                  </span>
                  <h3 className="text-base font-black text-slate-950">
                    During Working Hours Only
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Urgent masonry, structural, and concrete repairs.
                  </p>
                </div>
              </div>

              {/* Language Support */}
              <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center shadow-inner">
                  <Languages className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Bilingual Support
                  </span>
                  <h3 className="text-base font-black text-slate-950">English &amp; Spanish</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    ¡Hablamos español para servir mejor a nuestra comunidad!
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Line to Owner Banner */}
            <div className="mt-10 p-7 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 border border-orange-400/30 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-orange-400">
                  <Award className="w-3.5 h-3.5" />
                  <span>Direct Line to the Owner</span>
                </div>
                <h3 className="text-2xl font-black text-white">Speak Directly With Luan Meziu</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  As a family-owned business, we believe in personal service. Luan Meziu, our owner
                  and master contractor, is personally involved in every project. When you call,
                  you'll speak with someone who truly cares about your project.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-[#E56E1A] px-7 text-xs font-black uppercase tracking-wider text-white hover:bg-[#d46215] transition-all cursor-pointer shadow-lg"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>{BUSINESS.phone}</span>
                </a>

                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-white/10 border border-white/20 px-6 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/20 transition-all cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{BUSINESS.email}</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            3. CONTACT FORM (#contact-form)
           ────────────────────────────────────────────────────────────────────────── */}
        <section id="contact-form" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/70">
          <div className="container-x max-w-4xl">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-xl space-y-8">
              
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-[#B85008]">
                  <MessageSquare className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>Send Us a Message</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950">
                  How Can We Help You?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Fill out the form below, and we'll get back to you within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-emerald-950">Message Sent Successfully!</h3>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-lg mx-auto leading-relaxed">
                    Thank you for reaching out to MEZIU CONSTRUCTION LLC. Your message was delivered directly to eva@stellrit.com via Zoho Mail and we will respond within 24 hours.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-900 underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                  
                  {/* Section A: Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-2">
                      1. Personal Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900">First Name *</label>
                        <input
                          name="firstName"
                          type="text"
                          required
                          placeholder="e.g. Elena"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900">Last Name *</label>
                        <input
                          name="lastName"
                          type="text"
                          required
                          placeholder="e.g. Miller"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900">Phone Number *</label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          placeholder="(201) 555-0123"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900">Email Address *</label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>

                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="text-xs font-bold text-slate-900">Street Address</label>
                        <input
                          name="streetAddress"
                          type="text"
                          placeholder="123 Main Street"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900">City / Town *</label>
                        <input
                          name="city"
                          type="text"
                          required
                          placeholder="e.g. Cliffwood, NJ"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900">Zip Code *</label>
                        <input
                          name="zipCode"
                          type="text"
                          required
                          placeholder="Zip Code"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section B: Inquiry & Service Type */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-2">
                      2. Inquiry &amp; Project Details
                    </h3>

                    {/* Inquiry Type */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-900 block">
                        How can we help you? *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {[
                          "Request a Free Estimate",
                          "General Inquiry",
                          "Schedule a Consultation",
                          "Emergency Service Request",
                          "Project Status Inquiry",
                          "Other",
                        ].map((inq) => (
                          <button
                            key={inq}
                            type="button"
                            onClick={() => setInquiryType(inq)}
                            className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all border cursor-pointer ${
                              inquiryType === inq
                                ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-400"
                            }`}
                          >
                            {inq}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Service Type Selection */}
                    <div className="space-y-2 pt-2">
                      <label className="text-xs font-bold text-slate-900 block">
                        Service Type (Optional / If Applicable)
                      </label>
                      <select
                        name="serviceType"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A]"
                      >
                        <option value="Masonry Services">Masonry Services</option>
                        <option value="Concrete Contractor">Concrete Contractor</option>
                        <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                        <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                        <option value="Pavers & Driveways">Pavers &amp; Driveways</option>
                        <option value="Stone Work & Walls">Stone Work &amp; Walls</option>
                        <option value="Home Renovations & Additions">Home Renovations &amp; Additions</option>
                        <option value="General Contracting">General Contracting</option>
                        <option value="Handyman Services">Handyman Services</option>
                        <option value="Electrical Work">Electrical Work</option>
                        <option value="Commercial Construction">Commercial Construction</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message Area */}
                    <div className="space-y-1.5 pt-2">
                      <label className="text-xs font-bold text-slate-900 block">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Please describe your project or inquiry in detail. The more information you provide, the better we can assist you..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  {/* Section C: Preferences & Attachments */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-2">
                      3. Preferences &amp; Additional Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Preferred Contact Method */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900">
                          Preferred Contact Method
                        </label>
                        <select
                          value={preferredContact}
                          onChange={(e) => setPreferredContact(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A]"
                        >
                          <option value="Phone">Phone</option>
                          <option value="Email">Email</option>
                          <option value="Text Message">Text Message</option>
                        </select>
                      </div>

                      {/* Best Time */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900">
                          Best Time to Contact
                        </label>
                        <select
                          value={bestTime}
                          onChange={(e) => setBestTime(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A]"
                        >
                          <option value="Morning (8AM – 12PM)">Morning (8AM – 12PM)</option>
                          <option value="Afternoon (12PM – 5PM)">Afternoon (12PM – 5PM)</option>
                          <option value="Evening (5PM – 6PM)">Evening (5PM – 6PM)</option>
                          <option value="Anytime">Anytime</option>
                        </select>
                      </div>

                      {/* How did you hear */}
                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="text-xs font-bold text-slate-900">
                          How did you hear about us?
                        </label>
                        <select
                          value={hearAbout}
                          onChange={(e) => setHearAbout(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A]"
                        >
                          <option value="Google Search">Google Search</option>
                          <option value="Social Media (Facebook/Instagram)">
                            Social Media (Facebook/Instagram)
                          </option>
                          <option value="Referral from friend/family">
                            Referral from friend/family
                          </option>
                          <option value="Yelp">Yelp</option>
                          <option value="Houzz">Houzz</option>
                          <option value="HomeAdvisor">HomeAdvisor</option>
                          <option value="Walked by/Neighbor">Walked by / Neighbor</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* File Upload Trigger */}
                    <div className="p-5 rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-center space-y-2">
                      <UploadCloud className="w-8 h-8 text-slate-400 mx-auto" />
                      <div className="text-xs font-bold text-slate-900">
                        Upload Attachments (Optional)
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium">
                        Upload photos, project plans, or inspiration files (Max file size: 10MB)
                      </p>
                      <input name="attachments" type="file" multiple className="text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-orange-50 file:text-[#E56E1A] hover:file:bg-orange-100 cursor-pointer" />
                    </div>
                  </div>

                  {/* Submit Button & Privacy Note */}
                  <div className="space-y-3 pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full h-14 rounded-full bg-gradient-to-r from-[#E56E1A] to-[#F17B24] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? "Sending to eva@stellrit.com..." : "Send Message"}</span>
                    </button>

                    <p className="text-[11px] text-slate-500 text-center leading-relaxed font-medium">
                      Your privacy is important to us. Your information is securely sent directly to eva@stellrit.com via Zoho Mail.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            4. BUSINESS HOURS & FIND US MAP
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 bg-white border-b border-slate-200/70">
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Business Hours Column (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-[#B85008] mb-2">
                    <Clock className="w-3.5 h-3.5 text-[#E56E1A]" />
                    <span>Operational Schedule</span>
                  </div>
                  <h2 className="font-display text-3xl font-black text-slate-950">
                    Our Business Hours
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                    We are available to serve you during the following hours. For emergencies, we
                    are available during working hours only.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden divide-y divide-slate-200">
                  {BUSINESS_HOURS.map((item) => (
                    <div key={item.day} className="px-5 py-3.5 flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-900">{item.day}</span>
                      <div className="flex items-center gap-3">
                        <span className={item.status === "Open" ? "text-slate-950" : "text-slate-400"}>
                          {item.hours}
                        </span>
                        <span
                          className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                            item.status === "Open"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    Emergency Services: Available Monday–Friday · 7:00 AM – 6:00 PM for urgent
                    masonry, concrete, or structural repairs.
                  </span>
                </div>
              </div>

              {/* Map & Directions Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-[#B85008] mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E56E1A]" />
                    <span>Cliffwood, New Jersey</span>
                  </div>
                  <h2 className="font-display text-3xl font-black text-slate-950">Find Us</h2>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                    MEZIU CONSTRUCTION LLC is headquartered in Cliffwood, NJ. We travel directly to
                    your property for on-site estimates and project execution.
                  </p>
                </div>

                {/* Map Card */}
                <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm space-y-4 p-3">
                  <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-200">
                    <iframe
                      title="MEZIU Construction Cliffwood NJ Map"
                      src="https://maps.google.com/maps?q=Cliffwood,+NJ&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-semibold text-slate-700">
                      <strong className="text-slate-950 font-black">Headquarters:</strong> Cliffwood,
                      NJ • 40-Mile Service Radius
                    </div>

                    <a
                      href="https://maps.google.com/?q=Cliffwood,+NJ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-slate-950 text-white px-5 py-2.5 text-xs font-black uppercase tracking-wider hover:bg-[#E56E1A] transition-colors shrink-0"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            5. SERVICE AREA COVERAGE
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 bg-slate-50/70 border-b border-slate-200/70">
          <div className="container-x text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-[#B85008]">
              <MapPin className="w-3.5 h-3.5 text-[#E56E1A]" />
              <span>Service Territory</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950">
              Service Area Coverage
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
              We provide construction, masonry, concrete, and remodeling services within a 40-mile
              radius of Cliffwood, NJ. Here are some of the communities we serve:
            </p>

            {/* Town Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2 max-w-3xl mx-auto">
              {SERVICE_TOWNS.map((town) => (
                <span
                  key={town}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-sm"
                >
                  <MapPin className="w-3 h-3 text-[#E56E1A]" />
                  <span>{town}</span>
                </span>
              ))}
            </div>

            <p className="text-xs font-semibold text-slate-500 italic pt-2">
              "Don't see your city? Contact us—we may still be able to serve you!"
            </p>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            6. FREQUENTLY ASKED QUESTIONS
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white border-b border-slate-200/70">
          <div className="container-x max-w-4xl">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="font-display text-3xl font-black text-slate-950">
                Quick Answers to Common Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Got questions? We're here to provide clear, honest answers.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-slate-50/70 border border-slate-200 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-black text-sm text-slate-950 hover:text-[#E56E1A] transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-orange-100 text-[#E56E1A] text-xs font-bold flex items-center justify-center shrink-0">
                          Q
                        </span>
                        <span>{faq.q}</span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#E56E1A]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            7. CONNECT WITH US & SOCIAL CHANNELS
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 bg-slate-50/70 border-b border-slate-200/70">
          <div className="container-x text-center max-w-3xl mx-auto space-y-6">
            <h2 className="font-display text-3xl font-black text-slate-950">Stay Connected</h2>
            <p className="text-sm text-slate-600 font-medium">
              Follow us on social media to see our latest projects, get renovation inspiration, and
              stay updated on special offers.
            </p>

            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-blue-600 shadow-sm flex items-center justify-center hover:bg-blue-50 hover:scale-110 transition-all cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-pink-600 shadow-sm flex items-center justify-center hover:bg-pink-50 hover:scale-110 transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-red-600 shadow-sm flex items-center justify-center hover:bg-red-50 hover:scale-110 transition-all cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href="https://houzz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-emerald-600 shadow-sm flex items-center justify-center hover:bg-emerald-50 hover:scale-110 transition-all cursor-pointer"
                aria-label="Houzz"
              >
                <Building2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            8. CALL TO ACTION & REASSURANCE NOTE
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-[#E56E1A] via-[#ED741D] to-[#E56E1A] text-white relative overflow-hidden shadow-xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="container-x relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/15 border border-white/30 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Let's Build Something Great</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Start Your Project?
            </h2>

            <p className="text-base sm:text-lg font-medium text-white/95 max-w-2xl mx-auto leading-relaxed">
              Whether you need a small repair or a major renovation, MEZIU CONSTRUCTION LLC is here
              to help. Contact us today and let's bring your vision to life.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/free-estimate"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-white text-slate-950 px-8 text-xs sm:text-sm font-black uppercase tracking-wider shadow-xl hover:bg-slate-100 hover:scale-105 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#E56E1A]" />
                <span>Request a Free Estimate</span>
              </Link>

              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex h-13 items-center justify-center gap-3 rounded-full bg-slate-950 px-8 sm:px-9 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-2xl transition-all duration-300 hover:bg-slate-900 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#E56E1A] fill-current" />
                <span>Call {BUSINESS.phone}</span>
              </a>
            </div>

            {/* Reassurance Footer Note */}
            <div className="mt-8 pt-6 border-t border-white/20 max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm font-semibold text-white/90 leading-relaxed">
                MEZIU CONSTRUCTION LLC is a family-owned, licensed, and insured general contractor
                serving Cliffwood, NJ, and a 40-mile radius since 2009. We are committed to quality,
                transparency, and customer satisfaction—from the first phone call to the final
                walkthrough.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
