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
  DoorClosed,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCta } from "@/components/site/FloatingCta";
import { BUSINESS } from "@/lib/site";

// Authentic project assets
import additionHeroImg from "@/assets/addition.jpg";
import renovationImg from "@/assets/renovation.jpg";
import interiorImg from "@/assets/interior.jpg";

// Gallery assets for additions portfolio
import exteriorAdditionImg from "@/assets/gallery/471699630_899901478880062_5883714246833623865_n.jpg";
import interiorAdditionImg from "@/assets/gallery/481974317_653489327184986_4107992866073077763_n.jpg";
import kitchenBumpoutImg from "@/assets/gallery/471821741_899268768943333_293806620655011432_n.jpg";
import masterSuiteImg from "@/assets/gallery/471969025_901036092099934_5228165584842414421_n.jpg";
import finishedLivingImg from "@/assets/gallery/471820344_899268765610000_5275763543525178002_n.jpg";
import stoneStepsAdditionImg from "@/assets/gallery/471993762_901602662043277_5877206412694686898_n.jpg";

export const Route = createFileRoute("/services/home-additions")({
  component: HomeAdditionsPage,
});

/* ── 10 Detailed Home Addition Services Data ── */
const ADDITION_SERVICES_DATA = [
  {
    id: "room-additions",
    num: "01",
    title: "Room Additions",
    icon: Home,
    summary: "Expand your ground-level footprint with dedicated bedrooms, family gathering rooms, or formal dining spaces.",
    description: "A ground-floor room addition provides instant, high-value living space without altering your upper levels. We excavate foundation footings, frame energy-efficient exterior walls, and tie in rooflines, HVAC, and electrical systems seamlessly.",
    points: [
      { name: "Extra Bedrooms & Nurseries", detail: "Spacious bedrooms with ample walk-in closet storage and egress windows." },
      { name: "Expanded Living & Family Rooms", detail: "Vaulted ceilings, oversized picture windows, and integrated entertainment centers." },
      { name: "Formal Dining Room Expansions", detail: "Elegant dining areas with custom wainscoting and chandelier lighting." },
      { name: "Dedicated Home Offices & Studies", detail: "Quiet, productive workspaces with high-speed data wiring and sound insulation." },
      { name: "Children's Playrooms & Flex Spaces", detail: "Durable luxury vinyl flooring and built-in toy cabinetry for family living." },
    ],
    image: additionHeroImg,
    alt: "Custom ground-level room addition with architectural matching in Ridgewood, NJ",
  },
  {
    id: "second-story-additions",
    num: "02",
    title: "Second-Story Additions",
    icon: Maximize2,
    summary: "Double your home's total square footage by building upward without sacrificing precious backyard space.",
    description: "When lot setback limits prevent expanding outward, expanding upward is the smartest solution. We structurally reinforce ground-level framing and foundations, crane-set engineered roof trusses, and construct full upper floors.",
    points: [
      { name: "Full Second-Story Expansions", detail: "Adding 3-4 bedrooms, 2 bathrooms, and laundry suites over existing ranch homes." },
      { name: "Partial Second-Story Additions", detail: "Expanding over an existing garage or first-floor wing for a private suite." },
      { name: "Luxury Primary Master Suites", detail: "Spacious master retreats with walk-in dressing rooms and spa en-suite baths." },
      { name: "Engineered Structural Reinforcement", detail: "LVL beams, steel column supports, and foundation underpinning." },
      { name: "Architectural Exterior Cohesion", detail: "Matching existing siding, trim casing, roof pitch, and architectural shingles." },
    ],
    image: exteriorAdditionImg,
    alt: "Two-story home addition with full framing and roof integration in Northern NJ",
  },
  {
    id: "sunrooms-three-season-rooms",
    num: "03",
    title: "Sunrooms & Three-Season Rooms",
    icon: Sun,
    summary: "Enjoy panoramic outdoor garden views filled with natural light, shielded from insects and harsh New Jersey weather.",
    description: "We build custom four-season heated sunrooms and versatile three-season rooms. Featuring energy-efficient Low-E glass walls, insulated cathedral ceilings, skylights, and direct transitions to outdoor stone patios.",
    points: [
      { name: "Four-Season Insulated Sunrooms", detail: "High-efficiency double-pane Low-E windows with dedicated mini-split climate control." },
      { name: "Three-Season Screened Porches", detail: "Breezy spring-to-fall enclosures keeping bugs out with removable glass panels." },
      { name: "Architectural Cathedral Ceilings", detail: "Exposed tongue-and-groove cedar or pine planks with skylights and ceiling fans." },
      { name: "Glass Solariums & Conservatories", detail: "Floor-to-ceiling glass wall systems maximizing winter solar gain." },
      { name: "Seamless Patio Transitions", detail: "Sliding and multi-panel bi-fold glass doors connecting to paver patios." },
    ],
    image: finishedLivingImg,
    alt: "Custom bright sunroom addition with cathedral ceiling and oversized windows in Wayne, NJ",
  },
  {
    id: "in-law-suites-guest-houses",
    num: "04",
    title: "In-Law Suites & Guest Houses (ADUs)",
    icon: Users,
    summary: "Private, independent living accommodations for aging parents, extended family, or long-term guests.",
    description: "Multigenerational living is made comfortable with custom in-law suites. We construct attached accessory dwelling units (ADUs) and standalone guest suites equipped with private bathrooms, kitchenettes, and zero-threshold ADA accessibility.",
    points: [
      { name: "Attached In-Law Suites", detail: "Private suite connected to the main residence with acoustic soundproofing." },
      { name: "Detached ADUs & Guest Cottages", detail: "Standalone backyard cottages with independent utility connections." },
      { name: "Kitchenettes & Living Quarters", detail: "Compact quartz countertops, induction cooktops, dishwashers, and living spaces." },
      { name: "ADA Accessible Bathrooms", detail: "Curbless roll-in showers, reinforced grab bars, and 36-inch wide doorways." },
      { name: "Private Exterior Entrances", detail: "Dedicated exterior access allowing independent coming and going." },
    ],
    image: interiorAdditionImg,
    alt: "In-law suite interior addition with kitchenette and private living area in Paramus, NJ",
  },
  {
    id: "garage-additions",
    num: "05",
    title: "Garage Additions & Workshops",
    icon: Building2,
    summary: "Secure vehicle parking, heated workshop spaces, and bonus upper-level living suites.",
    description: "Protect your vehicles from harsh NJ winters while gaining immense storage and flex space. We build attached and detached 1-, 2-, and 3-car garages with poured concrete slab foundations, 100A subpanels, and optional upper-floor apartments.",
    points: [
      { name: "Attached 2-Car & 3-Car Garages", detail: "Direct, weatherproof interior access to your home with fire-rated drywall." },
      { name: "Detached Garages & Carriage Houses", detail: "Custom standalone structures matching main residential exterior architecture." },
      { name: "Upper-Level Bonus Rooms", detail: "Finished guest suites, home gyms, or offices above garage bays." },
      { name: "Heated Workshop Configurations", detail: "Dedicated 240V tool circuits, epoxy flooring, and utility wash sinks." },
      { name: "Heavy-Duty Reinforced Concrete Slabs", detail: "4,000 PSI concrete with rebar grids and fiber mesh to resist vehicle weight." },
    ],
    image: exteriorAdditionImg,
    alt: "Custom detached 2-car garage addition with second-floor finished bonus room in Clifton, NJ",
  },
  {
    id: "bump-out-additions",
    num: "06",
    title: "Bump-Out Additions (Micro-Expansions)",
    icon: LayoutGrid,
    summary: "Cost-effective 2 to 10-foot cantilevers or micro-foundations that dramatically expand rooms without full additions.",
    description: "When you just need a few extra feet for a kitchen center island, a luxury walk-in closet, or a double-vanity master bathroom, a cantilevered bump-out gives you the space you need at a fraction of full addition costs.",
    points: [
      { name: "Kitchen Island Bump-Outs", detail: "Adding 3-6 feet to accommodate an 8-foot island, breakfast nook, or pantry." },
      { name: "Master Bathroom Expansions", detail: "Expanding bathroom footprint for a freestanding soaking tub and glass shower." },
      { name: "Walk-In Dressing Closets", detail: "Cantilevering out 4 feet to create custom built-in shoe and wardrobe storage." },
      { name: "Architectural Bay Window Seats", detail: "Deep window bump-outs providing cozy reading benches and storage below." },
      { name: "Mudroom & Foyer Expansions", detail: "Widening narrow front entries with built-in coat hooks and shoe cubbies." },
    ],
    image: kitchenBumpoutImg,
    alt: "Kitchen bump-out addition providing space for quartz island and dining nook in Cliffwood, NJ",
  },
  {
    id: "home-office-additions",
    num: "07",
    title: "Home Office Additions",
    icon: Compass,
    summary: "Dedicated, executive home work environments engineered for focus, productivity, and video conferencing.",
    description: "Working remotely demands a professional environment separated from household noise. We build dedicated home offices featuring sound-dampening insulation, custom built-in mahogany or oak cabinetry, and separate client entrance options.",
    points: [
      { name: "Acoustic Soundproofing Insulation", detail: "Rockwool acoustic batts and resilient channel drywall blocking household noise." },
      { name: "Custom Built-In Desks & Shelving", detail: "Floor-to-ceiling library shelving, filing drawers, and solid hardwood desktops." },
      { name: "Dedicated Electrical & Cat6 Data", detail: "Clean power circuits for computer equipment and hardwired high-speed internet." },
      { name: "Natural Daylight & Task Lighting", detail: "Oversized casement windows and recessed LED lighting calibrated for video calls." },
      { name: "Private Exterior Client Entrances", detail: "Direct exterior door allowing business visitors without entering private living areas." },
    ],
    image: interiorImg,
    alt: "Custom home office addition with built-in cabinetry and natural light in Ridgewood, NJ",
  },
  {
    id: "bonus-room-additions",
    num: "08",
    title: "Bonus Room & Flex Space Additions",
    icon: Sparkles,
    summary: "Versatile, multipurpose entertainment spaces tailored to your family's passions and hobbies.",
    description: "Create the ultimate recreation space. Whether you envision a 4K Dolby Atmos home theater, a commercial-grade home gym, an acoustic music rehearsal studio, or an art craft room, we build rooms designed for your lifestyle.",
    points: [
      { name: "Custom Home Theater Media Rooms", detail: "Tiered seating platforms, acoustic wall panels, and projector ceiling mounts." },
      { name: "Dedicated Home Gym Additions", detail: "Reinforced subflooring for heavy weights, rubber matting, and mirrored walls." },
      { name: "Family Game & Billiards Rooms", detail: "Open-concept spans with built-in wet bars, wine coolers, and game tables." },
      { name: "Soundproof Music Rehearsal Rooms", detail: "Double drywall assemblies with Green Glue damping for instrument practice." },
      { name: "Creative Art & Craft Studios", detail: "Stain-resistant epoxy floors, utility cleanup sinks, and ample natural sunlight." },
    ],
    image: interiorAdditionImg,
    alt: "Finished bonus room and entertainment suite addition in Paramus, NJ",
  },
  {
    id: "roof-dormer-additions",
    num: "09",
    title: "Roof & Dormer Additions",
    icon: HardHat,
    summary: "Unlock usable standing headroom, sunlight, and square footage in cramped attic and cape cod roofs.",
    description: "We install shed dormers, gable dormers, and full roof raises. Transforming dark, sloping attic rafters into spacious, code-compliant bedrooms, full bathrooms, and walk-in dressing suites.",
    points: [
      { name: "Full-Length Shed Dormers", detail: "Maximizing wall-to-wall standing height across the entire rear roof span." },
      { name: "Architectural Gable Dormers", detail: "Enhancing front curb appeal with classic New England window dormer peaks." },
      { name: "Structural Roof Raises", detail: "Lifting low rooflines to create full 8 to 9-foot upper-floor ceiling heights." },
      { name: "Velux Solar Skylight Integration", detail: "Motorized rain-sensing skylights providing automated venting and sunlight." },
      { name: "100% Weatherproof Flashing", detail: "Ice & water shield membranes and copper step flashing preventing leaks." },
    ],
    image: renovationImg,
    alt: "Roof raise and shed dormer addition creating new upper floor living in Glen Rock, NJ",
  },
  {
    id: "commercial-additions",
    num: "10",
    title: "Commercial Building Additions",
    icon: Building2,
    summary: "Expand commercial retail floors, corporate office capacity, and restaurant dining spaces on strict timelines.",
    description: "We handle commercial additions from zoning approvals through structural steel framing, commercial MEP rough-ins, and ADA compliance. Executed with strict project schedules to minimize business downtime.",
    points: [
      { name: "Commercial Office Expansions", detail: "Adding executive conference suites, open cubicle wings, and breakrooms." },
      { name: "Retail Storefront Additions", detail: "Expanding customer sales floor space and inventory storage backrooms." },
      { name: "Restaurant Dining Room & Kitchens", detail: "Enclosed all-weather dining patios and expanded commercial cook lines." },
      { name: "Medical & Dental Suite Additions", detail: "Expanding patient examination rooms with specialized medical gas rough-ins." },
      { name: "Strict Phased Construction Plans", detail: "Working evenings and weekends to eliminate business operational disruptions." },
    ],
    image: exteriorAdditionImg,
    alt: "Commercial building expansion and exterior structural addition in Hackensack, NJ",
  },
];

/* ── 14 Why Choose Meziu Advantages ── */
const WHY_CHOOSE_ADDITIONS = [
  {
    title: "15+ Years Hands-On Experience",
    desc: "Master builders with deep structural framing and additions expertise.",
    icon: Award,
  },
  {
    title: "Family-Owned Since 2009",
    desc: "Direct personal accountability with founder Luan Meziu on every job site.",
    icon: Home,
  },
  {
    title: "Licensed, Insured & Bonded",
    desc: "Full compliance with New Jersey DCA building regulations and complete insurance.",
    icon: ShieldCheck,
  },
  {
    title: "Full-Service Turnkey General Contractor",
    desc: "We manage every trade: excavation, foundation, framing, roofing, plumbing, electrical, and HVAC.",
    icon: Wrench,
  },
  {
    title: "Custom Architectural Design",
    desc: "Tailored additions matched perfectly to your existing home's roof pitch, siding, and style.",
    icon: Compass,
  },
  {
    title: "Premium Quality Materials",
    desc: "TimberStrand LVL beams, 2x6 exterior framing, spray foam insulation, and Anderson windows.",
    icon: Layers,
  },
  {
    title: "Permit & Code Expertise",
    desc: "We handle all municipal zoning variances, architectural blueprints, and town inspections.",
    icon: CheckCircle2,
  },
  {
    title: "Structural Engineering Integrity",
    desc: "Engineered load-bearing calculations, concrete footings, and seismic/wind bracing.",
    icon: HardHat,
  },
  {
    title: "Seamless Interior/Exterior Blending",
    desc: "Matching floor levels, crown molding, siding colors, and roof shingles so it looks original.",
    icon: Sparkles,
  },
  {
    title: "100% Transparent Pricing",
    desc: "Detailed line-item proposals with fixed material allowances and zero surprise change orders.",
    icon: DollarSign,
  },
  {
    title: "Clean & Respectful Job Sites",
    desc: "Dust barrier zip-walls, floor protection, daily sweep-ups, and minimal household disruption.",
    icon: Shield,
  },
  {
    title: "Residential & Commercial Expertise",
    desc: "Equipped for single-family home expansions, in-law suites, and commercial office wings.",
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

/* ── 7-Step Home Addition Process Roadmap ── */
const ADDITIONS_PROCESS = [
  {
    step: "01",
    title: "Free On-Site Consultation",
    desc: "We visit your home to measure lot dimensions, inspect existing structure and foundation, discuss your vision and budget, and provide a clear written estimate.",
    icon: MapPin,
  },
  {
    step: "02",
    title: "Design & Planning",
    desc: "We work with you to develop custom 2D/3D plans that optimize your layout and select exterior materials (siding, roofing, windows) that match your home.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Permitting & Engineering",
    desc: "We prepare architectural drawings, calculate structural load requirements with licensed engineers, submit municipal permits, and manage all town reviews.",
    icon: HardHat,
  },
  {
    step: "04",
    title: "Site Preparation & Foundation",
    desc: "We excavate down to solid soil below the frost line, pour steel-reinforced concrete footings and foundation walls, and install waterproofing and weeping drains.",
    icon: Grid,
  },
  {
    step: "05",
    title: "Framing & Weatherproofing",
    desc: "Our master carpenters frame walls, install engineered floor joists and roof trusses, sheathe exterior with plywood, install roof shingles, windows, and house wrap.",
    icon: Hammer,
  },
  {
    step: "06",
    title: "MEP Rough-Ins & Interior Finishing",
    desc: "We run electrical, plumbing, HVAC, install high-R insulation, hang and finish drywall, lay hardwood/tile flooring, install trim, and apply premium paint.",
    icon: Wrench,
  },
  {
    step: "07",
    title: "Final Walkthrough & Completion",
    desc: "We complete all municipal building inspections to obtain your Certificate of Occupancy, perform deep cleaning, and conduct a walkthrough to ensure 100% satisfaction.",
    icon: CheckCircle2,
  },
];

/* ── 6 Featured Home Addition Projects ── */
const ADDITIONS_PORTFOLIO = [
  {
    title: "Two-Story Structural Home Addition",
    location: "Ridgewood, NJ",
    category: "Second-Story Addition",
    desc: "Complete 1,400 sq.ft. upper-level addition with master suite, 2 bedrooms, and architectural siding.",
    image: exteriorAdditionImg,
  },
  {
    title: "Bright Four-Season Sunroom Addition",
    location: "Wayne, NJ",
    category: "Sunroom Addition",
    desc: "Cathedral ceiling sunroom with Low-E glass walls, mini-split HVAC, and stone patio walkout.",
    image: finishedLivingImg,
  },
  {
    title: "Attached Multigenerational In-Law Suite",
    location: "Paramus, NJ",
    category: "In-Law Suite",
    desc: "Private 1-bedroom suite with full bathroom, kitchenette, and separate zero-threshold entrance.",
    image: interiorAdditionImg,
  },
  {
    title: "2-Car Garage with Finished Upper Bonus Room",
    location: "Clifton, NJ",
    category: "Garage Addition",
    desc: "Attached 2-car garage with reinforced concrete slab and finished second-floor guest loft.",
    image: additionHeroImg,
  },
  {
    title: "Open-Concept Kitchen Bump-Out Addition",
    location: "Cliffwood, NJ",
    category: "Kitchen Bump-Out",
    desc: "6-foot cantilevered expansion accommodating 9-foot quartz island and panoramic breakfast nook.",
    image: kitchenBumpoutImg,
  },
  {
    title: "Primary Master Suite & Luxury Bathroom",
    location: "Glen Rock, NJ",
    category: "Master Suite Addition",
    desc: "Expansive master bedroom addition with vaulted ceilings, walk-in closets, and glass shower bath.",
    image: masterSuiteImg,
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

/* ── 10 Home Addition FAQs ── */
const ADDITIONS_FAQS = [
  {
    q: "What types of home additions do you offer?",
    a: "We offer room additions, second-story expansions, sunrooms & three-season rooms, in-law suites & guest houses (ADUs), garage additions with bonus rooms, kitchen/bathroom bump-outs, home office additions, bonus/media rooms, roof & dormer additions, and commercial building expansions.",
  },
  {
    q: "Are you licensed and insured in New Jersey?",
    a: "Yes! MEZIU CONSTRUCTION LLC is fully licensed, insured, and bonded in the State of New Jersey. We carry comprehensive general liability and workers' compensation coverage for your complete protection.",
  },
  {
    q: "How long does a home addition take to build?",
    a: "Timelines depend on the project scope. A micro bump-out addition takes 2 to 4 weeks. A single-room ground addition takes 4 to 8 weeks. A full second-story expansion or large in-law suite takes 3 to 6 months. We provide a detailed schedule during your consultation.",
  },
  {
    q: "Do you provide free estimates for home additions?",
    a: "Absolutely! We offer 100% free, no-obligation on-site estimates throughout Cliffwood, NJ, and our 40-mile service radius. Luan Meziu will visit your property, evaluate your structural layout, discuss your goals, and provide a clear written estimate.",
  },
  {
    q: "Do you handle building permits and town inspections?",
    a: "Yes! We handle the entire permitting process from start to finish—including architectural plans, structural engineering calculations, zoning submissions, and scheduling all municipal inspections through final Certificate of Occupancy.",
  },
  {
    q: "Will my home addition match my existing home's style?",
    a: "Yes! Seamless architectural blending is our specialty. We carefully match your roof pitch, architectural shingles, siding profile, trim casing, flooring transitions, and interior moldings so the addition looks like it was built with the original house.",
  },
  {
    q: "Can I live in my home during construction?",
    a: "In most cases, yes! For ground-level additions, sunrooms, and garages, we construct the exterior shell first and install dust barrier zip-walls before breaking into the main home. For full second-story raises, we discuss temporary living arrangements if needed.",
  },
  {
    q: "Do you work on commercial building additions?",
    a: "Yes! We provide commercial addition services for office buildings, retail storefronts, restaurants, and medical suites across Northern New Jersey, accommodating after-hours work to minimize business downtime.",
  },
  {
    q: "Do you offer emergency services?",
    a: "Yes, we provide emergency structural repairs and emergency services during our regular business hours (Monday through Friday, 7:00 AM – 6:00 PM). Call us immediately at (201) 844-2427.",
  },
  {
    q: "Do you speak Spanish?",
    a: "¡Sí! Hablamos español. Founder Luan Meziu is fluent in both English and Spanish, ensuring clear and comfortable communication throughout your addition project.",
  },
];

function HomeAdditionsPage() {
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
              <span className="text-[#E56E1A] font-bold">Home Additions</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Hero Text Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200/80 px-4 py-1.5 shadow-sm">
                  <Maximize2 className="h-4 w-4 text-[#E56E1A]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#B85008]">
                    Master Addition Contractors &amp; Structural Builders
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
                  Expert <span className="text-[#E56E1A]">Home Additions</span>
                </h1>

                {/* Sub-headline */}
                <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                  Expand Your Space. Enhance Your Lifestyle. Increase Your Home's Value.
                </p>

                {/* Body Text */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Need more space but love your location? A home addition is the perfect solution. <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong> specializes in custom home additions that seamlessly blend with your existing structure while providing the extra square footage you need. From room additions and second-story expansions to sunrooms and in-law suites, we bring your vision to life with quality craftsmanship and attention to detail.
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
                    src={additionHeroImg}
                    alt="Custom structural home addition in Northern New Jersey"
                    className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Trust Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-[#E56E1A] tracking-wider">Cliffwood, NJ Addition Specialists</span>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      Room additions, second-story raises, sunrooms, in-law suites, and garages.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── OVERVIEW OF HOME ADDITIONS ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Image Collage */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                  <img
                    src={exteriorAdditionImg}
                    alt="Two-story structural framing addition in Northern NJ"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                    Turnkey Structural Framing, Permitting &amp; Finishing
                  </div>
                </div>

                {/* 2 Small Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-2xl font-black text-[#E56E1A]">100%</div>
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">Turnkey Managed</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-2xl font-black text-[#E56E1A]">Code Passed</div>
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">Full NJ Permits</div>
                  </div>
                </div>
              </div>

              {/* Right Narrative Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>Growth Without Relocation</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Home Additions Done Right
                </h2>

                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>
                    "Your home should grow with you. Whether your family is expanding, you need a home office, or you simply want more living space, a home addition is an investment that enhances both your lifestyle and your property value.
                  </p>
                  <p>
                    At <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong>, we understand that adding to your home is a significant decision. As a family-owned business with over 15 years of hands-on experience, we specialize in custom home additions that are designed to match your existing home's architecture while providing the functionality you need. From design and permitting to construction and finishing, our experienced team handles every aspect of the project. We serve both residential and commercial clients across Cliffwood, NJ, and a 40-mile radius.
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
                      <h4 className="text-xs font-bold text-slate-900">Structural Engineering &amp; Plans</h4>
                      <p className="text-[11px] text-slate-500">Engineered load-bearing calculations &amp; LVL beams</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Complete Permitting &amp; Inspections</h4>
                      <p className="text-[11px] text-slate-500">We manage all town building department approvals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Seamless Architectural Match</h4>
                      <p className="text-[11px] text-slate-500">Exterior rooflines, siding, and interior trims</p>
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

        {/* ── OUR HOME ADDITION SERVICES (10 DETAILED SECTIONS) ── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                Comprehensive Space Solutions
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Home Addition Services
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Comprehensive Solutions for Every Space Need across Cliffwood &amp; New Jersey
              </p>
            </div>

            {/* 10 Detailed Cards Grid */}
            <div className="space-y-12">
              {ADDITION_SERVICES_DATA.map((svc, idx) => {
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

        {/* ── WHY CHOOSE MEZIU FOR HOME ADDITIONS? ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                The Meziu Advantage
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Why Choose MEZIU CONSTRUCTION for Your Home Addition?
              </h2>
              <p className="text-lg text-slate-600">
                Master general contracting craftsmanship, structural engineering precision, and turnkey peace of mind.
              </p>
            </div>

            {/* 14 Reason Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_ADDITIONS.map((item, idx) => {
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

        {/* ── 7-STEP HOME ADDITIONS PROCESS ── */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-slate-800">
                Proven General Contracting Method
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Home Addition Process
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                From Vision to Reality—We Do It Right.
              </p>
            </div>

            {/* 7-Step Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {ADDITIONS_PROCESS.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.step}
                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
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
                        style={{ width: `${(idx + 1) * 14.28}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── HOME ADDITIONS PORTFOLIO GALLERY ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                  Verified Workmanship
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Our Home Addition Portfolio
                </h2>
                <p className="text-base text-slate-600">
                  Real Projects. Real Quality. Browse examples of our recent home additions and expansions across Cliffwood, NJ, and New Jersey.
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
              {ADDITIONS_PORTFOLIO.map((proj, idx) => (
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
                We provide expert home addition and expansion services within a 40-mile radius of Cliffwood, NJ, including:
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
                Frequently Asked Questions About Home Additions
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Everything you need to know about structural engineering, town permits, timelines, and living at home during construction.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {ADDITIONS_FAQS.map((faq, idx) => {
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
              <span>Let's Expand Your Living Space</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Ready to Expand Your Home?
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Whether you need a room addition, a second-story expansion, or a beautiful sunroom, <strong className="font-bold text-white">{BUSINESS.name}</strong> is here to help. Contact Luan and our team today for a free on-site estimate.
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
                "{BUSINESS.name} is a family-owned, licensed, and insured home addition contractor serving Cliffwood, NJ, and a 40-mile radius since 2009. We are committed to quality craftsmanship, transparency, and customer satisfaction—from the first design to the final finishing touch."
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
