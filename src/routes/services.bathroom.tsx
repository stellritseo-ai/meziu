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
  Bath,
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
  Droplets,
  Lightbulb,
  Palette,
  Wind,
  Shield,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BUSINESS } from "@/lib/site";

// Authentic project assets
import bathroomHeroImg from "@/assets/bathroom.jpg";
import interiorImg from "@/assets/interior.jpg";
import renovationImg from "@/assets/renovation.jpg";

// Gallery assets for bathroom portfolio
import bathroomVanityImg from "@/assets/gallery/471821741_899268768943333_293806620655011432_n.jpg";
import bathroomTileImg from "@/assets/gallery/471820344_899268765610000_5275763543525178002_n.jpg";
import bathroomShowerImg from "@/assets/gallery/471569589_899268722276671_2451168169025015747_n.jpg";
import bathroomComboImg from "@/assets/gallery/471443350_899268758943334_141679608307794421_n.jpg";
import bathroomDetailImg from "@/assets/gallery/471540631_899268785609998_5816875943478852330_n.jpg";
import bathroomModernImg from "@/assets/gallery/471539810_899268755610001_5277995264757783368_n.jpg";

export const Route = createFileRoute("/services/bathroom")({
  component: BathroomRemodelingPage,
});

/* ── 10 Detailed Bathroom Remodeling Services Data ── */
const BATHROOM_SERVICES_DATA = [
  {
    id: "full-bathroom-renovations",
    num: "01",
    title: "Full Bathroom Renovations",
    icon: Bath,
    summary: "A full bathroom renovation transforms your daily routine into a luxurious, spa-like experience.",
    description: "We handle every single trade under one roof—from complete demolition and certified 100% waterproof Schluter membrane installations to custom plumbing, electrical, tile setting, frameless glass, and final finish carpentry.",
    points: [
      { name: "Complete Clean Demolition", detail: "Safely stripping old tile, rotted subfloors, and fixtures with dust containment." },
      { name: "Spatial Layout Optimization", detail: "Expanding shower footprints, relocating toilets, or adding double vanities." },
      { name: "Structural & Wall Modifications", detail: "Framing recessed shower niches, pony walls, pocket doors, and ceiling soffits." },
      { name: "Upgraded Plumbing & Wiring", detail: "High-efficiency drainage, PEX supply lines, and dedicated GFCI circuits." },
      { name: "Turnkey Project Management", detail: "One dedicated contractor overseeing every detail from demo to final polish." },
    ],
    image: bathroomHeroImg,
    alt: "Complete luxury bathroom renovation with walk-in glass shower",
  },
  {
    id: "custom-tile-installation",
    num: "02",
    title: "Custom Tile Installation",
    icon: Layers,
    summary: "Tile defines the visual texture, durability, and waterproof protection of your bathroom.",
    description: "Our master tile setters specialize in intricate layouts, laser-leveled alignment, and flawless mitering. We install porcelain, ceramic, natural marble, glass mosaics, and large-format continuous wall panels.",
    points: [
      { name: "Floor & Wall Tile Surrounds", detail: "Porcelain, marble, travertine, and subway tiles installed with zero lippage." },
      { name: "Custom Shower Niches & Accents", detail: "Built-in recessed shampoo niches with contrasting mosaic tile backings." },
      { name: "Vanity Accent Backsplashes", detail: "Designer herringbone, chevron, and glass mosaic tile behind mirrors." },
      { name: "Large-Format Seamless Tile", detail: "Minimal grout lines creating a sleek, ultra-modern European spa aesthetic." },
      { name: "Schluter Waterproofing System", detail: "Certified vapor-tight membranes preventing hidden moisture and mold." },
    ],
    image: bathroomTileImg,
    alt: "Custom shower tile installation with mosaic accent niche",
  },
  {
    id: "walk-in-showers",
    num: "03",
    title: "Walk-In Shower Installation",
    icon: Droplets,
    summary: "Walk-in showers offer the ultimate combination of modern luxury and effortless accessibility.",
    description: "We custom design frameless glass showers featuring curbless zero-entry floor pans, linear trench drains, built-in teak or quartz benches, thermostatic mixing valves, and overhead rain showers.",
    points: [
      { name: "Frameless Heavy Glass Enclosures", detail: "3/8-inch tempered architectural glass with premium stainless steel hardware." },
      { name: "Zero-Threshold Curbless Entries", detail: "Seamless, trip-free barrier for universal accessibility and modern design." },
      { name: "Linear Trench Drains", detail: "High-flow stainless steel linear drains allowing single-slope large tile floors." },
      { name: "Multi-Function Rain Showers", detail: "Ceiling-mounted rain heads, handheld sprayers, and hydrotherapy body jets." },
      { name: "Built-In Quartz Shower Benches", detail: "Comfortable, heated or standard floating corner and full-width benches." },
    ],
    image: bathroomShowerImg,
    alt: "Walk-in shower with frameless glass and rainfall showerhead",
  },
  {
    id: "bathtub-installation",
    num: "04",
    title: "Bathtub Installation & Replacement",
    icon: Sparkles,
    summary: "A freestanding soaking tub serves as the dramatic sculptural centerpiece of your master suite.",
    description: "Whether you want a deep acrylic freestanding soaking tub, a hydrotherapy whirlpool tub, or want to convert an outdated tub into an expansive walk-in shower, our master plumbers deliver flawless results.",
    points: [
      { name: "Freestanding Soaking Tubs", detail: "Modern minimalist and classic slipper designs with floor-mounted tub fillers." },
      { name: "Hydrotherapy & Air Whirlpools", detail: "Therapeutic heated water jets designed for deep muscle relaxation." },
      { name: "Tub-to-Shower Conversions", detail: "Removing clunky fiberglass tub inserts and building custom walk-in showers." },
      { name: "Alcove & Drop-In Tubs", detail: "Space-efficient bathtubs integrated with tile surrounds and glass bypass doors." },
      { name: "Complete Plumbing Rerouting", detail: "Upgraded waste-and-overflow assemblies and pressure-balanced valves." },
    ],
    image: bathroomComboImg,
    alt: "Freestanding soaking bathtub installation in master bathroom",
  },
  {
    id: "custom-vanities",
    num: "05",
    title: "Custom Vanity & Cabinetry Installation",
    icon: Home,
    summary: "Custom vanities maximize morning efficiency, organization, and architectural beauty.",
    description: "We supply and install solid hardwood freestanding and modern wall-mounted floating vanities. With deep drawer organizers, double sink configurations, and power outlets inside drawers, clutter is eliminated.",
    points: [
      { name: "Modern Floating Vanities", detail: "Wall-hung vanities with integrated LED toe-kick lighting that expand floor space." },
      { name: "Double Sink Master Vanities", detail: "His-and-hers separate grooming zones with ample drawer dividers." },
      { name: "Solid Wood Cabinet Construction", detail: "Dovetail construction, birch boxes, and durable moisture-sealed finishes." },
      { name: "Built-In Linen Towers & Storage", detail: "Matching tall linen cabinetry maximizing vertical bathroom space." },
      { name: "Concealed Soft-Close Hardware", detail: "Heavy-duty glides preventing slammed drawers and cupboard wear." },
    ],
    image: bathroomVanityImg,
    alt: "Double sink custom bathroom vanity with quartz top",
  },
  {
    id: "countertop-installation",
    num: "06",
    title: "Countertop Installation",
    icon: Compass,
    summary: "Bathroom countertops must withstand water, cosmetics, and daily grooming products.",
    description: "We fabricate and install non-porous engineered quartz, natural granite, and honed marble countertops. Every top is digitally templated with undermount sink cutouts and matching 4-inch backsplashes.",
    points: [
      { name: "Non-Porous Engineered Quartz", detail: "Stain, bacteria, and water resistant with elegant marble veining." },
      { name: "Natural Granite & Quartzite", detail: "Durable, heat-resistant natural stone with custom edge profiles." },
      { name: "Honed Italian Carrara Marble", detail: "Timeless luxury stone with soft satin texture and delicate veins." },
      { name: "Undermount Porcelain Sinks", detail: "Clean, seamless silicone-sealed undermount rectangular and oval sinks." },
      { name: "Custom Backsplashes & Sidesplashes", detail: "Matching stone splashes protecting drywall from water splashes." },
    ],
    image: bathroomDetailImg,
    alt: "Quartz bathroom vanity countertop with undermount sink",
  },
  {
    id: "flooring-installation",
    num: "07",
    title: "Bathroom Flooring Installation",
    icon: Grid,
    summary: "Waterproof, slip-resistant bathroom flooring engineered for warmth and safety.",
    description: "We install slip-resistant porcelain tile, natural marble, and luxury vinyl plank over uncoupling waterproof subfloors. Elevate your bathroom with programmable electric radiant floor heating systems.",
    points: [
      { name: "Electric Radiant Heated Floors", detail: "Programmable thermostats delivering cozy warm tile floors on cold mornings." },
      { name: "Slip-Resistant Porcelain Tile", detail: "Matte and textured finishes providing superior traction when wet." },
      { name: "Natural Marble & Slate Floors", detail: "Sealed natural stone tiles with rich organic movement and elegance." },
      { name: "Waterproof Luxury Vinyl Plank (LVP)", detail: "Warm, durable, and 100% waterproof flooring ideal for powder rooms." },
      { name: "Schluter Ditra Waterproof Underlayment", detail: "Uncoupling membrane preventing cracked tiles and subfloor rot." },
    ],
    image: interiorImg,
    alt: "Heated bathroom floor tile installation with Ditra membrane",
  },
  {
    id: "plumbing-fixtures",
    num: "08",
    title: "Plumbing & Fixture Installation",
    icon: Wrench,
    summary: "Precision plumbing and designer fixtures bring reliable performance and jewelry-like shine.",
    description: "From matte black and brushed gold faucets to wall-hung toilets and bidet washlets, we install top-tier plumbing brands (Kohler, Moen, Delta, Grohe) backed by full warranty and code compliance.",
    points: [
      { name: "Widespread & Single-Hole Faucets", detail: "Drip-free ceramic disc valves in matte black, brushed nickel, and brass." },
      { name: "High-Efficiency Comfort Height Toilets", detail: "Dual-flush, skirted trapways, and soft-closing elongated seats." },
      { name: "Luxury Smart Bidet Toilets", detail: "Heated seats, warm air drying, and hands-free automatic flushing." },
      { name: "Thermostatic Shower Mixing Valves", detail: "Anti-scald temperature memory valves delivering consistent water heat." },
      { name: "Emergency Shut-Off Valves", detail: "Quarter-turn ball valves for rapid isolation and leak prevention." },
    ],
    image: bathroomModernImg,
    alt: "Modern brushed brass bathroom faucet and fixture installation",
  },
  {
    id: "lighting-ventilation",
    num: "09",
    title: "Lighting & Ventilation",
    icon: Wind,
    summary: "Flattering shadow-free vanity lighting and whisper-quiet moisture ventilation.",
    description: "Proper ventilation is vital for preventing mildew and sheetrock decay in NJ bathrooms. We install ultra-quiet Panasonic exhaust fans with humidity sensors, along with dimmable LED vanity sconces and wet-rated shower cans.",
    points: [
      { name: "Shadow-Free LED Vanity Sconces", detail: "Eye-level side lighting providing ideal illumination for makeup and shaving." },
      { name: "Wet-Rated Recessed Shower Lights", detail: "Waterproof sealed LED can lights directly over showers and soaking tubs." },
      { name: "Whisper-Quiet Humidity Sensing Fans", detail: "Auto-detecting exhaust fans venting moisture outside through dedicated ducting." },
      { name: "Heated Towel Warmers", detail: "Hardwired wall-mounted warmers delivering warm, dry towels after every bath." },
      { name: "Smart Nightlights & Dimmer Controls", detail: "Subtle low-lumen night lighting and multi-zone dimming controls." },
    ],
    image: bathroomHeroImg,
    alt: "Bathroom vanity lighting, lighted LED mirror, and quiet exhaust fan",
  },
  {
    id: "painting-finishing",
    num: "10",
    title: "Bathroom Painting & Finishing",
    icon: Palette,
    summary: "Mildew-resistant washable paints, custom millwork, and immaculate finishing details.",
    description: "The bathroom environment demands specialized moisture-resistant primers and washable antimicrobial paint formulations. We complete your retreat with custom window casing, crown molding, and crystal-clear silicone seals.",
    points: [
      { name: "Mildew-Proof Antimicrobial Paints", detail: "Benjamin Moore Aura Bath & Spa paints that resist moisture and steam." },
      { name: "Custom Crown & Baseboard Trim", detail: "Moisture-resistant composite and PVC millwork that will never rot or warp." },
      { name: "Microbe-Resistant 100% Silicone Seals", detail: "Color-matched silicone sealing all vanity tops, tubs, and glass corners." },
      { name: "Vanity Cabinet Spray Painting", detail: "Factory-finish lacquer spraying for vanity updates and color changes." },
      { name: "Meticulous Final Punch-List", detail: "Every fixture polished, mirror cleaned, and hardware calibrated to perfection." },
    ],
    image: renovationImg,
    alt: "Flawlessly painted bathroom with clean trim and silicone seals",
  },
];

/* ── 11 Why Choose Meziu Advantages ── */
const WHY_CHOOSE_BATHROOM = [
  {
    title: "15+ Years Hands-On Experience",
    desc: "Master tile setters, plumbers, and carpenters with a dedication to perfection.",
    icon: Award,
  },
  {
    title: "Family-Owned Since 2009",
    desc: "Direct accountability with founder Luan Meziu personally overseeing your project.",
    icon: Home,
  },
  {
    title: "Licensed, Insured & Bonded",
    desc: "Full compliance with New Jersey DCA building regulations and comprehensive coverage.",
    icon: ShieldCheck,
  },
  {
    title: "Full-Service Turnkey Remodel",
    desc: "We manage every trade: plumbing, electrical, tile, glass, cabinetry, and painting.",
    icon: Wrench,
  },
  {
    title: "Schluter Waterproofing Warranty",
    desc: "Certified moisture barriers and leak-proof shower pan installations.",
    icon: Shield,
  },
  {
    title: "Custom Tailored Designs",
    desc: "Custom 3D layouts, curbless entries, and vanity configurations for your space.",
    icon: Compass,
  },
  {
    title: "100% Transparent Pricing",
    desc: "Detailed written line-item proposals with fixed allowances and zero hidden fees.",
    icon: DollarSign,
  },
  {
    title: "Clean & Respectful Job Sites",
    desc: "Zipper dust containment, carpet runners, and daily cleanups to protect your home.",
    icon: CheckCircle2,
  },
  {
    title: "Residential & Commercial",
    desc: "Expertise in master suites, hall baths, powder rooms, and commercial facilities.",
    icon: Building2,
  },
  {
    title: "Bilingual English & Spanish",
    desc: "Crystal-clear communication at every step — ¡Hablamos español con orgullo!",
    icon: Languages,
  },
  {
    title: "40-Mile Service Radius",
    desc: "Proudly serving Cliffwood, Monmouth County, Middlesex County, and beyond.",
    icon: MapPin,
  },
];

/* ── 5 Step Bathroom Process Roadmap ── */
const BATHROOM_PROCESS = [
  {
    step: "01",
    title: "Free On-Site Consultation",
    desc: "We visit your home to assess your bathroom, inspect plumbing rough-ins, take measurements, discuss your dream layout, and provide a clear, no-obligation estimate.",
    icon: MapPin,
  },
  {
    step: "02",
    title: "Design & Material Selection",
    desc: "We help you select the ideal tile, custom vanities, quartz countertops, soaking tubs, frameless glass styles, and designer plumbing fixtures.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Demolition & Moisture Inspection",
    desc: "We seal off the work area with dust barriers, carefully strip old fixtures and tile, inspect framing and subfloors for moisture damage, and make structural repairs.",
    icon: Grid,
  },
  {
    step: "04",
    title: "Waterproofing & Construction",
    desc: "We install Schluter waterproof shower membranes, rough-in plumbing and electrical, lay laser-aligned tile, fabricate vanity tops, and hang frameless glass.",
    icon: Hammer,
  },
  {
    step: "05",
    title: "Final Walkthrough & Finishing",
    desc: "We install mirrors, towel bars, test all water pressure and drainage, thoroughly clean the entire space, and walk through with you to ensure 100% satisfaction.",
    icon: CheckCircle2,
  },
];

/* ── 6 Featured Bathroom Projects ── */
const BATHROOM_PORTFOLIO = [
  {
    title: "Luxury Master Bathroom with Walk-In Shower",
    location: "Paramus, NJ",
    category: "Master Bathroom",
    desc: "Custom curbless walk-in shower with dual rain heads, linear drain, and frameless glass enclosure.",
    image: bathroomHeroImg,
  },
  {
    title: "Modern Bathroom with Double Vanity",
    location: "Cliffwood, NJ",
    category: "Custom Vanity",
    desc: "Solid oak double floating vanity with quartz top, undermount sinks, and matte black fixtures.",
    image: bathroomVanityImg,
  },
  {
    title: "Spa-Style Bathroom with Soaking Tub",
    location: "Ridgewood, NJ",
    category: "Freestanding Tub",
    desc: "Deep freestanding acrylic soaking tub with floor-mounted brass filler and heated porcelain floor.",
    image: bathroomComboImg,
  },
  {
    title: "Small Bathroom Makeover & Storage",
    location: "Clifton, NJ",
    category: "Space Optimization",
    desc: "Compact hall bath renovation maximizing storage with recessed medicine cabinet and glass bypass doors.",
    image: bathroomDetailImg,
  },
  {
    title: "Tile Shower with Glass Enclosure",
    location: "Wayne, NJ",
    category: "Custom Tile",
    desc: "Floor-to-ceiling marble subway tile shower with herringbone accent niche and frameless door.",
    image: bathroomShowerImg,
  },
  {
    title: "Elegant Bathroom with Marble Finishes",
    location: "Hackensack, NJ",
    category: "Marble Finishes",
    desc: "Full Carrara marble floor and wall tile installation with brushed gold fixtures and heated towel bar.",
    image: bathroomTileImg,
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

/* ── 10 Bathroom FAQs ── */
const BATHROOM_FAQS = [
  {
    q: "What types of bathroom remodeling services do you offer?",
    a: "We offer complete full bathroom renovations, custom tile installation, walk-in showers with frameless glass, freestanding bathtub installations and tub-to-shower conversions, custom vanities, quartz/granite countertops, radiant heated flooring, high-efficiency plumbing fixtures, exhaust ventilation, and painting.",
  },
  {
    q: "Are you licensed and insured in New Jersey?",
    a: "Yes! MEZIU CONSTRUCTION LLC is fully licensed, insured, and bonded in the State of New Jersey. We carry comprehensive general liability and workers' compensation insurance for your total peace of mind.",
  },
  {
    q: "How long does a typical bathroom remodel take?",
    a: "A standard hall bathroom or powder room remodel typically takes 1 to 2 weeks. A comprehensive master bathroom overhaul with custom tile, walk-in shower, and plumbing relocations takes approximately 2 to 4 weeks. We provide a firm schedule during your estimate.",
  },
  {
    q: "Do you provide free estimates for bathroom remodeling?",
    a: "Absolutely! We provide 100% free, no-obligation on-site evaluations throughout Cliffwood, NJ, and our entire 40-mile service radius. Luan Meziu will assess your space, discuss your design vision, and provide a clear written estimate.",
  },
  {
    q: "Do you handle all trades (plumbing, electrical, tile setting)?",
    a: "Yes! We manage every single aspect of your bathroom remodel—demolition, rough plumbing, electrical wiring, tile installation, drywall, cabinetry, countertops, glass, and painting. You work with only one accountable master contractor.",
  },
  {
    q: "Can you work with my existing bathroom layout?",
    a: "Yes. If your current plumbing layout works well, we can keep the footprint while replacing tile, vanity, shower, and fixtures for maximum cost-efficiency. If you want a larger shower or double vanity, we can relocate walls and plumbing.",
  },
  {
    q: "Do you build curbless walk-in showers for accessibility?",
    a: "Yes! We specialize in zero-threshold curbless walk-in showers, custom bench seating, linear drains, and securely anchored designer grab bars for both modern elegance and aging-in-place accessibility.",
  },
  {
    q: "Do you work on commercial bathroom properties?",
    a: "Yes! We provide complete commercial bathroom remodeling services for office buildings, retail storefronts, restaurants, and multi-family properties throughout Northern New Jersey.",
  },
  {
    q: "Do you offer emergency repair services?",
    a: "Yes, we provide emergency bathroom plumbing and leak repair services during our regular business hours (Monday through Friday, 7:00 AM – 6:00 PM). Call us immediately at (201) 844-2427 for urgent leaks or pipe bursts.",
  },
  {
    q: "Do you speak Spanish?",
    a: "¡Sí! Hablamos español. Founder Luan Meziu and our master remodeling team are bilingual in English and Spanish, ensuring clear and comfortable communication throughout your project.",
  },
];

function BathroomRemodelingPage() {
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
              <span className="text-[#E56E1A] font-bold">Bathroom Remodeling</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Hero Text Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200/80 px-4 py-1.5 shadow-sm">
                  <Bath className="h-4 w-4 text-[#E56E1A]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#B85008]">
                    Master Bathroom Remodeling &amp; Tile Contractors
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
                  Expert <span className="text-[#E56E1A]">Bathroom</span> Remodeling
                </h1>

                {/* Sub-headline */}
                <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                  Turn Your Bathroom Into a Private Retreat
                </p>

                {/* Body Text */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Your bathroom should be more than just functional—it should be a sanctuary where you start and end each day feeling refreshed. <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong> specializes in creating beautiful, spa-like bathrooms that combine luxury with practicality. From custom tile showers and soaking tubs to complete layout redesigns, we bring your dream bathroom to life.
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
                    src={bathroomHeroImg}
                    alt="Spa-like master bathroom with glass walk-in shower and custom tile"
                    className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Trust Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-[#E56E1A] tracking-wider">Cliffwood, NJ Bathroom Masters</span>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      Custom walk-in showers, soaking tubs, double vanities, and waterproof tile systems.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── OVERVIEW OF BATHROOM REMODELING ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Image Collage */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                  <img
                    src={bathroomShowerImg}
                    alt="Custom tile walk-in shower installation"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                    Frameless Glass Shower &amp; Schluter Waterproofing
                  </div>
                </div>

                {/* 2 Small Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-2xl font-black text-[#E56E1A]">100%</div>
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">Waterproof Certified</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-2xl font-black text-[#E56E1A]">2-4 Wks</div>
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">Average Completion</div>
                  </div>
                </div>
              </div>

              {/* Right Narrative Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>Private Sanctuary</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Bathroom Remodeling Done Right
                </h2>

                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>
                    Your bathroom is one of the most important spaces in your home—a place for relaxation, rejuvenation, and daily routines. At <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong>, we understand the value of a well-designed bathroom, and we're passionate about creating spaces that are both beautiful and functional.
                  </p>
                  <p>
                    As a family-owned business with over 15 years of hands-on experience, we specialize in transforming outdated, inefficient bathrooms into stunning, spa-like retreats. Whether you want a complete bathroom overhaul, a modern update, or simply better use of space, our experienced team handles every aspect of the project—from design and material selection to demolition, construction, and final finishing. We serve both residential and commercial clients across Cliffwood, NJ, and a 40-mile radius.
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
                      <h4 className="text-xs font-bold text-slate-900">Schluter Waterproof System</h4>
                      <p className="text-[11px] text-slate-500">100% leak-proof pan and wall membranes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Curbless &amp; Frameless Glass</h4>
                      <p className="text-[11px] text-slate-500">Zero-threshold accessibility and heavy glass</p>
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

        {/* ── OUR BATHROOM REMODELING SERVICES (10 DETAILED SECTIONS) ── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                Comprehensive Bathroom Solutions
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Bathroom Remodeling Services
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Comprehensive Solutions for Every Bathroom across Cliffwood &amp; New Jersey
              </p>
            </div>

            {/* 10 Detailed Cards Grid */}
            <div className="space-y-12">
              {BATHROOM_SERVICES_DATA.map((svc, idx) => {
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

        {/* ── WHY CHOOSE MEZIU FOR BATHROOM REMODELING? ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                The Meziu Advantage
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Why Choose MEZIU CONSTRUCTION for Your Bathroom Remodel?
              </h2>
              <p className="text-lg text-slate-600">
                Master waterproofing certification, luxury finishes, and meticulous trade management.
              </p>
            </div>

            {/* 11 Reason Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_BATHROOM.map((item, idx) => {
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

        {/* ── 5-STEP BATHROOM REMODELING PROCESS ── */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-slate-800">
                Proven Methodology
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Bathroom Remodeling Process
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                From Vision to Reality—We Do It Right.
              </p>
            </div>

            {/* Step Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {BATHROOM_PROCESS.map((p, idx) => {
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

        {/* ── BATHROOM PORTFOLIO GALLERY ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                  Verified Workmanship
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Our Bathroom Portfolio
                </h2>
                <p className="text-base text-slate-600">
                  Real Projects. Real Quality. Browse examples of our recent bathroom remodeling projects across Cliffwood, NJ, and New Jersey.
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
              {BATHROOM_PORTFOLIO.map((proj, idx) => (
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
                We provide expert bathroom remodeling services within a 40-mile radius of Cliffwood, NJ, including:
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
                Frequently Asked Questions About Bathroom Remodeling
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Everything you need to know about our bathroom waterproofing, frameless glass, and project timelines.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {BATHROOM_FAQS.map((faq, idx) => {
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
              <span>Let's Create Your Spa Retreat</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Ready to Transform Your Bathroom?
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Whether you want a complete bathroom overhaul, a spa-like walk-in shower, or a simple update, <strong className="font-bold text-white">{BUSINESS.name}</strong> is here to help. Contact Luan and our team today for a free on-site estimate.
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
                "{BUSINESS.name} is a family-owned, licensed, and insured bathroom remodeling contractor serving Cliffwood, NJ, and a 40-mile radius since 2009. We are committed to quality craftsmanship, transparency, and customer satisfaction—from the first design to the final finishing touch."
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
