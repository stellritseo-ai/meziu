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
  Grid,
  Layers,
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
  Truck,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { BUSINESS } from "@/lib/site";

// Authentic project assets
import concreteHeroImg from "@/assets/concrete.jpg";
import paversImg from "@/assets/pavers.jpg";
import stoneworkImg from "@/assets/stonework.jpg";
import masonryImg from "@/assets/masonry.jpg";
import commercialImg from "@/assets/commercial.jpg";

// Gallery assets for concrete portfolio
import concretePourImg from "@/assets/gallery/471699630_899901478880062_5883714246833623865_n.jpg";
import concreteSlabImg from "@/assets/gallery/471663512_899901482213395_5820953071870169084_n.jpg";
import concreteDrivewayImg from "@/assets/gallery/471781894_899901475546729_2311965253372034254_n.jpg";
import concreteStepsImg from "@/assets/gallery/471639870_901036328766577_5954401997882714411_n.jpg";
import retainingWallImg from "@/assets/gallery/471341388_899901622213381_7994038038964625773_n.jpg";
import commercialConcreteImg from "@/assets/gallery/472025987_901602768709933_2491581905375914125_n.jpg";
import patioImg from "@/assets/gallery/471969025_901036092099934_5228165584842414421_n.jpg";
import foundationImg from "@/assets/gallery/471817515_899268475610029_1888344127136103871_n.jpg";

export const Route = createFileRoute("/services/concrete")({
  component: ConcreteContractorPage,
});

/* ── 9 Detailed Concrete Services Data ── */
const CONCRETE_SERVICES_DATA = [
  {
    id: "concrete-driveways",
    num: "01",
    title: "Concrete Driveways",
    icon: Grid,
    summary: "A concrete driveway is a major structural investment that enhances curb appeal and permanent home value.",
    description: "Our complete driveway installation process emphasizes deep sub-base compaction, laser leveling, structural steel reinforcement, and thick commercial pours engineered to withstand vehicle traffic, winter salting, and heavy freeze-thaw cycles.",
    points: [
      { name: "New Driveway Construction", detail: "Custom designed layouts, precision grade sloping, and professional pour finishing." },
      { name: "Driveway Replacement & Demo", detail: "Complete extraction of old cracked asphalt or crumbling concrete with haul-away." },
      { name: "Driveway Crack & Spall Repairs", detail: "Structural crack injection, leveling, and high-durability polymer resurfacing." },
      { name: "Decorative Concrete Driveways", detail: "Stamped borders, stained highlights, or slip-resistant exposed aggregate." },
      { name: "Engineered Base Preparation", detail: "Heavy crushed stone sub-base with plate compaction preventing future settling." },
    ],
    image: concreteDrivewayImg,
    alt: "Custom concrete driveway installation by Meziu Construction",
  },
  {
    id: "concrete-patios",
    num: "02",
    title: "Concrete Patios",
    icon: Sparkles,
    summary: "Transform your outdoor living area with a beautiful, ultra-durable concrete patio.",
    description: "From intimate backyard dining spaces to multi-tier outdoor entertainment centers, we craft concrete patios that combine low-maintenance performance with rich architectural textures and colors.",
    points: [
      { name: "Custom Patio Design & Layouts", detail: "Tailored to your backyard contours, landscape features, and lifestyle." },
      { name: "Stamped Concrete Patios", detail: "Realistic slate, flagstone, cobblestone, and wood-plank pattern imprints." },
      { name: "Stained & Integral Color Patios", detail: "Rich earth-tone pigments that penetrate deep for permanent, UV-stable color." },
      { name: "Exposed Aggregate Patios", detail: "Pebble-textured, slip-resistant finish ideal for poolside areas and wet zones." },
      { name: "Patio Expansions & Extensions", detail: "Seamlessly tying new concrete into existing decks or hardscapes." },
    ],
    image: patioImg,
    alt: "Decorative stamped concrete patio in Wayne NJ",
  },
  {
    id: "concrete-foundations",
    num: "03",
    title: "Concrete Foundations",
    icon: ShieldCheck,
    summary: "A strong foundation is the absolute bedrock of every safe, enduring structure.",
    description: "We pour high-load residential and commercial foundations adhering strictly to NJ building codes. From new home foundations and structural additions to deep footings and grade beams, our team ensures perfect levelness and structural integrity.",
    points: [
      { name: "Residential Foundations", detail: "Engineered footings, frost walls, and crawlspace foundations for additions." },
      { name: "Commercial Foundations", detail: "High-capacity foundation pads, grade beams, and heavy-equipment slabs." },
      { name: "Foundation Crack & Settlement Repairs", detail: "Underpinning, carbon fiber reinforcement, and epoxy crack injection." },
      { name: "Foundation Waterproofing & Sealing", detail: "Exterior damp-proofing membranes and subsurface weeping tile drainage." },
      { name: "Laser-Leveled Footings", detail: "Poured with rebar dowels ensuring zero differential settlement." },
    ],
    image: foundationImg,
    alt: "Reinforced concrete foundation pour for home addition",
  },
  {
    id: "concrete-slabs",
    num: "04",
    title: "Concrete Slabs",
    icon: Layers,
    summary: "High-strength, monolithic concrete flatwork engineered for extreme point loads.",
    description: "Our slab installations feature premium 4,000+ PSI concrete mixes, vapor barriers, perimeter insulation, and steel reinforcement for long-lasting durability without cracking or sinking.",
    points: [
      { name: "Garage Slabs & Vehicle Bays", detail: "Heavy-duty reinforced flatwork resistant to oil, fluids, and tire wear." },
      { name: "Shed, Workshop & Barn Slabs", detail: "Solid, level foundations for prefabricated outbuildings and storage." },
      { name: "Patio & Outdoor Kitchen Slabs", detail: "Smooth, clean flatwork supporting grills, pizza ovens, and pergolas." },
      { name: "Commercial Warehouse Slabs", detail: "High-tolerance, flat-floor finishes for forklifts and industrial storage." },
      { name: "Sidewalk & Municipal Slabs", detail: "Frost-heave resistant walkways built to township specifications." },
    ],
    image: concreteSlabImg,
    alt: "Smooth finished concrete slab pour in Hackensack NJ",
  },
  {
    id: "stamped-decorative",
    num: "05",
    title: "Stamped & Decorative Concrete",
    icon: Compass,
    summary: "Get the luxury look of natural stone, brick, or cobblestone at a fraction of the cost.",
    description: "Stamped and decorative concrete delivers the high-end appearance of expensive pavers with the solid structural durability of poured concrete. We offer dozens of texture stamps, release color agents, and protective acrylic sealers.",
    points: [
      { name: "Stamped Texture Imprinting", detail: "Ashlar slate, random stone, cobblestone, herringbone brick, and travertine." },
      { name: "Integral & Acid Staining", detail: "Multi-tone color layering that mimics authentic weathered natural rock." },
      { name: "Exposed Aggregate Washes", detail: "Revealing natural river rock and quartz aggregate for exceptional traction." },
      { name: "Textured Broom Finishes", detail: "Classic, slip-resistant textured concrete ideal for public walkways." },
      { name: "High-Gloss & Matte Protective Sealers", detail: "UV-blocking acrylic sealers that enrich color and prevent oil penetration." },
    ],
    image: concreteHeroImg,
    alt: "Stamped decorative concrete with natural stone pattern",
  },
  {
    id: "steps-walkways",
    num: "06",
    title: "Concrete Steps & Walkways",
    icon: Building2,
    summary: "Safe, welcoming, code-compliant entry steps and walkways built for high foot traffic.",
    description: "Worn or crumbling steps are serious safety hazards. We design and pour reinforced concrete front porches, entry steps, and curved landscape pathways that enhance safety, curb appeal, and accessibility.",
    points: [
      { name: "Front Entry Steps & Stoops", detail: "Reinforced risers, deep treads, and clean bullnose or square-edge finishing." },
      { name: "Backyard & Basement Access Steps", detail: "Safe, durable staircases with integrated handrail core drilling." },
      { name: "Curved Garden Walkways", detail: "Flowing concrete pathways connecting patios, driveways, and gardens." },
      { name: "Municipal Sidewalks & Curbing", detail: "Fully compliant with local Cliffwood and NJ town code regulations." },
      { name: "Commercial ADA Walkways", detail: "Smooth, continuous accessible ramps and paths with tactile warning mats." },
    ],
    image: concreteStepsImg,
    alt: "Concrete steps and entry walkway in Clifton NJ",
  },
  {
    id: "concrete-retaining-walls",
    num: "07",
    title: "Concrete Retaining Walls",
    icon: Wrench,
    summary: "Poured structural concrete retaining walls provide maximum earth retention and slope stability.",
    description: "For extreme grade changes, heavy soil loads, or commercial developments, poured concrete retaining walls offer unmatched strength. We engineer formwork, tie-backs, rebar grids, and drainage backfills.",
    points: [
      { name: "Poured Structural Retaining Walls", detail: "Seamless, monolithic walls with superior lateral earth pressure capacity." },
      { name: "Segmental Concrete Block Walls", detail: "Modular engineered blocks allowing clean curves and tiered terraces." },
      { name: "Gravity & Cantilever Walls", detail: "Engineered footing designs optimized for high soil embankments." },
      { name: "Integrated Drainage Systems", detail: "Weep holes, perforated collector pipes, and clean stone backfills." },
      { name: "Architectural Wall Finishes", detail: "Form-liner textures, stucco coatings, or natural stone veneer cladding." },
    ],
    image: retainingWallImg,
    alt: "Poured concrete retaining wall installation in Paramus NJ",
  },
  {
    id: "commercial-concrete",
    num: "08",
    title: "Commercial Concrete Services",
    icon: Truck,
    summary: "Comprehensive commercial concrete flatwork, curbing, and foundations for NJ businesses.",
    description: "We understand commercial project constraints: tight schedules, strict OSHA safety protocols, high-load engineering, and code compliance. We deliver turnkey commercial pours on time and on budget.",
    points: [
      { name: "Storefront Foundations & Slabs", detail: "Precision flatwork prepared for retail fit-outs and tile installations." },
      { name: "Parking Lots & Extruded Curbing", detail: "Heavy-traffic concrete aprons, loading bays, and plow-resistant curbs." },
      { name: "Industrial Warehouse Floors", detail: "Reinforced fiber-mesh and rebar floors engineered for heavy forklift loads." },
      { name: "ADA Accessible Ramps & Sidewalks", detail: "Grade-compliant ramps with railings and detectable warning surfaces." },
      { name: "Structural Concrete Elements", detail: "Poured columns, light pole bases, bollards, and dumpster pads." },
    ],
    image: commercialConcreteImg,
    alt: "Commercial concrete parking lot and slab in Hackensack NJ",
  },
  {
    id: "concrete-repair-restoration",
    num: "09",
    title: "Concrete Repair & Restoration",
    icon: Hammer,
    summary: "Restore strength, safety, and appearance to cracked, sunken, or spalling concrete surfaces.",
    description: "Before spending thousands on total replacement, our specialized repair and restoration techniques can save existing concrete. We repair surface flaking, level sunken slabs, and apply durable polymer overlays.",
    points: [
      { name: "Structural Crack Repair", detail: "Routing out cracks and injecting high-strength structural epoxies." },
      { name: "Spalling & Scaling Repair", detail: "Grinding away deteriorated concrete and applying polymer cement overlays." },
      { name: "Concrete Leveling & Lifting", detail: "Stabilizing void spaces and raising sunken slabs back to original grade." },
      { name: "Micro-Topping Resurfacing", detail: "Applying a fresh decorative wear layer that looks brand new." },
      { name: "Penetrating Siloxane Sealing", detail: "Hydrophobic sealants that block water, salt, and freeze-thaw degradation." },
    ],
    image: concretePourImg,
    alt: "Concrete repair, leveling, and resurfacing in progress",
  },
];

/* ── 10 Why Choose Meziu for Concrete ── */
const WHY_CHOOSE_CONCRETE = [
  {
    title: "15+ Years Hands-On Experience",
    desc: "Master concrete finishers with deep knowledge of mix designs, slump, and curing.",
    icon: Award,
  },
  {
    title: "Family-Owned Since 2009",
    desc: "Personal service and direct accountability with founder Luan Meziu on your site.",
    icon: Home,
  },
  {
    title: "Licensed, Insured & Bonded",
    desc: "Full compliance with New Jersey DCA regulations and comprehensive liability insurance.",
    icon: ShieldCheck,
  },
  {
    title: "Premium 4000+ PSI Mixes",
    desc: "We use only high-strength concrete mixes formulated for New Jersey freeze-thaw cycles.",
    icon: Sparkles,
  },
  {
    title: "Expert Finishing Techniques",
    desc: "Master craftsmanship in stamped patterns, acid stains, broom finishes, and aggregate.",
    icon: Compass,
  },
  {
    title: "100% Transparent Pricing",
    desc: "Comprehensive written quotes with clear itemization and zero surprise change orders.",
    icon: DollarSign,
  },
  {
    title: "Clean & Respectful Job Sites",
    desc: "Daily site clean-up, turf protection, and utmost care for your home and landscaping.",
    icon: CheckCircle2,
  },
  {
    title: "Residential & Commercial",
    desc: "Fully equipped for backyard patios, residential driveways, and industrial slabs.",
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

/* ── 6 Step Concrete Process Roadmap ── */
const CONCRETE_PROCESS = [
  {
    step: "01",
    title: "Free On-Site Consultation",
    desc: "We visit your property to assess the project, take laser measurements, check soil stability and grade, discuss your vision, and provide a clear, no-obligation estimate.",
    icon: MapPin,
  },
  {
    step: "02",
    title: "Design & Material Selection",
    desc: "We help you select the ideal finish—stamped pattern, integral color stain, exposed aggregate, or smooth broom finish—complementing your home's aesthetic.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Site Preparation & Forming",
    desc: "We excavate to proper depth, compact crushed aggregate sub-bases, and erect precision wooden or steel forms to ensure exact lines and proper slope drainage.",
    icon: Grid,
  },
  {
    step: "04",
    title: "Reinforcement & Pouring",
    desc: "We install heavy rebar grids or structural wire mesh elevated on chairs. Then we pour high-strength concrete and consolidate with vibrators to eliminate air pockets.",
    icon: Layers,
  },
  {
    step: "05",
    title: "Finishing & Proper Curing",
    desc: "Our master finishers apply your chosen texture and cut expansion joints. We apply curing compounds or covers to ensure the concrete reaches maximum PSI strength.",
    icon: Hammer,
  },
  {
    step: "06",
    title: "Quality Inspection & Walkthrough",
    desc: "We strip forms, backfill edges, thoroughly clean the site, and walk through the completed concrete work with you to ensure 100% complete satisfaction.",
    icon: CheckCircle2,
  },
];

/* ── 6 Featured Concrete Projects ── */
const CONCRETE_PORTFOLIO = [
  {
    title: "Concrete Driveway Installation",
    location: "Elmwood Park, NJ",
    category: "Concrete Driveways",
    desc: "Heavy-duty 4000 PSI concrete driveway with reinforced steel grid and broom finish.",
    image: concreteDrivewayImg,
  },
  {
    title: "Stamped Concrete Patio & Fire Pit",
    location: "Wayne, NJ",
    category: "Concrete Patios",
    desc: "Ashlar slate stamped patio with charcoal release stain and protective gloss sealer.",
    image: patioImg,
  },
  {
    title: "Commercial Concrete Slab Pour",
    location: "Hackensack, NJ",
    category: "Commercial Slabs",
    desc: "Engineered monolithic concrete slab for commercial storefront and vehicle access.",
    image: concreteSlabImg,
  },
  {
    title: "Concrete Steps & Entry Walkways",
    location: "Clifton, NJ",
    category: "Steps & Walkways",
    desc: "Custom poured front entry steps with non-slip finish and integrated curved sidewalk.",
    image: concreteStepsImg,
  },
  {
    title: "Poured Concrete Retaining Wall",
    location: "Paramus, NJ",
    category: "Retaining Walls",
    desc: "Seamless poured concrete retaining wall with integrated drainage weep system.",
    image: retainingWallImg,
  },
  {
    title: "Concrete Foundation for Addition",
    location: "Ridgewood, NJ",
    category: "Concrete Foundations",
    desc: "Deep footings and reinforced frost-wall foundation for a two-story home addition.",
    image: foundationImg,
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

/* ── 9 Concrete FAQs ── */
const CONCRETE_FAQS = [
  {
    q: "What types of concrete services do you offer?",
    a: "We offer a full spectrum of concrete services, including new driveway installations and replacements, stamped and decorative patios, residential and commercial foundations, garage and warehouse slabs, concrete steps, walkways, retaining walls, commercial curbing, and concrete crack/spall repair.",
  },
  {
    q: "Are you licensed and insured in New Jersey?",
    a: "Yes! MEZIU CONSTRUCTION LLC is fully licensed, insured, and bonded in New Jersey. We carry comprehensive general liability and workers' compensation coverage for your complete peace of mind.",
  },
  {
    q: "How long does a typical concrete project take?",
    a: "Most residential concrete projects—such as a driveway, patio, or set of steps—take 2 to 4 days for excavation, forming, reinforcement, pouring, and initial finishing. Project timelines vary based on square footage, weather conditions, and site accessibility.",
  },
  {
    q: "How long does new concrete need to cure?",
    a: "Concrete typically needs 24 to 48 hours before foot traffic is allowed, and 7 days to reach initial structural strength for vehicle traffic. Full chemical curing takes approximately 28 days to achieve maximum PSI strength. We provide complete maintenance and care guidelines upon completion.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Absolutely! We provide 100% free, no-obligation on-site estimates across Cliffwood, NJ, and our entire 40-mile service radius. Luan Meziu will visit your property, evaluate grade levels and soil stability, and provide a clear written estimate.",
  },
  {
    q: "Do you offer stamped or decorative concrete?",
    a: "Yes! We specialize in stamped concrete (slate, flagstone, cobblestone patterns), integral color staining, and exposed aggregate finishes that deliver the look of luxury natural stone at a fraction of the cost.",
  },
  {
    q: "Do you work on commercial concrete properties?",
    a: "Yes! We provide comprehensive commercial concrete services, including warehouse floor slabs, retail storefront foundations, parking lot concrete curbing, loading docks, and ADA-compliant ramps throughout Northern New Jersey.",
  },
  {
    q: "Do you offer emergency concrete repairs?",
    a: "Yes, we provide emergency concrete repair services during our regular business hours (Monday through Friday, 7:00 AM – 6:00 PM). Call us immediately at (201) 844-2427 for urgent trip hazards, structural foundation shifts, or storm damage.",
  },
  {
    q: "Do you speak Spanish?",
    a: "¡Sí! Hablamos español. Founder Luan Meziu and our master concrete crew are fully bilingual in English and Spanish, ensuring smooth and transparent communication.",
  },
];

function ConcreteContractorPage() {
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
              <span className="text-[#E56E1A] font-bold">Concrete Contractor</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Hero Text Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200/80 px-4 py-1.5 shadow-sm">
                  <Grid className="h-4 w-4 text-[#E56E1A]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#B85008]">
                    Master Concrete Contractors &amp; Flatwork Specialists
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
                  Expert <span className="text-[#E56E1A]">Concrete</span> Contractor Services
                </h1>

                {/* Sub-headline */}
                <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                  Strong Foundations. Superior Craftsmanship. Lasting Results.
                </p>

                {/* Body Text */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  From driveways and patios to foundations and commercial slabs, <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong> delivers professional concrete services across Cliffwood, NJ, and New Jersey. Our experienced team uses premium materials and proven techniques to create durable, beautiful concrete structures that stand the test of time.
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
                    src={concreteHeroImg}
                    alt="Expert crew pouring and finishing smooth concrete flatwork"
                    className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Trust Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-[#E56E1A] tracking-wider">Cliffwood, NJ Concrete Specialists</span>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      Engineered 4000+ PSI concrete flatwork, driveways, and foundations.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── OVERVIEW OF CONCRETE SERVICES ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Image Collage */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                  <img
                    src={concretePourImg}
                    alt="Precision concrete pouring and leveling"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                    Commercial Grade Pouring &amp; Rebar Reinforcement
                  </div>
                </div>

                {/* 2 Small Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-2xl font-black text-[#E56E1A]">4000+</div>
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">PSI High-Strength Mix</div>
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
                  <span>Engineered Durability</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Quality Concrete Work You Can Rely On
                </h2>

                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>
                    Concrete is the backbone of modern construction—and at <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong>, we treat it with the respect it deserves. As a family-owned business with over 15 years of hands-on experience, we specialize in delivering concrete work that is both structurally sound and visually appealing.
                  </p>
                  <p>
                    Whether you need a new driveway, a stamped concrete patio, a commercial foundation, or concrete repairs, our master craftsmen use premium-grade materials, proper reinforcement, and expert finishing techniques to ensure lasting results. We serve both residential and commercial clients across Cliffwood, NJ, and a 40-mile radius.
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
                      <h4 className="text-xs font-bold text-slate-900">Steel Rebar Grid Reinforcement</h4>
                      <p className="text-[11px] text-slate-500">Maximum tensile strength preventing cracks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Laser-Leveled Slope &amp; Drainage</h4>
                      <p className="text-[11px] text-slate-500">Guaranteed water runoff away from foundations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Direct Owner Oversight</h4>
                      <p className="text-[11px] text-slate-500">Luan Meziu on-site ensuring exact slump and cure</p>
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

        {/* ── OUR CONCRETE SERVICES LIST (9 DETAILED SECTIONS) ── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                Comprehensive Concrete Solutions
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Concrete Services
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Comprehensive Concrete Solutions for Every Need across Cliffwood &amp; New Jersey
              </p>
            </div>

            {/* 9 Detailed Cards Grid */}
            <div className="space-y-12">
              {CONCRETE_SERVICES_DATA.map((svc, idx) => {
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

        {/* ── WHY CHOOSE MEZIU FOR CONCRETE? ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                The Meziu Advantage
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Why Choose MEZIU CONSTRUCTION for Your Concrete Project?
              </h2>
              <p className="text-lg text-slate-600">
                A legacy of honest craftsmanship, transparent pricing, and unwavering structural standards.
              </p>
            </div>

            {/* 10 Reason Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_CONCRETE.map((item, idx) => {
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

        {/* ── 6-STEP CONCRETE PROCESS ── */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-slate-800">
                Proven Methodology
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Concrete Process
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                From Consultation to Completion—We Do It Right.
              </p>
            </div>

            {/* 6 Step Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
              {CONCRETE_PROCESS.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.step}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3 relative flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase text-[#E56E1A] tracking-widest">
                          STEP {p.step}
                        </span>
                        <div className="w-7 h-7 rounded-lg bg-orange-50 text-[#E56E1A] flex items-center justify-center">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                      </div>
                      <h3 className="text-sm font-bold text-slate-950 leading-snug">
                        {p.title}
                      </h3>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                    <div className="w-full h-1 bg-orange-100 rounded-full overflow-hidden mt-3">
                      <div
                        className="h-full bg-[#E56E1A]"
                        style={{ width: `${((idx + 1) / 6) * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── CONCRETE PORTFOLIO GALLERY ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                  Verified Workmanship
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Our Concrete Portfolio
                </h2>
                <p className="text-base text-slate-600">
                  Real Projects. Real Quality. Browse examples of our recent concrete projects across Cliffwood, NJ, and New Jersey.
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
              {CONCRETE_PORTFOLIO.map((proj, idx) => (
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
                We provide expert concrete services within a 40-mile radius of Cliffwood, NJ, including:
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
                Frequently Asked Questions About Concrete
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Everything you need to know about our concrete mix designs, curing timelines, and free estimate process.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {CONCRETE_FAQS.map((faq, idx) => {
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
              <span>Let's Start Your Concrete Build</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Ready to Start Your Concrete Project?
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Whether you need a new driveway, a stamped patio, or a commercial foundation, <strong className="font-bold text-white">{BUSINESS.name}</strong> is here to help. Contact Luan and our team today for a free on-site estimate.
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
                "{BUSINESS.name} is a family-owned, licensed, and insured concrete contractor serving Cliffwood, NJ, and a 40-mile radius since 2009. We are committed to quality craftsmanship, transparency, and customer satisfaction—from the first pour to the final finish."
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
