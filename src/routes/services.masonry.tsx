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
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCta } from "@/components/site/FloatingCta";
import { BUSINESS } from "@/lib/site";

// Authentic project assets
import masonryHeroImg from "@/assets/masonry.jpg";
import stoneworkImg from "@/assets/stonework.jpg";
import concreteImg from "@/assets/concrete.jpg";
import paversImg from "@/assets/pavers.jpg";
import commercialImg from "@/assets/commercial.jpg";
import renovationImg from "@/assets/renovation.jpg";

// Gallery assets for masonry portfolio
import retainingWallImg from "@/assets/gallery/471341388_899901622213381_7994038038964625773_n.jpg";
import chimneyImg from "@/assets/gallery/471842430_901602668709943_8316863561420339230_n.jpg";
import paverDrivewayImg from "@/assets/gallery/471781894_899901475546729_2311965253372034254_n.jpg";
import stoneStepsImg from "@/assets/gallery/471639870_901036328766577_5954401997882714411_n.jpg";
import commercialMasonryImg from "@/assets/gallery/472025987_901602768709933_2491581905375914125_n.jpg";
import accentWallImg from "@/assets/gallery/471969025_901036092099934_5228165584842414421_n.jpg";

export const Route = createFileRoute("/services/masonry")({
  component: MasonryServicesPage,
});

/* ── 8 Detailed Masonry Services Data ── */
const MASONRY_SERVICES_DATA = [
  {
    id: "brickwork-stonework",
    num: "01",
    title: "Brickwork & Stonework",
    icon: Layers,
    summary: "Brick and stone are timeless building materials that add character, durability, and value to any property.",
    description: "Our skilled masons specialize in a wide range of precision brick and stone applications. Every project is meticulously engineered and designed to complement your property's architecture while providing lasting structural integrity in New Jersey weather.",
    points: [
      { name: "Brick Walls & Facades", detail: "New structural construction, precision repointing, and historic restoration." },
      { name: "Stone Veneers", detail: "Natural and manufactured architectural stone for interior and exterior applications." },
      { name: "Stone Walkways & Pathways", detail: "Beautiful, high-traffic walkways that dramatically elevate curb appeal." },
      { name: "Stone Steps & Entryways", detail: "Welcoming, frost-resistant front entry steps built to impress." },
      { name: "Architectural Stone Details", detail: "Custom stone craftsmanship for columns, keystones, arches, and accents." },
    ],
    image: stoneworkImg,
    alt: "Precision brickwork and natural stone installation by Meziu Construction",
  },
  {
    id: "retaining-walls",
    num: "02",
    title: "Retaining Walls",
    icon: ShieldCheck,
    summary: "Retaining walls serve both vital structural and stunning aesthetic purposes on sloped properties.",
    description: "They prevent soil erosion, manage stormwater runoff, and create usable tiered outdoor living spaces. We carefully plan drainage systems, geogrid reinforcement, and deep gravel foundation preparation to ensure your retaining wall remains stable for decades.",
    points: [
      { name: "Natural Stone Retaining Walls", detail: "Rustic, organic boulder and fieldstone walls that blend into your landscape." },
      { name: "Interlocking Concrete Block Walls", detail: "Engineered high-capacity systems for superior load-bearing strength." },
      { name: "Segmental Retaining Walls", detail: "Architectural tiered walls designed for maximum stability and visual depth." },
      { name: "Subsurface Drainage Systems", detail: "Perforated pipe and crushed stone drainage preventing hydraulic pressure buildup." },
    ],
    image: retainingWallImg,
    alt: "Completed natural stone retaining wall in Cliffwood NJ",
  },
  {
    id: "chimney-repair",
    num: "03",
    title: "Chimney Repair & Rebuilding",
    icon: Flame,
    summary: "A damaged chimney is not only unsightly but also a severe fire and water penetration hazard.",
    description: "Our master masonry team specializes in complete chimney evaluations, structural restoration, and weatherproofing. We ensure your chimney is safe, airtight, and built to withstand freezing winters and heavy rainfall.",
    points: [
      { name: "Chimney Inspection & Assessment", detail: "Thorough multi-point evaluation of structural integrity and flashing." },
      { name: "Brick & Mortar Repair (Tuckpointing)", detail: "Grinding out degraded mortar and repointing with high-durability mix." },
      { name: "Chimney Rebuilding", detail: "Complete reconstruction from the roofline or foundation up to code." },
      { name: "Crown & Cap Repair", detail: "Poured concrete crowns and stainless steel caps preventing water intrusion." },
      { name: "Chimney Liner Installation", detail: "Flue liner restoration enhancing draft efficiency and fire safety." },
    ],
    image: chimneyImg,
    alt: "Brick chimney repair and restoration in Passaic County NJ",
  },
  {
    id: "concrete-masonry",
    num: "04",
    title: "Concrete Masonry",
    icon: Grid,
    summary: "Concrete is the foundation of modern construction, demanding exact mix ratios and reinforcement.",
    description: "Our crew brings extensive experience in all aspects of residential and commercial concrete masonry. We use premium-grade concrete and rebar reinforcement techniques to ensure every pour meets highest load-bearing standards.",
    points: [
      { name: "Concrete Foundations & Footings", detail: "Laser-leveled, reinforced, and 100% compliant with NJ building codes." },
      { name: "Concrete Slabs & Floors", detail: "Monolithic pours for garages, basements, patios, and commercial bays." },
      { name: "Concrete Steps & Walkways", detail: "Broom-finished, slip-resistant entry points built for safety." },
      { name: "Concrete Retaining Walls", detail: "Poured structural walls engineered for extreme soil retention." },
      { name: "Stamped & Decorative Concrete", detail: "Custom colored patterns mimicking natural slate, brick, or cobblestone." },
    ],
    image: concreteImg,
    alt: "Concrete foundation and structural flatwork pour",
  },
  {
    id: "stone-walls-accents",
    num: "05",
    title: "Stone Walls & Accents",
    icon: Sparkles,
    summary: "Stone walls add timeless organic beauty and permanent market value to any home or estate.",
    description: "Whether you want to create a rustic garden wall, outdoor living partition, or an elegant indoor architectural fireplace, our masons work with curated natural granite, limestone, bluestone, and manufactured veneers.",
    points: [
      { name: "Garden & Landscape Walls", detail: "Low-profile stone borders defining gardens, courtyards, and terraces." },
      { name: "Interior & Exterior Accent Walls", detail: "Dramatic stone feature walls that become the focal point of the room." },
      { name: "Fireplace Stonework", detail: "Stunning floor-to-ceiling stone surrounds and hearths for indoor & outdoor living." },
      { name: "Column & Pier Wraps", detail: "Heavy stone cladding for porch columns, gate posts, and mailbox pillars." },
      { name: "Retaining Wall Caps & Coping", detail: "Thermal-finish bluestone and rock-faced caps for the perfect finish." },
    ],
    image: accentWallImg,
    alt: "Decorative stone accent wall and custom stonework",
  },
  {
    id: "paver-installation",
    num: "06",
    title: "Paver Installation",
    icon: Compass,
    summary: "Interlocking paver driveways, patios, and walkways combine extreme durability with rich design options.",
    description: "Our certified installation methodology emphasizes deep excavation, compacted aggregate sub-bases, geotextile stabilization fabrics, and polymeric joint sand to prevent shifting, settling, and weeds.",
    points: [
      { name: "Paver Patios & Outdoor Living", detail: "Custom entertainment spaces with integrated fire pits and sitting walls." },
      { name: "Heavy-Duty Paver Driveways", detail: "Vehicle-rated interlocking pavers that resist oil stains and freeze-thaw cycles." },
      { name: "Paver Walkways & Paths", detail: "Curved and linear walkways providing safe, elegant navigation." },
      { name: "Pool Decks & Surrounds", detail: "Cool-touch, slip-resistant pavers for safe poolside leisure." },
      { name: "Paver Edging & Soldier Borders", detail: "Concrete-reinforced restraint borders ensuring zero lateral movement." },
    ],
    image: paverDrivewayImg,
    alt: "Paver driveway and patio installation in Wayne NJ",
  },
  {
    id: "restoration-repair",
    num: "07",
    title: "Masonry Restoration & Repair",
    icon: Wrench,
    summary: "Time, freeze-thaw cycles, and water intrusion take a toll on aging brick and mortar structures.",
    description: "Our specialized restoration services breathe new life into historic and weathered properties. We carefully match existing historic mortar color, aggregate sizing, and brick textures to maintain architectural authenticity.",
    points: [
      { name: "Precision Tuckpointing", detail: "Raking out compromised joints and replacing with flexible, durable mortar." },
      { name: "Individual Brick Replacement", detail: "Surgically extracting spalled or cracked bricks and installing exact matches." },
      { name: "Stone Surface Repair", detail: "Patching, re-anchoring, and resurfacing delaminated stone elements." },
      { name: "Masonry Waterproofing & Silane Sealing", detail: "Breathable water-repellent sealants preventing future spalling." },
      { name: "Structural Foundation Stabilization", detail: "Underpinning, crack injection, and wall reinforcement for safety." },
    ],
    image: masonryHeroImg,
    alt: "Masonry restoration and tuckpointing in progress",
  },
  {
    id: "commercial-masonry",
    num: "08",
    title: "Commercial Masonry",
    icon: Building2,
    summary: "We provide comprehensive, code-compliant masonry services for Northern NJ commercial properties.",
    description: "From retail storefront facades to warehouse load-bearing block walls, we understand the strict scheduling, safety protocols (OSHA), and durability requirements needed for commercial construction.",
    points: [
      { name: "Storefront & Retail Masonry", detail: "Modern stone veneer and brick facades that attract customers." },
      { name: "Office & Industrial Buildings", detail: "Structural CMU block construction, elevator shafts, and fire separation walls." },
      { name: "Commercial Retaining Walls", detail: "Heavy-duty civil retaining structures for parking facilities and grade changes." },
      { name: "Parking Lot Concrete Curbing", detail: "Durable extruded and poured concrete curbs resistant to plow damage." },
      { name: "Tenant Fit-Outs & Improvements", detail: "Interior masonry modifications, opening creation, and structural lintel installs." },
    ],
    image: commercialMasonryImg,
    alt: "Commercial masonry and storefront build-out in Hackensack NJ",
  },
];

/* ── 10 Why Choose Meziu Advantages ── */
const WHY_CHOOSE_MASONRY = [
  {
    title: "15+ Years Hands-On Experience",
    desc: "Master masons with deep trade expertise and an uncompromising passion for craft.",
    icon: Award,
  },
  {
    title: "Family-Owned Since 2009",
    desc: "Direct accountability with founder Luan Meziu personally overseeing your job.",
    icon: Home,
  },
  {
    title: "Licensed, Insured & Bonded",
    desc: "Fully compliant with New Jersey DCA regulations and comprehensive liability coverage.",
    icon: ShieldCheck,
  },
  {
    title: "Premium Grade Materials",
    desc: "We source only genuine natural stones, high-density pavers, and engineered mortar mixes.",
    icon: Sparkles,
  },
  {
    title: "Custom Tailored Designs",
    desc: "Every wall, patio, and entryway is custom designed to match your home's unique architecture.",
    icon: Compass,
  },
  {
    title: "100% Transparent Pricing",
    desc: "Detailed line-item proposals with zero hidden fees or surprise change orders.",
    icon: DollarSign,
  },
  {
    title: "Clean & Respectful Job Sites",
    desc: "Daily site clean-up, turf protection, and utmost respect for your property.",
    icon: CheckCircle2,
  },
  {
    title: "Residential & Commercial",
    desc: "Fully equipped for both intimate home hardscapes and heavy commercial builds.",
    icon: Building2,
  },
  {
    title: "Bilingual English & Spanish",
    desc: "Clear, seamless communication at every step — ¡Hablamos español con orgullo!",
    icon: Languages,
  },
  {
    title: "40-Mile Service Radius",
    desc: "Proudly serving Cliffwood, Monmouth County, Middlesex County, and beyond.",
    icon: MapPin,
  },
];

/* ── 5 Step Process Roadmap ── */
const MASONRY_PROCESS = [
  {
    step: "01",
    title: "Free On-Site Consultation",
    desc: "We visit your property to evaluate grade levels, take laser measurements, discuss your aesthetic vision, and provide expert recommendations with a detailed, no-obligation estimate.",
    icon: MapPin,
  },
  {
    step: "02",
    title: "Design & Material Selection",
    desc: "We help you select the ideal materials—natural stone, classic brick, segmental blocks, or pavers. We provide texture and color samples that match your home's palette.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Preparation & Foundation",
    desc: "Proper preparation is 80% of long-term masonry success. We excavate below the frost line, compact aggregate bases, and install engineered drainage systems.",
    icon: Grid,
  },
  {
    step: "04",
    title: "Expert Masonry Construction",
    desc: "Our skilled masons bring your vision to life. Using laser levels, tight string lines, and proper bonding techniques, every brick, stone, and paver is set with extreme precision.",
    icon: Hammer,
  },
  {
    step: "05",
    title: "Quality Inspection & Walkthrough",
    desc: "We perform a thorough multi-point quality check, acid wash or clean the masonry surfaces, and walk through the completed project with you to ensure 100% satisfaction.",
    icon: CheckCircle2,
  },
];

/* ── 6 Featured Masonry Projects ── */
const MASONRY_PORTFOLIO = [
  {
    title: "Natural Stone Retaining Wall",
    location: "Cliffwood, NJ",
    category: "Retaining Walls",
    desc: "Heavy-duty natural fieldstone retaining wall with integrated drainage and stone steps.",
    image: retainingWallImg,
  },
  {
    title: "Brick Chimney Repair & Tuckpointing",
    location: "Passaic County, NJ",
    category: "Chimney Repair",
    desc: "Complete chimney rebuild from roofline with poured concrete crown and custom lead flashing.",
    image: chimneyImg,
  },
  {
    title: "Interlocking Paver Driveway",
    location: "Wayne, NJ",
    category: "Paver Installation",
    desc: "Commercial-grade interlocking paver driveway with dark soldier borders and crushed stone base.",
    image: paverDrivewayImg,
  },
  {
    title: "Stone Walkway & Front Entry Steps",
    location: "Clifton, NJ",
    category: "Brickwork & Stonework",
    desc: "Thermal bluestone treads over natural stone veneer risers with curved landing.",
    image: stoneStepsImg,
  },
  {
    title: "Commercial Storefront Masonry",
    location: "Hackensack, NJ",
    category: "Commercial Masonry",
    desc: "Modern stone veneer facade and reinforced concrete curbing for retail business.",
    image: commercialMasonryImg,
  },
  {
    title: "Decorative Stone Accent Wall",
    location: "Paramus, NJ",
    category: "Stone Walls & Accents",
    desc: "Interior floor-to-ceiling ledger stone accent wall with ambient uplighting.",
    image: accentWallImg,
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

/* ── 8 Masonry FAQs ── */
const MASONRY_FAQS = [
  {
    q: "What types of masonry services do you offer?",
    a: "We offer a comprehensive spectrum of masonry solutions, including brickwork and facades, natural and manufactured stone veneer, structural retaining walls, chimney repair and rebuilding, concrete masonry foundations, paver driveways and patios, historic masonry restoration/tuckpointing, and commercial masonry build-outs.",
  },
  {
    q: "Are you licensed and insured in New Jersey?",
    a: "Yes! MEZIU CONSTRUCTION LLC is fully licensed by the State of New Jersey, bonded, and backed by comprehensive general liability and workers' compensation insurance for all residential and commercial masonry projects.",
  },
  {
    q: "Do you provide free estimates for masonry work?",
    a: "Absolutely! We offer 100% free, no-obligation on-site evaluations throughout Cliffwood, NJ, and our entire 40-mile service radius. Luan Meziu will visit your property, take precise measurements, and provide a clear, transparent written estimate.",
  },
  {
    q: "How long does a typical masonry project take?",
    a: "Project timelines depend on the scope, materials, and weather conditions. A chimney repair or small stone accent wall may take 1–3 days, while an extensive retaining wall system or paver driveway typically takes 4–7 business days. We provide a firm schedule during your estimate.",
  },
  {
    q: "Do you work on commercial masonry projects?",
    a: "Yes! We provide complete commercial masonry services for retail storefronts, office complexes, industrial warehouses, parking lot curbing, and commercial retaining walls throughout Northern New Jersey.",
  },
  {
    q: "What materials do you use for stone walls and pavers?",
    a: "We use only premium-grade materials from reputable suppliers, including natural fieldstone, granite, bluestone, high-density architectural pavers, ASTM-certified bricks, and high-strength Portland mortar mixes specifically formulated for New Jersey's freeze-thaw cycles.",
  },
  {
    q: "Do you offer emergency masonry repairs?",
    a: "Yes. We provide emergency masonry repair services during our regular business hours (Monday through Friday, 7:00 AM – 6:00 PM). Call us immediately at (201) 844-2427 for urgent chimney collapse hazards, structural wall cracking, or storm-damaged masonry.",
  },
  {
    q: "Do you speak Spanish?",
    a: "¡Sí! Hablamos español. Founder Luan Meziu and our core crew are bilingual in English and Spanish, ensuring crystal-clear communication throughout your project.",
  },
];

function MasonryServicesPage() {
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
              <span className="text-[#E56E1A] font-bold">Masonry Services</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Hero Text Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200/80 px-4 py-1.5 shadow-sm">
                  <Layers className="h-4 w-4 text-[#E56E1A]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#B85008]">
                    Master Masonry &amp; Stonework Contractors
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
                  Expert <span className="text-[#E56E1A]">Masonry</span> Services
                </h1>

                {/* Sub-headline */}
                <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                  Built to Last. Crafted to Impress.
                </p>

                {/* Body Text */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  From beautiful stone walls and brickwork to durable foundations and structural repairs, <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong> delivers exceptional masonry services across Cliffwood, NJ, and New Jersey. Our experienced team combines old-world craftsmanship with modern techniques to create masonry that stands the test of time.
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
                    src={masonryHeroImg}
                    alt="Master mason laying brick and structural stonework"
                    className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Trust Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-[#E56E1A] tracking-wider">Cliffwood, NJ Master Masons</span>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      Over 500+ masonry and stone projects completed across Northern New Jersey.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── OVERVIEW OF MASONRY SERVICES (WHO WE ARE & QUALITY PROMISE) ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Image Collage */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                  <img
                    src={stoneworkImg}
                    alt="Quality masonry and stone craftsmanship"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                    Natural Stone Retaining Wall &amp; Granite Work
                  </div>
                </div>

                {/* 2 Small Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-2xl font-black text-[#E56E1A]">2009</div>
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">Serving NJ Since</div>
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
                  <span>Unrivaled Craftsmanship</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Quality Masonry You Can Trust
                </h2>

                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>
                    At <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong>, we understand that masonry is more than just stacking bricks or stones—it's an art form that requires precision, skill, and experience. As a family-owned business with over 15 years of hands-on experience, we take pride in delivering masonry work that is both structurally sound and visually stunning.
                  </p>
                  <p>
                    Whether you need a new retaining wall, brick chimney repair, stone veneer installation, or a complete masonry foundation, our master craftsmen use premium materials and proven techniques to ensure lasting results. We serve both residential and commercial clients across Cliffwood, NJ, and a 40-mile radius.
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
                      <h4 className="text-xs font-bold text-slate-900">Custom Architectural Design</h4>
                      <p className="text-[11px] text-slate-500">Tailored to your property's specific aesthetic</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Engineered Structural Bases</h4>
                      <p className="text-[11px] text-slate-500">Sub-base compaction preventing settling</p>
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

        {/* ── OUR MASONRY SERVICES LIST (8 DETAILED SECTIONS) ── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                Comprehensive Trade Capabilities
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Masonry Services
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Comprehensive Masonry Solutions for Every Need across Cliffwood &amp; New Jersey
              </p>
            </div>

            {/* 8 Detailed Cards Grid */}
            <div className="space-y-12">
              {MASONRY_SERVICES_DATA.map((svc, idx) => {
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

        {/* ── WHY CHOOSE MEZIU FOR MASONRY? ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                The Meziu Advantage
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Why Choose MEZIU CONSTRUCTION for Your Masonry Project?
              </h2>
              <p className="text-lg text-slate-600">
                A legacy of honest craftsmanship, transparent pricing, and unwavering structural standards.
              </p>
            </div>

            {/* 10 Reason Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_MASONRY.map((item, idx) => {
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

        {/* ── 5-STEP MASONRY PROCESS ── */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-slate-800">
                Proven Methodology
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Masonry Process
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                From Consultation to Completion—We Do It Right.
              </p>
            </div>

            {/* Step Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {MASONRY_PROCESS.map((p, idx) => {
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

        {/* ── MASONRY PORTFOLIO GALLERY ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                  Verified Workmanship
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Our Masonry Portfolio
                </h2>
                <p className="text-base text-slate-600">
                  Real Projects. Real Quality. Browse examples of our recent masonry projects across Cliffwood, NJ, and New Jersey.
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
              {MASONRY_PORTFOLIO.map((proj, idx) => (
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
                We provide expert masonry services within a 40-mile radius of Cliffwood, NJ, including:
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
                Frequently Asked Questions About Masonry
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Everything you need to know about our masonry methods, warranties, and estimate process.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {MASONRY_FAQS.map((faq, idx) => {
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
              <span>Let's Start Your Masonry Build</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Ready to Build Something Beautiful?
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Whether you need a small brick repair or a complete stone wall installation, <strong className="font-bold text-white">{BUSINESS.name}</strong> is here to help. Contact Luan and our team today for a free on-site estimate.
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
                "{BUSINESS.name} is a family-owned, licensed, and insured masonry contractor serving Cliffwood, NJ, and a 40-mile radius since 2009. We are committed to quality craftsmanship, transparency, and customer satisfaction—from the first stone to the final polish."
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
