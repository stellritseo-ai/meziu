import {
  ArrowRight,
  Building2,
  Grid,
  Layers,
  Utensils,
  Bath,
  Home,
  Compass,
  ShieldCheck,
  Maximize2,
  Wrench,
  Sparkles,
} from "lucide-react";
import masonry from "@/assets/masonry.jpg";
import concrete from "@/assets/concrete.jpg";
import kitchen from "@/assets/kitchen.jpg";
import bathroom from "@/assets/bathroom.jpg";
import renovation from "@/assets/renovation.jpg";
import pavers from "@/assets/pavers.jpg";
import stonework from "@/assets/stonework.jpg";
import addition from "@/assets/addition.jpg";
import interior from "@/assets/interior.jpg";
import commercial from "@/assets/commercial.jpg";
import { Reveal } from "./Reveal";

type ServiceItem = {
  icon: React.ElementType;
  title: string;
  copy: string;
  image: string;
  alt: string;
};

const SERVICES: ServiceItem[] = [
  {
    icon: Layers,
    title: "Masonry Services",
    copy: "Precision brickwork, stone veneer, chimney repairs, and structural masonry engineered for New Jersey weather.",
    image: masonry,
    alt: "Mason laying brick with a trowel",
  },
  {
    icon: Grid,
    title: "Concrete Contractor",
    copy: "Engineered slabs, footings, reinforced steps, and custom stamped concrete finished to perfection.",
    image: concrete,
    alt: "Crew finishing a freshly poured concrete slab",
  },
  {
    icon: Utensils,
    title: "Kitchen Remodeling",
    copy: "Full kitchen transformations from layout design to custom cabinetry and premium quartz counter installation.",
    image: kitchen,
    alt: "Newly remodeled white kitchen with quartz island",
  },
  {
    icon: Bath,
    title: "Bathroom Remodeling",
    copy: "Custom tile work, frameless glass showers, vanity integration, and luxury modern plumbing fixtures.",
    image: bathroom,
    alt: "Renovated bathroom with glass walk-in shower",
  },
  {
    icon: Compass,
    title: "Pavers & Driveways",
    copy: "Interlocking paver driveways, custom patios, and elegant walkways with engineered base preparation.",
    image: pavers,
    alt: "Newly installed paver driveway in front of a home",
  },
  {
    icon: Home,
    title: "Home Remodeling & Renovation",
    copy: "Comprehensive whole-home transformations managed seamlessly from demolition to final interior trim.",
    image: renovation,
    alt: "Home interior renovation in progress with new framing",
  },
  {
    icon: ShieldCheck,
    title: "Stone Work & Walls",
    copy: "Heavy-duty stone retaining walls, decorative stone veneer, stone steps, and custom hardscapes.",
    image: stonework,
    alt: "Natural stone retaining wall with stone steps",
  },
  {
    icon: Maximize2,
    title: "Home Additions",
    copy: "Expanding your living space with seamless structural additions, master suites, and room extensions.",
    image: addition,
    alt: "Home addition under construction with new framing",
  },
  {
    icon: Wrench,
    title: "General Contracting & Handyman",
    copy: "Complete project management, punch-lists, framing, and specialty trade coordination under one roof.",
    image: interior,
    alt: "Bright renovated living room with new oak flooring",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    copy: "Storefront build-outs, commercial masonry, exterior facades, and tenant improvements for NJ businesses.",
    image: commercial,
    alt: "Renovated commercial storefront exterior with stone facade",
  },
];

/* ── Card Inner Content Component ── */
function CardContent({ s }: { s: ServiceItem }) {
  const Icon = s.icon;

  return (
    <>
      {/* Background Image */}
      <img
        src={s.image}
        alt={s.alt}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        loading="lazy"
      />

      {/* Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent group-hover:from-black/95 group-hover:via-black/80 group-hover:to-black/20 transition-all duration-500" />

      {/* Primary Accent Line at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-amber-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon Badge - Top-Left */}
      <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-primary/90 backdrop-blur-sm border border-white/10 flex items-center justify-center text-primary-foreground shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
        <Icon className="h-4 w-4" />
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
        <div className="transition-all duration-500 group-hover:-translate-y-2">
          <h3 className="text-sm sm:text-[15px] font-extrabold text-white leading-tight uppercase tracking-wide">
            {s.title}
          </h3>

          {/* Hover Reveal Description */}
          <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-out">
            <div className="overflow-hidden">
              <p className="text-[12px] text-white/80 leading-snug mt-2 line-clamp-3">
                {s.copy}
              </p>
              <a
                href="#contact"
                className="mt-3.5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider text-primary-foreground shadow-md transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 cursor-pointer w-fit"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Services() {
  const topItems = SERVICES.slice(0, 3);
  const rawSlideItems = SERVICES.slice(3);
  const slideItems = [...rawSlideItems, ...rawSlideItems];

  return (
    <section id="services" className="bg-background py-[60px] overflow-hidden border-y border-border/40">
      <div className="container-x">
        {/* ── Top Row: Text + 3 Hero Cards ──────────────────── */}
        <div className="grid gap-10 lg:grid-cols-[38%_1fr] lg:gap-14 items-center">
          {/* Left Text Column */}
          <Reveal className="flex flex-col justify-center text-left">
            {/* Eyebrow Badge */}
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-5 w-fit">
              <Sparkles className="w-3 h-3" />
              <span>Our Services</span>
              <Sparkles className="w-3 h-3" />
            </span>

            {/* Heading */}
            <h2 className="text-foreground tracking-tight leading-[1.2] font-extrabold text-[26px] sm:text-[32px] lg:text-[35px]">
              Full-Spectrum{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-500 to-primary">
                Construction &amp; Remodeling
              </span>{" "}
              Solutions
            </h2>

            {/* Divider Accent */}
            <div className="flex items-center gap-3 mt-5 mb-5">
              <div className="h-[2px] w-10 bg-primary rounded-full" />
              <div className="h-[2px] w-4 bg-primary/40 rounded-full" />
            </div>

            {/* Subtitle */}
            <p className="text-muted-foreground text-sm md:text-[15px] leading-[28px] font-medium max-w-[95%]">
              One accountable master team. Every project — from precision masonry foundations and concrete flatwork to full home renovations and commercial build-outs across Garfield, NJ.
            </p>

            {/* Trust Row */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-bold text-foreground/80">
              {["Licensed & Insured", "15+ Years Experience", "Free On-Site Estimates"].map((itemText) => (
                <span key={itemText} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {itemText}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <div className="mt-7">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-7 py-3.5 text-[13px] font-black uppercase tracking-wider shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          {/* Top 3 Hero Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {topItems.map((s) => (
              <Reveal
                key={s.title}
                className="group relative rounded-2xl overflow-hidden bg-slate-950 h-[210px] sm:h-[290px] lg:h-[360px] xl:h-[400px] cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)] transition-shadow duration-500"
              >
                <CardContent s={s} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Bottom Row: Smooth Hardware-Accelerated Infinite Slider ────────────────── */}
        <Reveal delay={150} className="mt-10 relative overflow-hidden">
          {/* Section Divider with Label */}
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px flex-1 bg-border/60" />
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground whitespace-nowrap">
              More Services
            </span>
            <div className="h-px flex-1 bg-border/60" />
          </div>

          {/* Fade Edges */}
          <div className="absolute top-12 bottom-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none hidden sm:block" />
          <div className="absolute top-12 bottom-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none hidden sm:block" />

          {/* Infinite Marquee Track (Pauses on Hover) */}
          <div className="overflow-hidden py-2">
            <div className="flex animate-marquee gap-5 hover:[animation-play-state:paused]">
              {slideItems.map((s, idx) => (
                <div
                  key={`${s.title}-${idx}`}
                  className="w-[240px] sm:w-[260px] lg:w-[280px] shrink-0"
                >
                  <div className="group relative rounded-xl overflow-hidden bg-slate-950 h-[180px] sm:h-[220px] lg:h-[260px] cursor-pointer shadow-md hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-shadow duration-500">
                    <CardContent s={s} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}