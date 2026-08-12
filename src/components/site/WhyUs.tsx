import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Volume2,
  VolumeX,
  Play,
  Pause,
  ShieldCheck,
  Award,
  Clock,
  Building2,
  HardHat,
} from "lucide-react";
import { useState, useRef } from "react";
import renovation from "@/assets/renovation.jpg";
import whyusVideo from "@/assets/whyus.mp4";
import masonry from "@/assets/masonry.jpg";
import { Reveal } from "./Reveal";

const REASONS = [
  {
    icon: HardHat,
    title: "Family-Owned & Operated",
    desc: "Personal service, direct owner accountability, and meticulous attention to every project detail.",
  },
  {
    icon: Award,
    title: "15+ Years Experienced Crew",
    desc: "Decades of hands-on mastery across precision masonry, structural concrete, and full home remodeling.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Insured",
    desc: "Complete New Jersey state contractor licensing, general liability, and full worker protection coverage.",
  },
  {
    icon: Building2,
    title: "Residential & Commercial",
    desc: "Tailored structural and aesthetic solutions for single-family homes, multi-unit properties, and storefronts.",
  },
  {
    icon: CheckCircle2,
    title: "Engineered Quality Workmanship",
    desc: "Deep base preparation, premium grade materials, and structural integrity built to withstand NJ weather.",
  },
  {
    icon: Clock,
    title: "Local Garfield NJ Service",
    desc: "Proudly serving Garfield, NJ, Bergen County, Passaic County, and surrounding communities within 40 miles.",
  },
];

export function WhyUs() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="why-us" className="py-[60px] bg-background border-b border-border/40 overflow-hidden">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14 items-center">
          {/* ── Left Column: Text & Premium Features ────────────────────── */}
          <Reveal className="flex flex-col justify-center h-full w-full order-2 lg:order-1">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
              {/* Eyebrow Badge with Pulse Dot */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-[10px] md:text-[11px] font-black uppercase tracking-widest mb-5 shadow-sm select-none">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span>Why Choose Us</span>
              </div>

              {/* Display Headline */}
              <h2 className="leading-[1.2] text-foreground tracking-tight font-extrabold text-[24px] sm:text-[32px] lg:text-[36px] capitalize mb-3">
                The Standard for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-500 to-primary">
                  Premium Construction
                </span>{" "}
                &amp; Remodeling.
              </h2>

              {/* Subtitle */}
              <p className="text-muted-foreground text-[14px] sm:text-[15px] leading-[28px] mb-6 font-medium max-w-[95%]">
                We've built our reputation on doing the job right the first time — with the structural safety, fine craftsmanship, and transparent communication that Garfield homeowners and business owners rely on.
              </p>

              {/* Feature Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full text-left">
                {REASONS.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.title}
                      className="group/item flex items-start gap-3 p-3.5 rounded-2xl bg-card/60 hover:bg-card border border-border/60 hover:border-primary/40 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:text-primary-foreground transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-extrabold text-foreground text-[13px] leading-snug group-hover/item:text-primary transition-colors">
                          {f.title}
                        </h3>
                        <p className="text-[12px] text-muted-foreground leading-relaxed font-medium mt-0.5 line-clamp-2">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 bg-foreground hover:bg-foreground/90 text-background text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-7 py-3.5 transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                >
                  <span>Explore Services</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-amber-500 to-primary hover:opacity-95 text-primary-foreground text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-7 py-3.5 transition-all duration-300 shadow-lg shadow-primary/20 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
                >
                  <span>Get Free Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* ── Right Column: Interactive Video Player Showcase ────────────── */}
          <Reveal delay={150} className="relative w-full order-1 lg:order-2">
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-border/80 h-[360px] sm:h-[450px] lg:h-[580px] xl:h-[620px] w-full bg-slate-950">
              {/* Background Video */}
              <video
                ref={videoRef}
                src={whyusVideo}
                poster={renovation}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none" />

              {/* Top-Left Live Status Badge */}
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-white/20 text-white rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider shadow-lg select-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Verified Workmanship</span>
              </div>

              {/* Top-Right Video Controls */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                  className="w-9 h-9 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 shadow-lg cursor-pointer"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="w-9 h-9 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 shadow-lg cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
              </div>

              {/* Floating Bottom Glassmorphic Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-card/90 backdrop-blur-md border border-border/80 rounded-2xl p-4 shadow-2xl flex items-center justify-between select-none transition-all duration-300 group-hover:bottom-5 group-hover:bg-card/95">
                <div className="text-left min-w-0 pr-2">
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                    Meziu Construction LLC
                  </p>
                  <p className="text-xs sm:text-sm font-extrabold text-foreground mt-0.5 truncate">
                    Licensed NJ Master Contractor
                  </p>
                </div>
                <span className="text-[10px] font-black text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap flex items-center gap-1.5 shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>100% Quality</span>
                </span>
              </div>

              {/* Floating Secondary Masonry Badge (Bottom-Left Corner) */}
              <div className="absolute bottom-24 left-4 z-10 hidden sm:flex items-center gap-2.5 bg-slate-950/85 backdrop-blur-md border border-white/20 rounded-xl p-2 pr-3.5 shadow-xl select-none group-hover:scale-105 transition-transform duration-300">
                <img
                  src={masonry}
                  alt="Masonry work sample"
                  className="w-9 h-9 rounded-lg object-cover border border-white/10"
                />
                <div className="text-left">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Masonry &amp; Concrete</p>
                  <p className="text-[11px] font-extrabold text-white">Garfield, NJ</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}