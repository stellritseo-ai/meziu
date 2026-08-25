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
  Utensils,
  Layers,
  Grid,
  Compass,
  Home,
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
  Lightbulb,
  Palette,
  Droplet,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BUSINESS } from "@/lib/site";

// Authentic project assets
import kitchenHeroImg from "@/assets/kitchen.jpg";
import interiorImg from "@/assets/interior.jpg";
import renovationImg from "@/assets/renovation.jpg";

// Gallery assets for kitchen portfolio
import kitchenCabinetImg from "@/assets/gallery/471540631_899268785609998_5816875943478852330_n.jpg";
import kitchenCounterImg from "@/assets/gallery/471821741_899268768943333_293806620655011432_n.jpg";
import kitchenBacksplashImg from "@/assets/gallery/471820344_899268765610000_5275763543525178002_n.jpg";
import kitchenDetailImg from "@/assets/gallery/471569589_899268722276671_2451168169025015747_n.jpg";
import kitchenComboImg from "@/assets/gallery/471443350_899268758943334_141679608307794421_n.jpg";
import kitchenOpenImg from "@/assets/gallery/471539810_899268755610001_5277995264757783368_n.jpg";

export const Route = createFileRoute("/services/kitchen")({
  component: KitchenRemodelingPage,
});

/* ── 9 Detailed Kitchen Remodeling Services Data ── */
const KITCHEN_SERVICES_DATA = [
  {
    id: "full-kitchen-renovations",
    num: "01",
    title: "Full Kitchen Renovations",
    icon: Utensils,
    summary: "A full kitchen renovation is the ultimate home transformation, maximizing space, light, and flow.",
    description: "We handle every single phase under one roof—from architectural planning and load-bearing wall removal to custom cabinetry, plumbing, electrical, and flawless punch-lists. You get a stress-free experience with direct contractor oversight.",
    points: [
      { name: "Complete Demolition & Clean Out", detail: "Safely stripping old cabinets, flooring, and bulkheads with zero mess." },
      { name: "Layout Redesign & Flow", detail: "Optimizing the classic work triangle (sink, stove, fridge) for peak convenience." },
      { name: "Structural Wall Modifications", detail: "Creating open-concept living by installing engineered LVL load-bearing beams." },
      { name: "Plumbing & Electrical Upgrades", detail: "100% code-compliant installations with dedicated 20A appliance circuits." },
      { name: "Turnkey Project Management", detail: "Coordinating all trades so your kitchen is completed on time and on budget." },
    ],
    image: kitchenHeroImg,
    alt: "Complete modern white kitchen remodel with quartz island",
  },
  {
    id: "custom-cabinetry",
    num: "02",
    title: "Custom Cabinetry Installation",
    icon: Home,
    summary: "Cabinetry defines both the visual personality and the storage efficiency of your kitchen.",
    description: "We supply and install premium solid wood shaker, flat-panel, and traditional cabinetry. Equipped with heavy-duty soft-close hinges, dovetail drawer boxes, and custom organizational inserts, our cabinets are built for decades of daily family life.",
    points: [
      { name: "Custom 3D Layout Design", detail: "Tailored to your exact ceiling height, pantry needs, and room footprint." },
      { name: "Solid Wood & Plywood Construction", detail: "High-density birch and maple boxes that resist moisture and warping." },
      { name: "Soft-Close German Hardware", detail: "Concealed hinges and full-extension under-mount glides for silent operation." },
      { name: "Built-In Storage Inserts", detail: "Pull-out trash bins, deep pots-and-pans drawers, lazy Susans, and spice racks." },
      { name: "Laser-Aligned Installation", detail: "Level, plumb, and scribed seamlessly to uneven walls and ceilings." },
    ],
    image: kitchenCabinetImg,
    alt: "Custom kitchen cabinetry installation with soft-close drawers",
  },
  {
    id: "countertop-installation",
    num: "03",
    title: "Countertop Installation",
    icon: Sparkles,
    summary: "Countertops are the hardworking centerpiece and tactile highlight of every kitchen.",
    description: "We provide precision laser templating, edge profile fabrication, and seamless installation for the industry's most durable and luxurious countertop surfaces.",
    points: [
      { name: "Premium Engineered Quartz", detail: "Non-porous, stain-resistant, and ultra-durable with marble veining." },
      { name: "Natural Granite Slabs", detail: "Heat-resistant, unique natural stone patterns with deep polished luster." },
      { name: "Luxurious Italian Marble", detail: "Timeless elegance with distinctive gray and gold veining." },
      { name: "Solid Surface & Butcher Block", detail: "Seamless integration, warm wood food prep accents, and waterfall ends." },
      { name: "Precision Digital Templating", detail: "Laser-accurate measurements ensuring flawless seam matching and sink cutouts." },
    ],
    image: kitchenCounterImg,
    alt: "Quartz countertop installation with custom eased edge",
  },
  {
    id: "kitchen-islands",
    num: "04",
    title: "Kitchen Island Design & Installation",
    icon: Maximize2,
    summary: "An expansive kitchen island brings culinary prep, casual dining, and family gathering together.",
    description: "Whether you have room for a massive double island or a compact multi-functional island, we design custom islands with integrated breakfast bars, under-counter beverage centers, prep sinks, and dramatic waterfall edges.",
    points: [
      { name: "Custom Island Architecture", detail: "Engineered dimensions providing comfortable 42-inch walkway clearance." },
      { name: "Breakfast Bar Overhangs", detail: "Reinforced steel brackets supporting deep quartz seating overhangs." },
      { name: "Integrated Sinks & Dishwashers", detail: "Clean undermount sinks, pull-out sprayers, and hidden appliances." },
      { name: "Island Electrical Outlets", detail: "Pop-up and end-panel outlets compliant with NEC kitchen island codes." },
      { name: "Pendant Lighting Accents", detail: "Statement overhead fixtures centered perfectly over the island workspace." },
    ],
    image: kitchenDetailImg,
    alt: "Kitchen island with breakfast bar seating and custom cabinetry",
  },
  {
    id: "flooring-installation",
    num: "05",
    title: "Kitchen Flooring Installation",
    icon: Grid,
    summary: "Kitchen floors must endure heavy foot traffic, dropped utensils, and liquid spills with ease.",
    description: "We install water-resistant porcelain tile, luxury vinyl plank (LVP), and pre-finished solid hardwood. Our thorough subfloor leveling and uncoupling membrane installations prevent future grout cracks and squeaks.",
    points: [
      { name: "Large-Format Porcelain Tile", detail: "Durable, waterproof, and available in realistic marble and slate textures." },
      { name: "Luxury Vinyl Plank (LVP)", detail: "100% waterproof, warm underfoot, and highly scratch-resistant for pets." },
      { name: "Solid & Engineered Hardwood", detail: "Seamlessly continuing oak or maple flooring from living areas into the kitchen." },
      { name: "Subfloor Leveling & Prep", detail: "Self-leveling underlayments and cement backer boards for flat, solid floors." },
      { name: "Anti-Fracture Membrane Installs", detail: "Schluter Ditra membranes isolating tile from subfloor movement." },
    ],
    image: interiorImg,
    alt: "Kitchen hardwood and porcelain tile flooring installation",
  },
  {
    id: "backsplash-installation",
    num: "06",
    title: "Backsplash Installation",
    icon: Layers,
    summary: "A designer backsplash protects your drywall while serving as the artistic focal point.",
    description: "From classic subway tile and modern geometric mosaics to full-height quartz slab backsplashes, our master tile setters ensure crisp grout lines, perfect corner miters, and electrical plate alignment.",
    points: [
      { name: "Full-Height Quartz Slabs", detail: "Seamless transition from countertop up to upper cabinets with zero grout." },
      { name: "Classic & Beveled Subway Tile", detail: "Timeless brick pattern layouts with contrasting or color-matched grout." },
      { name: "Herringbone & Chevron Mosaics", detail: "Intricate accent patterns centered behind the cooktop and range hood." },
      { name: "Natural Marble & Stone Tile", detail: "Carrara, Calacatta, and tumbled travertine backsplashes sealed for protection." },
      { name: "Epoxy Stain-Proof Grouts", detail: "Advanced grouts that repel grease, sauce splatters, and moisture permanently." },
    ],
    image: kitchenBacksplashImg,
    alt: "Herringbone tile kitchen backsplash installation behind range",
  },
  {
    id: "lighting-fixtures",
    num: "07",
    title: "Lighting & Fixture Installation",
    icon: Lightbulb,
    summary: "Layered lighting elevates your kitchen's ambiance, task functionality, and aesthetic warmth.",
    description: "A well-designed kitchen incorporates three distinct lighting layers: ambient recessed cans, task under-cabinet LED strips, and decorative island pendants. We handle all wiring, dimmers, and switch zoning.",
    points: [
      { name: "Under-Cabinet LED Task Lights", detail: "High-CRI daylight strips illuminating countertops with zero countertop glare." },
      { name: "Designer Island Pendant Lights", detail: "Custom hung statement fixtures creating visual height and warmth." },
      { name: "Recessed LED Can Lighting", detail: "Evenly spaced, energy-efficient ultra-thin recessed lights." },
      { name: "Smart Dimmers & Multi-Zone Control", detail: "Easily transition from bright cooking task light to intimate evening mood." },
      { name: "In-Cabinet & Toe-Kick Lights", detail: "Subtle accent illumination highlighting glass cabinetry and floor perimeters." },
    ],
    image: kitchenHeroImg,
    alt: "Modern recessed and under-cabinet LED kitchen lighting",
  },
  {
    id: "plumbing-electrical",
    num: "08",
    title: "Plumbing & Electrical Upgrades",
    icon: Wrench,
    summary: "Modern kitchen appliances demand dedicated electrical circuits and robust plumbing supply lines.",
    description: "During your remodel, we upgrade older galvanized plumbing to durable PEX, install high-efficiency range hood ductwork to the exterior, and rewire circuits for induction cooktops, dual ovens, and wine coolers.",
    points: [
      { name: "Deep Undermount Sinks & Faucets", detail: "Single and double-bowl stainless steel, composite granite, and fireclay sinks." },
      { name: "Commercial Garbage Disposals", detail: "Quiet-series high-torque food waste disposers with air switches." },
      { name: "Dedicated 20A Appliance Circuits", detail: "Preventing tripped breakers when running microwave, fridge, and air fryer." },
      { name: "Exterior Range Hood Ducting", detail: "Proper CFM ventilation venting grease, smoke, and odors outside the home." },
      { name: "Dishwasher & Ice Maker Hookups", detail: "Braided stainless steel water lines with emergency quarter-turn shutoffs." },
    ],
    image: kitchenComboImg,
    alt: "Modern undermount sink and commercial pull-down faucet installation",
  },
  {
    id: "painting-finishing",
    num: "09",
    title: "Kitchen Painting & Finishing",
    icon: Palette,
    summary: "The final finish carpentry, trim, and painting turn a great remodel into a masterwork.",
    description: "We install custom crown molding to close gaps above cabinets, clean baseboards, window casings, and apply washable scrub-resistant Benjamin Moore paint formulations designed for kitchen environments.",
    points: [
      { name: "Cabinet Crown & Light Rail Trim", detail: "Scribed crown molding creating a seamless, built-in look to the ceiling." },
      { name: "Moisture & Mildew Resistant Paints", detail: "Premium satin or semi-gloss finishes that wipe clean without fading." },
      { name: "Window & Door Trim Casing", detail: "Matching existing home millwork profiles for cohesive architectural style." },
      { name: "Cabinet Painting & Lacquer Spraying", detail: "Factory-smooth spray refinishing for existing cabinetry upgrades." },
      { name: "Detailed Final Punch-List", detail: "Every hardware screw tightened, door adjusted, and surface polished clean." },
    ],
    image: kitchenOpenImg,
    alt: "Finished kitchen with custom crown molding and paint trim",
  },
];

/* ── 10 Why Choose Meziu Advantages ── */
const WHY_CHOOSE_KITCHEN = [
  {
    title: "15+ Years Hands-On Experience",
    desc: "Master carpenters and general contractors with deep architectural remodeling skill.",
    icon: Award,
  },
  {
    title: "Family-Owned Since 2009",
    desc: "Personal service and direct accountability with founder Luan Meziu on your site.",
    icon: Home,
  },
  {
    title: "Licensed, Insured & Bonded",
    desc: "Full compliance with New Jersey DCA building codes and comprehensive insurance.",
    icon: ShieldCheck,
  },
  {
    title: "Full Turnkey Remodeling",
    desc: "We manage every single trade: demolition, framing, plumbing, electrical, cabinets, and tile.",
    icon: Wrench,
  },
  {
    title: "Custom Design Solutions",
    desc: "Tailored 3D layouts, storage optimization, and color palettes suited to your lifestyle.",
    icon: Compass,
  },
  {
    title: "100% Transparent Pricing",
    desc: "Detailed line-item proposals with fixed allowances and zero surprise hidden fees.",
    icon: DollarSign,
  },
  {
    title: "Clean & Respectful Job Sites",
    desc: "Zipper dust barriers, floor protection, and daily cleanup to keep your home livable.",
    icon: CheckCircle2,
  },
  {
    title: "Residential & Commercial",
    desc: "Equipped for private home kitchens, multi-family unit upgrades, and commercial breakrooms.",
    icon: Building2,
  },
  {
    title: "Bilingual English & Spanish",
    desc: "Seamless communication at every phase — ¡Hablamos español con total fluidez!",
    icon: Languages,
  },
  {
    title: "40-Mile Service Radius",
    desc: "Proudly serving Cliffwood, Monmouth County, Middlesex County, and beyond.",
    icon: MapPin,
  },
];

/* ── 5 Step Kitchen Process Roadmap ── */
const KITCHEN_PROCESS = [
  {
    step: "01",
    title: "Free On-Site Consultation",
    desc: "We visit your home to assess your kitchen space, take laser measurements, discuss your dream layout, review your budget, and provide a clear, no-obligation estimate.",
    icon: MapPin,
  },
  {
    step: "02",
    title: "Design & Material Selection",
    desc: "We help you select the ideal cabinetry styles, quartz or granite slabs, tile backsplashes, flooring, and plumbing fixtures that complement your home's architecture.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Demolition & Site Preparation",
    desc: "We erect plastic dust containment barriers, protect adjoining floors, and carefully remove old cabinets, appliances, and walls to prep the space for new framing.",
    icon: Grid,
  },
  {
    step: "04",
    title: "Construction & Installation",
    desc: "Our master crew executes plumbing, electrical, framing, drywall, cabinet installation, digital countertop templating, backsplash tiling, and lighting with precision.",
    icon: Hammer,
  },
  {
    step: "05",
    title: "Final Walkthrough & Finishing",
    desc: "We install custom crown molding, hook up all appliances, test every circuit and faucet, thoroughly clean the entire space, and walk through with you to ensure 100% satisfaction.",
    icon: CheckCircle2,
  },
];

/* ── 6 Featured Kitchen Projects ── */
const KITCHEN_PORTFOLIO = [
  {
    title: "Modern Kitchen with Quartz Island",
    location: "Paramus, NJ",
    category: "Full Renovation",
    desc: "Full open-concept kitchen remodel with Calacatta quartz waterfall island and white shaker cabinets.",
    image: kitchenHeroImg,
  },
  {
    title: "Traditional Kitchen with Custom Cabinetry",
    location: "Cliffwood, NJ",
    category: "Custom Cabinetry",
    desc: "Solid maple custom cabinetry with soft-close hardware, pantry pullouts, and under-cabinet LED lighting.",
    image: kitchenCabinetImg,
  },
  {
    title: "Kitchen & Bathroom Combo Renovation",
    location: "Paramus, NJ",
    category: "Turnkey Remodel",
    desc: "Simultaneous whole-home kitchen and master bathroom renovation with matching quartz counters.",
    image: kitchenComboImg,
  },
  {
    title: "Small Kitchen Makeover & Storage",
    location: "Clifton, NJ",
    category: "Space Optimization",
    desc: "Compact kitchen layout transformation maximizing vertical storage with floor-to-ceiling cabinetry.",
    image: kitchenCounterImg,
  },
  {
    title: "Open-Concept Kitchen Renovation",
    location: "Ridgewood, NJ",
    category: "Structural Remodel",
    desc: "Load-bearing wall removal with structural LVL beam creating an open kitchen-living room floor plan.",
    image: kitchenOpenImg,
  },
  {
    title: "Luxury Kitchen with Marble Countertops",
    location: "Wayne, NJ",
    category: "Countertops & Backsplash",
    desc: "Honed Carrara marble countertops with custom herringbone tile backsplash and brass fixtures.",
    image: kitchenBacksplashImg,
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

/* ── 9 Kitchen FAQs ── */
const KITCHEN_FAQS = [
  {
    q: "What types of kitchen remodeling services do you offer?",
    a: "We offer complete full kitchen renovations, custom cabinetry design and installation, quartz and granite countertop fabrication, kitchen island construction, porcelain tile and hardwood flooring, tile backsplashes, under-cabinet and pendant lighting, plumbing and electrical rewiring, and finish carpentry.",
  },
  {
    q: "Are you licensed and insured in New Jersey?",
    a: "Yes! MEZIU CONSTRUCTION LLC is fully licensed, insured, and bonded in the State of New Jersey. We carry comprehensive liability and workers' compensation coverage for your peace of mind.",
  },
  {
    q: "How long does a typical kitchen remodel take?",
    a: "Project timelines depend on the scope of work. A minor cosmetic update (cabinet refacing, countertops, backsplash) takes 1 to 2 weeks. A full gut renovation with structural wall removal and layout changes typically takes 4 to 8 weeks. We provide a firm timeline during your free estimate.",
  },
  {
    q: "Do you provide free estimates for kitchen remodeling?",
    a: "Absolutely! We offer 100% free, no-obligation in-home estimates across Cliffwood, NJ, and our entire 40-mile service radius. Luan Meziu will visit your home, measure your kitchen, discuss your vision, and provide a clear written estimate.",
  },
  {
    q: "Do you handle all the trades (plumbing, electrical, framing)?",
    a: "Yes! We are a full-service general contractor. We manage every single trade—demolition, framing, plumbing rough-ins, electrical wiring, drywall, cabinetry, countertops, tile, and painting—so you deal with only one accountable contractor.",
  },
  {
    q: "Can you work with my existing kitchen layout?",
    a: "Yes. If your current layout works well, we can preserve the footprint while updating cabinets, countertops, lighting, and finishes. If you want a better workflow or open-concept living, we can redesign the layout and remove walls.",
  },
  {
    q: "Do you work on commercial kitchen or breakroom properties?",
    a: "Yes! We provide kitchen remodeling services for both residential homes and commercial properties, including office breakrooms, retail employee kitchens, and multi-family rental buildings.",
  },
  {
    q: "Do you offer emergency repair services?",
    a: "Yes, we provide emergency kitchen plumbing and electrical repair services during our regular business hours (Monday through Friday, 7:00 AM – 6:00 PM). Call us immediately at (201) 844-2427 for urgent water pipe bursts or electrical issues.",
  },
  {
    q: "Do you speak Spanish?",
    a: "¡Sí! Hablamos español. Founder Luan Meziu and our master remodeling crew are fully bilingual in English and Spanish, ensuring clear, comfortable communication throughout your project.",
  },
];

function KitchenRemodelingPage() {
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
              <span className="text-[#E56E1A] font-bold">Kitchen Remodeling</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Hero Text Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200/80 px-4 py-1.5 shadow-sm">
                  <Utensils className="h-4 w-4 text-[#E56E1A]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#B85008]">
                    Master Kitchen Remodeling &amp; Cabinetry Contractors
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
                  Professional <span className="text-[#E56E1A]">Kitchen</span> Remodeling
                </h1>

                {/* Sub-headline */}
                <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                  Transform Your Kitchen Into the Heart of Your Home
                </p>

                {/* Body Text */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Your kitchen is more than just a place to cook—it's where family gathers, memories are made, and life happens. <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong> specializes in creating beautiful, functional kitchens that reflect your personal style and meet your family's needs. From custom cabinetry and quartz countertops to complete layout redesigns, we bring your dream kitchen to life.
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
                    src={kitchenHeroImg}
                    alt="Stunning modern kitchen renovation with quartz island and custom cabinets"
                    className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Trust Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-[#E56E1A] tracking-wider">Cliffwood, NJ Kitchen Specialists</span>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      Custom cabinetry, premium quartz countertops, and full layout redesigns.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── OVERVIEW OF KITCHEN REMODELING ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Image Collage */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                  <img
                    src={kitchenCabinetImg}
                    alt="Custom kitchen cabinetry and quartz countertops"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                    Custom Shaker Cabinetry &amp; Stainless Steel Integration
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
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">Satisfaction Guarantee</div>
                  </div>
                </div>
              </div>

              {/* Right Narrative Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>The Heart of the Home</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Kitchen Remodeling Done Right
                </h2>

                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>
                    The kitchen is the heart of the home—and at <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong>, we treat it with the care and attention it deserves. As a family-owned business with over 15 years of hands-on experience, we specialize in transforming outdated, inefficient kitchens into stunning, functional spaces that families love.
                  </p>
                  <p>
                    Whether you want a complete kitchen overhaul, a modern update, or simply more storage and counter space, our experienced team handles every aspect of the project—from design and material selection to demolition, construction, and final finishing. We serve both residential and commercial clients across Cliffwood, NJ, and a 40-mile radius.
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
                      <h4 className="text-xs font-bold text-slate-900">All Trades Under One Roof</h4>
                      <p className="text-[11px] text-slate-500">Demolition, plumbing, electrical, framing, and tile</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Custom 3D Layout &amp; Storage</h4>
                      <p className="text-[11px] text-slate-500">Optimized workflow, deep pantries, and spice pullouts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Direct Owner Oversight</h4>
                      <p className="text-[11px] text-slate-500">Luan Meziu on-site ensuring master craftsmanship</p>
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

        {/* ── OUR KITCHEN REMODELING SERVICES (9 DETAILED SECTIONS) ── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                Comprehensive Kitchen Solutions
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Kitchen Remodeling Services
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Comprehensive Solutions for Every Kitchen across Cliffwood &amp; New Jersey
              </p>
            </div>

            {/* 9 Detailed Cards Grid */}
            <div className="space-y-12">
              {KITCHEN_SERVICES_DATA.map((svc, idx) => {
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

        {/* ── WHY CHOOSE MEZIU FOR KITCHEN REMODELING? ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                The Meziu Advantage
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Why Choose MEZIU CONSTRUCTION for Your Kitchen Remodel?
              </h2>
              <p className="text-lg text-slate-600">
                Master finish carpentry, full trade coordination, and meticulous attention to every drawer and joint.
              </p>
            </div>

            {/* 10 Reason Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_KITCHEN.map((item, idx) => {
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

        {/* ── 5-STEP KITCHEN REMODELING PROCESS ── */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-slate-800">
                Proven Methodology
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Kitchen Remodeling Process
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                From Vision to Reality—We Do It Right.
              </p>
            </div>

            {/* Step Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {KITCHEN_PROCESS.map((p, idx) => {
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

        {/* ── KITCHEN PORTFOLIO GALLERY ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                  Verified Workmanship
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Our Kitchen Portfolio
                </h2>
                <p className="text-base text-slate-600">
                  Real Projects. Real Quality. Browse examples of our recent kitchen remodeling projects across Cliffwood, NJ, and New Jersey.
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
              {KITCHEN_PORTFOLIO.map((proj, idx) => (
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
                We provide expert kitchen remodeling services within a 40-mile radius of Cliffwood, NJ, including:
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
                Frequently Asked Questions About Kitchen Remodeling
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Everything you need to know about our kitchen design process, trade coordination, and estimate timeline.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {KITCHEN_FAQS.map((faq, idx) => {
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
              <span>Let's Build Your Dream Kitchen</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Ready to Transform Your Kitchen?
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Whether you want a complete kitchen overhaul or a simple update, <strong className="font-bold text-white">{BUSINESS.name}</strong> is here to help. Contact Luan and our team today for a free on-site estimate.
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
                "{BUSINESS.name} is a family-owned, licensed, and insured kitchen remodeling contractor serving Cliffwood, NJ, and a 40-mile radius since 2009. We are committed to quality craftsmanship, transparency, and customer satisfaction—from the first design to the final finishing touch."
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
