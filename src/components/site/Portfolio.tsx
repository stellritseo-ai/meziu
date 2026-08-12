import { useState, useEffect, useCallback } from "react";
import {
  MapPin,
  ArrowRight,
  Sparkles,
  X,
  ZoomIn,
  Play,
  Film,
  Image as ImageIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";

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

export type GalleryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  cat: "Masonry" | "Concrete" | "Remodeling" | "Exterior";
  title: string;
  loc: string;
  featured?: boolean;
};

/* Categorize real gallery assets */
const GALLERY_ITEMS: GalleryItem[] = [
  // Videos
  ...videoList.slice(0, 6).map((src, i) => ({
    id: `vid-${i}`,
    type: "video" as const,
    src,
    cat: (["Masonry", "Concrete", "Remodeling", "Exterior"][i % 4]) as GalleryItem["cat"],
    title: `On-Site Project Video #${i + 1}`,
    loc: "Garfield & Northern NJ",
    featured: i === 0,
  })),
  // Photos
  ...imageList.slice(0, 24).map((src, i) => ({
    id: `img-${i}`,
    type: "image" as const,
    src,
    cat: (["Masonry", "Concrete", "Remodeling", "Exterior"][i % 4]) as GalleryItem["cat"],
    title: `Project Workmanship #${i + 1}`,
    loc: "Garfield & Northern NJ",
    featured: i % 7 === 0,
  })),
];

const FILTERS = ["All", "Photos", "Videos"] as const;

const CAT_ICONS = {
  All: Sparkles,
  Photos: ImageIcon,
  Videos: Film,
};

export function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const handleFilterChange = (cat: (typeof FILTERS)[number]) => {
    setActive(cat);
    setShowAll(false);
  };

  const filtered = GALLERY_ITEMS.filter((item) => {
    if (active === "All") return true;
    if (active === "Photos") return item.type === "image";
    if (active === "Videos") return item.type === "video";
    return true;
  });

  const INITIAL_COUNT = 10; // 2 rows of 5 items
  const shown = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);

  const openLightbox = useCallback((item: GalleryItem) => {
    setLightbox(item);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeLightbox]);

  useEffect(() => () => {
    document.body.style.overflow = "";
  }, []);

  return (
    <section id="projects" className="bg-background py-[60px] overflow-hidden border-b border-border/40">
      <div className="container-x">
        {/* ── Section Header ──────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <Reveal className="max-w-2xl">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>Project Gallery</span>
            </div>

            <h2
              className="text-foreground tracking-tight leading-[1.1] capitalize font-extrabold text-[26px] sm:text-[34px] lg:text-[40px] mt-0 mb-2"
            >
              Real Work &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-500 to-primary">
                On-Site Portfolio
              </span>
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Explore real jobsite photos and videos from our recent masonry, concrete, kitchen, bathroom, and structural projects across Garfield &amp; Northern New Jersey.
            </p>
          </Reveal>

          {/* Header Action Button */}
          <Reveal delay={100} className="shrink-0 self-start lg:self-auto">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-foreground hover:bg-foreground/90 text-background text-xs font-bold uppercase tracking-widest rounded-full px-7 py-4 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        {/* ── Filter Tabs ─────────────────────────────── */}
        <Reveal delay={120} className="flex flex-wrap gap-2.5 mb-10">
          {FILTERS.map((cat) => {
            const Icon = CAT_ICONS[cat];
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleFilterChange(cat)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105"
                    : "bg-card text-muted-foreground border-border/80 hover:border-primary hover:text-foreground shadow-sm"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{cat}</span>
              </button>
            );
          })}
        </Reveal>

        {/* ── Gallery Media Grid ─────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {shown.map((item, idx) => (
            <Reveal
              key={`${item.id}-${idx}`}
              delay={(idx % 5) * 50}
              className="group relative overflow-hidden rounded-2xl bg-slate-950 border border-border/80 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div
                onClick={() => openLightbox(item)}
                className="relative overflow-hidden w-full h-[260px] sm:h-[290px] lg:h-[320px]"
              >
                {/* Image or Video */}
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading={idx < 6 ? "eager" : "lazy"}
                  />
                )}

                {/* Minimal Subtle Vignette at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {item.type === "video" ? (
                      <>
                        <Film className="w-3 h-3 text-amber-400" />
                        <span>Video</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon className="w-3 h-3 text-primary" />
                        <span>{item.cat}</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Hover Center Icon Badge */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    {item.type === "video" ? (
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    ) : (
                      <ZoomIn className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>

                {/* Hover Bottom Location Pill */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="inline-flex items-center gap-1 text-white text-[11px] font-extrabold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>Garfield, NJ</span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── Show All Images Button ──────────────────────────── */}
        {filtered.length > INITIAL_COUNT && (
          <Reveal delay={150} className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-3.5 text-xs font-black uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>{showAll ? "Show Less" : "Show All Images"}</span>
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${showAll ? "-rotate-90" : "rotate-90"}`} />
            </button>
          </Reveal>
        )}
      </div>

      {/* ── Lightbox Modal ──────────────────────────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

          {/* Modal Container */}
          <div
            className="relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border border-white/10 animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Media Content - Pristine Edge to Edge View */}
            <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center min-h-[60vh]">
              {lightbox.type === "video" ? (
                <video
                  src={lightbox.src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain max-h-[78vh]"
                />
              ) : (
                <img
                  src={lightbox.src}
                  alt={lightbox.title}
                  className="w-full h-full object-contain max-h-[78vh]"
                />
              )}
            </div>

            {/* Bottom Caption Bar */}
            <div className="bg-card px-6 py-3.5 flex items-center justify-between gap-4 shrink-0 border-t border-border">
              <div className="flex items-center gap-3 min-w-0">
                <span className="bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shrink-0">
                  {lightbox.cat}
                </span>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground font-bold truncate">
                  <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>Garfield &amp; Northern New Jersey</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        .animate-zoom-in {
          animation: zoom-in 0.25s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}