import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
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
  Building2,
  Users,
  ZoomIn,
  Play,
  Film,
  Image as ImageIcon,
  X,
  Star,
  Check,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCta } from "@/components/site/FloatingCta";
import { BUSINESS } from "@/lib/site";

// Existing authentic primary assets
import masonryImg from "@/assets/masonry.jpg";
import concreteImg from "@/assets/concrete.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import bathroomImg from "@/assets/bathroom.jpg";
import additionImg from "@/assets/addition.jpg";
import renovationImg from "@/assets/renovation.jpg";
import paversImg from "@/assets/pavers.jpg";
import commercialImg from "@/assets/commercial.jpg";
import stoneworkImg from "@/assets/stonework.jpg";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";

/* ── Dynamically Import Real Gallery Assets ── */
const imageModules = import.meta.glob<{ default: string }>(
  "@/assets/gallery/*.{jpg,jpeg,png}",
  { eager: true }
);
const videoModules = import.meta.glob<{ default: string }>(
  "@/assets/gallery/*.mp4",
  { eager: true }
);

const imageList = Object.values(imageModules).map((m) => m.default);
const videoList = Object.values(videoModules).map((m) => m.default);

const TITLE = "Our Projects | MEZIU CONSTRUCTION LLC — Completed Work in Garfield & Northern NJ";
const DESCRIPTION =
  "Explore the portfolio of MEZIU CONSTRUCTION LLC. See our completed masonry, concrete, kitchen, bathroom, and commercial projects across Garfield, NJ, and Northern New Jersey.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "MEZIU CONSTRUCTION LLC Project Portfolio",
          description: DESCRIPTION,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Natural Stone Retaining Wall & Paver Driveway - Garfield, NJ",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Complete Kitchen & Master Bathroom Renovation - Paramus, NJ",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Commercial Concrete Slab & Steps - Hackensack, NJ",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Two-Story Home Addition - Ridgewood, NJ",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Brick Chimney Repair & Front Porch Rebuild - Passaic County, NJ",
              },
              {
                "@type": "ListItem",
                position: 6,
                name: "Full Home Remodel - Clifton, NJ",
              },
              {
                "@type": "ListItem",
                position: 7,
                name: "Paver Patio with Fire Pit & Built-In Seating - Wayne, NJ",
              },
              {
                "@type": "ListItem",
                position: 8,
                name: "Commercial Storefront Build-Out - Garfield, NJ",
              },
            ],
          },
        }),
      },
    ],
  }),
  component: ProjectsPage,
});

/* ── Categories ── */
const CATEGORIES = [
  "All Projects",
  "Masonry & Stone Work",
  "Concrete & Driveways",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Home Renovations & Additions",
  "Pavers & Patios",
  "Commercial Construction",
] as const;

type CategoryType = (typeof CATEGORIES)[number];

/* ── 8 Detailed Featured Projects ── */
interface FeaturedProject {
  id: string;
  title: string;
  category: CategoryType;
  secondaryCategory?: CategoryType;
  location: string;
  client: string;
  role: string;
  description: string;
  testimonial: string;
  images: { src: string; caption: string }[];
  highlights: string[];
}

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "proj-1",
    title: "Natural Stone Retaining Wall & Paver Driveway",
    category: "Masonry & Stone Work",
    secondaryCategory: "Pavers & Patios",
    location: "Garfield, NJ",
    client: "Dominick R.",
    role: "Homeowner",
    description:
      "This Garfield property required a complete transformation of its outdoor space. Our team designed and installed a beautiful natural stone retaining wall that not only added aesthetic appeal but also solved the property's erosion issues. We complemented the wall with a custom interlocking paver driveway, ensuring durability and curb appeal that will last for years. The project was completed on schedule with meticulous attention to base preparation and drainage.",
    testimonial:
      "Meziu Construction built a natural stone retaining wall and custom paver driveway for our property in Garfield. The team was punctual, kept the site immaculate, and completed the job on schedule.",
    images: [
      { src: stoneworkImg, caption: "Natural Stone Retaining Wall Craftsmanship" },
      { src: paversImg, caption: "Custom Interlocking Paver Driveway" },
      { src: masonryImg, caption: "Deep Base Preparation & Leveling" },
    ],
    highlights: ["Erosion Control Solution", "Interlocking Paver Driveway", "Meticulous Base Preparation"],
  },
  {
    id: "proj-2",
    title: "Complete Kitchen & Master Bathroom Renovation",
    category: "Kitchen Remodeling",
    secondaryCategory: "Bathroom Remodeling",
    location: "Paramus, NJ",
    client: "Elena M.",
    role: "Homeowner",
    description:
      "This Paramus home underwent a full transformation with a complete kitchen and master bathroom renovation. Our team worked closely with the homeowners to design a modern, functional kitchen featuring custom cabinetry, quartz countertops, and premium finishes. The master bathroom was redesigned with a glass walk-in shower, elegant tile work, and updated fixtures. Every detail was carefully planned and executed to create a cohesive, luxurious living space.",
    testimonial:
      "We hired Meziu for a complete kitchen and master bathroom renovation in Paramus. Their craftsmanship and attention to layout design exceeded our expectations. Truly 5-star master builders.",
    images: [
      { src: kitchenImg, caption: "Modern Custom Kitchen & Quartz Countertops" },
      { src: bathroomImg, caption: "Glass Walk-In Shower & Custom Tile Work" },
      { src: renovationImg, caption: "Premium Interior Finishing" },
    ],
    highlights: ["Custom Cabinetry & Quartz", "Glass Walk-In Tile Shower", "Cohesive Luxury Living"],
  },
  {
    id: "proj-3",
    title: "Commercial Concrete Slab & Steps",
    category: "Commercial Construction",
    secondaryCategory: "Concrete & Driveways",
    location: "Hackensack, NJ",
    client: "Robert K.",
    role: "Commercial Property Manager",
    description:
      "For this Hackensack commercial storefront, MEZIU CONSTRUCTION was contracted to pour an engineered concrete slab and install durable concrete steps. The project required precision leveling, proper reinforcement, and compliance with strict commercial building codes. Our team delivered a flawless foundation that passed city inspection with zero punch-list items, allowing the business to proceed with their build-out on time.",
    testimonial:
      "Engineered concrete slab and steps poured for our commercial storefront in Hackensack. Passed city inspection with zero punch-list items. Highly recommend their concrete crew.",
    images: [
      { src: concreteImg, caption: "Engineered Concrete Slab Pour" },
      { src: commercialImg, caption: "Reinforced Commercial Front Steps" },
      { src: aboutImg, caption: "Precision Code Compliance on Site" },
    ],
    highlights: ["Passed City Inspection with 0 Items", "Commercial Code Compliant", "Precision Reinforced Slab"],
  },
  {
    id: "proj-4",
    title: "Two-Story Home Addition",
    category: "Home Renovations & Additions",
    location: "Ridgewood, NJ",
    client: "Anthony V.",
    role: "Homeowner",
    description:
      "This Ridgewood homeowner needed extra space for their growing family. MEZIU CONSTRUCTION managed the entire two-story addition project from design to completion. Our team handled framing, roofing, electrical, plumbing, and interior finishing—ensuring the new addition seamlessly blended with the existing home's architecture. Clear communication and expert coordination made this complex project a success.",
    testimonial:
      "From our first free estimate to final walkthrough, communication was seamless. They framed and built a beautiful two-story home addition that looks original to our house.",
    images: [
      { src: additionImg, caption: "Two-Story Structural Addition Exterior" },
      { src: renovationImg, caption: "Seamless Architectural Integration" },
      { src: heroImg, caption: "Full Multi-Trade Project Coordination" },
    ],
    highlights: ["Two-Story Architectural Framing", "Turnkey General Contracting", "Seamless Exterior Blend"],
  },
  {
    id: "proj-5",
    title: "Brick Chimney Repair & Front Porch Rebuild",
    category: "Masonry & Stone Work",
    location: "Passaic County, NJ",
    client: "Sarah T.",
    role: "Homeowner",
    description:
      "Aging brickwork posed a safety concern for this Passaic County homeowner. Our masonry team carefully repaired the deteriorating brick chimney, ensuring structural integrity and weather resistance. We also rebuilt the front masonry porch, restoring its original charm while reinforcing the foundation. The result is a beautiful, safe, and long-lasting entryway that enhances the home's curb appeal.",
    testimonial:
      "Repaired our aging brick chimney and rebuilt our front masonry porch. Professional, honest pricing, and top-notch structural brickwork. Will definitely hire again.",
    images: [
      { src: masonryImg, caption: "Structural Brick Chimney Restoration" },
      { src: stoneworkImg, caption: "Reinforced Front Porch Rebuild" },
      { src: aboutImg, caption: "Clean Jobsite & Weatherproofing" },
    ],
    highlights: ["Structural Brick Restoration", "Reinforced Front Entry Porch", "Enhanced Curb Appeal"],
  },
  {
    id: "proj-6",
    title: "Full Home Remodel – Clifton",
    category: "Home Renovations & Additions",
    location: "Clifton, NJ",
    client: "Michael B.",
    role: "Real Estate Investor",
    description:
      "This Clifton home required a complete interior remodel. MEZIU CONSTRUCTION coordinated every aspect of the project, including framing, drywall, plumbing, electrical work, tile installation, and trim carpentry. Our general contracting expertise allowed us to manage multiple trades efficiently, delivering a beautiful, fully renovated home without delays or budget overruns.",
    testimonial:
      "Outstanding general contracting service. Meziu coordinated framing, plumbing, tile work, and trim for our full home remodel in Clifton without delays.",
    images: [
      { src: renovationImg, caption: "Full Interior Transformation" },
      { src: kitchenImg, caption: "Open-Concept Living & Tile Work" },
      { src: bathroomImg, caption: "Modernized Bath & Trim Carpentry" },
    ],
    highlights: ["On-Time & On-Budget Delivery", "Complete Multi-Trade Coordination", "High-End Trim & Tile Finish"],
  },
  {
    id: "proj-7",
    title: "Paver Patio with Fire Pit & Built-In Seating",
    category: "Pavers & Patios",
    location: "Wayne, NJ",
    client: "Jessica P.",
    role: "Homeowner",
    description:
      "We transformed this Wayne backyard into an inviting outdoor living space. Our team installed interlocking pavers with deep base preparation to prevent settling, and added built-in seating and a custom fire pit. The result is a functional, beautiful patio perfect for entertaining and family gatherings—designed to withstand New Jersey's harsh winter weather.",
    testimonial:
      "Installed interlocking paver patio with built-in seating and outdoor fire pit. The base preparation was deep and thorough — zero settling after harsh winter weather.",
    images: [
      { src: paversImg, caption: "Interlocking Paver Patio with Fire Pit" },
      { src: stoneworkImg, caption: "Custom Built-In Stone Seating" },
      { src: masonryImg, caption: "Deep Base Compaction for Winter Durability" },
    ],
    highlights: ["Custom Stone Fire Pit & Seating", "Deep Base Freeze-Thaw Resistance", "Outdoor Living Transformation"],
  },
  {
    id: "proj-8",
    title: "Commercial Storefront Build-Out",
    category: "Commercial Construction",
    location: "Garfield, NJ",
    client: "Carlos G.",
    role: "Business Owner",
    description:
      "This Garfield business owner needed a complete interior build-out for their new storefront. MEZIU CONSTRUCTION handled everything from framing and drywall to electrical, lighting, and flooring. We completed the project ahead of schedule, allowing the client to open their doors for business on time with a professional, welcoming space.",
    testimonial:
      "Storefront interior build-out completed ahead of our grand opening. Meziu Construction handles every detail with precision and professional integrity.",
    images: [
      { src: commercialImg, caption: "Complete Storefront Interior Build-Out" },
      { src: renovationImg, caption: "Commercial Framing & Modern Lighting" },
      { src: concreteImg, caption: "Durable Commercial Flooring Installation" },
    ],
    highlights: ["Completed Ahead of Grand Opening", "Full Turnkey Commercial Build-Out", "Professional Retail Finishing"],
  },
];

/* ── Recent Gallery Items Built from Real Assets ── */
interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  title: string;
  category: string;
  location: string;
}

const GALLERY_MEDIA: GalleryItem[] = [
  ...videoList.map((src, i) => ({
    id: `vid-${i}`,
    type: "video" as const,
    src,
    title: [
      "Masonry & Foundation Walkthrough",
      "Concrete Pouring & Leveling",
      "Kitchen & Tile Remodel In-Progress",
      "Patio & Paver Installation Work",
      "Home Addition Framing Video",
      "Commercial Storefront Progress",
    ][i % 6] || `On-Site Project Video #${i + 1}`,
    category: ["Masonry", "Concrete", "Remodeling", "Pavers", "Additions", "Commercial"][i % 6],
    location: ["Garfield, NJ", "Paramus, NJ", "Clifton, NJ", "Wayne, NJ", "Hackensack, NJ", "Passaic, NJ"][i % 6],
  })),
  ...imageList.map((src, i) => {
    const titles = [
      "Concrete Driveway Installation",
      "Kitchen Backsplash & Countertops",
      "Bathroom Tile & Shower Renovation",
      "Retaining Wall & Landscaping",
      "Home Addition – Sunroom",
      "Commercial Flooring & Finishing",
      "Stone Walkway & Entry Steps",
      "Full Basement Renovation",
      "Custom Paver Patio & Border",
      "Brick Chimney Repointing",
      "Foundation Wall Reinforcement",
      "Master Suite Bathroom Remodel",
    ];
    const locs = [
      "Elmwood Park, NJ",
      "Lodi, NJ",
      "Saddle Brook, NJ",
      "Paterson, NJ",
      "Passaic, NJ",
      "Hackensack, NJ",
      "Clifton, NJ",
      "Garfield, NJ",
      "Wayne, NJ",
      "Paramus, NJ",
      "Ridgewood, NJ",
      "Nutley, NJ",
    ];
    return {
      id: `img-${i}`,
      type: "image" as const,
      src,
      title: titles[i % titles.length],
      category: ["Concrete", "Kitchens", "Bathrooms", "Masonry", "Additions", "Commercial", "Pavers", "Renovations"][i % 8],
      location: locs[i % locs.length],
    };
  }),
];

function ProjectsPage() {
  const [selectedCat, setSelectedCat] = useState<CategoryType>("All Projects");
  const [mediaFilter, setMediaFilter] = useState<"All" | "Photos" | "Videos">("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [showAllGallery, setShowAllGallery] = useState(false);

  // Filter Featured Case Studies
  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    if (selectedCat === "All Projects") return true;
    return proj.category === selectedCat || proj.secondaryCategory === selectedCat;
  });

  // Filter Additional Media Grid
  const filteredMedia = GALLERY_MEDIA.filter((item) => {
    if (mediaFilter === "Photos") return item.type === "image";
    if (mediaFilter === "Videos") return item.type === "video";
    return true;
  });

  const INITIAL_MEDIA_COUNT = 12;
  const visibleMedia = showAllGallery ? filteredMedia : filteredMedia.slice(0, INITIAL_MEDIA_COUNT);

  const openLightbox = useCallback((item: GalleryItem) => {
    setLightboxItem(item);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxItem(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeLightbox]);

  return (
    <div className="bg-white text-slate-900 min-h-screen flex flex-col selection:bg-[#E56E1A] selection:text-white">
      <Header />

      <main className="flex-1">
        {/* ──────────────────────────────────────────────────────────────────────────
            1. HERO SECTION (LIGHT THEME)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-slate-50/60 pt-12 pb-16 lg:pt-18 lg:pb-24 border-b border-slate-200/70">
          <div className="pointer-events-none absolute -top-24 right-10 w-96 h-96 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl" />

          <div className="container-x relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
              <Link to="/" className="hover:text-[#E56E1A] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#E56E1A] font-bold">Projects</span>
            </div>

            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#B85008] mb-5 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-[#E56E1A]" />
                <span>On-Site Portfolio • Garfield &amp; Northern New Jersey</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.1]">
                Our Projects
              </h1>

              {/* Sub-headline */}
              <h2 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E56E1A] via-amber-600 to-[#E56E1A] tracking-tight">
                Real Work. Real Results. Quality You Can See.
              </h2>

              {/* Body Text */}
              <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed text-slate-600 max-w-3xl">
                Browse our portfolio of completed masonry, concrete, remodeling, and renovation
                projects across Garfield and Northern New Jersey. Each project reflects our
                commitment to craftsmanship, attention to detail, and client satisfaction.
              </p>

              {/* Hero Action Button */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#E56E1A] to-[#F17B24] px-8 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Request a Free Estimate — {BUSINESS.phone}</span>
                </a>

                <a
                  href="#case-studies"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white border border-slate-300 px-7 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800 hover:bg-slate-50 shadow-sm transition-all cursor-pointer"
                >
                  <span>Browse Case Studies</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm">
                <div className="flex items-center gap-2 text-amber-600 text-xs font-extrabold uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4" />
                  <span>Proven Track Record</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-950">500+</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Completed Projects</div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-extrabold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Quality Assurance</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-950">100%</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Licensed &amp; Insured</div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm">
                <div className="flex items-center gap-2 text-[#E56E1A] text-xs font-extrabold uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Service Territory</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-950">40 Miles</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Bergen, Passaic, Essex</div>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm">
                <div className="flex items-center gap-2 text-sky-600 text-xs font-extrabold uppercase tracking-wider mb-1">
                  <Star className="w-4 h-4 fill-sky-600" />
                  <span>Client Rating</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-950">5.0 ★</div>
                <div className="text-xs text-slate-500 font-medium mt-1">Master Craftsmanship</div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            2. PROJECT FILTER / NAVIGATION (LIGHT THEME)
           ────────────────────────────────────────────────────────────────────────── */}
        <section id="case-studies" className="py-12 bg-slate-50/70 border-b border-slate-200/70 sticky top-16 lg:top-20 z-30 backdrop-blur-md">
          <div className="container-x">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest text-[#B85008] flex items-center gap-2">
                  <Hammer className="w-4 h-4 text-[#E56E1A]" />
                  <span>Browse Our Work</span>
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Select a category to view specialized project case studies.
                </p>
              </div>

              <span className="text-xs font-bold text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200 shrink-0 self-start md:self-auto">
                Showing {filteredProjects.length} Case Studies
              </span>
            </div>

            {/* Filter Pills Scrollable on Mobile */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCat === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCat(cat)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold whitespace-nowrap transition-all duration-200 border cursor-pointer shrink-0 ${
                      isActive
                        ? "bg-[#E56E1A] text-white border-[#E56E1A] shadow-md shadow-orange-500/20 scale-105"
                        : "bg-white text-slate-700 border-slate-200 hover:border-[#E56E1A] hover:text-[#E56E1A] shadow-sm"
                    }`}
                  >
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            3. FEATURED PROJECT CASE STUDIES (8 DETAILED CARDS)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x space-y-16 lg:space-y-24">
            {filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={project.id}
                  className="rounded-3xl bg-slate-50/60 border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 items-center">
                    
                    {/* Visual Media Column (6 cols) */}
                    <div className={`lg:col-span-6 space-y-4 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      {/* Main Featured Case Study Photo */}
                      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md group">
                        <img
                          src={project.images[0].src}
                          alt={project.images[0].caption}
                          className="h-[280px] sm:h-[340px] w-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                            <MapPin className="w-3 h-3 text-[#E56E1A]" />
                            <span>{project.location}</span>
                          </span>
                        </div>
                        <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md text-white text-[11px] font-semibold flex items-center justify-between">
                          <span>{project.images[0].caption}</span>
                          <span className="text-amber-400 font-bold">Featured Case #{idx + 1}</span>
                        </div>
                      </div>

                      {/* Secondary Thumbnail Gallery Row */}
                      <div className="grid grid-cols-2 gap-3">
                        {project.images.slice(1).map((img, i) => (
                          <div
                            key={i}
                            className="relative overflow-hidden rounded-xl border border-slate-200 bg-white group"
                          >
                            <img
                              src={img.src}
                              alt={img.caption}
                              className="h-28 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                              <span className="text-[10px] font-bold text-white leading-tight">
                                {img.caption}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content Column (6 cols) */}
                    <div className={`lg:col-span-6 space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      {/* Category Badge & Case Number */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#B85008]">
                          <Hammer className="w-3.5 h-3.5 text-[#E56E1A]" />
                          <span>{project.category}</span>
                        </span>
                        {project.secondaryCategory && (
                          <span className="inline-flex items-center rounded-full bg-slate-200/80 px-3 py-1 text-[11px] font-bold text-slate-700">
                            {project.secondaryCategory}
                          </span>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-950 leading-snug">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                        {project.description}
                      </p>

                      {/* Key Highlights Checklist */}
                      <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-slate-800">
                        {project.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Verified Client Testimonial Box */}
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 relative">
                        <Quote className="w-6 h-6 text-orange-200 absolute top-4 right-4" />
                        <div className="flex items-center gap-1 text-amber-500 mb-1">
                          {[...Array(5)].map((_, s) => (
                            <Star key={s} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <p className="text-xs sm:text-[13px] italic text-slate-700 leading-relaxed font-medium">
                          "{project.testimonial}"
                        </p>
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-950">— {project.client}</span>
                          <span className="text-slate-500 font-semibold">{project.location}</span>
                        </div>
                      </div>

                      {/* Action Row */}
                      <div className="pt-2 flex items-center gap-3">
                        <a
                          href={`tel:${BUSINESS.phone}`}
                          className="inline-flex h-11 items-center gap-2 rounded-full bg-[#E56E1A] px-6 text-xs font-black uppercase tracking-wider text-white shadow-md hover:bg-[#d46215] transition-all cursor-pointer"
                        >
                          <Phone className="w-3.5 h-3.5 fill-current" />
                          <span>Get Estimate Like This</span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            4. PROJECT GALLERY GRID (ADDITIONAL WORK) (LIGHT THEME)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-t border-slate-200/70">
          <div className="container-x">
            
            {/* Header with Photo/Video Tabs */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-200 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#B85008]">
                  <Sparkles className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>More Recent Projects</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  Browse Through Our Latest Work
                </h2>
                <p className="text-sm sm:text-base text-slate-600">
                  Real jobsite photos and on-site video walkthroughs from active projects across
                  Northern New Jersey.
                </p>
              </div>

              {/* Media Filter Switcher */}
              <div className="flex items-center gap-2 p-1 bg-white border border-slate-200 rounded-full shadow-sm shrink-0">
                {(["All", "Photos", "Videos"] as const).map((filterType) => {
                  const isActive = mediaFilter === filterType;
                  return (
                    <button
                      key={filterType}
                      type="button"
                      onClick={() => {
                        setMediaFilter(filterType);
                        setShowAllGallery(false);
                      }}
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-extrabold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#E56E1A] text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-950"
                      }`}
                    >
                      {filterType === "Photos" ? (
                        <ImageIcon className="w-3.5 h-3.5" />
                      ) : filterType === "Videos" ? (
                        <Film className="w-3.5 h-3.5" />
                      ) : (
                        <Sparkles className="w-3.5 h-3.5" />
                      )}
                      <span>{filterType}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Gallery Media Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
              {visibleMedia.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  onClick={() => openLightbox(item)}
                  className="group relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative overflow-hidden w-full h-[220px] sm:h-[260px]">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                      <span className="inline-flex items-center gap-1 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                        {item.type === "video" ? (
                          <>
                            <Film className="w-2.5 h-2.5 text-amber-400" />
                            <span>Video</span>
                          </>
                        ) : (
                          <>
                            <ImageIcon className="w-2.5 h-2.5 text-primary" />
                            <span>{item.category}</span>
                          </>
                        )}
                      </span>
                    </div>

                    {/* Hover Center Icon Badge */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                        {item.type === "video" ? (
                          <Play className="w-4 h-4 fill-white ml-0.5" />
                        ) : (
                          <ZoomIn className="w-4 h-4 text-white" />
                        )}
                      </div>
                    </div>

                    {/* Bottom Title & Location */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white pointer-events-none">
                      <p className="text-[11px] font-bold line-clamp-1 text-white leading-tight">
                        {item.title}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[10px] text-amber-300 font-semibold mt-0.5">
                        <MapPin className="w-2.5 h-2.5" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More / Show Less Button */}
            {filteredMedia.length > INITIAL_MEDIA_COUNT && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => setShowAllGallery(!showAllGallery)}
                  className="inline-flex items-center gap-2.5 rounded-full bg-white border border-slate-300 px-8 py-3.5 text-xs font-black uppercase tracking-wider text-slate-900 shadow-sm hover:border-[#E56E1A] hover:text-[#E56E1A] transition-all cursor-pointer"
                >
                  <span>{showAllGallery ? "Show Less" : `View All ${filteredMedia.length} Media Files`}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      showAllGallery ? "-rotate-90" : "rotate-90"
                    }`}
                  />
                </button>
              </div>
            )}

          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            5. CALL TO ACTION & REASSURANCE NOTE
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-[#E56E1A] via-[#ED741D] to-[#E56E1A] text-white relative overflow-hidden shadow-xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="container-x relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/15 border border-white/30 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Let's Discuss Your Project</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Have a Project in Mind?
            </h2>

            <p className="text-base sm:text-lg font-medium text-white/95 max-w-2xl mx-auto leading-relaxed">
              Our portfolio showcases the quality and craftsmanship we bring to every job. Whether
              you need a small repair or a major renovation, MEZIU CONSTRUCTION is ready to bring
              your vision to life.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex h-13 items-center justify-center gap-3 rounded-full bg-slate-950 px-8 sm:px-9 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-2xl transition-all duration-300 hover:bg-slate-900 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#E56E1A] fill-current" />
                <span>Get a Free On-Site Estimate — {BUSINESS.phone}</span>
              </a>

              <a
                href={`mailto:${BUSINESS.email}`}
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-white text-slate-950 px-7 text-xs sm:text-sm font-black uppercase tracking-wider shadow-xl hover:bg-slate-100 hover:scale-105 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#E56E1A]" />
                <span>Email Us</span>
              </a>
            </div>

            {/* Reassurance Footer Note */}
            <div className="mt-8 pt-6 border-t border-white/20 max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm font-semibold text-white/90 leading-relaxed">
                All projects are completed by our experienced, hands-on master team. We are fully
                licensed, insured, and bonded. Proudly serving Garfield, NJ, and a 40-mile radius
                since 2009.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ──────────────────────────────────────────────────────────────────────────
          LIGHTBOX MODAL FOR GALLERY
         ────────────────────────────────────────────────────────────────────────── */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

          {/* Modal Box */}
          <div
            className="relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#E56E1A] transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Media Content */}
            <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center min-h-[60vh]">
              {lightboxItem.type === "video" ? (
                <video
                  src={lightboxItem.src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain max-h-[76vh]"
                />
              ) : (
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.title}
                  className="w-full h-full object-contain max-h-[76vh]"
                />
              )}
            </div>

            {/* Bottom Caption Bar */}
            <div className="bg-white px-6 py-4 flex items-center justify-between gap-4 shrink-0 border-t border-slate-200">
              <div className="flex items-center gap-3 min-w-0">
                <span className="bg-[#E56E1A] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shrink-0">
                  {lightboxItem.category}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-950 truncate">
                    {lightboxItem.title}
                  </h4>
                  <p className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                    <MapPin className="h-3 w-3 text-[#E56E1A]" />
                    <span>{lightboxItem.location}</span>
                  </p>
                </div>
              </div>

              <a
                href={`tel:${BUSINESS.phone}`}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white text-xs font-bold px-4 py-2 hover:bg-[#E56E1A] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call for Estimate</span>
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
