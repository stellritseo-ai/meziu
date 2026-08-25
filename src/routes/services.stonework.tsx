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
  Droplets,
  HardHat,
  Palette,
  Shield,
  Sun,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCta } from "@/components/site/FloatingCta";
import { BUSINESS } from "@/lib/site";

// Authentic project assets
import stoneworkHeroImg from "@/assets/stonework.jpg";
import masonryImg from "@/assets/masonry.jpg";
import paversImg from "@/assets/pavers.jpg";

// Gallery assets for stonework portfolio
import stoneWallRetainingImg from "@/assets/gallery/471842430_901602668709943_8316863561420339230_n.jpg";
import stoneWallDetailImg from "@/assets/gallery/471841011_901602665376610_1970354150998530249_n.jpg";
import stoneStepsImg from "@/assets/gallery/471993762_901602662043277_5877206412694686898_n.jpg";
import stonePatioFirePitImg from "@/assets/gallery/472025987_901602768709933_2491581905375914125_n.jpg";
import stoneWalkwayImg from "@/assets/gallery/472207359_901603012043242_5152407169350226347_n.jpg";
import stoneFacadeImg from "@/assets/gallery/471818170_899901515546725_6274472070519864859_n.jpg";

export const Route = createFileRoute("/services/stonework")({
  component: StoneWorkWallsPage,
});

/* ── 10 Detailed Stone Work & Walls Services Data ── */
const STONEWORK_SERVICES_DATA = [
  {
    id: "natural-stone-retaining-walls",
    num: "01",
    title: "Natural Stone Retaining Walls",
    icon: Layers,
    summary: "Natural stone retaining walls combine centuries-old masonry aesthetics with modern geotechnical stability.",
    description: "Whether you need a heavy mortared retaining wall to secure a steep hillside or a traditional rustic dry-stack garden wall, our master masons hand-chisel and fit every stone with engineered crushed stone backfill and French drain piping.",
    points: [
      { name: "Fieldstone, Bluestone & Granite", detail: "Locally sourced dense quarry stone resisting freeze-thaw cracking." },
      { name: "Engineered Geotechnical Drainage", detail: "Perforated French drains and 3/4-inch clean gravel relieving hydrostatic pressure." },
      { name: "Mortared & Dry-Stack Craftsmanship", detail: "Structural high-bond mortar joints or classic gravity-fit dry-stacking." },
      { name: "Terraced Hillside Terracing", detail: "Transforming unusable steep Bergen County slopes into tiered usable yards." },
      { name: "Chiseled Stone Coping Caps", detail: "Overhanging stone caps protecting wall cores from rain and frost intrusion." },
    ],
    image: stoneWallRetainingImg,
    alt: "Natural stone retaining wall with interlocking paver driveway in Cliffwood, NJ",
  },
  {
    id: "stone-veneer-installation",
    num: "02",
    title: "Stone Veneer Installation",
    icon: Sparkles,
    summary: "Add the luxurious appearance of full-bed masonry to indoor accent walls and outdoor facades at lighter weights.",
    description: "We install natural thin-cut stone veneer and premium manufactured architectural stone. Ideal for fireplace surrounds, interior accent walls, foundation covers, and exterior column cladding.",
    points: [
      { name: "Interior Accent Walls & Fireplaces", detail: "Floor-to-ceiling rustic ledgestone, stacked stone, and limestone feature walls." },
      { name: "Exterior Foundation & Facade Cladding", detail: "Covering ugly poured concrete foundations with elegant natural stone." },
      { name: "Natural Thin-Cut Stone Veneer", detail: "100% genuine quarried stone sliced to 1-inch thickness for zero footing loads." },
      { name: "Weather-Resistant Lath & Scratch Coat", detail: "Galvanized metal lath and polymer-modified mortar ensuring permanent bonding." },
      { name: "Seamless Corner Miter Units", detail: "Pre-formed 90-degree corner stones giving the look of solid stone blocks." },
    ],
    image: stoneFacadeImg,
    alt: "Stone veneer exterior facade and architectural column installation in Ridgewood, NJ",
  },
  {
    id: "stone-walkways-pathways",
    num: "03",
    title: "Stone Walkways & Pathways",
    icon: Grid,
    summary: "Inviting, organic stone walkways that guide guests through your property with timeless elegance.",
    description: "From irregular flagstone set in polymeric sand or mortar to formal thermal-finish Pennsylvania bluestone walkways, we create trip-free, level, and durable paths that elevate your landscape architecture.",
    points: [
      { name: "Pennsylvania Bluestone & Flagstone", detail: "Thermal non-slip texture in full-color range and clean geometric patterns." },
      { name: "Irregular Stepping Stone Paths", detail: "Natural rustic pathways meandering through garden beds and mulch." },
      { name: "Reinforced Concrete Sub-Bases", detail: "Mortared stone walks laid over 4-inch steel-reinforced concrete slabs." },
      { name: "Deep Compacted Aggregate Beds", detail: "Dry-laid flagstone over 8 inches of compacted quarry process aggregate." },
      { name: "Natural Stone Curbing & Borders", detail: "Belgian block and granite curbing containing mulch and edging lawns." },
    ],
    image: stoneWalkwayImg,
    alt: "Natural bluestone and flagstone walkway installation in Clifton, NJ",
  },
  {
    id: "stone-patios-outdoor-living",
    num: "04",
    title: "Stone Patios & Outdoor Living Spaces",
    icon: Home,
    summary: "Custom natural stone patios designed for outdoor entertaining, fireside gatherings, and al fresco dining.",
    description: "Transform your backyard with an expansive natural stone patio. We build multi-tiered entertainment patios featuring built-in outdoor kitchens, granite bar counters, stone fire pits, and integrated seat walls.",
    points: [
      { name: "Natural Bluestone & Travertine Patios", detail: "Elegant, cool-underfoot stone surfaces that resist summer heat." },
      { name: "Built-In Stone Fire Pits & Fireplaces", detail: "Wood-burning and gas fire pits clad in matching fieldstone or ledger." },
      { name: "Outdoor Stone Kitchen Islands", detail: "Stone prep islands with built-in BBQ grills, beverage fridges, and sinks." },
      { name: "Integrated Curved Seat Walls", detail: "Double-sided stone sitting walls providing overflow party seating." },
      { name: "Slip-Resistant Pool Surrounds", detail: "Textured natural stone pool decks with smooth bullnose coping." },
    ],
    image: stonePatioFirePitImg,
    alt: "Natural stone patio with fire pit and sitting wall in Wayne, NJ",
  },
  {
    id: "stone-facades-cladding",
    num: "05",
    title: "Stone Facades & Exterior Cladding",
    icon: Building2,
    summary: "Transform your home's exterior with commanding full or partial architectural stone facades.",
    description: "Nothing enhances curb appeal and home appraisal value like a natural stone exterior. We clad front entryways, porticos, structural pillars, and entire front elevations in custom masonry.",
    points: [
      { name: "Full & Partial Stone Elevations", detail: "Combining stone with Hardie siding or stucco for high-end architectural depth." },
      { name: "Structural Stone Columns & Pillars", detail: "Grand driveway entrance pillars with integrated low-voltage lighting." },
      { name: "Stone Entryway Archways", detail: "Keystone arches framing front doorways with historic craftsmanship." },
      { name: "Masonry Chimney Stonetops", detail: "Restoring and cladding exterior chimneys in weather-resistant fieldstone." },
      { name: "Commercial Stone Storefronts", detail: "Durable, high-traffic stone cladding elevating commercial brand appeal." },
    ],
    image: stoneworkHeroImg,
    alt: "Full exterior stone facade with custom columns and arches",
  },
  {
    id: "stone-steps-stairways",
    num: "06",
    title: "Stone Steps & Stairways",
    icon: Maximize2,
    summary: "Safe, solid, and welcoming stone staircases transitioning grade changes with timeless grandeur.",
    description: "We design and build front entry stoops, backyard landscape stairways, and retaining wall steps using solid rock-face bluestone treads, granite steps, and mortared stone risers built over concrete footings.",
    points: [
      { name: "Solid 2-Inch Bluestone Treads", detail: "Heavy thermal-top treads with hand-chiseled rock-face safety edges." },
      { name: "Mortared Fieldstone & Brick Risers", detail: "Matching existing home architecture for cohesive curb appeal." },
      { name: "Solid Granite Precast Steps", detail: "Monolithic granite steps offering unmatched structural longevity." },
      { name: "Landscape Hillside Staircases", detail: "Curved natural stone steps integrated directly into terraced retaining walls." },
      { name: "Deep Frost-Footing Foundations", detail: "Poured 36-inch concrete footings below the frost line to prevent settling." },
    ],
    image: stoneStepsImg,
    alt: "Natural stone steps with bluestone treads and retaining wall integration",
  },
  {
    id: "stone-fireplaces-fire-pits",
    num: "07",
    title: "Stone Fireplaces & Fire Pits",
    icon: Flame,
    summary: "The ultimate focal point of indoor warmth and outdoor backyard entertaining.",
    description: "From dramatic two-story indoor stone fireplace hearths with custom wood mantels to backyard gas and wood-burning circular fire pits, our masons create safe, code-compliant stone features built for cozy evenings.",
    points: [
      { name: "Indoor Floor-to-Ceiling Hearths", detail: "Custom fieldstone, ledgestone, and river rock fireplaces with raised hearths." },
      { name: "Outdoor Living Room Fireplaces", detail: "Full outdoor masonry fireplaces with wood storage cubbies and stone mantels." },
      { name: "Custom Backyard Fire Pits", detail: "Circular, square, and linear fire pits with firebrick heat-resistant cores." },
      { name: "Gas & Wood-Burning Conversions", detail: "Installing gas burner rings with lava rock or traditional wood grates." },
      { name: "Solid Stone & Timber Mantels", detail: "Heavy rough-sawn cedar and reclaimed barnwood or stone slab mantels." },
    ],
    image: stonePatioFirePitImg,
    alt: "Custom outdoor stone fireplace and fire pit with stone seating",
  },
  {
    id: "stone-walls-garden-walls",
    num: "08",
    title: "Stone Walls & Garden Walls",
    icon: Compass,
    summary: "Define property boundaries and garden beds with permanent, character-rich stone walls.",
    description: "Low decorative stone walls add timeless estate charm to your landscaping. We construct boundary property walls, garden bed edging, and double-sided seat walls with precision stone jointing.",
    points: [
      { name: "Garden Enclosure Walls", detail: "Protecting planting beds and defining lush garden zones with natural stone." },
      { name: "Historic Property Boundary Walls", detail: "Replicating historic New Jersey fieldstone perimeter walls." },
      { name: "Double-Sided Freestanding Walls", detail: "Finished on both sides with mortared joints and solid capstones." },
      { name: "Dry-Stack Rustic Garden Borders", detail: "Mortarless stone edging providing natural drainage for flower beds." },
      { name: "Integrated Landscape Lighting", detail: "Concealed LED under-cap fixtures softly illuminating stone textures at night." },
    ],
    image: stoneWallDetailImg,
    alt: "Decorative stone garden wall and landscaping in Cliffwood, NJ",
  },
  {
    id: "stone-restoration-repair",
    num: "09",
    title: "Stone Restoration & Repair",
    icon: Wrench,
    summary: "Restore crumbling mortar, cracked stones, and weathered masonry to pristine structural integrity.",
    description: "Historic stone walls and facades require specialized restoration. We perform precision diamond tuckpointing with lime-compatible mortar, replace spalled stones, pressure-wash biological growth, and apply breathable siloxane waterproofing.",
    points: [
      { name: "Precision Mortar Tuckpointing", detail: "Raking out decayed joints and repointing with color-matched mortar." },
      { name: "Damaged Stone Sourcing & Replacement", detail: "Matching stone type, mineral coloring, and quarry texture seamlessly." },
      { name: "Low-Pressure Chemical Stone Wash", detail: "Safely removing decades of efflorescence salt, moss, algae, and carbon soot." },
      { name: "Structural Underpinning & Shoring", detail: "Re-leveling failing walls and securing shifting masonry foundations." },
      { name: "Siloxane Water-Repellent Sealers", detail: "Deep-penetrating breathable sealers that block moisture while allowing vapors out." },
    ],
    image: masonryImg,
    alt: "Historic stone wall repointing and structural restoration in Northern NJ",
  },
  {
    id: "commercial-stone-work",
    num: "10",
    title: "Commercial Stone Work",
    icon: Building2,
    summary: "Architectural stone masonry for commercial office complexes, retail plazas, and restaurants.",
    description: "We partner with general contractors, architects, and property managers to deliver heavy-duty commercial stone work on strict deadlines—including storefront cladding, retaining walls, monuments, and courtyards.",
    points: [
      { name: "Commercial Storefront Cladding", detail: "High-end stone veneer facades providing upscale aesthetic for retail shops." },
      { name: "Corporate Entrance Monument Signs", detail: "Solid stone monument signs with integrated metal lettering and lighting." },
      { name: "High-Load Commercial Retaining Walls", detail: "Engineered retaining systems securing commercial parking lots and loading bays." },
      { name: "Public Courtyards & Plaza Pavers", detail: "Pedestrian plazas engineered for heavy foot traffic and mechanical snow plows." },
      { name: "Full Safety & Insurance Compliance", detail: "OSHA-compliant operations, commercial liability, and after-hours scheduling." },
    ],
    image: stoneworkHeroImg,
    alt: "Commercial stone facade and entrance plaza in Hackensack, NJ",
  },
];

/* ── 12 Why Choose Meziu Advantages ── */
const WHY_CHOOSE_STONEWORK = [
  {
    title: "15+ Years Hands-On Experience",
    desc: "Master stone masons with deep expertise in traditional and modern stone work.",
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
    title: "Premium Natural & Cultured Stone",
    desc: "Sourced from top regional quarries: bluestone, fieldstone, granite, and Cultured Stone.",
    icon: Layers,
  },
  {
    title: "Engineered Structural Retaining",
    desc: "Walls built with deep frost footings, crushed stone cores, and French drain weeping.",
    icon: HardHat,
  },
  {
    title: "Mortared & Dry-Stack Artistry",
    desc: "Mastery of both high-strength mortared masonry and classic gravity dry-stacking.",
    icon: Hammer,
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
    desc: "Equipped for private home garden walls, luxury facades, and commercial plazas.",
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

/* ── 6 Step Stone Work Process Roadmap ── */
const STONEWORK_PROCESS = [
  {
    step: "01",
    title: "Free On-Site Consultation",
    desc: "We visit your property to measure dimensions, evaluate slope grade and soil conditions, discuss your vision, review stone samples, and provide a clear written estimate.",
    icon: MapPin,
  },
  {
    step: "02",
    title: "Design & Material Selection",
    desc: "We help you select the ideal stone—natural fieldstone, Pennsylvania bluestone, granite, or manufactured veneer—and select joint styles and coping profiles.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Site Preparation & Foundation",
    desc: "We excavate down below the frost line, pour steel-reinforced concrete footings for mortared walls, or compact 8 to 12 inches of aggregate base for dry-stacking.",
    icon: Grid,
  },
  {
    step: "04",
    title: "Expert Stone Installation",
    desc: "Our master stone masons hand-shape, chisel, and place each stone, staggering joints and ensuring structural level, plumb alignment, and solid bond cohesion.",
    icon: Hammer,
  },
  {
    step: "05",
    title: "Jointing, Drainage & Finishing",
    desc: "We install backfill gravel and perforated drain piping, point mortar joints with weather-resistant mixes, install coping caps, and acid-wash surfaces clean.",
    icon: Wrench,
  },
  {
    step: "06",
    title: "Quality Inspection & Walkthrough",
    desc: "We apply breathable siloxane sealers if requested, clean all surrounding landscaping, and walk through the completed stonework with you to guarantee 100% satisfaction.",
    icon: CheckCircle2,
  },
];

/* ── 6 Featured Stone Work Projects ── */
const STONEWORK_PORTFOLIO = [
  {
    title: "Natural Stone Retaining Wall & Driveway",
    location: "Cliffwood, NJ",
    category: "Retaining Wall",
    desc: "Heavy-duty natural stone retaining wall with integrated drainage and interlocking paver driveway.",
    image: stoneWallRetainingImg,
  },
  {
    title: "Stone Facade & Exterior Cladding",
    location: "Ridgewood, NJ",
    category: "Stone Facade",
    desc: "Full front elevation stone veneer facade with custom entrance columns and keystone archway.",
    image: stoneFacadeImg,
  },
  {
    title: "Natural Bluestone Walkway & Steps",
    location: "Clifton, NJ",
    category: "Stone Walkway",
    desc: "Thermal-finish Pennsylvania bluestone front entry walkway with rock-face step treads.",
    image: stoneWalkwayImg,
  },
  {
    title: "Stone Patio with Fire Pit & Seat Wall",
    location: "Wayne, NJ",
    category: "Stone Patio",
    desc: "Custom flagstone patio with wood-burning fieldstone fire pit and curved double-sided seat wall.",
    image: stonePatioFirePitImg,
  },
  {
    title: "Stone Veneer Fireplace & Raised Hearth",
    location: "Paramus, NJ",
    category: "Stone Fireplace",
    desc: "Floor-to-ceiling interior stacked stone fireplace with reclaimed timber mantel and bluestone hearth.",
    image: stoneworkHeroImg,
  },
  {
    title: "Commercial Stone Storefront Facade",
    location: "Hackensack, NJ",
    category: "Commercial Stone",
    desc: "Architectural limestone and granite commercial storefront facade and pedestrian entrance plaza.",
    image: masonryImg,
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

/* ── 9 Stone Work FAQs ── */
const STONEWORK_FAQS = [
  {
    q: "What types of stone work do you offer?",
    a: "We offer natural stone retaining walls, stone veneer installation (interior & exterior), stone walkways and pathways, stone patios, stone facades and column cladding, stone steps and stairways, custom stone fireplaces and fire pits, garden walls, stone restoration & repointing, and commercial stone work.",
  },
  {
    q: "Are you licensed and insured in New Jersey?",
    a: "Yes! MEZIU CONSTRUCTION LLC is fully licensed, insured, and bonded in the State of New Jersey. We carry comprehensive general liability and workers' compensation coverage for your complete peace of mind.",
  },
  {
    q: "What types of stone do you use?",
    a: "We use top-grade natural stones including Pennsylvania bluestone, New York fieldstone, granite, limestone, travertine, marble, slate, as well as premium manufactured thin-cut architectural stone veneers.",
  },
  {
    q: "Do you provide free estimates for stone work & walls?",
    a: "Absolutely! We offer 100% free, no-obligation on-site estimates throughout Cliffwood, NJ, and our entire 40-mile service radius. Luan Meziu will inspect your property, take measurements, review stone catalogs, and provide a clear written estimate.",
  },
  {
    q: "How long does a stone wall project take to complete?",
    a: "Project timelines depend on the wall length, height, foundation requirements, and weather. A small garden wall takes 2 to 3 days. A major engineered hillside retaining wall or full stone facade typically takes 1 to 2 weeks. We provide a firm schedule during your estimate.",
  },
  {
    q: "Do you offer stone restoration and tuckpointing?",
    a: "Yes! We offer complete stone restoration services including precision mortar tuckpointing, power cleaning efflorescence and moss, replacing cracked or missing stones, structural underpinning, and siloxane waterproofing.",
  },
  {
    q: "Do you work on commercial stone properties?",
    a: "Yes! We provide commercial stone work for office buildings, retail plazas, restaurants, corporate entrance monuments, and multi-family communities across Northern New Jersey.",
  },
  {
    q: "Do you offer emergency stone repairs?",
    a: "Yes, we provide emergency stone wall stabilization and repair services during our regular business hours (Monday through Friday, 7:00 AM – 6:00 PM). Call us immediately at (201) 844-2427 for urgent collapsing wall repairs.",
  },
  {
    q: "Do you speak Spanish?",
    a: "¡Sí! Hablamos español. Founder Luan Meziu and our master masonry crew are fully bilingual in English and Spanish, ensuring clear and comfortable communication throughout your project.",
  },
];

function StoneWorkWallsPage() {
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
              <span className="text-[#E56E1A] font-bold">Stone Work &amp; Walls</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Hero Text Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200/80 px-4 py-1.5 shadow-sm">
                  <Layers className="h-4 w-4 text-[#E56E1A]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#B85008]">
                    Master Stone Masons &amp; Retaining Wall Contractors
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
                  Expert <span className="text-[#E56E1A]">Stone Work</span> &amp; Walls
                </h1>

                {/* Sub-headline */}
                <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                  Timeless Beauty. Unmatched Durability. Expert Craftsmanship.
                </p>

                {/* Body Text */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Stone work is the foundation of lasting beauty—combining natural elegance with structural integrity that stands for generations. <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong> specializes in custom stone work and wall construction that enhances your property's value, curb appeal, and functionality. From natural stone retaining walls and elegant stone facades to custom stone walkways and architectural accents, we bring your vision to life with master craftsmanship.
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
                    src={stoneworkHeroImg}
                    alt="Master natural stone retaining wall and custom masonry in Cliffwood, NJ"
                    className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Trust Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-[#E56E1A] tracking-wider">Cliffwood, NJ Stone Artisans</span>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      Natural fieldstone retaining walls, stone veneers, bluestone walks, and stone facades.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── OVERVIEW OF STONE WORK & WALLS ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Image Collage */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                  <img
                    src={stoneWallRetainingImg}
                    alt="Natural stone retaining wall with paver driveway"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                    Natural Stone Retaining Wall &amp; Engineered Drainage
                  </div>
                </div>

                {/* 2 Small Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-2xl font-black text-[#E56E1A]">100%</div>
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">Natural Quarry Stone</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-2xl font-black text-[#E56E1A]">Frost-Safe</div>
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">Engineered Footings</div>
                  </div>
                </div>
              </div>

              {/* Right Narrative Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>Science and Art Combined</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Stone Work &amp; Walls Done Right
                </h2>

                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>
                    Stone is one of the oldest and most respected building materials in the world—and for good reason. It offers timeless beauty, exceptional durability, and natural character that no other material can replicate. At <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong>, we treat stone work as both a science and an art.
                  </p>
                  <p>
                    As a family-owned business with over 15 years of hands-on experience, we specialize in custom stone work and wall construction. Whether you need a natural stone retaining wall, a beautiful stone facade, a custom walkway, or architectural stone accents, our master craftsmen use premium materials and time-tested techniques to create lasting results. We serve both residential and commercial clients across Cliffwood, NJ, and a 40-mile radius.
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
                      <h4 className="text-xs font-bold text-slate-900">Natural &amp; Cultured Stone</h4>
                      <p className="text-[11px] text-slate-500">Fieldstone, bluestone, granite, and ledger veneer</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Engineered Geotechnical Drainage</h4>
                      <p className="text-[11px] text-slate-500">French drains and gravel relieving pressure</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Direct Owner Oversight</h4>
                      <p className="text-[11px] text-slate-500">Luan Meziu on-site ensuring master masonry</p>
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

        {/* ── OUR STONE WORK & WALLS SERVICES (10 DETAILED SECTIONS) ── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                Comprehensive Stone Solutions
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Stone Work &amp; Walls Services
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Comprehensive Stone Solutions for Every Need across Cliffwood &amp; New Jersey
              </p>
            </div>

            {/* 10 Detailed Cards Grid */}
            <div className="space-y-12">
              {STONEWORK_SERVICES_DATA.map((svc, idx) => {
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

        {/* ── WHY CHOOSE MEZIU FOR STONE WORK & WALLS? ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                The Meziu Advantage
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Why Choose MEZIU CONSTRUCTION for Your Stone Project?
              </h2>
              <p className="text-lg text-slate-600">
                Master masonry artisans, time-tested quarry materials, and engineered geotechnical longevity.
              </p>
            </div>

            {/* 12 Reason Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_STONEWORK.map((item, idx) => {
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

        {/* ── 6-STEP STONE WORK PROCESS ── */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-slate-800">
                Proven Stone Masonry Method
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Stone Work Process
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                From Consultation to Completion—We Do It Right.
              </p>
            </div>

            {/* 6-Step Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {STONEWORK_PROCESS.map((p, idx) => {
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
                        style={{ width: `${(idx + 1) * 16.66}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── STONE WORK PORTFOLIO GALLERY ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                  Verified Workmanship
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Our Stone Work Portfolio
                </h2>
                <p className="text-base text-slate-600">
                  Real Projects. Real Quality. Browse examples of our recent stone work and wall projects across Cliffwood, NJ, and New Jersey.
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
              {STONEWORK_PORTFOLIO.map((proj, idx) => (
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
                We provide expert stone work and wall services within a 40-mile radius of Cliffwood, NJ, including:
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
                Frequently Asked Questions About Stone Work &amp; Walls
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Everything you need to know about our natural quarry stone, drainage systems, restoration, and timelines.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {STONEWORK_FAQS.map((faq, idx) => {
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
              <span>Let's Build Lasting Stone Masonry</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Ready to Enhance Your Property With Stone?
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Whether you need a retaining wall, a stone facade, a beautiful walkway, or a custom fireplace, <strong className="font-bold text-white">{BUSINESS.name}</strong> is here to help. Contact Luan and our team today for a free on-site estimate.
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
                "{BUSINESS.name} is a family-owned, licensed, and insured stone work contractor serving Cliffwood, NJ, and a 40-mile radius since 2009. We are committed to quality craftsmanship, transparency, and customer satisfaction—from the first stone to the final finish."
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
