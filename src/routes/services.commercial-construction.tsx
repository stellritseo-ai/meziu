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
  ShoppingBag,
  Briefcase,
  UtensilsCrossed,
  Stethoscope,
  Warehouse,
  Store,
  FileCheck,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCta } from "@/components/site/FloatingCta";
import { BUSINESS } from "@/lib/site";

// Authentic project assets
import commercialHeroImg from "@/assets/commercial.jpg";
import interiorImg from "@/assets/interior.jpg";
import masonryImg from "@/assets/masonry.jpg";

// Gallery assets for commercial portfolio
import commercialExteriorImg from "@/assets/gallery/471699630_899901478880062_5883714246833623865_n.jpg";
import commercialInteriorImg from "@/assets/gallery/481974317_653489327184986_4107992866073077763_n.jpg";
import restaurantBuildoutImg from "@/assets/gallery/471821741_899268768943333_293806620655011432_n.jpg";
import storefrontFacadeImg from "@/assets/gallery/471818170_899901515546725_6274472070519864859_n.jpg";
import commercialWalkwayImg from "@/assets/gallery/472207359_901603012043242_5152407169350226347_n.jpg";
import finishedLivingImg from "@/assets/gallery/471820344_899268765610000_5275763543525178002_n.jpg";

export const Route = createFileRoute("/services/commercial-construction")({
  component: CommercialConstructionPage,
});

/* ── 10 Detailed Commercial Construction Services Data ── */
const COMMERCIAL_SERVICES_DATA = [
  {
    id: "retail-store-construction",
    num: "01",
    title: "Retail Store Construction",
    icon: ShoppingBag,
    summary: "Create welcoming, high-converting retail shopping environments designed for customer flow and product presentation.",
    description: "From luxury boutique storefronts to high-traffic retail spaces, we handle all retail construction requirements—including entrance glass doors, customer checkout counters, display gondola framing, track lighting, and full ADA accessibility.",
    points: [
      { name: "Inviting Storefront Entrances", detail: "Modern glass facades, aluminum framing, and secure automatic or manual doors." },
      { name: "Custom Interior Display Build-Outs", detail: "Custom wood and metal retail display shelving, slatwall, and cashier counters." },
      { name: "High-Durability Commercial Flooring", detail: "Polished concrete, commercial luxury vinyl tile (LVT), and heavy porcelain tile." },
      { name: "Product Accent Lighting Design", detail: "Adjustable 3000K-4000K LED track lights illuminating merchandise displays." },
      { name: "Full ADA Accessibility & Signage", detail: "Zero-threshold entries, compliant checkout heights, and brand signage integration." },
    ],
    image: commercialHeroImg,
    alt: "Modern commercial retail store construction and storefront buildout in Hackensack, NJ",
  },
  {
    id: "office-construction-renovation",
    num: "02",
    title: "Office Construction & Renovation",
    icon: Briefcase,
    summary: "Build productive, collaborative, and professional office environments reflecting your corporate culture.",
    description: "We build out raw commercial suites and renovate existing corporate offices. Specializing in open-concept collaborative zones, acoustic executive private offices, video conference boardrooms, and modern employee breakrooms.",
    points: [
      { name: "Turnkey Tenant Build-Outs", detail: "Transforming empty cold/warm shell spaces into fully furnished functional offices." },
      { name: "Acoustic Private Offices & Boardrooms", detail: "Sound-isolated drywall partitions and glass wall systems for confidential meetings." },
      { name: "Modern Employee Breakrooms", detail: "Custom cabinetry, quartz countertops, commercial dishwashers, and dining seating." },
      { name: "Structured Cat6 Data & AV Wiring", detail: "Concealed cable trays, server room conduits, and conference video screen mounts." },
      { name: "Impressive Reception Foyers", detail: "Architectural reception desks, custom accent stone walls, and recessed lighting." },
    ],
    image: commercialInteriorImg,
    alt: "Corporate office renovation with modern open-concept layout in Clifton, NJ",
  },
  {
    id: "restaurant-hospitality-construction",
    num: "03",
    title: "Restaurant & Hospitality Construction",
    icon: UtensilsCrossed,
    summary: "Complete restaurant dining rooms, commercial kitchens, bar buildouts, and outdoor dining patios.",
    description: "Restaurant construction demands precision adherence to Health Department regulations, fire suppression codes, and strict grand opening schedules. We manage heavy utility rough-ins, commercial hoods, grease traps, and luxury dining spaces.",
    points: [
      { name: "Commercial Kitchens & Hoods", detail: "Type 1 commercial exhaust hoods, fire suppression rough-ins, and quarry tile floors." },
      { name: "Custom Bar & Lounge Fabrication", detail: "Stone and solid wood bar tops, foot rails, underbar sinks, and tap line conduits." },
      { name: "Atmospheric Dining Room Fit-Outs", detail: "Custom banquet booths, acoustic ceiling baffles, and dimmable mood lighting." },
      { name: "Enclosed All-Weather Outdoor Patios", detail: "Paver and stone patio dining expansions with infrared radiant heaters." },
      { name: "Health & Fire Code Compliance", detail: "Grease interceptor tie-ins, FRP wall panels, and ADA multi-stall restrooms." },
    ],
    image: restaurantBuildoutImg,
    alt: "Restaurant interior construction and commercial kitchen build-out in Cliffwood, NJ",
  },
  {
    id: "medical-healthcare-construction",
    num: "04",
    title: "Medical & Healthcare Construction",
    icon: Stethoscope,
    summary: "Sterile, safe, and code-compliant facilities for medical practices, dental clinics, and wellness centers.",
    description: "Healthcare construction requires specialized expertise in infection control, medical gas piping, lead-lined X-ray drywall, and patient privacy. We deliver serene, patient-friendly clinical environments built to NJ health department standards.",
    points: [
      { name: "Private Patient Exam Rooms", detail: "Soundproofed wall assemblies ensuring strict HIPAA confidentiality." },
      { name: "Dental Operatory Suites", detail: "Specialized plumbing for dental chairs, compressed air lines, and vacuum pumps." },
      { name: "Calming Reception & Waiting Lounges", detail: "Spacious check-in counters with glass sneeze guards and comfortable seating." },
      { name: "Sterile Procedure & Lab Rooms", detail: "Seamless sheet vinyl flooring, coved wall bases, and antimicrobial paint finishes." },
      { name: "100% ADA Compliant Facilities", detail: "Wide 42-inch corridors, automatic sliding doors, and accessible patient restrooms." },
    ],
    image: finishedLivingImg,
    alt: "Professional medical and dental office construction in Paramus, NJ",
  },
  {
    id: "industrial-warehouse-construction",
    num: "05",
    title: "Industrial & Warehouse Construction",
    icon: Warehouse,
    summary: "Heavy-duty warehouses, distribution facilities, loading docks, and manufacturing floors.",
    description: "We construct durable industrial facilities engineered for heavy equipment, forklift traffic, and logistics efficiency. Featuring high-strength reinforced concrete slabs, steel framing, high-bay LED lighting, and commercial loading docks.",
    points: [
      { name: "High-Load Concrete Slabs", detail: "6 to 8-inch 4,500 PSI concrete floors with laser screed leveling and epoxy coatings." },
      { name: "Loading Docks & Levelers", detail: "Excavated truck wells, hydraulic dock levelers, and heavy-duty bumper pads." },
      { name: "Structural Steel Superstructures", detail: "Clear-span pre-engineered steel buildings with up to 32-foot ceiling clearance." },
      { name: "High-Bay Energy-Efficient Lighting", detail: "Smart motion-activated high-output LED fixtures throughout storage aisles." },
      { name: "Logistics Office & Mezzanines", detail: "Steel warehouse mezzanines and air-conditioned shipping/receiving manager offices." },
    ],
    image: commercialExteriorImg,
    alt: "Industrial warehouse construction and concrete loading dock in Wayne, NJ",
  },
  {
    id: "commercial-renovations-remodeling",
    num: "06",
    title: "Commercial Renovations & Remodeling",
    icon: Hammer,
    summary: "Modernize aging commercial properties to attract premier tenants and increase commercial lease values.",
    description: "Whether renovating an outdated office building facade, upgrading restrooms to ADA standards, or reconfiguring tenant spaces between leases, we execute commercial renovations with minimal business disruption and after-hours scheduling.",
    points: [
      { name: "Interior Tenant Improvements (TI)", detail: "Rapid demising wall construction and interior remodeling between commercial leases." },
      { name: "Commercial Restroom Modernization", detail: "Commercial touchless faucets, automatic flushers, and solid plastic/metal partitions." },
      { name: "Commercial Exterior Facelift", detail: "Installing modern architectural stone veneer, stucco, and aluminum composite panels." },
      { name: "Energy-Efficiency Lighting & HVAC", detail: "Converting older fluorescent fixtures to smart LED panels and high-SEER rooftop units." },
      { name: "Off-Hours Construction Shifts", detail: "Performing loud demolition and dirty tasks on evenings and weekends." },
    ],
    image: interiorImg,
    alt: "Commercial office remodeling and interior modernization in Bergen County, NJ",
  },
  {
    id: "commercial-additions-expansions",
    num: "07",
    title: "Commercial Additions & Expansions",
    icon: Maximize2,
    summary: "Expand your commercial square footage with structural building additions and warehouse extensions.",
    description: "When your business outgrows its current facility, expanding on-site saves moving costs. We engineer and build commercial office wing additions, retail sales floor expansions, and warehouse storage extensions.",
    points: [
      { name: "Commercial Building Wing Expansions", detail: "Adding new multi-office wings, conference halls, and training facilities." },
      { name: "Warehouse Storage Additions", detail: "Expanding footprint to add thousands of additional pallet racking storage positions." },
      { name: "Second-Story Commercial Additions", detail: "Vertical expansions adding upper-level executive suites without taking parking space." },
      { name: "Commercial Parking Lot Expansions", detail: "Grading, paving, striping, and lighting additional employee and customer stalls." },
      { name: "Seamless Architectural Integration", detail: "Matching existing commercial masonry, curtain walls, and rooflines." },
    ],
    image: commercialExteriorImg,
    alt: "Commercial building structural addition under construction in Northern NJ",
  },
  {
    id: "storefront-construction-facades",
    num: "08",
    title: "Storefront Construction & Renovation",
    icon: Store,
    summary: "Your business's handshake with the public—striking commercial storefront facades that command attention.",
    description: "Elevate your curb appeal and foot traffic with a brand-new commercial storefront. We replace dated facades with floor-to-ceiling tempered glass curtain walls, natural stone veneer, commercial canopies, and architectural accent lighting.",
    points: [
      { name: "Modern Glass Curtain Walls", detail: "Heavy commercial aluminum framing with insulated Low-E tempered safety glass." },
      { name: "Architectural Stone Veneer Cladding", detail: "Durable natural stone and cultured stone veneers transforming dated strip centers." },
      { name: "Integrated Brand Signage Backers", detail: "Structural blocking and electrical rough-ins for lighted channel letter signage." },
      { name: "Commercial Awnings & Canopies", detail: "Architectural aluminum and fabric canopies offering customer weather shelter." },
      { name: "Security Roll-Down Shutters", detail: "Concealed motorized security grilles protecting inventory after business hours." },
    ],
    image: storefrontFacadeImg,
    alt: "Commercial storefront facade with natural stone veneer and glass in Cliffwood, NJ",
  },
  {
    id: "commercial-interior-buildouts",
    num: "09",
    title: "Commercial Interior Build-Outs",
    icon: LayoutGrid,
    summary: "Transform raw commercial white boxes into polished, turn-key business operational environments.",
    description: "We handle commercial interior tenant build-outs from raw concrete and steel studs to turn-key occupancy. Managing metal stud framing, acoustical ceiling grids, commercial carpet/tile, electrical distribution, and commercial plumbing.",
    points: [
      { name: "Heavy-Gauge Metal Stud Framing", detail: "Non-combustible steel framing for partition walls, bulkheads, and soffits." },
      { name: "Acoustical Drop Ceiling Systems", detail: "2x2 and 2x4 acoustic ceiling tile grids with integrated LED troffers and HVAC diffusers." },
      { name: "Commercial Electrical Distribution", detail: "3-phase 120/208V and 277/480V distribution panels with dedicated equipment feeds." },
      { name: "Durable Commercial Wall Finishes", detail: "Type X fire-rated drywall, high-traffic commercial paint, and FRP wall protection." },
      { name: "Custom Commercial Millwork", detail: "Bespoke service counters, conference credenzas, and decorative wood wall slats." },
    ],
    image: commercialInteriorImg,
    alt: "Commercial interior tenant build-out with metal framing and drop ceiling in Clifton, NJ",
  },
  {
    id: "commercial-site-work-development",
    num: "10",
    title: "Commercial Site Work & Development",
    icon: HardHat,
    summary: "Complete site preparation, stormwater drainage, concrete paving, and commercial foundations.",
    description: "Every great commercial build starts with proper civil site work. We excavate commercial sites, manage stormwater retention basins, pour engineered footings, install commercial utility connections, and pave heavy asphalt parking lots.",
    points: [
      { name: "Civil Site Clearing & Excavation", detail: "Tree clearing, mass earthmoving, laser grading, and soil stabilization." },
      { name: "Stormwater Management & Retention", detail: "Catch basins, underground retention tanks, and civil drainage compliance." },
      { name: "Engineered Commercial Foundations", detail: "Poured concrete frost footings, grade beams, and heavy slab-on-grade floors." },
      { name: "Asphalt & Concrete Paving", detail: "High-load asphalt parking lots, heavy concrete aprons, and curbing." },
      { name: "Commercial Utility Trenching", detail: "Sewer, water main, fire suppression lines, electrical, and gas connections." },
    ],
    image: commercialWalkwayImg,
    alt: "Commercial site work, concrete walkway and parking lot paving in Hackensack, NJ",
  },
];

/* ── 12 Why Choose Meziu Commercial Advantages ── */
const WHY_CHOOSE_COMMERCIAL = [
  {
    title: "15+ Years Hands-On Experience",
    desc: "Seasoned commercial construction professionals with master-level trade expertise.",
    icon: Award,
  },
  {
    title: "Family-Owned Since 2009",
    desc: "Direct personal accountability with founder Luan Meziu on every single commercial site.",
    icon: Home,
  },
  {
    title: "Licensed, Insured & Bonded",
    desc: "Full compliance with New Jersey DCA commercial regulations, bonding, and full liability.",
    icon: ShieldCheck,
  },
  {
    title: "Full-Service Turnkey Contractor",
    desc: "Single point of contact managing site work, foundations, framing, MEP, and finishes.",
    icon: Wrench,
  },
  {
    title: "Rigorous Code Compliance",
    desc: "Exceeding all NJ building codes, ADA accessibility, OSHA safety, and Health Department standards.",
    icon: FileCheck,
  },
  {
    title: "Minimal Business Disruption",
    desc: "Off-hours, overnight, and weekend construction shifts available to keep operations running.",
    icon: Clock,
  },
  {
    title: "On-Time, On-Budget Delivery",
    desc: "Strict milestone tracking to ensure your commercial space opens on your grand opening date.",
    icon: Calendar,
  },
  {
    title: "Premium Commercial Materials",
    desc: "Heavy-duty commercial grade fixtures, metal stud framing, and high-wear finishes.",
    icon: Layers,
  },
  {
    title: "Transparent Commercial Bidding",
    desc: "Detailed AIA-style line-item estimates with clear scopes and zero hidden surprises.",
    icon: DollarSign,
  },
  {
    title: "Clean & Professional Job Sites",
    desc: "OSHA-compliant safety standards, daily site cleanup, and respectful professional crews.",
    icon: CheckCircle2,
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

/* ── 7-Step Commercial Construction Process Roadmap ── */
const COMMERCIAL_PROCESS = [
  {
    step: "01",
    title: "Free Consultation & Needs Assessment",
    desc: "We meet with you on-site to review your business operations, space requirements, budget, and target grand opening timeline.",
    icon: Phone,
  },
  {
    step: "02",
    title: "Design & Value Engineering",
    desc: "We collaborate with architects and engineers on construction blueprints, selecting materials that maximize durability while reducing build costs.",
    icon: Compass,
  },
  {
    step: "03",
    title: "Permitting & Municipal Approvals",
    desc: "We submit stamped drawings to municipal building, fire, health, and zoning departments, managing all reviews to obtain permits rapidly.",
    icon: FileCheck,
  },
  {
    step: "04",
    title: "Pre-Construction & Material Staging",
    desc: "We establish site safety protocols, order long-lead commercial equipment, and schedule trade subcontractors for seamless execution.",
    icon: Grid,
  },
  {
    step: "05",
    title: "Construction & Project Management",
    desc: "Our team executes framing, MEP rough-ins, drywall, and interior finishes with daily supervisor oversight and regular progress updates.",
    icon: Hammer,
  },
  {
    step: "06",
    title: "Inspections & Quality Assurance",
    desc: "We coordinate all municipal subcode inspections (building, electrical, plumbing, fire) and conduct rigorous quality control audits.",
    icon: HardHat,
  },
  {
    step: "07",
    title: "Final Walkthrough & Handover",
    desc: "We obtain your Certificate of Occupancy (CO), conduct a final walkthrough with you, and hand over all operational manuals and warranties.",
    icon: CheckCircle2,
  },
];

/* ── 6 Featured Commercial Projects ── */
const COMMERCIAL_PORTFOLIO = [
  {
    title: "Retail Store Build-Out & Display System",
    location: "Hackensack, NJ",
    category: "Retail Construction",
    desc: "Modern boutique retail storefront with commercial track lighting, quartz checkout, and luxury LVT flooring.",
    image: commercialHeroImg,
  },
  {
    title: "Corporate Office Renovation & Conference Suite",
    location: "Clifton, NJ",
    category: "Office Construction",
    desc: "3,500 sq.ft. office renovation with acoustic glass conference room, private executive suites, and kitchen breakroom.",
    image: commercialInteriorImg,
  },
  {
    title: "Restaurant Dining Room & Commercial Kitchen",
    location: "Cliffwood, NJ",
    category: "Restaurant Buildout",
    desc: "Full restaurant buildout with Type 1 hood, grease trap, custom solid wood bar, and banquet dining seating.",
    image: restaurantBuildoutImg,
  },
  {
    title: "Medical & Dental Suite Tenant Buildout",
    location: "Paramus, NJ",
    category: "Medical Construction",
    desc: "Specialized dental clinic with 4 operatory suites, lead-lined X-ray walls, and calming reception lounge.",
    image: finishedLivingImg,
  },
  {
    title: "Commercial Storefront Stone Facade",
    location: "Cliffwood, NJ",
    category: "Storefront Renovation",
    desc: "Commercial facade renovation with natural stone veneer, commercial aluminum glass framing, and lighted signage.",
    image: storefrontFacadeImg,
  },
  {
    title: "Warehouse Construction & Loading Apron",
    location: "Wayne, NJ",
    category: "Industrial Construction",
    desc: "Light industrial facility with heavy-duty 4,500 PSI laser-screed concrete floor and dual loading docks.",
    image: commercialExteriorImg,
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

/* ── 11 Commercial FAQs ── */
const COMMERCIAL_FAQS = [
  {
    q: "What types of commercial construction services do you offer?",
    a: "We offer retail store construction, corporate office renovations, restaurant & hospitality build-outs, medical & dental suites, industrial & warehouse construction, commercial tenant renovations, commercial additions, storefront facades, interior build-outs, and commercial civil site work.",
  },
  {
    q: "Are you licensed, insured, and bonded for commercial projects in New Jersey?",
    a: "Yes! MEZIU CONSTRUCTION LLC is fully licensed, insured, and bonded for commercial construction in the State of New Jersey. We carry comprehensive commercial general liability and workers' compensation coverage.",
  },
  {
    q: "Do you provide free estimates for commercial construction projects?",
    a: "Absolutely! We offer free, no-obligation on-site consultations and detailed proposals for all commercial projects. We review blueprints, assess site conditions, and provide transparent line-item estimates.",
  },
  {
    q: "How long does a commercial construction project take?",
    a: "Project timelines depend on the square footage and scope. A small storefront renovation or tenant refresh takes 2 to 4 weeks, while a full commercial build-out or restaurant construction typically takes 2 to 6 months. We establish strict schedule milestones during planning.",
  },
  {
    q: "Do you handle commercial permits and municipal approvals?",
    a: "Yes! We manage the entire municipal permitting process from start to finish—including architectural and engineering plan submissions, zoning variances, fire safety reviews, Health Department submittals, and all subcode inspections through final Certificate of Occupancy (CO).",
  },
  {
    q: "Can you work around our existing business operations?",
    a: "Yes! We understand that downtime costs money. We offer off-hours construction scheduling—including evenings, nights, and weekends—to perform noisy or disruptive tasks with zero impact on your day-to-day business operations.",
  },
  {
    q: "Do you work with our architects and designers?",
    a: "Yes! We regularly collaborate with our clients' architects, interior designers, and structural engineers. We can also provide design-build services through our network of trusted architectural partners.",
  },
  {
    q: "Do you offer design-build services for commercial projects?",
    a: "Yes! Our design-build approach provides a single point of accountability from initial concept and architectural drawings through permitting, construction, and final key handover.",
  },
  {
    q: "Do you offer emergency commercial repair services?",
    a: "Yes, we provide emergency commercial repairs during our regular business hours (Monday through Friday, 7:00 AM – 6:00 PM). Call us immediately at (201) 844-2427 for urgent facility repairs.",
  },
  {
    q: "Do you speak Spanish?",
    a: "¡Sí! Hablamos español. Founder Luan Meziu and our project leaders are fluent in both English and Spanish, ensuring seamless communication across all project stakeholders.",
  },
  {
    q: "What commercial service area do you cover?",
    a: "We serve commercial clients across Cliffwood, NJ, and a 40-mile radius covering Monmouth County, Middlesex County, and surrounding New Jersey markets.",
  },
];

function CommercialConstructionPage() {
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
              <span className="text-[#E56E1A] font-bold">Commercial Construction</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Hero Text Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200/80 px-4 py-1.5 shadow-sm">
                  <Building2 className="h-4 w-4 text-[#E56E1A]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#B85008]">
                    Master Commercial General Contractors
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.08]">
                  Expert <span className="text-[#E56E1A]">Commercial Construction</span> Services
                </h1>

                {/* Sub-headline */}
                <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                  Building Success for Your Business—One Project at a Time.
                </p>

                {/* Body Text */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Your commercial property is a reflection of your business. <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong> delivers professional commercial construction services that combine quality craftsmanship, efficient project management, and code compliance. From retail storefronts and office spaces to restaurants and medical facilities, we bring your commercial vision to life.
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
                    <span className="text-xs font-bold text-slate-800">Licensed &amp; Bonded</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#E56E1A] shrink-0" />
                    <span className="text-xs font-bold text-slate-800">Off-Hours Shifts</span>
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
                    src={commercialHeroImg}
                    alt="Completed commercial storefront construction in Northern New Jersey"
                    className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Floating Trust Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-[#E56E1A] tracking-wider">Cliffwood, NJ Commercial Builders</span>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm font-bold text-slate-900 leading-snug">
                      Retail storefronts, office buildouts, restaurants, medical clinics, and industrial facilities.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── OVERVIEW OF COMMERCIAL CONSTRUCTION ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Image Collage */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                  <img
                    src={commercialInteriorImg}
                    alt="Modern corporate office renovation in Northern NJ"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                    Turnkey Design-Build, ADA Compliance &amp; On-Time Delivery
                  </div>
                </div>

                {/* 2 Small Metrics Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-2xl font-black text-[#E56E1A]">100%</div>
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">Code &amp; ADA Passed</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
                    <div className="text-2xl font-black text-[#E56E1A]">Zero</div>
                    <div className="text-[11px] font-bold uppercase text-slate-600 tracking-wider">Business Disruption</div>
                  </div>
                </div>
              </div>

              {/* Right Narrative Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 text-xs font-bold text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>Commercial Excellence</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Commercial Construction Done Right
                </h2>

                <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                  <p>
                    "Your commercial space is more than just a building—it's the face of your business, the workspace for your team, and the destination for your customers. At <strong className="text-slate-900 font-semibold">{BUSINESS.name}</strong>, we understand the critical role that quality construction plays in your business success.
                  </p>
                  <p>
                    As a family-owned business with over 15 years of hands-on experience, we specialize in commercial construction projects of all sizes. Whether you need a new storefront, an office renovation, a restaurant build-out, or a complete commercial building, our experienced team delivers professional results on time and on budget. We serve businesses across Cliffwood, NJ, and a 40-mile radius.
                  </p>
                  <p className="font-medium text-slate-800 bg-orange-50/60 p-4 rounded-2xl border-l-4 border-[#E56E1A]">
                    Fully licensed, insured, and bonded, we stand behind every project with a commitment to quality, transparency, and customer satisfaction. We understand the importance of minimizing business disruption and meeting strict deadlines."
                  </p>
                </div>

                {/* 4 Feature Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">ADA &amp; OSHA Code Compliance</h4>
                      <p className="text-[11px] text-slate-500">Full municipal building &amp; health code passing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Off-Hours Construction Shifts</h4>
                      <p className="text-[11px] text-slate-500">Overnight and weekend work for zero downtime</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-[#E56E1A] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Direct Owner Accountability</h4>
                      <p className="text-[11px] text-slate-500">Luan Meziu on-site managing all trades</p>
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

        {/* ── OUR COMMERCIAL CONSTRUCTION SERVICES (10 DETAILED SECTIONS) ── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Section Heading */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                Comprehensive Commercial Solutions
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Commercial Construction Services
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                Comprehensive Solutions for Every Business across Cliffwood &amp; New Jersey
              </p>
            </div>

            {/* 10 Detailed Cards Grid */}
            <div className="space-y-12">
              {COMMERCIAL_SERVICES_DATA.map((svc, idx) => {
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

        {/* ── WHY CHOOSE MEZIU FOR COMMERCIAL CONSTRUCTION? ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                The Meziu Advantage
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Why Choose MEZIU CONSTRUCTION for Your Commercial Project?
              </h2>
              <p className="text-lg text-slate-600">
                Master general contractors with rigorous commercial trade discipline, safety protocols, and on-time project execution.
              </p>
            </div>

            {/* 12 Reason Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY_CHOOSE_COMMERCIAL.map((item, idx) => {
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

        {/* ── 7-STEP COMMERCIAL CONSTRUCTION PROCESS ── */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200/80">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-200/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-slate-800">
                Proven Commercial Method
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
                Our Commercial Construction Process
              </h2>
              <p className="text-lg text-slate-600 font-medium">
                From Concept to Completion—We Do It Right.
              </p>
            </div>

            {/* 7-Step Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {COMMERCIAL_PROCESS.map((p, idx) => {
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

        {/* ── COMMERCIAL PORTFOLIO GALLERY ── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100/80 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                  Verified Commercial Work
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-slate-950">
                  Our Commercial Construction Portfolio
                </h2>
                <p className="text-base text-slate-600">
                  Real Projects. Real Quality. Browse examples of our commercial buildouts, renovations, and site work across Northern New Jersey.
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
              {COMMERCIAL_PORTFOLIO.map((proj, idx) => (
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
                Serving Northern New Jersey Commercial Markets
              </h2>
              <p className="text-sm text-slate-600">
                We provide expert commercial construction services within a 40-mile radius of Cliffwood, NJ, including:
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
                Frequently Asked Questions About Commercial Construction
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Everything you need to know about our commercial buildout capabilities, off-hours schedules, permitting, and timelines.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {COMMERCIAL_FAQS.map((faq, idx) => {
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
              <span>Let's Build Your Commercial Space</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Ready to Build Your Commercial Space?
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Whether you need a new storefront, an office renovation, or a complete commercial build-out, <strong className="font-bold text-white">{BUSINESS.name}</strong> is here to help. Contact Luan and our team today for a free on-site estimate.
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
                "{BUSINESS.name} is a family-owned, licensed, and insured commercial construction contractor serving Cliffwood, NJ, and a 40-mile radius since 2009. We are committed to quality craftsmanship, transparency, and customer satisfaction—from the first concept to the final handover."
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
