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
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BUSINESS } from "@/lib/site";
import { submitToWeb3Forms } from "@/lib/web3forms";

// Existing authentic image assets
import aboutImg from "@/assets/about.jpg";
import stoneworkImg from "@/assets/stonework.jpg";
import paversImg from "@/assets/pavers.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import heroImg from "@/assets/hero.jpg";

const TITLE = "Get a Free On-Site Estimate | MEZIU CONSTRUCTION LLC — Cliffwood, NJ";
const DESCRIPTION =
  "Get a free, no-obligation on-site estimate from MEZIU CONSTRUCTION LLC. Professional masonry, concrete, kitchen, bathroom, and remodeling services in Cliffwood, NJ, and beyond. Call (201) 844-2427 today.";

export const Route = createFileRoute("/free-estimate")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/free-estimate" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/free-estimate" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "MEZIU CONSTRUCTION LLC - Free Estimate",
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
            openingHours: "Mo-Fr 07:00-18:00",
            priceRange: "$$",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Free On-Site Estimate Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Free On-Site Construction & Remodeling Estimate",
                  },
                  price: "0",
                  priceCurrency: "USD",
                },
              ],
            },
          },
        }),
      },
    ],
  }),
  component: FreeEstimatePage,
});

/* ── What You Get With a Free Estimate (5 Cards) ── */
const WHAT_YOU_GET = [
  {
    icon: Home,
    title: "On-Site Property Assessment",
    description:
      "We visit your property to understand your space, take precise measurements, and evaluate the scope of work firsthand.",
    badge: "In-Person Inspection",
  },
  {
    icon: MessageSquare,
    title: "Expert Consultation",
    description:
      "Get professional advice on materials, structural durability, design options, and the most cost-effective approach for your project.",
    badge: "Master Contractor Advice",
  },
  {
    icon: DollarSign,
    title: "Detailed Quote & Timeline",
    description:
      "Receive a clear, itemized estimate with transparent line-item pricing and a realistic, dependable project completion timeline.",
    badge: "Itemized Breakdown",
  },
  {
    icon: Lock,
    title: "No Obligation",
    description:
      "Our estimate is 100% free with no high-pressure sales tactics or hidden consultation fees—just honest advice and a fair price.",
    badge: "100% Zero Pressure",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured Assurance",
    description:
      "Work with a fully licensed, insured, and bonded master contractor who stands behind every quote with written warranties.",
    badge: "NJ State Compliant",
  },
];

/* ── 3-Step Process ── */
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Step 1: Contact Us",
    description:
      "Reach out by phone, email, or through our online form. Tell us a little about your project—whether it's masonry, concrete, kitchen remodeling, bathroom renovation, or a full home addition.",
    actionTitle: "Direct Contact Options",
    items: ["Call: (201) 844-2427", "Email: meziullc@gmail.com", "Online Form: 24/7 Form below"],
  },
  {
    step: "02",
    title: "Step 2: On-Site Visit & Assessment",
    description:
      "Luan Meziu will schedule a convenient time to visit your property. During the visit, we will:",
    actionTitle: "What We Cover On-Site",
    items: [
      "Discuss your vision and goals in detail",
      "Take measurements and inspect the project area",
      "Evaluate structural requirements and material needs",
      "Answer all your questions and address concerns",
    ],
  },
  {
    step: "03",
    title: "Step 3: Receive Your Estimate",
    description:
      "Within a short time after our visit, you will receive a complete, itemized estimate that includes:",
    actionTitle: "Estimate Breakdown",
    items: [
      "Detailed breakdown of scope of work",
      "Material specifications and quantities",
      "Labor costs and project timeline",
      "Transparent, all-inclusive pricing with no hidden costs",
    ],
  },
];

/* ── What to Expect During Estimate (6 Stages) ── */
const EXPECTATIONS = [
  {
    step: "1",
    title: "Welcome & Introduction",
    desc: "Luan Meziu will arrive on time and introduce himself. You'll know exactly who's working with you and managing your project.",
  },
  {
    step: "2",
    title: "Vision Discussion",
    desc: "We'll listen carefully to your ideas, aesthetic preferences, functional needs, and budget goals.",
  },
  {
    step: "3",
    title: "Property Assessment",
    desc: "We'll thoroughly inspect the project area, take precise measurements, and evaluate structural considerations and site drainage.",
  },
  {
    step: "4",
    title: "Material & Design Recommendations",
    desc: "Based on your preferences, we'll suggest suitable, long-lasting materials and durable design configurations.",
  },
  {
    step: "5",
    title: "Q&A Session",
    desc: "We'll answer any questions you have about the construction process, timeline, permits, zoning, or site safety.",
  },
  {
    step: "6",
    title: "Estimate Delivery & No Pressure",
    desc: "We'll provide you with a detailed, transparent estimate within a few days. It's your decision with zero pressure to proceed.",
  },
];

/* ── 8 Why Choose Us Points ── */
const WHY_CHOOSE_US = [
  { title: "Family-Owned Since 2009", desc: "Personal service and direct accountability from founder Luan Meziu." },
  { title: "Licensed, Insured & Bonded", desc: "Full compliance with New Jersey state construction regulations." },
  { title: "15+ Years of Experience", desc: "Decades of hands-on expertise across all construction trades." },
  { title: "Residential & Commercial", desc: "Tailored solutions for single-family homes and business properties." },
  { title: "40-Mile Service Radius", desc: "Proudly serving Cliffwood, NJ, and surrounding communities." },
  { title: "Bilingual Support", desc: "Fluent English and Spanish communication for clear coordination." },
  { title: "100% Transparent Pricing", desc: "No hidden costs, unexpected surcharges, or surprise fees." },
  { title: "Clean & Safe Job Sites", desc: "Meticulous respect for your property, family safety, and cleanliness." },
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
  "Ridgewood",
  "Nutley",
  "Bergen County",
  "Passaic County",
  "Essex County",
];

/* ── 6 FAQs ── */
const FAQS = [
  {
    q: "Is the estimate really free?",
    a: "Yes! Our on-site estimates are 100% free with no hidden fees or obligations. We believe in earning your trust before we earn your business.",
  },
  {
    q: "Do I need to prepare anything for the estimate?",
    a: "Nothing major! Just have a general idea of what you'd like to achieve. If you have photos, sketches, or inspiration images, feel free to share them during the visit or attach them to our online form.",
  },
  {
    q: "When will I receive my estimate?",
    a: "We'll provide you with a detailed estimate within a few days after our on-site visit. We prioritize quality and thorough material calculations over rushed quotes to ensure 100% accuracy.",
  },
  {
    q: "Are there any hidden costs?",
    a: "Never. We provide transparent, itemized estimates. We'll discuss any potential site variables upfront (such as sub-base conditions or permit fees) so there are no surprises.",
  },
  {
    q: "Do you serve commercial properties?",
    a: "Yes! We work on both residential and commercial projects. Our team has extensive experience with commercial storefronts, office build-outs, concrete slabs, and retail properties.",
  },
  {
    q: "What if I need emergency repairs?",
    a: "We offer emergency services during our business hours (Monday–Friday, 7:00 AM–6:00 PM). Contact us immediately at (201) 844-2427 for urgent masonry, concrete, or structural repairs.",
  },
];

function FreeEstimatePage() {
  const [selectedService, setSelectedService] = useState<string>("Masonry Services");
  const [propertyType, setPropertyType] = useState<string>("Residential");
  const [timeline, setTimeline] = useState<string>("As soon as possible");
  const [budget, setBudget] = useState<string>("$10,000 - $25,000");
  const [hearAbout, setHearAbout] = useState<string>("Google Search");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("selectedService", selectedService);
    data.set("propertyType", propertyType);
    data.set("timeline", timeline);
    data.set("budget", budget);
    data.set("hearAbout", hearAbout);

    const firstName = String(data.get("firstName") || "");
    const lastName = String(data.get("lastName") || "");
    const email = String(data.get("email") || "");

    try {
      await submitToWeb3Forms(data, {
        subject: `New Free Estimate Request (${selectedService}) - ${firstName} ${lastName}`,
        fromName: `${firstName} ${lastName}`.trim() || "Website Visitor",
        replyTo: email,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitted(true);
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
              <span className="text-[#E56E1A] font-bold">Free Estimate</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column Text */}
              <div className="lg:col-span-7 space-y-5">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#B85008] shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-[#E56E1A]" />
                  <span>100% Free • No Obligation • On-Site Consultation</span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.1]">
                  Get Your Free On-Site Estimate
                </h1>

                {/* Sub-headline */}
                <h2 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E56E1A] via-amber-600 to-[#E56E1A] tracking-tight">
                  No Obligation. 100% Transparent Pricing. Expert Advice.
                </h2>

                {/* Body Text */}
                <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-600">
                  Tell us about your construction, masonry, or remodeling project, and we'll
                  schedule a convenient time to visit your property. Luan Meziu and our
                  experienced team will assess your needs, answer your questions, and provide a
                  detailed, no-obligation estimate—completely free.
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="#estimate-form"
                    className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#E56E1A] to-[#F17B24] px-8 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request Your Free Estimate</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-white border border-slate-300 px-7 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-50 shadow-sm transition-all cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#E56E1A] fill-current" />
                    <span>Call Now: {BUSINESS.phone}</span>
                  </a>
                </div>

                {/* Quick Trust Strip */}
                <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Zero Hidden Fees</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Fast 24-Hour Response</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Direct On-Site Owner Review</span>
                  </div>
                </div>
              </div>

              {/* Right Column Visual Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 bg-white p-3 shadow-xl group">
                  <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden">
                    <img
                      src={aboutImg}
                      alt="Luan Meziu on-site consultation and estimation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                      <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider bg-[#E56E1A] text-white px-2.5 py-0.5 rounded-full">
                        <Award className="w-3 h-3" />
                        <span>Master Contractor Supervision</span>
                      </span>
                      <h3 className="text-base font-bold text-white">
                        Luan Meziu • Founder &amp; Estimator
                      </h3>
                      <p className="text-xs text-slate-200 font-medium">
                        Hands-on property evaluation across Cliffwood &amp; 40-mile radius.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            2. WHAT YOU GET WITH A FREE ESTIMATE (5 VALUE CARDS)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-200 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#B85008]">
                <Award className="w-3.5 h-3.5 text-[#E56E1A]" />
                <span>What You Get With a Free Estimate</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                More Than Just a Price — A Complete Project Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Every consultation is designed to provide you with actionable clarity, transparent
                numbers, and engineered confidence before committing a single dollar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHAT_YOU_GET.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-3xl bg-slate-50/70 border border-slate-200/90 p-7 shadow-sm hover:shadow-xl hover:bg-white hover:border-orange-300 transition-all duration-300 flex flex-col justify-between space-y-5"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#E56E1A] flex items-center justify-center shadow-inner">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                          {card.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-slate-950">{card.title}</h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        {card.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Included 100% Free</span>
                    </div>
                  </div>
                );
              })}

              {/* 6th Card: Direct Phone Link */}
              <div className="rounded-3xl bg-gradient-to-br from-slate-950 to-slate-900 text-white p-7 shadow-xl flex flex-col justify-between space-y-5">
                <div className="space-y-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-white">Need an Urgent Estimate?</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    Call our Cliffwood, NJ headquarters directly to speak with master contractor Luan
                    Meziu for same-day scheduling.
                  </p>
                </div>

                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E56E1A] py-3 text-xs font-black uppercase tracking-wider text-white hover:bg-[#d46215] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" />
                  <span>Call {BUSINESS.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            3. STEP-BY-STEP PROCESS (HOW IT WORKS)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/70">
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-200 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#B85008]">
                <Clock className="w-3.5 h-3.5 text-[#E56E1A]" />
                <span>Simple 3-Step Process</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                How Getting Your Free Estimate Works
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Getting your free estimate is quick and easy—just three simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm hover:shadow-xl transition-all duration-300 space-y-5 flex flex-col justify-between relative group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-4xl font-black text-[#E56E1A] opacity-90">
                        {step.step}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                        Process Phase
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-950">{step.title}</h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#B85008]">
                      {step.actionTitle}
                    </div>
                    <ul className="space-y-1.5">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            4. REQUEST A FREE ESTIMATE FORM (#estimate-form)
           ────────────────────────────────────────────────────────────────────────── */}
        <section id="estimate-form" className="py-16 lg:py-24 bg-white">
          <div className="container-x max-w-4xl">
            <div className="rounded-3xl bg-slate-50/80 border border-slate-200/90 p-8 sm:p-12 shadow-xl space-y-8">
              
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-[#B85008]">
                  <FileText className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>Online Request Form</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950">
                  Request Your Free On-Site Estimate
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Fill out the form below, and we'll get back to you within 24 hours to schedule
                  your on-site consultation.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-emerald-950">
                    Estimate Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-lg mx-auto leading-relaxed">
                    Thank you! Luan Meziu or a member of our team will review your project details
                    and contact you within 24 hours to confirm your on-site assessment appointment.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-900 underline cursor-pointer"
                    >
                      Submit another estimate request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
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
                          placeholder="e.g. Dominick"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900">Last Name *</label>
                        <input
                          name="lastName"
                          type="text"
                          required
                          placeholder="e.g. Ricci"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900">Phone Number *</label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          placeholder="(201) 555-0123"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900">Email Address *</label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="name@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>

                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="text-xs font-bold text-slate-900">Street Address</label>
                        <input
                          name="streetAddress"
                          type="text"
                          placeholder="123 Main Street"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900">City / Town *</label>
                        <input
                          name="city"
                          type="text"
                          required
                          placeholder="e.g. Cliffwood, NJ"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900">Zip Code *</label>
                        <input
                          name="zipCode"
                          type="text"
                          required
                          placeholder="Zip Code"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section B: Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-2">
                      2. Project Details
                    </h3>

                    {/* Service Type Selection */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-900 block">
                        Service Type *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {[
                          "Masonry Services",
                          "Concrete Contractor",
                          "Kitchen Remodeling",
                          "Bathroom Remodeling",
                          "Pavers & Driveways",
                          "Stone Work & Walls",
                          "Home Renovations & Additions",
                          "General Contracting",
                          "Handyman Services",
                          "Electrical Work",
                          "Commercial Construction",
                          "Other",
                        ].map((srv) => (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => setSelectedService(srv)}
                            className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all border cursor-pointer ${
                              selectedService === srv
                                ? "bg-[#E56E1A] text-white border-[#E56E1A] shadow-sm"
                                : "bg-white text-slate-700 border-slate-200 hover:border-orange-300"
                            }`}
                          >
                            {srv}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Property Type Selection */}
                    <div className="space-y-2 pt-2">
                      <label className="text-xs font-bold text-slate-900 block">
                        Property Type *
                      </label>
                      <div className="flex gap-3">
                        {["Residential", "Commercial", "Multi-Family"].map((pType) => (
                          <button
                            key={pType}
                            type="button"
                            onClick={() => setPropertyType(pType)}
                            className={`flex-1 py-2.5 rounded-xl text-center text-xs font-bold border transition-all cursor-pointer ${
                              propertyType === pType
                                ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                                : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
                            }`}
                          >
                            {pType}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Project Scope & Details */}
                    <div className="space-y-2 pt-2">
                      <label className="text-xs font-bold text-slate-900 block">
                        Project Scope &amp; Details *
                      </label>
                      <textarea
                        name="details"
                        required
                        rows={4}
                        placeholder={`Please describe your project in detail. For example:\n• "We need a new paver driveway installed at our home in Cliffwood..."\n• "We want to completely remodel our outdated kitchen in Clifton with quartz countertops..."\n• "We need a retaining wall built on our sloped property in Wayne (3ft high by 50ft long)..."`}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  {/* Section C: Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-black uppercase tracking-wider text-slate-950 border-b border-slate-200 pb-2">
                      3. Timeline &amp; Budget Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Timeline */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900">
                          What is your preferred timeline?
                        </label>
                        <select
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A]"
                        >
                          <option value="As soon as possible">As soon as possible</option>
                          <option value="Within 1 month">Within 1 month</option>
                          <option value="Within 3 months">Within 3 months</option>
                          <option value="Within 6 months">Within 6 months</option>
                          <option value="Flexible">Flexible</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Budget Range */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-900">
                          What is your estimated budget range?
                        </label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A]"
                        >
                          <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                          <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                          <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                          <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                          <option value="$100,000+">$100,000+</option>
                          <option value="Flexible / Not Sure">Flexible / Not Sure</option>
                        </select>
                      </div>

                      {/* Referral Source */}
                      <div className="space-y-1.5 sm:col-span-2">
                        <label className="text-xs font-bold text-slate-900">
                          How did you hear about us?
                        </label>
                        <select
                          value={hearAbout}
                          onChange={(e) => setHearAbout(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A]"
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
                    <div className="p-5 rounded-2xl bg-white border border-dashed border-slate-300 text-center space-y-2">
                      <UploadCloud className="w-8 h-8 text-slate-400 mx-auto" />
                      <div className="text-xs font-bold text-slate-900">
                        Upload Attachments (Optional)
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium">
                        Upload photos, sketches, or inspiration images (Max file size: 10MB)
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
                      <span>{submitting ? "Sending Request..." : "Send Free Estimate Request"}</span>
                    </button>

                    <p className="text-[11px] text-slate-500 text-center leading-relaxed font-medium">
                      Your privacy is important to us. Your information will only be used to provide
                      your free estimate and will never be shared with third parties.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            5. QUICK CONTACT ALTERNATIVE (PREFER TO TALK DIRECTLY?)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 bg-slate-50/70 border-y border-slate-200/70">
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-[#B85008]">
                  <PhoneCall className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>Direct Hotline</span>
                </div>

                <h2 className="font-display text-3xl font-black text-slate-950">
                  Prefer to Talk Directly?
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  We understand that sometimes it's easier to pick up the phone. Speak directly
                  with Luan Meziu, our owner and master contractor, to discuss your project.
                </p>

                <div className="pt-2">
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-[#E56E1A] px-7 text-xs font-black uppercase tracking-wider text-white shadow-md hover:bg-[#d46215] transition-all cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 fill-current" />
                    <span>Call Now: {BUSINESS.phone}</span>
                  </a>
                </div>
              </div>

              {/* Direct Info Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#E56E1A] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400">Direct Phone</span>
                    <a href={`tel:${BUSINESS.phone}`} className="text-xs font-black text-slate-950 block hover:text-[#E56E1A]">
                      {BUSINESS.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400">Email Inquiries</span>
                    <a href={`mailto:${BUSINESS.email}`} className="text-xs font-black text-slate-950 block hover:text-[#E56E1A]">
                      {BUSINESS.email}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400">Headquarters</span>
                    <span className="text-xs font-black text-slate-950 block">Cliffwood, NJ</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400">Operational Hours</span>
                    <span className="text-xs font-black text-slate-950 block">Mon–Fri · 7:00 AM–6:00 PM</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400">Emergency Service</span>
                    <span className="text-xs font-black text-slate-950 block">Available working hours only</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                    <Languages className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400">Language Support</span>
                    <span className="text-xs font-black text-slate-950 block">English &amp; Spanish</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            6. WHAT TO EXPECT DURING THE ESTIMATE (6-STAGE BREAKDOWN)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-200 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#B85008]">
                <HelpCircle className="w-3.5 h-3.5 text-[#E56E1A]" />
                <span>On-Site Guide</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                What to Expect During Your On-Site Estimate
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                We want you to feel prepared and confident when we visit. Here's what will happen
                during your free on-site consultation:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXPECTATIONS.map((stage) => (
                <div
                  key={stage.step}
                  className="rounded-3xl bg-slate-50/70 border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="w-8 h-8 rounded-full bg-orange-500 text-white font-black text-xs flex items-center justify-center shadow-sm">
                        {stage.step}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400">Consultation Step</span>
                    </div>

                    <h3 className="text-base font-black text-slate-950">{stage.title}</h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Included in Assessment</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            7. WHY TRUST US WITH YOUR PROJECT (8 CREDENTIALS)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/70">
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-200 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#B85008]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E56E1A]" />
                <span>Our Credentials</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Why Trust Us With Your Project?
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                When you request an estimate from MEZIU CONSTRUCTION, you're not just getting a
                quote—you're getting a partner who cares about your project as much as you do.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-2"
                >
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-slate-950 font-black text-sm">{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            8. SERVICE AREA COVERAGE
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="container-x text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-[#B85008]">
              <MapPin className="w-3.5 h-3.5 text-[#E56E1A]" />
              <span>Service Territory</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950">
              We Serve These Communities
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium">
              We provide free on-site estimates and construction services across Northern New Jersey
              within a 40-mile radius of Cliffwood, NJ.
            </p>

            {/* Town Badges Grid */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2 max-w-3xl mx-auto">
              {SERVICE_TOWNS.map((town) => (
                <span
                  key={town}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 shadow-sm"
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
            9. FREQUENTLY ASKED QUESTIONS ABOUT ESTIMATES
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-t border-slate-200/70">
          <div className="container-x max-w-4xl">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="font-display text-3xl font-black text-slate-950">
                Frequently Asked Questions About Estimates
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">
                Everything you need to know about our free on-site consultation and estimation process.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-all"
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
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 bg-slate-50/50">
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
            10. CALL TO ACTION & REASSURANCE NOTE
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-[#E56E1A] via-[#ED741D] to-[#E56E1A] text-white relative overflow-hidden shadow-xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="container-x relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/15 border border-white/30 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Start Your Journey</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Transform Your Space?
            </h2>

            <p className="text-base sm:text-lg font-medium text-white/95 max-w-2xl mx-auto leading-relaxed">
              Your dream project is just a phone call or click away. Contact MEZIU CONSTRUCTION LLC
              today and take the first step toward a beautiful, functional, and durable space.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#estimate-form"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-white text-slate-950 px-8 text-xs sm:text-sm font-black uppercase tracking-wider shadow-xl hover:bg-slate-100 hover:scale-105 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#E56E1A]" />
                <span>Request Your Free Estimate</span>
              </a>

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
                transparency, and customer satisfaction—from the first estimate to the final
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
