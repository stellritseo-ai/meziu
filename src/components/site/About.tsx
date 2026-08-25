import { useState, useRef } from "react";
import { ArrowRight, Check, Play, Pause, Volume2, VolumeX, ShieldCheck, Sparkles, Award, Clock, MapPin } from "lucide-react";
import aboutImg from "@/assets/about.jpg";
import masonryImg from "@/assets/masonry.jpg";
import welcomeVideo from "@/assets/welcom1.mp4";
import { Reveal } from "./Reveal";

const POINTS = [
  "Family owned & operated since 2009",
  "Licensed, insured & fully bonded",
  "Residential & commercial expertise",
  "Experienced, hands-on master team",
  "Uncompromising quality workmanship",
  "Prompt local service within 40 miles",
];

export function About() {
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
    <section id="about" className="relative py-[60px] overflow-hidden bg-background">
      {/* Background Decorative Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="container-x flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        {/* Left Column: Text & Value Propositions (65% width) */}
        <Reveal className="w-full lg:w-[65%] space-y-6">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Why Choose Meziu Construction</span>
          </div>

          {/* Premium Headline */}
          <h2 className="mb-3 font-display text-[28px] sm:text-[36px] lg:text-[40px] font-bold leading-[1.2] text-foreground tracking-tight">
            Elevate Your Space With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-500 to-primary">
              Craftsmanship You Can Trust
            </span>
          </h2>

          {/* Description Paragraphs */}
          <p className="text-sm sm:text-[16px] leading-[28px] sm:leading-[32px] text-muted-foreground">
            <strong className="font-semibold text-foreground">At Meziu Construction, </strong> we are passionate about building structures that not only look good but also withstand the test of time. Our team is composed of experienced professionals who provide quality workmanship and exceptional customer service. We make every effort to maintain open communication with our clients throughout the entire building process, ensuring that they receive exactly what they want.
          </p>
          <p className="text-sm sm:text-base leading-[30px] sm:leading-[33px] text-black">
            From precision masonry and custom concrete work to complete kitchen, bathroom, and structural renovations, our experienced crew treats every project with meticulous care — communicating clearly from your initial free estimate through final project walkthrough.
          </p>

          {/* Highlights Grid */}
          <ul className="pt-2 grid gap-3.5 sm:grid-cols-2">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm font-medium text-foreground">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary shadow-sm">
                  <Check className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Trust Stat Pills */}
          <div className="pt-4 grid grid-cols-2 gap-4 border-t border-border/60">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-bold leading-none text-foreground">15+ Years</div>
                <div className="text-xs text-muted-foreground mt-0.5">Proven Excellence</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-bold leading-none text-foreground">Cliffwood, NJ</div>
                <div className="text-xs text-muted-foreground mt-0.5">40 Mile Service Radius</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="/free-estimate"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>

            <a
              href="/about"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border/80 bg-card px-7 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-accent hover:-translate-y-0.5 active:translate-y-0 shadow-sm cursor-pointer"
            >
              <span>About Our Company</span>
            </a>
          </div>
        </Reveal>

        {/* Right Column: Video Container (35% width) */}
        <Reveal delay={150} className="relative w-full lg:w-[35%] shrink-0">
          {/* Ambient Outer Glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-2 bg-gradient-to-tr from-primary/30 via-amber-500/20 to-primary/10 rounded-[2.5rem] blur-2xl opacity-60 transition duration-700 pointer-events-none"
          />

          {/* Main Video Wrapper */}
          <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-slate-950 shadow-2xl group">
            {/* Video Element with Compact Height */}
            <div className="relative h-[24rem] sm:h-[28rem] lg:h-[32rem] xl:h-[34rem] w-full overflow-hidden">
              <video
                ref={videoRef}
                src={welcomeVideo}
                poster={aboutImg}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Gradient Vignette Overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 opacity-90 pointer-events-none"
              />

              {/* Live Craftsmanship Badge (Top-Left) */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="uppercase tracking-widest text-[9px] sm:text-[10px]">Craftsmanship</span>
              </div>

              {/* Floating Shield Badge (Top-Right) */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
                <span className="text-[10px] sm:text-[11px]">Licensed</span>
              </div>

              {/* Center Play/Pause Large Overlay Button (Visible on Hover or Paused) */}
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className={`pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-black/60 text-white backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-primary hover:border-primary cursor-pointer ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100 scale-105"
                    }`}
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6 ml-1 fill-current" />
                  )}
                </button>
              </div>

              {/* Bottom Video Controls Bar */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5 fill-current" />}
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
                >
                  {isMuted ? <VolumeX className="h-4 w-4 text-amber-400" /> : <Volume2 className="h-4 w-4 text-emerald-400" />}
                </button>
              </div>
            </div>
          </div>

          {/* Floating Secondary Thumbnail Card (Stacked Over Bottom-Left) */}
          <div className="absolute -bottom-5 -left-4 z-30 hidden sm:block w-44 lg:w-48 overflow-hidden rounded-2xl border-2 border-background bg-card shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-primary/20">
            <div className="relative h-24 lg:h-28">
              <img
                src={masonryImg}
                alt="Close-up masonry craftsmanship by Meziu Construction"
                width={600}
                height={400}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-2 left-2.5 right-2.5 text-white">
                <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-amber-400">
                  <Clock className="h-2.5 w-2.5" />
                  <span>Est. 2009</span>
                </div>
                <p className="text-[11px] font-semibold text-white line-clamp-1">Cliffwood & NJ</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}