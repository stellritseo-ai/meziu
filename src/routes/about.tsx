import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Award,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Hammer,
  HeartHandshake,
  MessageSquareCheck,
  HardHat,
  Building2,
  Users,
  Check,
  ChevronRight,
  FileCheck,
  BadgePercent,
  Calendar,
  Languages,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BUSINESS } from "@/lib/site";

// Existing authentic assets
import aboutImg from "@/assets/about.jpg";
import heroImg from "@/assets/hero.jpg";
import masonryImg from "@/assets/masonry.jpg";
import stoneworkImg from "@/assets/stonework.jpg";

const TITLE = "About Us | MEZIU CONSTRUCTION LLC — General Contractor Cliffwood, NJ";
const DESCRIPTION =
  "Learn about MEZIU CONSTRUCTION LLC, a family-owned, licensed, and insured general contractor serving Cliffwood, NJ, and beyond since 2009. Get a free estimate today.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About MEZIU CONSTRUCTION LLC",
          description: DESCRIPTION,
          mainEntity: {
            "@type": "GeneralContractor",
            name: "MEZIU CONSTRUCTION LLC",
            founder: {
              "@type": "Person",
              name: "Luan Meziu",
              jobTitle: "Owner & Master Contractor",
              knowsLanguage: ["English", "Spanish"],
            },
            foundingDate: "2009-01-09",
            telephone: "+1-201-844-2427",
            email: "meziullc@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Cliffwood",
              addressRegion: "NJ",
              addressCountry: "US",
            },
            areaServed: [
              "Cliffwood",
              "Clifton",
              "Passaic",
              "Paterson",
              "Hackensack",
              "Elmwood Park",
              "Lodi",
              "Saddle Brook",
              "Paramus",
              "Wayne",
              "Bergen County",
              "Passaic County",
              "Essex County",
            ],
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "07:00",
              closes: "18:00",
            },
            knowsLanguage: ["en", "es"],
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

/* ── Core Values Data (Light Theme) ── */
const CORE_VALUES = [
  {
    icon: Hammer,
    title: "Quality Craftsmanship",
    desc: "We use premium materials and proven techniques to ensure every project is built to last.",
    badge: "Master Grade",
    iconBg: "bg-orange-50 text-[#E56E1A]",
    badgeBg: "bg-orange-100/80 text-[#B85008]",
  },
  {
    icon: HeartHandshake,
    title: "Family-Centered Integrity",
    desc: "As a family business, our word is our bond. We stand behind our work 100%.",
    badge: "100% Guarantee",
    iconBg: "bg-amber-50 text-amber-600",
    badgeBg: "bg-amber-100/80 text-amber-800",
  },
  {
    icon: MessageSquareCheck,
    title: "Transparent Communication",
    desc: "We keep you informed every step of the way, with no surprises and no hidden costs.",
    badge: "Zero Surprises",
    iconBg: "bg-sky-50 text-sky-600",
    badgeBg: "bg-sky-100/80 text-sky-800",
  },
  {
    icon: HardHat,
    title: "Safety & Compliance",
    desc: "Fully licensed, insured, and bonded, we adhere to the highest safety standards on every job site.",
    badge: "NJ Licensed",
    iconBg: "bg-emerald-50 text-emerald-600",
    badgeBg: "bg-emerald-100/80 text-emerald-800",
  },
  {
    icon: Building2,
    title: "Community Commitment",
    desc: "We take pride in serving our New Jersey neighbors and building a stronger community one project at a time.",
    badge: "Local Pride",
    iconBg: "bg-rose-50 text-rose-600",
    badgeBg: "bg-rose-100/80 text-rose-800",
  },
];

/* ── Timeline Data (Light Theme) ── */
const TIMELINE = [
  {
    year: "2009",
    title: "MEZIU CONSTRUCTION Officially Founded",
    description:
      "MEZIU CONSTRUCTION LLC is officially founded on January 9, 2009 in Cliffwood, NJ, with a mission to provide superior construction, masonry, and concrete services.",
    highlight: "Jan 9, 2009",
    tag: "Cliffwood, NJ",
  },
  {
    year: "2011",
    title: "Full-Time Operations & Master Team Expansion",
    description:
      "Luan Meziu transitions into full-time operations, bringing years of hands-on field experience and leading the company to new heights of craftsmanship.",
    highlight: "Full-Time Focus",
    tag: "Master Craftsmanship",
  },
  {
    year: "2015",
    title: "Full Home, Kitchen & Bathroom Remodeling",
    description:
      "The company expands its service offerings to include high-end kitchen remodeling, custom bathroom remodeling, structural additions, and full home interior renovations.",
    highlight: "Expanded Services",
    tag: "Interior & Exterior",
  },
  {
    year: "2020",
    title: "Go-To Residential & Commercial General Contractor",
    description:
      "MEZIU CONSTRUCTION becomes the premier choice for both residential homeowners and commercial property developers, recognized across North Jersey for reliability and precision.",
    highlight: "Commercial & Residential",
    tag: "Tri-County Reach",
  },
  {
    year: "2025 & Beyond",
    title: "Innovation, Sustainability & Lasting Relationships",
    description:
      "Continuing to serve the New Jersey community with an unwavering focus on modern building innovations, structural sustainability, and lasting client relationships.",
    highlight: "Future Ready",
    tag: "Building Tomorrow",
  },
];

/* ── Certifications Data (Light Theme) ── */
const CERTIFICATIONS = [
  {
    title: "Licensed General Contractor (NJ)",
    desc: "Fully registered and authorized general contracting operations across New Jersey.",
    icon: FileCheck,
  },
  {
    title: "Full General Liability Insurance",
    desc: "Comprehensive multi-million dollar liability insurance protecting your property.",
    icon: ShieldCheck,
  },
  {
    title: "Workers' Compensation Coverage",
    desc: "100% state-compliant workers' comp protecting every team member on site.",
    icon: Users,
  },
  {
    title: "Certified in Masonry & Concrete",
    desc: "Decades of master masonry, stone carving, structural slabs, and pavers.",
    icon: Hammer,
  },
  {
    title: "Fully Bonded Financial Security",
    desc: "Bonded assurance giving homeowners complete peace of mind on every contract.",
    icon: BadgePercent,
  },
  {
    title: "40-Mile Service Coverage Radius",
    desc: "Prompt dispatch and responsive project management within 40 miles of Cliffwood.",
    icon: MapPin,
  },
];

/* ── Service Areas ── */
const TOWNS = [
  { name: "Cliffwood", county: "Monmouth County (HQ)", primary: true },
  { name: "Clifton", county: "Passaic County", primary: true },
  { name: "Passaic", county: "Passaic County", primary: true },
  { name: "Paterson", county: "Passaic County", primary: true },
  { name: "Hackensack", county: "Bergen County", primary: true },
  { name: "Elmwood Park", county: "Bergen County", primary: true },
  { name: "Lodi", county: "Bergen County", primary: true },
  { name: "Saddle Brook", county: "Bergen County", primary: true },
  { name: "Paramus", county: "Bergen County", primary: true },
  { name: "Wayne", county: "Passaic County", primary: true },
  { name: "Nutley", county: "Essex County", primary: false },
  { name: "Montclair", county: "Essex County", primary: false },
  { name: "Fair Lawn", county: "Bergen County", primary: false },
  { name: "Rutherford", county: "Bergen County", primary: false },
  { name: "Fort Lee", county: "Bergen County", primary: false },
  { name: "Teaneck", county: "Bergen County", primary: false },
];

function AboutPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen flex flex-col selection:bg-[#E56E1A] selection:text-white">
      <Header />

      <main className="flex-1">
        {/* ──────────────────────────────────────────────────────────────────────────
            1. HERO SECTION (LIGHT THEME)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-slate-50/60 pt-12 pb-16 lg:pt-18 lg:pb-24 border-b border-slate-200/70">
          {/* Subtle Ambient Shapes */}
          <div className="pointer-events-none absolute -top-24 right-10 w-96 h-96 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl" />

          <div className="container-x relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
              <Link to="/" className="hover:text-[#E56E1A] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#E56E1A] font-bold">About Us</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-7 space-y-6">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#B85008] shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-[#E56E1A]" />
                  <span>Cliffwood, New Jersey • Established Jan 9, 2009</span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.12] text-slate-950">
                  Building More Than Structures —{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E56E1A] via-amber-600 to-[#E56E1A]">
                    Building Trust.
                  </span>
                </h1>

                {/* Sub-headline */}
                <p className="text-base sm:text-lg font-medium leading-relaxed text-slate-600">
                  Family-owned, fully licensed, and dedicated to excellence since 2009. Serving
                  Cliffwood, NJ, and the surrounding communities with pride.
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="#owner"
                    className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-slate-900 px-7 text-xs font-black uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-slate-800 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>Meet the Team</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#E56E1A] to-[#F17B24] px-7 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Get a Free Estimate</span>
                  </a>
                </div>
              </div>

              {/* Right Column Image Banner */}
              <div className="lg:col-span-5 relative">
                <div className="relative overflow-hidden rounded-3xl border-2 border-slate-200/90 bg-white p-2 shadow-2xl">
                  <img
                    src={aboutImg}
                    alt="Meziu Construction Team and Projects in Cliffwood NJ"
                    className="h-[320px] sm:h-[380px] w-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-x-4 bottom-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#E56E1A] flex items-center justify-center font-bold">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-900">15+ Years Excellence</div>
                        <div className="text-[10px] text-slate-500 font-semibold">Serving Cliffwood &amp; New Jersey</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                      100% Insured
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Hero Stat Chips (Light Theme) */}
            <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-amber-600 text-xs font-extrabold uppercase tracking-wider mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>Founded</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-950">2009</div>
                <div className="text-xs text-slate-500 font-medium mt-1">15+ Years in NJ</div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-extrabold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Credentials</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-950">100%</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Licensed &amp; Insured</div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-[#E56E1A] text-xs font-extrabold uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Coverage</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-950">40 Miles</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Cliffwood &amp; New Jersey</div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-sky-600 text-xs font-extrabold uppercase tracking-wider mb-1">
                  <Languages className="w-4 h-4" />
                  <span>Languages</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-950">EN &amp; ES</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Bilingual Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            2. WHO WE ARE SECTION (LIGHT THEME)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Text Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#B85008]">
                  <Sparkles className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>Cliffwood, New Jersey Heritage</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.15]">
                  Who We Are
                </h2>

                <div className="space-y-4 text-base sm:text-[17px] leading-relaxed text-slate-600">
                  <p>
                    <strong className="font-bold text-slate-950">
                      MEZIU CONSTRUCTION LLC
                    </strong>{" "}
                    is a family-owned and operated general contracting business rooted in the heart
                    of Cliffwood, New Jersey. Founded on January 9, 2009, by Luan Meziu, our company
                    was built on a simple philosophy:{" "}
                    <span className="text-slate-950 font-semibold italic bg-orange-100/60 px-2 py-0.5 rounded">
                      treat every home like it’s your own and deliver honest, high-quality work.
                    </span>
                  </p>

                  <p>
                    With years of hands-on experience dating back to 2011, Luan has cultivated a team
                    of dedicated professionals who share his commitment to craftsmanship and
                    integrity. We are proud to be a local business that has become a trusted name in
                    residential and commercial construction across Bergen, Passaic, and Essex
                    Counties.
                  </p>

                  <p className="text-slate-900 font-medium">
                    From the initial handshake to the final nail, our approach is personal,
                    transparent, and deeply invested in the community we serve.
                  </p>
                </div>

                {/* Key Pillars Grid */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-orange-300 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#E56E1A] flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-950">Family-Owned &amp; Operated</h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Direct owner accountability &amp; personal care on every job.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:border-orange-300 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-950">Decades of Mastery</h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Specialized masonry, concrete, kitchens, bathrooms &amp; additions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Visual Image Collage (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Primary Large Image */}
                  <div className="overflow-hidden rounded-3xl border-2 border-slate-200/90 bg-white p-2 shadow-xl group">
                    <img
                      src={masonryImg}
                      alt="Real Masonry & Construction Work by Meziu Construction"
                      className="h-[360px] sm:h-[400px] w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-x-6 bottom-6 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E56E1A] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Master Craftsmanship</span>
                      </div>
                      <p className="text-xs font-bold mt-1 text-slate-900">
                        Cliffwood, NJ &amp; Surrounding Areas
                      </p>
                    </div>
                  </div>

                  {/* Floating Secondary Thumbnail */}
                  <div className="absolute -bottom-6 -left-4 hidden sm:block w-48 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl">
                    <img
                      src={stoneworkImg}
                      alt="Stonework detail"
                      className="h-28 w-full object-cover rounded-t-lg"
                    />
                    <div className="p-2 bg-slate-900 text-white text-[10px] font-bold flex items-center justify-between">
                      <span>Stone &amp; Masonry</span>
                      <span className="text-amber-400 font-mono">Est. 2009</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            3. MEET LUAN MEZIU — OWNER & MASTER CONTRACTOR (LIGHT THEME)
           ────────────────────────────────────────────────────────────────────────── */}
        <section id="owner" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-50 text-slate-900 relative overflow-hidden border-y border-slate-200/70">
          <div className="container-x relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Photo Column (5 cols) */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative overflow-hidden rounded-3xl border-2 border-slate-200/90 bg-white p-2 shadow-2xl group">
                    <img
                      src={heroImg}
                      alt="Luan Meziu — Owner & Master Contractor of Meziu Construction LLC"
                      className="h-[440px] sm:h-[480px] w-full object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Bottom Caption Inside Card */}
                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl space-y-1">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-[#E56E1A] px-3 py-0.5 text-[11px] font-black uppercase tracking-wider text-white shadow">
                        <Award className="w-3.5 h-3.5" />
                        <span>Owner &amp; Master Contractor</span>
                      </div>
                      <h3 className="text-xl font-black text-slate-950">Luan Meziu</h3>
                      <p className="text-xs text-slate-600 font-medium">
                        Hands-on jobsite supervision from consultation to completion.
                      </p>
                    </div>
                  </div>

                  {/* Bilingual Callout Badge */}
                  <div className="absolute -top-3 -left-3 bg-white border border-slate-200 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-orange-100 text-[#E56E1A] flex items-center justify-center font-bold text-[10px]">
                      EN/ES
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] font-black text-slate-950 block">Fluent Bilingual</span>
                      <span className="text-[9px] text-slate-500 font-semibold">English &amp; Spanish</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Bio Column (7 cols) */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-200 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#B85008]">
                  <HardHat className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>Leadership &amp; Master Contractor</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.15]">
                  Meet Luan Meziu —{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E56E1A] to-amber-600">
                    Owner &amp; Master Contractor
                  </span>
                </h2>

                <div className="space-y-4 text-base sm:text-[17px] leading-relaxed text-slate-600">
                  <p>
                    <strong className="text-slate-950 font-bold">Luan Meziu</strong> is the driving
                    force behind{" "}
                    <strong className="text-slate-950 font-bold">MEZIU CONSTRUCTION LLC</strong>. With
                    a passion for building that began long before the company’s founding in 2009,
                    Luan has dedicated his life to the construction industry. His extensive
                    knowledge spans masonry, concrete, structural renovations, and project
                    management.
                  </p>

                  <p>
                    Luan believes that the best construction projects are born from{" "}
                    <span className="text-slate-950 font-semibold">
                      clear communication and mutual respect
                    </span>
                    . That’s why he insists on being present at every project phase—from
                    consultation to completion.
                  </p>

                  <p>
                    As a bilingual business owner (fluent in English and Spanish), Luan ensures that
                    every client feels heard, valued, and fully informed. His reputation as a
                    hands-on, detail-oriented professional has made him a trusted partner for
                    homeowners and commercial property developers alike.
                  </p>
                </div>

                {/* Direct Owner Guarantees (Light Cards) */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-1.5" />
                    <h4 className="text-xs font-bold text-slate-950">On-Site Supervision</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Present at every phase</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <Languages className="w-5 h-5 text-amber-600 mb-1.5" />
                    <h4 className="text-xs font-bold text-slate-950">Hablamos Español</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Bilingual communication</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <Hammer className="w-5 h-5 text-[#E56E1A] mb-1.5" />
                    <h4 className="text-xs font-bold text-slate-950">Master Masonry</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">Decades of stone craft</p>
                  </div>
                </div>

                {/* Direct Contact Button */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="inline-flex h-12 items-center gap-2.5 rounded-full bg-gradient-to-r from-[#E56E1A] to-[#F17B24] px-7 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-orange-500/25 hover:scale-105 transition-transform cursor-pointer"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Call Luan Directly: {BUSINESS.phone}</span>
                  </a>

                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="inline-flex h-12 items-center gap-2.5 rounded-full bg-white border border-slate-300 px-6 text-xs font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-50 shadow-sm transition-all cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-[#E56E1A]" />
                    <span>{BUSINESS.email}</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            4. OUR CORE VALUES (LIGHT THEME)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          <div className="container-x">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#B85008]">
                <HeartHandshake className="w-3.5 h-3.5 text-[#E56E1A]" />
                <span>Our Foundation</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                The Values That Define Us
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-medium">
                What you can expect when you work with MEZIU.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CORE_VALUES.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="group relative overflow-hidden rounded-3xl bg-slate-50/80 border border-slate-200/90 p-8 shadow-sm hover:shadow-xl hover:bg-white hover:border-orange-300 transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Icon & Badge Row */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-2xl ${val.iconBg} flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform`}>
                        <Icon className="w-7 h-7" />
                      </div>

                      <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${val.badgeBg}`}>
                        {val.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-slate-950 mb-3 group-hover:text-[#E56E1A] transition-colors">
                      {val.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}

              {/* Extra 6th Trust Summary Card (Light Theme) */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-[#E56E1A] to-amber-600 text-white p-8 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 border border-white/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white mb-4">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Our Guarantee</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-2">
                    Built With Pride, Backed 100%
                  </h3>
                  <p className="text-xs text-white/90 leading-relaxed">
                    We treat every home and commercial structure in New Jersey with unmatched
                    craftsmanship, honest communication, and pristine jobsite cleanliness.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/20 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-200">Cliffwood, NJ</span>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-white hover:text-amber-200 transition-colors cursor-pointer"
                  >
                    <span>Talk to Luan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            5. OUR JOURNEY (TIMELINE) (LIGHT THEME)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 text-slate-900 relative overflow-hidden border-y border-slate-200/70">
          <div className="container-x relative z-10">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-200 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#B85008]">
                <Clock className="w-3.5 h-3.5 text-[#E56E1A]" />
                <span>Our Heritage &amp; Milestones</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Journey So Far
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-medium">
                A timeline of growth, dedication, and success.
              </p>
            </div>

            {/* Timeline Tree (Light Theme) */}
            <div className="relative max-w-4xl mx-auto">
              {/* Central Glowing Line */}
              <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-[#E56E1A] via-amber-400 to-[#E56E1A]/40 rounded-full" />

              <div className="space-y-10 sm:space-y-14">
                {TIMELINE.map((item, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div
                      key={item.year}
                      className={`relative flex flex-col sm:flex-row items-start ${
                        isEven ? "sm:flex-row-reverse" : ""
                      } gap-6 sm:gap-12`}
                    >
                      {/* Node Icon on Line */}
                      <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white border-4 border-[#E56E1A] text-white shadow-md z-10">
                        <span className="h-2 w-2 rounded-full bg-[#E56E1A]" />
                      </div>

                      {/* Content Card (Light) */}
                      <div
                        className={`ml-12 sm:ml-0 sm:w-1/2 ${
                          isEven ? "sm:text-left sm:pl-8" : "sm:text-right sm:pr-8"
                        }`}
                      >
                        <div className="group relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 hover:-translate-y-1">
                          
                          {/* Year & Tag Badge */}
                          <div
                            className={`flex items-center gap-2 mb-3 flex-wrap ${
                              isEven ? "sm:justify-start" : "sm:justify-end"
                            }`}
                          >
                            <span className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#E56E1A] to-amber-600 font-display">
                              {item.year}
                            </span>
                            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-orange-50 text-[#B85008] border border-orange-200/60">
                              {item.tag}
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-2 group-hover:text-[#E56E1A] transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            6. WHY CHOOSE US (EXPANDED) (LIGHT THEME)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#B85008]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>The Meziu Difference</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.15]">
                  Why Our Clients Choose MEZIU Construction
                </h2>

                <div className="space-y-4 text-base sm:text-[17px] leading-relaxed text-slate-600">
                  <p>
                    In an industry where trust is earned daily,{" "}
                    <strong className="font-bold text-slate-950">
                      MEZIU CONSTRUCTION stands apart
                    </strong>
                    . We understand that inviting a contractor into your home or business is a big
                    decision. That’s why we go above and beyond to earn your confidence.
                  </p>

                  <p>
                    When you choose us, you are choosing a partner who listens to your vision,
                    respects your budget, and delivers results that exceed expectations. Our
                    commitment to structural integrity, design precision, and customer satisfaction
                    is unmatched.
                  </p>

                  <p className="font-semibold text-slate-900 bg-orange-50 p-4 rounded-2xl border border-orange-200">
                    We are available during working hours for consultations and, when needed,
                    emergency services—because we are here when you need us most.
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="inline-flex h-12 items-center gap-2 rounded-full bg-[#E56E1A] px-7 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-orange-500/25 hover:bg-[#d46215] transition-all cursor-pointer"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Call (201) 844-2427</span>
                  </a>
                </div>
              </div>

              {/* Right Column Grid (6 cols) */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:bg-white hover:shadow-md transition-all space-y-2.5">
                  <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950">We Listen to Your Vision</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Every project is personalized to your exact aesthetic, timeline, and budget
                    expectations.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:bg-white hover:shadow-md transition-all space-y-2.5">
                  <div className="w-11 h-11 rounded-2xl bg-orange-100 text-[#E56E1A] flex items-center justify-center">
                    <Hammer className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950">Structural Integrity</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Built to exceed New Jersey building codes with high-grade materials and master
                    masonry.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:bg-white hover:shadow-md transition-all space-y-2.5">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950">Emergency Support</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Available during working hours (Mon–Fri, 7:00 AM – 6:00 PM) for critical repairs.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:bg-white hover:shadow-md transition-all space-y-2.5">
                  <div className="w-11 h-11 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-950">Honest Pricing</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Transparent, itemized estimates with no hidden surprise costs or sudden markup.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            7. CERTIFICATIONS & AFFILIATIONS (LIGHT THEME)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 text-slate-900 relative overflow-hidden border-y border-slate-200/70">
          <div className="container-x">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-200 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Compliance &amp; Credentials</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Licensed, Insured &amp; Ready to Work
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-medium">
                Your safety and peace of mind are our top priorities. MEZIU CONSTRUCTION LLC
                maintains full licensing and insurance coverage required by the State of New Jersey.
                We are also bonded, providing our clients with additional financial protection and
                peace of mind.
              </p>
            </div>

            {/* Certifications Grid (Light) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={cert.title}
                    className="p-6 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 shadow-sm space-y-3"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-950">{cert.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{cert.desc}</p>
                    <div className="pt-2 flex items-center gap-1 text-[11px] font-extrabold text-emerald-700 uppercase tracking-wider">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>Verified Active</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 40-mile radius notification */}
            <div className="mt-12 text-center p-4 rounded-2xl bg-white border border-slate-200 max-w-xl mx-auto text-xs font-semibold text-slate-700 shadow-sm">
              📍 We proudly provide services within a <strong className="text-slate-950 font-bold">40-mile radius</strong> of Cliffwood, NJ across Monmouth, Middlesex &amp; surrounding Counties.
            </div>

          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            8 & 9. SAFETY COMMITMENT & OUR PROMISE (LIGHT THEME)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Commitment to Safety Card (Light) */}
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#B85008]">
                    <HardHat className="w-3.5 h-3.5 text-[#E56E1A]" />
                    <span>Safety Protocols</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-950">
                    Commitment to Safety and Structural Integrity
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                    Every project we undertake begins with a deep commitment to safety and
                    structural soundness. Whether we are pouring concrete for a new commercial
                    foundation or framing a home addition, we adhere to strict building codes and
                    industry standards. Our team undergoes continuous training in construction
                    safety, ensuring that every job site is secure for our workers and your family.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>NJ Code Compliance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>OSHA Safety Standards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Family &amp; Site Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Rigorous Site Checks</span>
                  </div>
                </div>
              </div>

              {/* Our Promise Card (Light) */}
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-orange-50 via-white to-amber-50/60 border border-orange-200 shadow-sm space-y-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 border border-amber-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-amber-800">
                    <HeartHandshake className="w-3.5 h-3.5 text-amber-600" />
                    <span>Client Trust</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-950">
                    Our Promise
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                    We promise to treat your property with the utmost respect and care. Our clean job
                    sites, efficient project management, and honest pricing reflect our dedication to
                    your satisfaction. At MEZIU CONSTRUCTION, we don’t just build structures—we
                    build lasting relationships.
                  </p>
                </div>

                <div className="pt-4 border-t border-orange-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-950 block">Luan Meziu</span>
                    <span className="text-[11px] text-slate-500 font-medium">Founder &amp; Owner</span>
                  </div>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[#E56E1A] px-5 py-2.5 text-xs font-black uppercase text-white hover:bg-[#d46215] transition-all cursor-pointer shadow-md"
                  >
                    <span>Request Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            10. SERVING THE COMMUNITY (LIGHT THEME)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 text-slate-900 relative overflow-hidden border-t border-slate-200/70">
          <div className="container-x relative z-10">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-200 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#B85008]">
                <MapPin className="w-3.5 h-3.5 text-[#E56E1A]" />
                <span>Local Community Presence</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Proudly Serving Northern New Jersey
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-medium">
                As a Cliffwood-based company, we are deeply invested in our local community. We are
                proud to serve residents and business owners in the following towns and cities
                within a 40-mile radius:
              </p>
            </div>

            {/* Towns Badges Grid (Light Theme) */}
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10">
              {TOWNS.map((town) => (
                <div
                  key={town.name}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                    town.primary
                      ? "bg-white border border-slate-300 text-slate-900 shadow-sm hover:border-[#E56E1A] hover:text-[#E56E1A] hover:scale-105"
                      : "bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>{town.name}</span>
                  <span className="text-[10px] text-slate-400 font-normal">({town.county})</span>
                </div>
              ))}
            </div>

            {/* Coverage Summary Box (Light) */}
            <div className="max-w-2xl mx-auto p-6 rounded-3xl bg-white border border-slate-200/90 text-center space-y-2 shadow-sm">
              <div className="text-xs sm:text-sm font-bold text-[#E56E1A] uppercase tracking-widest">
                Bergen • Passaic • Essex Counties &amp; All Surrounding Areas
              </div>
              <p className="text-xs text-slate-600">
                Need service outside these towns? If you are within 40 miles of Cliffwood, NJ, our
                master crew is ready to assist you.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-[#E56E1A] transition-colors cursor-pointer"
                >
                  <span>Check Availability for Your Location</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            11. CALL TO ACTION (CTA)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-[#E56E1A] via-[#ED741D] to-[#E56E1A] text-white relative overflow-hidden shadow-xl">
          {/* Subtle Ambient Shapes */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="container-x relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/15 border border-white/30 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Let's Get Started Today</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-[48px] font-black tracking-tight text-white leading-tight">
              Ready to Build Something Great?
            </h2>

            <p className="text-base sm:text-lg font-medium text-white/95 max-w-2xl mx-auto leading-relaxed">
              Whether you have a specific project in mind or just want to explore your options, we
              are here to help. Contact Luan and the team today to schedule a free on-site
              consultation.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              {/* Primary Call Estimate Button */}
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex h-13 items-center justify-center gap-3 rounded-full bg-slate-950 px-8 sm:px-9 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-2xl transition-all duration-300 hover:bg-slate-900 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#E56E1A] fill-current" />
                <span>Request a Free Estimate — {BUSINESS.phone}</span>
              </a>

              {/* Email Contact Button */}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-white text-slate-950 px-7 text-xs sm:text-sm font-black uppercase tracking-wider shadow-xl hover:bg-slate-100 hover:scale-105 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#E56E1A]" />
                <span>Email Us</span>
              </a>
            </div>

            <p className="text-xs font-semibold text-white/80 pt-1">
              Free On-Site Consultation • Transparent Itemized Estimates • Licensed &amp; Insured
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
