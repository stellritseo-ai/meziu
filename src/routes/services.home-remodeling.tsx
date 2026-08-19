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
  Home,
  Layers,
  Grid,
  Compass,
  Maximize2,
  Wrench,
  Building2,
  Flame,
  Check,
  ZoomIn,
  X,
  Star,
  Users,
  Clock,
  Calendar,
  DollarSign,
  Languages,
  Utensils,
  Bath,
  FileCheck,
  HardHat,
  Palette,
  Shield,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCta } from "@/components/site/FloatingCta";
import { BUSINESS } from "@/lib/site";

// Authentic project assets
import renovationHeroImg from "@/assets/renovation.jpg";
import interiorImg from "@/assets/interior.jpg";
import additionImg from "@/assets/addition.jpg";
import kitchenHeroImg from "@/assets/kitchen.jpg";
import bathroomHeroImg from "@/assets/bathroom.jpg";

// Gallery assets for home remodeling portfolio
import wholeHomeImg from "@/assets/gallery/471539810_899268755610001_5277995264757783368_n.jpg";
import additionProjectImg from "@/assets/gallery/471817515_899268475610029_1888344127136103871_n.jpg";
import basementImg from "@/assets/gallery/471443350_899268758943334_141679608307794421_n.jpg";
import structuralImg from "@/assets/gallery/471675756_901036238766586_3745657953268944438_n.jpg";
import exteriorImg from "@/assets/gallery/481974317_653489327184986_4107992866073077763_n.jpg";
import atticImg from "@/assets/gallery/471821741_899268768943333_293806620655011432_n.jpg";

export const Route = createFileRoute("/services/home-remodeling")({
  component: HomeRemodelingPage,
});

/* ── 10 Detailed Home Remodeling Services Data ── */
const HOME_REMODELING_SERVICES_DATA = [
  {
    id: "whole-home-renovations",
    num: "01",
    title: "Whole-Home Renovations",
    icon: Home,
    summary: "A whole-home renovation is the ultimate transformation, modernizing every room into a cohesive sanctuary.",
    description: "We handle every single trade under one roof—from complete gut demolition and open-concept structural changes to rewiring, plumbing, insulation, drywall, hardwood flooring, and custom finish carpentry.",
    points: [
      { name: "Complete Interior Gut Remodels", detail: "Updating electrical, plumbing, insulation, and drywall to modern building codes." },
      { name: "Open-Concept Layout Redesign", detail: "Removing load-bearing walls and installing engineered LVL structural beams." },
      { name: "Unified Flooring Throughout", detail: "Seamless installation of prefinished hardwood, luxury vinyl plank, or tile." },
      { name: "Energy-Efficient Windows & Doors", detail: "Double/triple pane Low-E window replacements and insulated exterior doors." },
      { name: "Single-Source Project Management", detail: "One dedicated master builder coordinating permits, inspections, and all trades." },
    ],
    image: wholeHomeImg,
    alt: "Whole-home interior renovation and open-concept living space in Clifton, NJ",
  },
  {
    id: "home-additions",
    num: "02",
    title: "Home Additions",
    icon: Maximize2,
    summary: "Expand your living footprint with seamless second stories, master suites, and bump-out extensions.",
    description: "Instead of moving, add valuable square footage to your existing home. We engineer foundations, frame new structures, tie into existing rooflines, and match exterior siding and trim so your addition looks completely original.",
    points: [
      { name: "Second-Story Vertical Additions", detail: "Doubling your living area without sacrificing valuable yard space." },
      { name: "Master Suite & Bedroom Wings", detail: "Private master retreats with walk-in closets and ensuite luxury bathrooms." },
      { name: "In-Law Suites & ADUs", detail: "Comfortable, independent living quarters with private entries and kitchenettes." },
      { name: "Sunrooms & Three-Season Rooms", detail: "Light-filled architectural rooms with vaulted ceilings and floor-to-ceiling glass." },
      { name: "Seamless Exterior Integration", detail: "Flawlessly matching brick, stone, siding, roofing shingles, and trim profiles." },
    ],
    image: additionProjectImg,
    alt: "Two-story home addition and structural expansion in Ridgewood, NJ",
  },
  {
    id: "interior-remodeling",
    num: "03",
    title: "Interior Remodeling",
    icon: Sparkles,
    summary: "Refresh individual living spaces with custom architectural millwork, modern lighting, and premium finishes.",
    description: "From formal dining rooms and cozy family rooms with custom fireplace mantels to dedicated home offices and media dens, we craft functional, inspiring interiors tailored to your family's lifestyle.",
    points: [
      { name: "Living & Family Room Makeovers", detail: "Custom built-in entertainment units, coffered ceilings, and fireplace surrounds." },
      { name: "Formal Dining Room Enhancements", detail: "Wainscoting, shadow box trim, crown molding, and statement chandeliers." },
      { name: "Executive Home Office Conversions", detail: "Sound-insulated walls, custom desk cabinetry, and integrated high-speed wiring." },
      { name: "Modern Drywall & Plaster Repair", detail: "Level 5 smooth drywall finishes eliminating outdated popcorn textures." },
      { name: "Interior Door & Trim Upgrades", detail: "Solid core shaker doors, clean modern baseboards, and window casings." },
    ],
    image: interiorImg,
    alt: "Interior living room remodel with recessed lighting and hardwood floors",
  },
  {
    id: "kitchen-remodeling",
    num: "04",
    title: "Kitchen Remodeling",
    icon: Utensils,
    summary: "Transform the heart of your home with custom cabinetry, quartz islands, and chef-grade layouts.",
    description: "We handle turnkey kitchen transformations—from architectural design and load-bearing wall removal to custom shaker cabinets, quartz countertops, tile backsplashes, plumbing, electrical, and commercial ventilation.",
    points: [
      { name: "Custom Soft-Close Cabinetry", detail: "Solid wood shaker boxes, deep pots-and-pans drawers, and pantry pullouts." },
      { name: "Quartz & Natural Stone Islands", detail: "Waterfall countertop islands with breakfast bar seating and prep sinks." },
      { name: "Designer Tile Backsplashes", detail: "Herringbone, subway, and full-height slab backsplashes with epoxy grout." },
      { name: "Under-Cabinet & Recessed Lighting", detail: "Layered LED illumination providing ideal task lighting and evening ambiance." },
      { name: "Code-Compliant 20A Appliance Circuits", detail: "Dedicated electrical wiring for induction cooktops, dual ovens, and microwaves." },
    ],
    image: kitchenHeroImg,
    alt: "Custom kitchen renovation with quartz waterfall island in Paramus, NJ",
  },
  {
    id: "bathroom-remodeling",
    num: "05",
    title: "Bathroom Remodeling",
    icon: Bath,
    summary: "Turn outdated bathrooms into spa-like retreats with curbless showers, soaking tubs, and custom vanities.",
    description: "Our certified tile setters and licensed plumbers install Schluter waterproof shower systems, frameless heavy glass enclosures, freestanding soaking tubs, double floating vanities, and radiant heated floors.",
    points: [
      { name: "Walk-In Frameless Glass Showers", detail: "Curbless zero-entry floor pans, linear drains, and rain showerheads." },
      { name: "Freestanding Soaking Tubs", detail: "Sculptural acrylic and cast iron tubs with floor-mounted brass faucets." },
      { name: "Custom Double Vanities & Sinks", detail: "Solid wood vanity cabinets with undermount sinks and quartz tops." },
      { name: "Schluter Waterproof Membrane", detail: "100% leak-proof shower pan and wall backing protecting against hidden mold." },
      { name: "Whisper-Quiet Exhaust Ventilation", detail: "Humidity-sensing exhaust fans preventing moisture buildup and paint peeling." },
    ],
    image: bathroomHeroImg,
    alt: "Spa-like bathroom remodel with walk-in tile shower and double vanity",
  },
  {
    id: "basement-finishing",
    num: "06",
    title: "Basement Finishing",
    icon: Grid,
    summary: "Unlock hundreds of square feet of valuable living space with a waterproof, fully finished basement.",
    description: "We transform dark, damp basements into bright, comfortable family recreation rooms, home theaters, workout gyms, guest suites, and full wet bars—complete with subfloor moisture barriers and egress windows.",
    points: [
      { name: "Subfloor Moisture & Vapor Barriers", detail: "Thermal insulation and moisture-resistant subfloors keeping floors warm and dry." },
      { name: "Basement Bathrooms & Wet Bars", detail: "Full plumbing rough-ins, sewage ejector pumps, and granite beverage centers." },
      { name: "Home Theaters & Recreation Rooms", detail: "Acoustic insulation, recessed LED dimmers, and integrated TV media walls." },
      { name: "Code-Compliant Egress Windows", detail: "Excavation and installation of legal egress window wells for bedroom safety." },
      { name: "Finished Laundry & Storage Rooms", detail: "Organized utility rooms with folding counters and custom shelving." },
    ],
    image: basementImg,
    alt: "Finished basement with recessed lighting and waterproof flooring in Garfield, NJ",
  },
  {
    id: "attic-conversions",
    num: "07",
    title: "Attic Conversions",
    icon: Compass,
    summary: "Convert dusty, unused attic space into charming guest bedrooms, home offices, and playrooms.",
    description: "Attic conversions maximize your home's vertical space. We install shed and doghouse dormers for natural light and headroom, add high-R-value spray foam insulation, reinforce floor joists, and build safe staircase access.",
    points: [
      { name: "Dormer Additions for Headroom", detail: "Adding shed or gable dormers to expand ceiling height and window light." },
      { name: "Floor Joist Structural Reinforcement", detail: "Sistering structural joists to support residential floor load requirements." },
      { name: "High-Performance Spray Foam", detail: "Conditioning the roofline to keep the attic comfortable year-round." },
      { name: "Custom Built-In Storage Knee Walls", detail: "Utilizing sloped roof eaves for drawers, dressers, and bookshelf nooks." },
      { name: "Code-Compliant Staircase Access", detail: "Building permanent, code-compliant staircases matching your home's millwork." },
    ],
    image: atticImg,
    alt: "Finished attic conversion with dormer windows and built-in storage",
  },
  {
    id: "exterior-renovations",
    num: "08",
    title: "Exterior Renovations",
    icon: Building2,
    summary: "Boost curb appeal, weatherproofing, and energy efficiency with new siding, windows, and decks.",
    description: "Protect your home's envelope while creating a stunning first impression. We install James Hardie fiber cement and premium vinyl siding, architectural stone facades, seamless gutters, porticos, and composite deck porches.",
    points: [
      { name: "Fiber Cement & Vinyl Siding", detail: "Rot-proof, fire-resistant James Hardie and insulated vinyl siding systems." },
      { name: "Natural Stone & Brick Facades", detail: "Enhancing foundation walls, chimneys, and entryways with masonry veneer." },
      { name: "Porticos & Front Covered Porches", detail: "Welcoming architectural entry porches protecting your front door from rain." },
      { name: "Custom Composite Decking", detail: "Trex and TimberTech low-maintenance decks with hidden fasteners and railings." },
      { name: "Seamless Gutters & Trim Casing", detail: "Heavy-gauge aluminum gutters with oversized downspouts and PVC trim." },
    ],
    image: exteriorImg,
    alt: "Exterior home renovation with new siding, stone facade, and entry portico in Wayne, NJ",
  },
  {
    id: "structural-renovations",
    num: "09",
    title: "Structural Renovations",
    icon: HardHat,
    summary: "Master structural engineering for load-bearing wall removals, foundation stabilization, and header beams.",
    description: "Major renovations require true general contracting knowledge. We coordinate with structural engineers, pull all required NJ municipal building permits, install heavy steel I-beams and LVL headers, and shore up foundations.",
    points: [
      { name: "Load-Bearing Wall Removal", detail: "Temporary hydraulic shoring and engineered LVL/steel beam installations." },
      { name: "Foundation Crack Repair & Underpinning", detail: "Structural epoxy injections, carbon fiber straps, and masonry stabilization." },
      { name: "Floor Joist Sistering & Leveling", detail: "Correcting sagging, bouncy floors in historic Garfield and Bergen County homes." },
      { name: "Roof Truss & Rafter Modifications", detail: "Reconfiguring roof framing for cathedral ceilings and open floor plans." },
      { name: "Full NJ Permitting & Code Inspections", detail: "Guaranteed pass on all building, electrical, plumbing, and fire inspections." },
    ],
    image: structuralImg,
    alt: "Structural framing, LVL header beam, and load-bearing wall modification",
  },
  {
    id: "commercial-renovations",
    num: "10",
    title: "Commercial Renovation",
    icon: Building2,
    summary: "Turnkey tenant fit-outs, storefront makeovers, and commercial office renovations.",
    description: "We provide comprehensive remodeling for office suites, retail shops, restaurants, medical practices, and multi-family rental buildings. We work around your operating schedule to minimize business downtime.",
    points: [
      { name: "Commercial Office & Tenant Fit-Outs", detail: "Conference rooms, executive suites, breakrooms, and open workstation floor plans." },
      { name: "Retail Storefront & Plaza Makeovers", detail: "Eye-catching entrance facades, durable commercial flooring, and display lighting." },
      { name: "Restaurant & Hospitality Upgrades", detail: "Commercial kitchen prep areas, dining room millwork, and bar installations." },
      { name: "ADA Accessibility Code Upgrades", detail: "Compliant restroom stalls, grab bars, door clearances, and entrance ramps." },
      { name: "Strict Schedule & Cleanliness Compliance", detail: "Phased after-hours construction to keep your business operating smoothly." },
    ],
    image: renovationHeroImg,
    alt: "Commercial office and retail interior renovation in Northern NJ",
  },
];

/* ── 12 Why Choose Meziu Advantages ── */
const WHY_CHOOSE_HOME = [
  {
    title: "15+ Years Hands-On Experience",
    desc: "Master builders with extensive knowledge in carpentry, masonry, framing, and finishes.",
    icon: Award,
  },
  {
    title: "Family-Owned Since 2009",
    desc: "Personal service and direct accountability with founder Luan Meziu on your job site.",
    icon: Home,
  },
  {
    title: "Licensed, Insured & Bonded",
    desc: "Full compliance with New Jersey DCA building regulations and comprehensive insurance.",
    icon: ShieldCheck,
  },
  {
    title: "Full-Service Turnkey Contractor",
    desc: "We manage every single trade: demolition, framing, plumbing, electric, drywall, and paint.",
    icon: Wrench,
  },
  {
    title: "Custom Tailored Solutions",
    desc: "3D design plans and layouts tailored to your unique architectural style and budget.",
    icon: Compass,
  },
  {
    title: "Permit & Code Expertise",
    desc: "We handle all municipal permits, architectural drawings, and pass all inspections.",
    icon: FileCheck,
  },
  {
    title: "100% Transparent Pricing",
    desc: "Detailed line-item proposals with fixed allowances and zero surprise hidden fees.",
    icon: DollarSign,
  },
  {
    title: "Clean & Respectful Job Sites",
    desc: "Dust barrier zip walls, floor runners, and daily broom cleans to keep your home livable.",
    icon: CheckCircle2,
  },
  {
    title: "Structural Engineering Skill",
    desc: "Expertise in load-bearing wall removals, steel beam headers, and foundation repairs.",
    icon: HardHat,
  },
  {
    title: "Residential & Commercial",
    desc: "Equipped for whole-home restorations, multi-story additions, and commercial build-outs.",
    icon: Building2,
  },
  {
    title: "Bilingual English & Spanish",
    desc: "Seamless communication at every phase — ¡Hablamos español con total fluidez!",
    icon: Languages,
  },
  {
    title: "40-Mile Service Radius",
    desc: "Proudly serving Garfield, Bergen County, Passaic County, Essex County, and beyond.",
    icon: MapPin,
  },
];

/* ── 5 Step Home Remodeling Process Roadmap ── */
const HOME_PROCESS = [
  {
    step: "01",
    title: "Free On-Site Consultation",
    desc: "We visit your home to assess your space, take laser measurements, discuss your vision, evaluate structural elements, and provide a clear, no-obligation estimate.",
    icon: MapPin,
  },
  {
    step: "02",
    title: "Design & Material Selection",
    desc: "We help you select materials—flooring, cabinetry, countertops, fixtures, siding, and trim—and create a cohesive layout that matches your aesthetic.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Permitting & Site Preparation",
    desc: "We prepare architectural plans, pull all required municipal building permits, seal the work zone with dust barriers, and protect adjoining living areas.",
    icon: FileCheck,
  },
  {
    step: "04",
    title: "Demolition & Construction",
    desc: "Our master crew executes framing, plumbing, electrical, HVAC rough-ins, insulation, drywall, cabinetry, tile, flooring, and paint with high precision.",
    icon: Hammer,
  },
  {
    step: "05",
    title: "Final Walkthrough & Completion",
    desc: "We schedule final municipal code inspections, polish all surfaces clean, complete a detailed punch-list, and walk through with you to guarantee 100% satisfaction.",
    icon: CheckCircle2,
  },
];

/* ── 6 Featured Home Remodeling Projects ── */
const HOME_PORTFOLIO = [
  {
    title: "Whole-Home Modern Interior Renovation",
    location: "Clifton, NJ",
    category: "Whole-Home",
    desc: "Complete interior gut remodel featuring open-concept kitchen, hardwood flooring, and master suite.",
    image: wholeHomeImg,
  },
  {
    title: "Two-Story Structural Home Addition",
    location: "Ridgewood, NJ",
    category: "Home Addition",
    desc: "Two-story vertical expansion adding 1,200 sq ft including two bedrooms, master bath, and enlarged kitchen.",
    image: additionProjectImg,
  },
  {
    title: "Finished Basement & Entertainment Suite",
    location: "Garfield, NJ",
    category: "Basement Finishing",
    desc: "Custom basement transformation with home theater media wall, wet bar, full bath, and vinyl plank flooring.",
    image: basementImg,
  },
  {
    title: "Kitchen & Master Bathroom Remodel",
    location: "Paramus, NJ",
    category: "Interior Remodel",
    desc: "Simultaneous whole-home kitchen with quartz waterfall island and luxury master bath with walk-in shower.",
    image: kitchenHeroImg,
  },
  {
    title: "Exterior Siding & Portico Renovation",
    location: "Wayne, NJ",
    category: "Exterior Renovation",
    desc: "James Hardie fiber cement siding installation with stone veneer accents and custom front entry portico.",
    image: exteriorImg,
  },
  {
    title: "Attic Conversion with Shed Dormers",
    location: "Glen Rock, NJ",
    category: "Attic Conversion",
    desc: "Unused attic converted into a master guest bedroom and home office with spray foam insulation and dormers.",
    image: atticImg,
  },
];

/* ── Northern NJ Service Towns ── */
const TOWNS = [
  "Garfield (HQ)",
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

/* ── 10 Home Remodeling FAQs ── */
const HOME_FAQS = [
  {
    q: "What types of home remodeling services do you offer?",
    a: "We offer complete whole-home renovations, structural room additions, second-story expansions, interior remodeling, kitchen and bathroom renovations, basement finishing, attic conversions, exterior renovations (siding, roofing, windows), structural beam installations, and commercial fit-outs.",
  },
  {
    q: "Are you licensed and insured in New Jersey?",
    a: "Yes! MEZIU CONSTRUCTION LLC is fully licensed, insured, and bonded in the State of New Jersey. We carry comprehensive general liability and workers' compensation coverage for your complete peace of mind.",
  },
  {
    q: "How long does a home renovation take?",
    a: "Project timelines depend on the scope of work. A single-room remodel (kitchen, bath, or basement) takes approximately 2 to 6 weeks. A major whole-home gut renovation or two-story addition typically takes 3 to 6 months. We provide a firm schedule during your free consultation.",
  },
  {
    q: "Do you provide free estimates for home remodeling?",
    a: "Absolutely! We offer 100% free, no-obligation on-site estimates throughout Garfield, NJ, and our entire 40-mile service radius. Luan Meziu will assess your property, evaluate your structural goals, and provide a clear written proposal.",
  },
  {
    q: "Do you handle all trades (plumbing, electrical, framing, finish carpentry)?",
    a: "Yes! We are a full-service general contractor. We manage every single aspect of your renovation—demolition, framing, rough plumbing, electrical wiring, drywall, cabinetry, flooring, and paint—so you deal with only one accountable contractor.",
  },
  {
    q: "Do you handle municipal permits and inspections?",
    a: "Yes! We handle the entire permitting process from architectural plans to submitting paperwork to your local NJ building department and coordinating all rough and final code inspections.",
  },
  {
    q: "Can I live in my home during the renovation?",
    a: "In most cases, yes! We construct zipper dust containment walls, use HEPA air scrubbers, protect flooring runners, and maintain daily cleanup to keep untouched living areas clean and comfortable throughout the project.",
  },
  {
    q: "Do you work on commercial properties?",
    a: "Yes! We provide commercial renovation and tenant fit-out services for office buildings, retail shops, restaurants, and multi-family properties across Northern New Jersey.",
  },
  {
    q: "Do you offer emergency repair services?",
    a: "Yes, we provide emergency structural, plumbing, and roof leak repairs during our regular business hours (Monday through Friday, 7:00 AM – 6:00 PM). Call us immediately at (201) 844-2427 for urgent repairs.",
  },
  {
    q: "Do you speak Spanish?",
    a: "¡Sí! Hablamos español. Founder Luan Meziu and our master remodeling team are fully bilingual in English and Spanish, ensuring clear, comfortable communication from start to finish.",
  },
];

function HomeRemodelingPage() {
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
              <span className="text-[#E56E1A] font-bold">Home Remodeling &amp; Renovation</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Hero Text Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200/80 px-4 py-1.5 shadow-sm">
                  <Home className="h-4 w-4 text-[#E56E1A]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#B85008]">
                    Master General Contractors &amp; Remodeling Experts
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
                  Expert Home <span className="text-[#E56E1A]">Remodeling</span> &amp; Renovation
                </h1>

                {/* Sub-headline */}
                <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                  Transform Your House Into the Home of Your Dreams
                </p>

                {/* Body Text */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Your home is your biggest investment—and it should reflect your lifestyle, personality, and needs. <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong> specializes in comprehensive home remodeling and renovation services that breathe new life into your living spaces. From whole-home renovations and room additions to complete interior transformations, we bring your vision to life with quality craftsmanship and attention to detail.
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
                    src={renovationHeroImg}
                    alt="Stunning whole-home interior remodel with custom finishes in Northern NJ"
                    className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Trust Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-[#E56E1A] tracking-wider">Garfield, NJ Remodeling Masters</span>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      Whole-home renovations, additions, basement finishing, kitchens, and structural remodels.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── OVERVIEW OF HOME REMODELING & RENOVATION ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Image Collage */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                  <img
                    src={wholeHomeImg}
                    alt="Open-concept home interior renovation"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                    Open-Concept Structural Wall Removal &amp; Turnkey Remodel
                  </div>
                </div>

                {/* 2 Small Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-2xl font-black text-[#E56E1A]">Turnkey</div>
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">All Trades Managed</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-2xl font-black text-[#E56E1A]">100%</div>
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">Permit &amp; Code Passed</div>
                  </div>
                </div>
              </div>

              {/* Right Narrative Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>Your Vision Brought to Life</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Home Remodeling Done Right
                </h2>

                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>
                    Your home should evolve with you—adapting to your changing needs, tastes, and lifestyle. At <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong>, we understand that remodeling is about more than just updating finishes; it's about transforming your house into a space that truly feels like home.
                  </p>
                  <p>
                    As a family-owned business with over 15 years of hands-on experience, we specialize in comprehensive home remodeling and renovation services. Whether you want to modernize your entire home, add valuable square footage, or simply refresh a single room, our experienced team handles every aspect of the project—from design and permitting to construction and final finishing. We serve both residential and commercial clients across Garfield, NJ, and a 40-mile radius.
                  </p>
                  <p className="font-medium text-slate-800 bg-orange-50/60 p-4 rounded-2xl border-l-4 border-[#E56E1A]">
                    Fully licensed, insured, and bonded, we stand behind every project with a commitment to quality, transparency, and customer satisfaction.
                  </p>
                </div>

                {/* 4 Feature Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Turnkey General Contractor</h4>
                      <p className="text-[11px] text-slate-500">Demolition, framing, plumbing, electric, and tile</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Structural Wall Removal Skill</h4>
                      <p className="text-[11px] text-slate-500">Engineered LVL and steel beam headers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Direct Owner Oversight</h4>
                      <p className="text-[11px] text-slate-500">Luan Meziu on-site ensuring perfection</p>
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

        {/* ── OUR HOME REMODELING SERVICES (10 DETAILED SECTIONS) ── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                Comprehensive Renovation Solutions
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Home Remodeling &amp; Renovation Services
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Comprehensive Solutions for Every Home across Garfield &amp; Northern New Jersey
              </p>
            </div>

            {/* 10 Detailed Cards Grid */}
            <div className="space-y-12">
              {HOME_REMODELING_SERVICES_DATA.map((svc, idx) => {
                const isEven = idx % 2 === 1;
                const Icon = svc.icon;

                return (
                  <div
                    key={svc.id}
                    id={svc.id}
                    className="rounded-3xl bg-white border border-slate-200/90 shadow-lg p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center")}>
                      
                      {/* Left/Right Text */}
                      <div className={cn("lg:col-span-7 space-y-5", isEven ? "lg:order-2" : "lg:order-1")}>
                        
                        <div className="flex items-center justify-between">
                          <div className="inline-flex items-center gap-2.5">
                            <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#E56E1A] flex items-center justify-center shrink-0 shadow-inner">
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-black uppercase text-[#E56E1A] tracking-wider">
                              Service {svc.num}
                            </span>
                          </div>
                          <span className="text-2xl font-black text-slate-200">
                            #{svc.num}
                          </span>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-950">
                          {svc.title}
                        </h3>

                        <p className="text-sm sm:text-base font-semibold text-slate-800">
                          {svc.summary}
                        </p>

                        <p className="text-sm text-slate-600 leading-relaxed">
                          {svc.description}
                        </p>

                        {/* Sub-Points List */}
                        <div className="space-y-2.5 pt-2">
                          {svc.points.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-orange-50/40 transition-colors">
                              <CheckCircle2 className="w-4 h-4 text-[#E56E1A] shrink-0 mt-0.5" />
                              <div className="text-xs">
                                <strong className="text-slate-900 font-bold">{pt.name}</strong>
                                <span className="text-slate-500"> – {pt.detail}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* CTA within card */}
                        <div className="pt-3 flex flex-wrap items-center gap-3">
                          <a
                            href="/free-estimate"
                            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E56E1A] hover:underline"
                          >
                            <span>Get Estimate for {svc.title}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>

                      </div>

                      {/* Left/Right Image */}
                      <div className={cn("lg:col-span-5", isEven ? "lg:order-1" : "lg:order-2")}>
                        <div
                          onClick={() => setSelectedImage({ src: svc.image, title: svc.title, location: "Northern NJ" })}
                          className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100 group cursor-pointer"
                        >
                          <img
                            src={svc.image}
                            alt={svc.alt}
                            className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg">
                              <ZoomIn className="w-3.5 h-3.5 text-[#E56E1A]" />
                              <span>View Full Size</span>
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── WHY CHOOSE MEZIU FOR HOME REMODELING? ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                The Meziu Advantage
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Why Choose MEZIU CONSTRUCTION for Your Home Renovation?
              </h2>
              <p className="text-lg text-slate-600">
                Master general contracting craftsmanship, structural engineering precision, and direct owner accountability.
              </p>
            </div>

            {/* 12 Reason Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_HOME.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-orange-200 hover:bg-orange-50/30 transition-all duration-300 space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#E56E1A] flex items-center justify-center shadow-sm">
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

        {/* ── 5-STEP HOME REMODELING PROCESS ── */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-slate-800">
                Proven Methodology
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Home Remodeling Process
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                From Vision to Reality—We Do It Right.
              </p>
            </div>

            {/* Step Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {HOME_PROCESS.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.step}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 relative flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase text-[#E56E1A] tracking-widest">
                          STEP {p.step}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#E56E1A] flex items-center justify-center">
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

        {/* ── HOME REMODELING PORTFOLIO GALLERY ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                  Verified Workmanship
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Our Home Remodeling Portfolio
                </h2>
                <p className="text-base text-slate-600">
                  Real Projects. Real Quality. Browse examples of our recent home remodeling projects across Garfield, NJ, and Northern New Jersey.
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
              {HOME_PORTFOLIO.map((proj, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage({ src: proj.image, title: proj.title, location: proj.location })}
                  className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-200">
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
        <section className="py-14 bg-slate-50 border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-950">
                Serving Northern New Jersey
              </h2>
              <p className="text-sm text-slate-600">
                We provide expert home remodeling and renovation services within a 40-mile radius of Garfield, NJ, including:
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
                      : "bg-white border border-slate-200 text-slate-800 shadow-2xs hover:border-[#E56E1A] hover:text-[#E56E1A]"
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
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700">
                Clear Answers
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950">
                Frequently Asked Questions About Home Remodeling &amp; Renovation
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Everything you need to know about whole-home transformations, permits, structural changes, and living in your home during work.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {HOME_FAQS.map((faq, idx) => {
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
              <span>Let's Build Your Dream Home</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Ready to Transform Your Home?
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Whether you want a complete home renovation, a room addition, or a simple update, <strong className="font-bold text-white">{BUSINESS.name}</strong> is here to help. Contact Luan and our team today for a free on-site estimate.
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
                "{BUSINESS.name} is a family-owned, licensed, and insured home remodeling contractor serving Garfield, NJ, and a 40-mile radius since 2009. We are committed to quality craftsmanship, transparency, and customer satisfaction—from the first design to the final finishing touch."
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
      <FloatingCta />
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
