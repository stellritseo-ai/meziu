import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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
  Quote,
  ChevronRight,
  ChevronDown,
  Layers,
  Grid,
  Compass,
  Home,
  Maximize2,
  Wrench,
  Building2,
  Check,
  ZoomIn,
  X,
  Star,
  Users,
  Clock,
  Calendar,
  DollarSign,
  Languages,
  Droplets,
  HardHat,
  Palette,
  Shield,
  Sun,
  LayoutGrid,
  Paintbrush,
  Zap,
  Flame,
  DoorOpen,
  Tv,
  AlertTriangle,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BUSINESS } from "@/lib/site";

// Authentic project assets
import interiorHeroImg from "@/assets/interior.jpg";
import renovationImg from "@/assets/renovation.jpg";
import aboutImg from "@/assets/about.jpg";

// Gallery assets for contracting portfolio
import livingRenovationImg from "@/assets/gallery/481974317_653489327184986_4107992866073077763_n.jpg";
import kitchenCarpentryImg from "@/assets/gallery/471821741_899268768943333_293806620655011432_n.jpg";
import finishedLivingImg from "@/assets/gallery/471820344_899268765610000_5275763543525178002_n.jpg";
import framingConstructionImg from "@/assets/gallery/471699630_899901478880062_5883714246833623865_n.jpg";
import bathroomSuiteImg from "@/assets/gallery/471969025_901036092099934_5228165584842414421_n.jpg";
import stoneStepsImg from "@/assets/gallery/471993762_901602662043277_5877206412694686898_n.jpg";

export const Route = createFileRoute("/services/general-contracting")({
  component: GeneralContractingHandymanPage,
});

/* ── 6 General Contracting Major Services ── */
const CONTRACTING_SERVICES = [
  {
    id: "full-service-contracting",
    num: "01",
    title: "Full-Service General Contracting",
    icon: HardHat,
    summary: "Complete turnkey construction management from blueprints to Certificate of Occupancy.",
    description: "As a full-service general contractor, we coordinate every single trade, timetable, material delivery, and municipal inspection so you enjoy a completely stress-free build.",
    points: [
      { name: "Turnkey Project Management", detail: "Single point of direct communication and unified trade scheduling." },
      { name: "Architectural Design & Planning", detail: "Transforming your ideas into stamped, permit-ready construction drawings." },
      { name: "Permitting & Code Inspections", detail: "Managing all municipal zoning filings, framing, electrical, plumbing, and building sign-offs." },
      { name: "Quality Material Procurement", detail: "Commercial contractor discounts on lumber, drywall, mechanicals, and finishes." },
      { name: "Transparent Budget & Schedule", detail: "Clear line-item progress milestones with zero surprise costs." },
    ],
  },
  {
    id: "new-construction",
    num: "02",
    title: "New Construction & Ground-Up Builds",
    icon: Building2,
    summary: "Custom residential homes, commercial facilities, and detached outbuildings built to last.",
    description: "From clearing and excavating the building pad to pouring heavy reinforced footings, framing timber and steel superstructures, and installing high-performance building envelopes.",
    points: [
      { name: "Custom Home Construction", detail: "Bespoke residential builds engineered to your exact family specifications." },
      { name: "Detached Garages & Carriage Houses", detail: "Multi-car garages with upper-level guest suites or home office lofts." },
      { name: "Commercial Retail & Office Buildings", detail: "Durable light-commercial framing, storefronts, and MEP systems." },
      { name: "Structural Foundation & Framing", detail: "Engineered LVL beams, steel columns, and 2x6 exterior framing assemblies." },
      { name: "High-Efficiency Building Envelope", detail: "Spray foam insulation, Tyvek weather barriers, and architectural roofing." },
    ],
  },
  {
    id: "renovation-remodeling",
    num: "03",
    title: "Renovation & Remodeling",
    icon: Hammer,
    summary: "Breathe new life into older homes and commercial spaces with structural updates.",
    description: "We modernize layouts by removing load-bearing walls, replacing outdated MEP infrastructure, finishing dark basements into entertainment suites, and converting attics into master retreats.",
    points: [
      { name: "Whole-Home Gut Renovations", detail: "Stripping down to the studs for brand-new modern plumbing, electrical, and drywall." },
      { name: "Kitchen & Bathroom Modernization", detail: "Custom cabinetry, luxury stone countertops, walk-in showers, and new fixtures." },
      { name: "Finished Basements & Media Suites", detail: "Subfloor moisture barriers, wet bars, guest bedrooms, and egress windows." },
      { name: "Attic Conversions & Dormers", detail: "Adding shed dormers to create bright master bedrooms with en-suite baths." },
      { name: "Historic Home Preservation", detail: "Restoring historic woodwork and charm while upgrading structural integrity." },
    ],
  },
  {
    id: "custom-home-building",
    num: "04",
    title: "Custom Home Building",
    icon: Home,
    summary: "Architecturally distinctive homes crafted with master masonry, framing, and luxury details.",
    description: "We guide you through every milestone of building your custom home—from lot evaluation and soil grading to selecting luxury fixtures, quartz waterfall islands, and handcrafted trim.",
    points: [
      { name: "Custom Floor Plan Optimization", detail: "Flowing open-concept living spaces tailored to how your family lives." },
      { name: "Site Excavation & Foundation", detail: "Poured concrete foundations with comprehensive waterproofing and weeping systems." },
      { name: "Energy-Efficient Smart Systems", detail: "Multi-zone HVAC, tankless water heaters, and smart electrical control panels." },
      { name: "Custom Architectural Millwork", detail: "Coffered ceilings, wainscoting, solid oak staircases, and custom built-ins." },
      { name: "Move-In Ready Handover", detail: "Meticulous punch-list completion, professional deep cleaning, and full warranty." },
    ],
  },
  {
    id: "commercial-construction",
    num: "05",
    title: "Commercial Construction & Tenant Fit-Outs",
    icon: Building2,
    summary: "High-traffic commercial retail spaces, corporate offices, and restaurants built on strict schedules.",
    description: "We understand commercial timelines and code requirements. We build out executive office suites, medical/dental examination rooms, retail boutiques, and restaurants with minimal business interruption.",
    points: [
      { name: "Office Tenant Improvements (TI)", detail: "Framing private offices, executive boardrooms, and acoustic breakrooms." },
      { name: "Retail Storefront Construction", detail: "Welcoming customer sales floors, product display shelving, and POS stations." },
      { name: "Restaurant & Cafe Buildouts", detail: "Commercial kitchen utility rough-ins, dining room seating, and bar counters." },
      { name: "ADA Compliance Upgrades", detail: "Wheelchair ramps, commercial grab bars, and widened 36-inch entry doors." },
      { name: "Off-Hours Construction Scheduling", detail: "Evening and weekend shifts to keep your business running smoothly." },
    ],
  },
  {
    id: "project-management",
    num: "06",
    title: "Construction Project Management",
    icon: Compass,
    summary: "Precision scheduling, quality assurance inspections, and transparent cost management.",
    description: "Luan Meziu and our management team oversee all daily jobsite operations, material staging, trade coordination, and municipal inspections to guarantee quality from foundation to roof.",
    points: [
      { name: "Detailed Scope & Milestones", detail: "Comprehensive schedules outlining every construction phase." },
      { name: "Strict Trade Coordination", detail: "Seamless handoffs between plumbers, electricians, framers, and drywallers." },
      { name: "Rigorous Daily Quality Checks", detail: "Verifying plumb walls, level subfloors, and flawless joint finishes." },
      { name: "Real-Time Owner Communication", detail: "Frequent photo updates and clear answers to all your questions." },
      { name: "Proactive Problem Solving", detail: "Overcoming hidden structural challenges with engineered solutions." },
    ],
  },
];

/* ── 10 Handyman & Trade Repair Services ── */
const HANDYMAN_SERVICES = [
  {
    id: "plumbing-repairs",
    num: "01",
    title: "Plumbing Repairs",
    icon: Droplets,
    desc: "From leaky faucets and running toilets to burst pipes, shower valve replacements, garbage disposals, and water heater repairs.",
    points: ["Faucet & showerhead leak repairs", "Toilet repairs, unclogging & replacements", "Garbage disposal fixes & swaps", "PEX & copper pipe repairs", "Water heater servicing"],
  },
  {
    id: "electrical-repairs",
    num: "02",
    title: "Electrical Repairs & Upgrades",
    icon: Zap,
    desc: "Safe, code-compliant lighting installation, GFCI safety outlets, dimmer switches, ceiling fans, smart thermostats, and panel upgrades.",
    points: ["Recessed LED pot light installation", "GFCI, USB & standard outlet repairs", "Tripped breaker troubleshooting", "Ceiling fan installation & wiring", "Smart home doorbells & switches"],
  },
  {
    id: "carpentry-woodwork",
    num: "03",
    title: "Carpentry & Custom Woodwork",
    icon: Hammer,
    desc: "Custom built-in closet shelving, cabinet repairs and hinge adjustments, interior/exterior door hung leveling, crown molding, and trim.",
    points: ["Custom built-in shelving & entertainment units", "Kitchen & bathroom cabinet repairs", "Interior & exterior door hung leveling", "Crown molding, wainscoting & baseboards", "Wood deck & fence repairs"],
  },
  {
    id: "drywall-plaster",
    num: "04",
    title: "Drywall & Plaster Repair",
    icon: Layers,
    desc: "Invisible drywall patching for doorknob holes, settling cracks, ceiling water stains, tape/mudding, and seamless Level 5 skim coats.",
    points: ["Doorknob holes & large sheetrock patches", "Ceiling water leak damage cutouts", "Settling cracks & joint taping", "Plaster restoration in older homes", "Texture matching & painting prep"],
  },
  {
    id: "painting-services",
    num: "05",
    title: "Interior & Exterior Painting",
    icon: Paintbrush,
    desc: "Flawless painting with crisp cut lines. Interior walls, ceilings, trim casing, kitchen cabinet spray painting, and exterior deck staining.",
    points: ["Full interior room & trim painting", "Exterior siding, doors & window casing", "Kitchen cabinet spray refinishing", "Deck, porch & fence staining", "Wallpaper removal & wall prep"],
  },
  {
    id: "flooring-repair-installation",
    num: "06",
    title: "Flooring Repair & Installation",
    icon: Grid,
    desc: "Installation and repair of prefinished hardwood, luxury vinyl plank (LVP), porcelain floor tile, laminate, and subfloor squeak fixes.",
    points: ["Hardwood flooring board repairs & installs", "Luxury vinyl plank (LVP) 100% waterproof", "Porcelain & ceramic tile installation", "Grout cleaning & re-grouting", "Subfloor leveling & squeak elimination"],
  },
  {
    id: "window-door-repair",
    num: "07",
    title: "Window & Door Repair",
    icon: DoorOpen,
    desc: "Keep your home secure and draft-free with sticking door alignment, deadbolt hardware replacement, weatherstripping, and screen repairs.",
    points: ["Sticking, rubbing or misaligned doors", "Energy-efficient window replacements", "Deadbolt & smart lock installations", "Sliding patio door roller fixes", "Weatherstripping & draft sealing"],
  },
  {
    id: "exterior-repairs-maintenance",
    num: "08",
    title: "Exterior Repairs & Maintenance",
    icon: Shield,
    desc: "Protect curb appeal with vinyl/fiber cement siding patches, gutter cleanouts and realignments, roof leak fixes, and pressure washing.",
    points: ["Vinyl, cedar & Hardie siding repairs", "Gutter cleaning, repairs & downspouts", "Roof shingle leak patching", "Exterior silicone caulking & flashing", "High-power driveway & patio washing"],
  },
  {
    id: "assembly-installation",
    num: "09",
    title: "Assembly & Fixture Installation",
    icon: Tv,
    desc: "Professional furniture assembly, TV wall mounting with concealed cords, heavy art/mirror hanging, and bathroom accessory installation.",
    points: ["IKEA, Wayfair & heavy furniture assembly", "Secure TV wall mounting with cord covers", "Heavy decorative mirror & art hanging", "Window blinds, shades & curtain rods", "Closet organizing rack systems"],
  },
  {
    id: "emergency-repairs",
    num: "10",
    title: "Emergency Repairs (Business Hours)",
    icon: AlertTriangle,
    desc: "Fast-response repair assistance during working hours (Mon–Fri, 7am–6pm) for burst pipes, electrical shorts, storm leaks, and structural damage.",
    points: ["Burst pipe water shutoff & pipe repair", "Sparking outlet & breaker shutoffs", "Storm-damaged roof leak tarps", "Broken door & window board-ups", "Immediate structural shoring support"],
  },
];

/* ── 12 Why Choose Meziu Advantages ── */
const WHY_CHOOSE_CONTRACTING = [
  {
    title: "15+ Years Hands-On Experience",
    desc: "Skilled professionals with master-level expertise across all construction and repair trades.",
    icon: Award,
  },
  {
    title: "Family-Owned Since 2009",
    desc: "Direct personal accountability with founder Luan Meziu on every single job site.",
    icon: Home,
  },
  {
    title: "Licensed, Insured & Bonded",
    desc: "Full compliance with New Jersey DCA building regulations and complete liability coverage.",
    icon: ShieldCheck,
  },
  {
    title: "Full-Service Capabilities",
    desc: "One trusted partner for every trade: plumbing, electrical, carpentry, drywall, and painting.",
    icon: Wrench,
  },
  {
    title: "No Job Too Small & None Too Big",
    desc: "From replacing a single light switch to building a full multi-room home addition.",
    icon: Maximize2,
  },
  {
    title: "Reliable & On-Time Arrival",
    desc: "We respect your time. We show up when promised and complete projects on schedule.",
    icon: Clock,
  },
  {
    title: "Competitive, Transparent Pricing",
    desc: "Clear upfront quotes with fixed material allowances and zero surprise change orders.",
    icon: DollarSign,
  },
  {
    title: "Quality Master Workmanship",
    desc: "Built to last. Clean cut lines, level surfaces, and durable materials on every job.",
    icon: Sparkles,
  },
  {
    title: "Clean & Respectful Job Sites",
    desc: "We use protective drop cloths, shoe covers, dust barriers, and leave your home spotless.",
    icon: CheckCircle2,
  },
  {
    title: "Residential & Commercial Expertise",
    desc: "Equipped for private homeowner repairs, luxury renovations, and commercial plazas.",
    icon: Building2,
  },
  {
    title: "Bilingual English & Spanish",
    desc: "Clear, comfortable communication at every milestone — ¡Hablamos español!",
    icon: Languages,
  },
  {
    title: "40-Mile Service Radius",
    desc: "Proudly serving Cliffwood, Monmouth County, Middlesex County, and beyond.",
    icon: MapPin,
  },
];

/* ── 5-Step Process Roadmap ── */
const CONTRACTING_PROCESS = [
  {
    step: "01",
    title: "Contact Us",
    desc: "Reach out by phone, email, or online form. Tell us about your repair need or construction vision. We'll schedule a convenient time to assist you.",
    icon: Phone,
  },
  {
    step: "02",
    title: "Assessment & Estimate",
    desc: "We visit your property to evaluate the scope, take measurements, provide expert recommendations, and deliver a detailed, no-obligation written estimate.",
    icon: MapPin,
  },
  {
    step: "03",
    title: "Scheduling & Preparation",
    desc: "We schedule work at your convenience. We protect floors and furnishings with heavy drop cloths and zip-wall dust barriers before starting.",
    icon: Calendar,
  },
  {
    step: "04",
    title: "Professional Service & Cleanup",
    desc: "Our skilled tradespeople complete the work with precision and master craftsmanship, cleaning the work area thoroughly upon completion.",
    icon: Hammer,
  },
  {
    step: "05",
    title: "Quality Inspection & Walkthrough",
    desc: "We inspect every detail against our strict standards and walk through the completed work with you to guarantee your 100% satisfaction.",
    icon: CheckCircle2,
  },
];

/* ── 6 Featured Contracting & Handyman Projects ── */
const CONTRACTING_PORTFOLIO = [
  {
    title: "Whole-Home Interior Renovation & Carpentry",
    location: "Clifton, NJ",
    category: "General Contracting",
    desc: "Complete interior remodel featuring open-concept framing, luxury vinyl flooring, and custom trim.",
    image: livingRenovationImg,
  },
  {
    title: "Custom Kitchen Cabinetry & Countertop Install",
    location: "Cliffwood, NJ",
    category: "Kitchen & Carpentry",
    desc: "Shaker cabinet installation, quartz countertops, tile backsplash, and plumbing fixture hookups.",
    image: kitchenCarpentryImg,
  },
  {
    title: "Finished Living Room & Recessed Lighting",
    location: "Wayne, NJ",
    category: "Electrical & Drywall",
    desc: "Level 5 smooth drywall finish, 12 recessed LED pot lights, dimmer switches, and fresh interior paint.",
    image: finishedLivingImg,
  },
  {
    title: "Structural Timber & Steel Framing Construction",
    location: "Ridgewood, NJ",
    category: "New Construction",
    desc: "Heavy structural LVL beam framing, subflooring, and exterior weather barrier installation.",
    image: framingConstructionImg,
  },
  {
    title: "Luxury Bathroom Remodel & Tile Plumbing",
    location: "Paramus, NJ",
    category: "Plumbing & Tile",
    desc: "Custom porcelain tile walk-in shower, thermostatic valve plumbing, double vanity, and lighting.",
    image: bathroomSuiteImg,
  },
  {
    title: "Front Entry Door & Stone Stoop Repair",
    location: "Glen Rock, NJ",
    category: "Handyman & Masonry",
    desc: "Exterior door hung leveling, smart lock installation, and natural bluestone stoop repointing.",
    image: stoneStepsImg,
  },
];

/* ── Northern NJ Service Towns ── */
const TOWNS = [
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
  "Glen Rock",
  "Fair Lawn",
  "Allendale",
  "Wyckoff",
  "Bergen County",
  "Passaic County",
  "Essex County",
];

/* ── 10 FAQs ── */
const CONTRACTING_FAQS = [
  {
    q: "What types of handyman services do you offer?",
    a: "We offer plumbing repairs, electrical repairs and lighting upgrades, carpentry and custom woodwork, drywall and plaster repairs, interior and exterior painting, flooring repair and installation, window and door repair, exterior maintenance, furniture assembly, and emergency repairs.",
  },
  {
    q: "What types of general contracting services do you offer?",
    a: "We offer full-service general contracting, new construction, whole-home renovation and remodeling, custom home building, commercial construction and tenant fit-outs, and construction project management.",
  },
  {
    q: "Are you licensed and insured in New Jersey?",
    a: "Yes! MEZIU CONSTRUCTION LLC is fully licensed, insured, and bonded in the State of New Jersey. We carry comprehensive general liability and workers' compensation coverage for your complete protection.",
  },
  {
    q: "Do you provide free estimates for contracting and repairs?",
    a: "Absolutely! We offer 100% free, no-obligation on-site estimates for all projects—from small handyman repairs to major whole-home additions and renovations.",
  },
  {
    q: "Do you handle small jobs like furniture assembly or TV mounting?",
    a: "Yes! No job is too small. We handle everything from hanging artwork and mounting TVs to fixing a running toilet, patching drywall, or building an entire new home.",
  },
  {
    q: "Do you offer emergency services?",
    a: "Yes, we provide emergency repair services during our regular business hours (Monday through Friday, 7:00 AM – 6:00 PM). Call us immediately at (201) 844-2427 for urgent plumbing leaks, electrical shorts, or structural concerns.",
  },
  {
    q: "How quickly can you respond to a service request?",
    a: "We typically respond within 24 hours for non-emergency requests. For urgent repairs during regular business hours, our team mobilizes as quickly as possible.",
  },
  {
    q: "Do you work on commercial properties?",
    a: "Yes! We provide comprehensive general contracting and handyman maintenance services for retail stores, corporate offices, medical suites, and restaurants across Northern New Jersey.",
  },
  {
    q: "Do you speak Spanish?",
    a: "¡Sí! Hablamos español. Founder Luan Meziu and our crew are fully bilingual in English and Spanish, ensuring clear communication for all your repair and construction needs.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Cliffwood, NJ, and a 40-mile radius covering Monmouth County, Middlesex County, and all surrounding New Jersey communities.",
  },
];

function GeneralContractingHandymanPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; location: string } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 selection:bg-orange-500 selection:text-white font-sans">
      <Header />

      <main className="flex-1">
        {/* ── BREADCRUMBS & HERO SECTION ── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-orange-50/20 to-white pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-slate-100">
          
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 rounded-full bg-orange-400/10 blur-3xl pointer-events-none" />
          
          <div className="container-x relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Link to="/" className="hover:text-[#E56E1A] transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <a href="/#services" className="hover:text-[#E56E1A] transition-colors">Services</a>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#E56E1A] font-bold">General Contracting &amp; Handyman</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Hero Text Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200/80 px-4 py-1.5 shadow-sm">
                  <Wrench className="h-4 w-4 text-[#E56E1A]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#B85008]">
                    Master General Contractors &amp; Handyman Experts
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
                  Expert <span className="text-[#E56E1A]">General Contracting</span> &amp; Handyman
                </h1>

                {/* Sub-headline */}
                <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                  One Trusted Partner for All Your Home Improvement Needs
                </p>

                {/* Body Text */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  From small repairs and maintenance to large-scale construction projects, <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong> is your one-stop solution for all your home improvement needs. As a full-service general contractor and handyman, we handle projects of every size with the same commitment to quality, professionalism, and customer satisfaction. No job is too small—and no project is too big.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <a
                    href="/free-estimate"
                    className="inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#E56E1A] via-[#ED741D] to-[#E56E1A] px-8 text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-orange-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-orange-500/35 active:scale-[0.98]"
                  >
                    <span>Request a Free Estimate</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <a
                    href={BUSINESS.phoneHref}
                    className="inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-white border-2 border-slate-200 px-7 text-sm font-bold text-slate-900 shadow-sm transition-all duration-300 hover:border-[#E56E1A] hover:text-[#E56E1A] hover:bg-orange-50/50 active:scale-[0.98]"
                  >
                    <Phone className="h-4 w-4 text-[#E56E1A]" />
                    <span>Call {BUSINESS.phone}</span>
                  </a>
                </div>

                {/* Quick Trust Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E56E1A] shrink-0" />
                    <span className="text-xs font-bold text-slate-800">15+ Yrs Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#E56E1A] shrink-0" />
                    <span className="text-xs font-bold text-slate-800">Licensed &amp; Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                    <span className="text-xs font-bold text-slate-800">4.9/5 Star Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#E56E1A] shrink-0" />
                    <span className="text-xs font-bold text-slate-800">40-Mile NJ Radius</span>
                  </div>
                </div>

              </div>

              {/* Right Hero Image Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                  <img
                    src={interiorHeroImg}
                    alt="Master general contractor and handyman team at work in Cliffwood, NJ"
                    className="w-full h-[400px] sm:h-[460px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Trust Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-[#E56E1A] tracking-wider">Cliffwood, NJ Master Contractors</span>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      Plumbing, electrical, carpentry, drywall, painting, additions, and complete home remodeling.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── OVERVIEW OF CONTRACTING & HANDYMAN ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Image Collage */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                  <img
                    src={livingRenovationImg}
                    alt="Whole home interior renovation in Northern NJ"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                    Turnkey Carpentry, Drywall, Plumbing, Electrical &amp; Paint
                  </div>
                </div>

                {/* 2 Small Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-2xl font-black text-[#E56E1A]">All Trades</div>
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">Single Contractor</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-2xl font-black text-[#E56E1A]">15+ Yrs</div>
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">Family-Owned 2009</div>
                  </div>
                </div>
              </div>

              {/* Right Narrative Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>One Trusted Contractor</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  General Contracting &amp; Handyman Services Done Right
                </h2>

                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>
                    "Finding a reliable contractor who can handle everything from a leaky faucet to a complete home renovation can be challenging. At <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong>, we make it simple. As a full-service general contractor and handyman, we are your one trusted partner for all your home improvement and repair needs.
                  </p>
                  <p>
                    As a family-owned business with over 15 years of hands-on experience, we understand that every project—big or small—deserves professional attention. Our team is skilled in a wide range of trades, including carpentry, plumbing, electrical, drywall, painting, and more. Whether you need emergency repairs, routine maintenance, or a complex renovation, we have the expertise to get the job done right. We serve both residential and commercial clients across Cliffwood, NJ, and a 40-mile radius.
                  </p>
                  <p className="font-medium text-slate-800 bg-orange-50/60 p-4 rounded-2xl border-l-4 border-[#E56E1A]">
                    Fully licensed, insured, and bonded, we stand behind every project with a commitment to quality, transparency, and customer satisfaction."
                  </p>
                </div>

                {/* 4 Feature Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">All Trades Under One Roof</h4>
                      <p className="text-[11px] text-slate-500">Plumbing, electric, framing, drywall &amp; tile</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">No Job Too Small or Too Big</h4>
                      <p className="text-[11px] text-slate-500">From faucet swaps to new custom homes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Direct Owner Accountability</h4>
                      <p className="text-[11px] text-slate-500">Luan Meziu ensures quality on every site</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Bilingual Support (EN/ES)</h4>
                      <p className="text-[11px] text-slate-500">Hablamos español con total fluidez</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ── OUR GENERAL CONTRACTING SERVICES (6 CARDS) ── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                Comprehensive Construction Management
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our General Contracting Services
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Comprehensive Construction Management for Every Project across Cliffwood &amp; New Jersey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CONTRACTING_SERVICES.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.id}
                    className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#E56E1A] flex items-center justify-center shadow-inner">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-2xl font-black text-slate-200">
                          #{svc.num}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-slate-950">
                        {svc.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-slate-700">
                        {svc.summary}
                      </p>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {svc.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        {svc.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#E56E1A] shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-slate-900 font-bold">{pt.name}:</strong>{" "}
                              <span className="text-slate-500">{pt.detail}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href="/free-estimate"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E56E1A] hover:underline pt-2"
                    >
                      <span>Request Quote for {svc.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── OUR HANDYMAN SERVICES (10 IN-DEPTH CARDS) ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1 text-xs font-black uppercase tracking-wider text-slate-800">
                Expert Home Maintenance
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Handyman Services
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Expert Repairs and Maintenance for Every Home — No Job Too Small
              </p>
            </div>

            {/* 10 Handyman Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {HANDYMAN_SERVICES.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-orange-200 hover:bg-orange-50/20 transition-all duration-300 space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#E56E1A] flex items-center justify-center shadow-xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-black text-slate-400">
                          #{item.num}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-slate-200/60">
                        {item.points.map((pt, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-700">
                            <Check className="w-3.5 h-3.5 text-[#E56E1A] shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href="/free-estimate"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E56E1A] hover:underline pt-2"
                    >
                      <span>Book Handyman Service</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── WHY CHOOSE MEZIU FOR GENERAL CONTRACTING & HANDYMAN? ── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                The Meziu Advantage
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Why Choose MEZIU CONSTRUCTION for Your Project?
              </h2>
              <p className="text-lg text-slate-600">
                Skilled professionals with diverse trade expertise, transparent pricing, and 100% dedication.
              </p>
            </div>

            {/* 12 Reason Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_CONTRACTING.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300 space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-[#E56E1A] flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── 5-STEP GENERAL CONTRACTING & HANDYMAN PROCESS ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-slate-800">
                Simple &amp; Reliable Process
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Process
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                From Call to Completion—We Do It Right.
              </p>
            </div>

            {/* 5-Step Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {CONTRACTING_PROCESS.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.step}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase text-[#E56E1A] tracking-widest">
                          STEP {p.step}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-[#E56E1A] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <h3 className="text-base font-bold text-slate-950 leading-snug">
                        {p.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                    <div className="w-full h-1 bg-orange-100 rounded-full overflow-hidden mt-4">
                      <div
                        className="h-full bg-[#E56E1A]"
                        style={{ width: `${(idx + 1) * 20}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── PORTFOLIO GALLERY ── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                  Verified Workmanship
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Our Work Portfolio
                </h2>
                <p className="text-base text-slate-600">
                  Real Projects. Real Quality. Browse examples of our general contracting and handyman projects across Cliffwood, NJ, and New Jersey.
                </p>
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#E56E1A] hover:underline"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 6 Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CONTRACTING_PORTFOLIO.map((proj, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage({ src: proj.image, title: proj.title, location: proj.location })}
                  className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[11px] font-black uppercase tracking-wide text-slate-900 shadow-sm">
                      {proj.category}
                    </div>
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-md">
                        <ZoomIn className="w-3.5 h-3.5 text-[#E56E1A]" />
                        <span>Zoom Project</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#E56E1A]" />
                        {proj.location}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#E56E1A] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {proj.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── SERVICE AREA COVERAGE ── */}
        <section className="py-14 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-950">
                Serving Northern New Jersey
              </h2>
              <p className="text-sm text-slate-600">
                We provide expert general contracting and handyman services within a 40-mile radius of Cliffwood, NJ, including:
              </p>
            </div>

            {/* Towns Pills Grid */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
              {TOWNS.map((town, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors",
                    town.includes("HQ")
                      ? "bg-[#E56E1A] text-white shadow-sm shadow-orange-500/20"
                      : "bg-slate-50 border border-slate-200 text-slate-800 shadow-2xs hover:border-[#E56E1A] hover:text-[#E56E1A]"
                  )}
                >
                  <MapPin className="w-3 h-3 text-current" />
                  <span>{town}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── FREQUENTLY ASKED QUESTIONS ── */}
        <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200/80">
          <div className="container-x mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-3.5 py-1 text-xs font-bold text-slate-700">
                Clear Answers
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950">
                Frequently Asked Questions About General Contracting &amp; Handyman
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Everything you need to know about our all-trade capabilities, response times, emergency repairs, and free estimates.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {CONTRACTING_FAQS.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200/90 overflow-hidden bg-white shadow-2xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-slate-900 hover:text-[#E56E1A] transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4">{faq.q}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200",
                          isOpen ? "rotate-180 text-[#E56E1A]" : ""
                        )}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── CALL TO ACTION BANNER ── */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-[#E56E1A] via-[#ED741D] to-[#E56E1A] text-white">
          <div className="container-x mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
            
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Handle Your Repairs &amp; Construction</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Ready to Get Started?
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Whether you need a small repair or a major construction project, <strong className="font-bold text-white">{BUSINESS.name}</strong> is here to help. Contact Luan and our team today for a free on-site estimate.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="/free-estimate"
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-8 text-sm font-black uppercase tracking-wider text-slate-950 shadow-2xl transition-all hover:bg-slate-100 active:scale-98"
              >
                <span>Request a Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS.phoneHref}
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-8 text-sm font-bold uppercase tracking-wider text-white shadow-xl transition-all hover:bg-slate-900 active:scale-98"
              >
                <Phone className="w-4 h-4 text-[#E56E1A]" />
                <span>Call {BUSINESS.phone}</span>
              </a>
            </div>

            {/* Reassurance Footer Quote */}
            <div className="pt-6 border-t border-white/20 max-w-3xl mx-auto">
              <p className="text-xs sm:text-sm text-white/85 italic leading-relaxed">
                "{BUSINESS.name} is a family-owned, licensed, and insured general contractor and handyman serving Cliffwood, NJ, and a 40-mile radius since 2009. We are committed to quality craftsmanship, transparency, and customer satisfaction—from the smallest repair to the largest construction project."
              </p>
            </div>

          </div>
        </section>
      </main>

      {/* ── LIGHTBOX MODAL ── */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 p-2 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[75vh] object-contain rounded-2xl bg-slate-100"
            />

            <div className="p-4 flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-slate-900">{selectedImage.title}</h4>
                <p className="text-xs text-slate-500">{selectedImage.location}</p>
              </div>
              <a
                href="/free-estimate"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#E56E1A] text-white text-xs font-bold hover:bg-[#ED741D] transition-colors"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
