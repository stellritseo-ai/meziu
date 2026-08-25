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
  Compass,
  Layers,
  Grid,
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
  Droplets,
  Shield,
  Sun,
  ShieldAlert,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCta } from "@/components/site/FloatingCta";
import { BUSINESS } from "@/lib/site";

// Authentic project assets
import paversHeroImg from "@/assets/pavers.jpg";
import stoneworkImg from "@/assets/stonework.jpg";
import masonryImg from "@/assets/masonry.jpg";

// Gallery assets for pavers portfolio
import paverDrivewayImg from "@/assets/gallery/471842430_901602668709943_8316863561420339230_n.jpg";
import paverDrivewayDetailImg from "@/assets/gallery/471841011_901602665376610_1970354150998530249_n.jpg";
import paverPatioImg from "@/assets/gallery/472025987_901602768709933_2491581905375914125_n.jpg";
import paverWalkwayImg from "@/assets/gallery/472207359_901603012043242_5152407169350226347_n.jpg";
import paverStepsImg from "@/assets/gallery/471993762_901602662043277_5877206412694686898_n.jpg";
import paverPoolImg from "@/assets/gallery/472148255_901603085376568_6661683167583732063_n.jpg";

export const Route = createFileRoute("/services/pavers")({
  component: PaversDrivewaysPage,
});

/* ── 9 Detailed Pavers & Driveways Services Data ── */
const PAVERS_SERVICES_DATA = [
  {
    id: "paver-driveways",
    num: "01",
    title: "Paver Driveways",
    icon: Compass,
    summary: "A paver driveway is a significant investment that adds instant luxury, durability, and curb appeal.",
    description: "Unlike asphalt or poured concrete that crack under NJ freeze-thaw cycles, interlocking pavers flex with the ground while supporting heavy vehicle traffic. We engineer deep compacted stone foundations with reinforced edge restraints.",
    points: [
      { name: "Custom Architectural Patterns", detail: "45° and 90° Herringbone, basket weave, running bond, and cobblestone layouts." },
      { name: "8 to 12-Inch Compacted Sub-Base", detail: "Quarry process crushed stone compacted in 2-inch lifts to 98% Proctor density." },
      { name: "Circular Aprons & Inlays", detail: "Dramatic circular focal points, soldier course borders, and contrasting banding." },
      { name: "Concrete Edge Restraints", detail: "Perimeter edge restraints pinned with 12-inch steel spikes to eliminate shifting." },
      { name: "Permeable Driveway Systems", detail: "Eco-friendly open-graded aggregates preventing stormwater pooling." },
    ],
    image: paverDrivewayImg,
    alt: "Stunning interlocking paver driveway with herringbone pattern in Cliffwood, NJ",
  },
  {
    id: "paver-patios",
    num: "02",
    title: "Paver Patios",
    icon: Home,
    summary: "Create the ultimate outdoor living room for summer barbecues, family gatherings, and evening relaxation.",
    description: "We custom design multi-level paver patios featuring built-in outdoor kitchens, granite bar counters, wood-burning and gas fire pits, integrated seating bench walls, and ambient low-voltage step lighting.",
    points: [
      { name: "Multi-Level Patio Architecture", detail: "Creating distinct zones for outdoor dining, sunbathing, and fireside seating." },
      { name: "Built-In Fire Pits & Seating", detail: "Circular and square fire pits with matching segmental curved seat walls." },
      { name: "Outdoor Kitchen Integration", detail: "Custom grill islands, stainless prep drawers, and bar counters." },
      { name: "Polymeric Sand Joint Locking", detail: "Hardening sand that repels ants, inhibits weed growth, and resists rain washout." },
      { name: "Patio Expansion & Resurfacing", detail: "Seamlessly extending existing concrete or wood deck footprints." },
    ],
    image: paverPatioImg,
    alt: "Custom interlocking paver patio with fire pit and sitting wall in Wayne, NJ",
  },
  {
    id: "paver-walkways",
    num: "03",
    title: "Paver Walkways & Pathways",
    icon: Grid,
    summary: "Inviting, safe, and beautifully contoured pathways connecting your driveway, front door, and backyard.",
    description: "A well-designed walkway guides guests with elegance while preventing mud and lawn wear. We build meandering garden paths, wide ADA-accessible front stoop walkways, and custom integrated paver steps.",
    points: [
      { name: "Welcoming Front Entry Walkways", detail: "Wide 4 to 5-foot paths with elegant flared entrances and soldier borders." },
      { name: "Meandering Garden Pathways", detail: "Natural stone and paver paths organically winding through landscape beds." },
      { name: "Integrated Paver Steps & Landings", detail: "Bullnose paver treads and solid stone risers transitioning elevation changes." },
      { name: "Commercial High-Traffic Walkways", detail: "Durable pavers engineered for heavy pedestrian traffic and winter salt." },
      { name: "Laser-Leveled Safe Surfaces", detail: "100% trip-free transitions engineered for universal accessibility." },
    ],
    image: paverWalkwayImg,
    alt: "Interlocking paver front entry walkway with soldier course border in Clifton, NJ",
  },
  {
    id: "paver-retaining-walls",
    num: "04",
    title: "Paver Retaining Walls",
    icon: Layers,
    summary: "Engineered retaining walls that tame steep slopes, prevent erosion, and create usable flat yard space.",
    description: "We construct segmental interlocking retaining walls, terraced garden planters, and seat walls. Every wall includes a crushed stone backfill core, perforated drain piping, and geogrid soil reinforcement.",
    points: [
      { name: "Engineered Segmental Block Walls", detail: "Structural pinning systems capable of retaining thousands of pounds of earth." },
      { name: "Terraced Hillside Solutions", detail: "Multi-tiered retaining walls transforming unusable slopes into lush garden terraces." },
      { name: "Integrated Weep Holes & Drainage", detail: "Perforated French drain systems eliminating hydrostatic pressure buildup." },
      { name: "Decorative Double-Sided Seat Walls", detail: "Freestanding perimeter walls providing overflow seating for patio parties." },
      { name: "Solid Stone & Paver Caps", detail: "Adhesive-bonded coping caps with clean overhangs and chiseled edges." },
    ],
    image: stoneworkImg,
    alt: "Engineered natural stone retaining wall and paver terrace in Cliffwood, NJ",
  },
  {
    id: "paver-pool-decks",
    num: "05",
    title: "Paver Pool Decks",
    icon: Droplets,
    summary: "Slip-resistant, heat-reflective paver pool surrounds designed for barefoot comfort and resort luxury.",
    description: "Traditional concrete pool decks get scalding hot and slippery. Our textured pool pavers stay cooler under the summer sun, provide exceptional wet traction, and are finished with smooth bullnose coping along the water line.",
    points: [
      { name: "Textured Slip-Resistant Pavers", detail: "High-traction surfaces preventing slips and falls around wet pool perimeters." },
      { name: "Heat-Reflective Cool-Deck Pavers", detail: "Light-colored pavers that disperse summer heat for comfortable barefoot walking." },
      { name: "Bullnose Safety Pool Coping", detail: "Smooth, rounded edge stones protecting swimmers entering and exiting the pool." },
      { name: "Perimeter Channel Drains", detail: "Deck drains routing chlorinated splash water away from landscaping." },
      { name: "Salt-Water Resistant Formulations", detail: "Dense pavers treated to resist degradation from modern salt-chlorine generators." },
    ],
    image: paverPoolImg,
    alt: "Custom paver pool deck installation with bullnose coping in Paramus, NJ",
  },
  {
    id: "permeable-pavers",
    num: "06",
    title: "Permeable Pavers",
    icon: Sparkles,
    summary: "Eco-friendly permeable pavers that manage stormwater runoff and meet municipal green building codes.",
    description: "Permeable paver systems feature engineered joint spacer tabs that allow rainwater to drain directly through the surface into an underground stone reservoir, recharging the local water table with zero standing puddles.",
    points: [
      { name: "Stormwater Runoff Reduction", detail: "Eliminating surface runoff and puddling during heavy Northern NJ downpours." },
      { name: "NJ Municipal Code Compliance", detail: "Helping homeowners meet impervious lot coverage limits on restricted properties." },
      { name: "Open-Graded Aggregate Base", detail: "Clean crushed stone reservoir base providing massive water detention capacity." },
      { name: "Zero Ice Sheet Formation", detail: "Rapid drainage prevents winter meltwater from freezing into dangerous ice patches." },
      { name: "Residential & Commercial EPA Specs", detail: "Ideal for eco-friendly driveways, parking lots, and LEED-certified projects." },
    ],
    image: paverDrivewayDetailImg,
    alt: "Permeable paver driveway installation with eco-friendly drainage base",
  },
  {
    id: "installation-replacement",
    num: "07",
    title: "Paver Installation & Replacement",
    icon: Hammer,
    summary: "Complete new installations or precision lifting and leveling for sunken, uneven existing pavers.",
    description: "Whether you are starting from fresh virgin soil or need to repair settling and tree root upheaval in an existing driveway, our crew excavates, re-levels the aggregate base, and re-installs pavers to laser flatness.",
    points: [
      { name: "Turnkey New Construction", detail: "Full layout design, excavation, base compaction, laying, and sand locking." },
      { name: "Sunken Paver Re-Leveling", detail: "Lifting depressed wheel ruts, adding fresh aggregate, and re-compacting." },
      { name: "Damaged Paver Replacement", detail: "Color-matched replacement of cracked, oil-stained, or chipped stones." },
      { name: "Edge Restraint Repair & Re-Staking", detail: "Securing loose borders and re-nailing edge restraints into the sub-base." },
      { name: "Sub-Base Geotextile Fabric", detail: "Heavy-duty woven fabric separating subsoil from base rock to stop sinking." },
    ],
    image: paverStepsImg,
    alt: "Paver installation and step leveling process in Northern NJ",
  },
  {
    id: "commercial-pavers",
    num: "08",
    title: "Commercial Paver Services",
    icon: Building2,
    summary: "Heavy-duty paver installations for commercial plazas, retail storefronts, and multi-family complexes.",
    description: "We understand commercial timelines, municipal ADA codes, and extreme load ratings. We install vehicular-grade 80mm pavers capable of handling delivery trucks, heavy foot traffic, and mechanical snow removal.",
    points: [
      { name: "Vehicular-Grade 80mm Pavers", detail: "Extra-thick pavers engineered for commercial parking lots and drive lanes." },
      { name: "ADA-Compliant Walkways & Ramps", detail: "Code-compliant slopes, tactile truncated dome pavers, and smooth transitions." },
      { name: "Retail Storefronts & Plazas", detail: "High-end pedestrian plazas that elevate brand image and foot traffic." },
      { name: "Commercial HOA Maintenance", detail: "Ongoing maintenance, seasonal sealing, and repair programs for condo complexes." },
      { name: "Strict Safety & Schedule Compliance", detail: "Operating with full commercial insurance and zero disruption to business hours." },
    ],
    image: masonryImg,
    alt: "Commercial paver plaza and retail entrance walkway in Hackensack, NJ",
  },
  {
    id: "sealing-maintenance",
    num: "09",
    title: "Paver Sealing & Maintenance",
    icon: ShieldCheck,
    summary: "Professional deep cleaning, polymeric re-sanding, and wet-look sealing to preserve your investment.",
    description: "Over time, sun and weather can fade paver pigments and wash out joint sand. Our multi-step restoration includes 250°F hot water power washing, stain removal, new polymeric joint sand, and commercial acrylic/polyurethane sealers.",
    points: [
      { name: "Deep Surface Power Washing", detail: "Removing years of embedded grime, motor oil, moss, and efflorescence salt." },
      { name: "Polymeric Sand Joint Replenishment", detail: "Vibratory compaction of fresh polymeric sand locking all joints tight." },
      { name: "Penetrating & Wet-Look Sealers", detail: "Enhancing rich stone colors while providing UV and de-icing salt protection." },
      { name: "Oil & Stain Repellent Shield", detail: "Prevents BBQ grease, tree sap, and motor oil from penetrating the porous concrete." },
      { name: "3 to 5-Year Protection Warranty", detail: "Long-lasting sealers that keep your pavers looking brand new for years." },
    ],
    image: paversHeroImg,
    alt: "Freshly cleaned and sealed paver patio with wet-look protective finish",
  },
];

/* ── 12 Why Choose Meziu Advantages ── */
const WHY_CHOOSE_PAVERS = [
  {
    title: "15+ Years Hands-On Experience",
    desc: "Master paver artisans and certified ICPI hardscape installers.",
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
    title: "8-12\" Deep Base Preparation",
    desc: "Laser-graded quarry process sub-base compacted to prevent ruts and sinking.",
    icon: Layers,
  },
  {
    title: "Premium Quality Pavers",
    desc: "Authorized installers for Cambridge, Techo-Bloc, Unilock, and Nicolock.",
    icon: Grid,
  },
  {
    title: "Proper Drainage Engineering",
    desc: "Laser slope grading, French drains, and channel drains preventing water pooling.",
    icon: Droplets,
  },
  {
    title: "Custom 3D Hardscape Designs",
    desc: "Tailored patterns, circular inlays, and borders matched to your architecture.",
    icon: Compass,
  },
  {
    title: "100% Transparent Pricing",
    desc: "Detailed square-foot proposals with fixed material allowances and no surprises.",
    icon: DollarSign,
  },
  {
    title: "Clean & Respectful Job Sites",
    desc: "Lawn protection boards, daily street sweeping, and complete debris removal.",
    icon: CheckCircle2,
  },
  {
    title: "Residential & Commercial",
    desc: "Equipped for private home driveways, pool decks, and large commercial plazas.",
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

/* ── 8 Step Paver Process Roadmap ── */
const PAVER_PROCESS = [
  {
    step: "01",
    title: "Free On-Site Consultation",
    desc: "We visit your property to measure dimensions, evaluate soil conditions, discuss your vision, review sample catalogs, and provide a clear written estimate.",
    icon: MapPin,
  },
  {
    step: "02",
    title: "Design & Material Selection",
    desc: "We help you select the ideal paver styles, colors, laying patterns, borders, retaining wall blocks, and lighting accents to match your home.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Excavation & Subgrade Prep",
    desc: "We excavate down 10 to 14 inches with precision laser levels, removing unstable topsoil and compacting the native subgrade with commercial rollers.",
    icon: Grid,
  },
  {
    step: "04",
    title: "Base Installation & Compaction",
    desc: "We install heavy-duty woven geotextile fabric and 8 to 12 inches of dense aggregate base, compacting in 2-inch lifts to ensure zero settling.",
    icon: Layers,
  },
  {
    step: "05",
    title: "Bedding Sand & Paver Laying",
    desc: "We screed a 1-inch uniform layer of washed concrete sand and hand-lay every paver according to your pattern with laser-straight string lines.",
    icon: Hammer,
  },
  {
    step: "06",
    title: "Edge Restraints & Joint Sand",
    desc: "We install heavy-duty spiked perimeter edge restraints, sweep polymeric sand into every joint, and vibrate the pavers to lock them tight.",
    icon: Wrench,
  },
  {
    step: "07",
    title: "Sealing & Protection (Optional)",
    desc: "We apply commercial-grade breathable acrylic or polyurethane sealers to lock in vibrant color, prevent oil stains, and repel UV degradation.",
    icon: ShieldCheck,
  },
  {
    step: "08",
    title: "Final Walkthrough & Cleanup",
    desc: "We clean the entire area, dress all adjoining lawn edges with topsoil and seed, and walk through with you to guarantee 100% satisfaction.",
    icon: CheckCircle2,
  },
];

/* ── 6 Featured Paver Projects ── */
const PAVER_PORTFOLIO = [
  {
    title: "Natural Stone Retaining Wall & Paver Driveway",
    location: "Cliffwood, NJ",
    category: "Paver Driveway",
    desc: "Interlocking paver driveway with custom natural stone retaining wall and contrasting charcoal soldier border.",
    image: paverDrivewayImg,
  },
  {
    title: "Paver Patio with Built-In Fire Pit",
    location: "Wayne, NJ",
    category: "Outdoor Living",
    desc: "Multi-piece textured paver patio with circular gas fire pit and integrated double-sided seat wall.",
    image: paverPatioImg,
  },
  {
    title: "Interlocking Paver Walkway & Steps",
    location: "Clifton, NJ",
    category: "Front Entryway",
    desc: "Curved front entrance paver walkway with bullnose step treads and low-voltage landscape lighting.",
    image: paverWalkwayImg,
  },
  {
    title: "Commercial Paver Parking & Entrance",
    location: "Hackensack, NJ",
    category: "Commercial Plaza",
    desc: "Heavy-duty 80mm vehicular paver parking lot and ADA-compliant storefront sidewalk installation.",
    image: masonryImg,
  },
  {
    title: "Paver Pool Deck Installation",
    location: "Paramus, NJ",
    category: "Pool Surround",
    desc: "Slip-resistant travertine-style paver pool deck with bullnose coping and integrated perimeter channel drains.",
    image: paverPoolImg,
  },
  {
    title: "Permeable Paver Driveway Installation",
    location: "Ridgewood, NJ",
    category: "Permeable Hardscape",
    desc: "Eco-friendly permeable paver driveway with open-graded crushed stone reservoir managing all stormwater.",
    image: paverDrivewayDetailImg,
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

/* ── 10 Pavers FAQs ── */
const PAVER_FAQS = [
  {
    q: "What types of paver services do you offer?",
    a: "We offer complete interlocking paver driveways, custom patios, front walkways and garden paths, retaining walls and seat walls, paver pool decks, permeable eco-friendly pavers, commercial paver plazas, paver re-leveling and repairs, and professional power washing & sealing.",
  },
  {
    q: "Are you licensed and insured in New Jersey?",
    a: "Yes! MEZIU CONSTRUCTION LLC is fully licensed, insured, and bonded in the State of New Jersey. We carry comprehensive general liability and workers' compensation coverage for your complete peace of mind.",
  },
  {
    q: "How long does a paver installation take?",
    a: "A typical residential paver walkway or small patio takes 2 to 3 days. A full paver driveway or large multi-level patio with retaining walls typically takes 4 to 7 days, weather permitting. We provide a firm timeline during your free estimate.",
  },
  {
    q: "Do you provide free estimates for pavers and driveways?",
    a: "Absolutely! We offer 100% free, no-obligation on-site estimates throughout Cliffwood, NJ, and our entire 40-mile service radius. Luan Meziu will assess your property, take measurements, show material catalogs, and provide a clear written estimate.",
  },
  {
    q: "How long do paver driveways and patios last?",
    a: "When installed with our deep 8 to 12-inch compacted aggregate base and proper drainage, quality interlocking pavers last 25 to 50+ years. Unlike asphalt or poured concrete, individual pavers will not crack from winter frost heaves.",
  },
  {
    q: "Do you offer paver sealing and maintenance?",
    a: "Yes! We provide professional paver cleaning, polymeric sand replenishment, and commercial-grade sealing services. Sealing protects against oil stains, weed growth, de-icing salt damage, and enhances the rich color of your stone.",
  },
  {
    q: "Do you install permeable pavers for drainage issues?",
    a: "Yes! Permeable pavers allow rainwater to filter directly through the joints into an engineered sub-base reservoir, eliminating standing water, puddling, and helping homeowners comply with strict NJ municipal impervious coverage limits.",
  },
  {
    q: "Do you work on commercial paver properties?",
    a: "Yes! We install heavy-duty 80mm vehicular-grade pavers for commercial parking plazas, retail storefronts, corporate entryways, and multi-family condo communities throughout Northern New Jersey.",
  },
  {
    q: "Do you offer emergency paver repairs?",
    a: "Yes, we provide emergency paver repair and trip-hazard leveling services during our regular business hours (Monday through Friday, 7:00 AM – 6:00 PM). Call us immediately at (201) 844-2427 for urgent repairs.",
  },
  {
    q: "Do you speak Spanish?",
    a: "¡Sí! Hablamos español. Founder Luan Meziu and our master hardscape crew are fully bilingual in English and Spanish, ensuring clear and comfortable communication throughout your project.",
  },
];

function PaversDrivewaysPage() {
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
              <span className="text-[#E56E1A] font-bold">Pavers &amp; Driveways</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Hero Text Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200/80 px-4 py-1.5 shadow-sm">
                  <Compass className="h-4 w-4 text-[#E56E1A]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#B85008]">
                    Master Paver &amp; Hardscape Contractors
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
                  Professional <span className="text-[#E56E1A]">Pavers</span> &amp; Driveways
                </h1>

                {/* Sub-headline */}
                <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                  Enhance Your Curb Appeal With Durable, Beautiful Surfaces
                </p>

                {/* Body Text */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Your driveway, patio, and walkways are the first things people see—and they deserve to make a lasting impression. <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong> specializes in custom paver installations that combine beauty, durability, and functionality. From interlocking paver driveways and patios to retaining walls and walkways, we create outdoor surfaces that stand the test of time.
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
                    src={paversHeroImg}
                    alt="Custom interlocking paver driveway and natural stone walls in Cliffwood, NJ"
                    className="w-full h-[400px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Trust Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-[#E56E1A] tracking-wider">Cliffwood, NJ Hardscape Masters</span>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      Interlocking paver driveways, custom patios, retaining walls, and commercial plazas.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── OVERVIEW OF PAVERS & DRIVEWAYS SERVICES ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Image Collage */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                  <img
                    src={paverDrivewayImg}
                    alt="Interlocking paver driveway with natural stone wall"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                    Natural Stone Retaining Wall &amp; Interlocking Paver Driveway
                  </div>
                </div>

                {/* 2 Small Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-2xl font-black text-[#E56E1A]">8-12"</div>
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">Deep Compacted Base</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-2xl font-black text-[#E56E1A]">25+ Yrs</div>
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">Engineered Lifespan</div>
                  </div>
                </div>
              </div>

              {/* Right Narrative Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>Curb Appeal &amp; Structural Durability</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Quality Paver Installations You Can Trust
                </h2>

                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>
                    Your outdoor spaces should be as beautiful and functional as the inside of your home. At <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong>, we specialize in creating stunning paver installations that enhance curb appeal, increase property value, and provide years of durability.
                  </p>
                  <p>
                    As a family-owned business with over 15 years of hands-on experience, we understand that proper installation is the key to long-lasting paver surfaces. From deep base preparation and proper drainage to precise pattern layout and professional finishing, our experienced team ensures every project is built to last. We serve both residential and commercial clients across Cliffwood, NJ, and a 40-mile radius.
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
                      <h4 className="text-xs font-bold text-slate-900">8-12" Laser-Compacted Sub-Base</h4>
                      <p className="text-[11px] text-slate-500">Zero ruts, settling, or water puddling</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Polymeric Sand Joint Locking</h4>
                      <p className="text-[11px] text-slate-500">Repels weeds, ants, and washouts</p>
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

        {/* ── OUR PAVERS & DRIVEWAYS SERVICES (9 DETAILED SECTIONS) ── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                Comprehensive Hardscape Solutions
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Pavers &amp; Driveways Services
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Comprehensive Paver Solutions for Every Need across Cliffwood &amp; New Jersey
              </p>
            </div>

            {/* 9 Detailed Cards Grid */}
            <div className="space-y-12">
              {PAVERS_SERVICES_DATA.map((svc, idx) => {
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

        {/* ── WHY CHOOSE MEZIU FOR PAVERS & DRIVEWAYS? ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                The Meziu Advantage
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Why Choose MEZIU CONSTRUCTION for Your Paver Project?
              </h2>
              <p className="text-lg text-slate-600">
                Deep quarry process base compaction, polymeric sand joint stabilization, and custom architectural artistry.
              </p>
            </div>

            {/* 12 Reason Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_PAVERS.map((item, idx) => {
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

        {/* ── 8-STEP PAVER INSTALLATION PROCESS ── */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-slate-800">
                Proven Hardscape Engineering
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Paver Installation Process
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                From Consultation to Completion—We Do It Right.
              </p>
            </div>

            {/* 8-Step Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PAVER_PROCESS.map((p, idx) => {
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
                        style={{ width: `${(idx + 1) * 12.5}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── PAVER PORTFOLIO GALLERY ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                  Verified Workmanship
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Our Paver Portfolio
                </h2>
                <p className="text-base text-slate-600">
                  Real Projects. Real Quality. Browse examples of our recent paver and driveway projects across Cliffwood, NJ, and New Jersey.
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
              {PAVER_PORTFOLIO.map((proj, idx) => (
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
                We provide expert paver and driveway services within a 40-mile radius of Cliffwood, NJ, including:
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
                Frequently Asked Questions About Pavers &amp; Driveways
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Everything you need to know about our paver sub-base preparation, sealing, lifespan, and timelines.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {PAVER_FAQS.map((faq, idx) => {
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
              <span>Let's Build Your Dream Outdoor Space</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Ready to Enhance Your Property?
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Whether you need a new paver driveway, a beautiful patio, or a retaining wall, <strong className="font-bold text-white">{BUSINESS.name}</strong> is here to help. Contact Luan and our team today for a free on-site estimate.
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
                "{BUSINESS.name} is a family-owned, licensed, and insured paver contractor serving Cliffwood, NJ, and a 40-mile radius since 2009. We are committed to quality craftsmanship, transparency, and customer satisfaction—from the first base layer to the final sealing."
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
