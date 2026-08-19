import { ArrowRight, ChevronDown, MapPin, Phone, ShieldCheck, Star, Award } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero.mp4";
import { BUSINESS } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-svh overflow-hidden bg-slate-950">
      {/* Background Video with Image Fallback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroImg}
        className="absolute inset-0 h-full w-full object-cover scale-105 transition-transform duration-1000"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Premium Gradient Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.12_0.008_60/0.85)_0%,oklch(0.14_0.008_60/0.65)_50%,oklch(0.16_0.008_60/0.22)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none"
      />

      {/* Main Content Container */}
      <div className="container-x relative flex min-h-svh flex-col justify-end sm:justify-center pb-20 pt-20 sm:pb-24 sm:pt-28 lg:pt-32">
        <div className="max-w-3xl space-y-6 mt-4 sm:mt-8">
          {/* Glassmorphic Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-white backdrop-blur-md shadow-lg shadow-black/10">
            <ShieldCheck className="h-4 w-4 text-[#E56E1A]" />
            <span>Family Owned • Licensed & Insured Contractor</span>
          </div>

          {/* Premium Typography Headline */}
          <h1 className="font-bold text-[30px] sm:text-[40px] lg:text-[50px] leading-[36px] sm:leading-[48px] lg:leading-[55px] mb-[10px] tracking-tight text-white drop-shadow-md">
            Building New Jersey's Dreams,
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#E56E1A] via-[#FF8A3D] to-[#E56E1A]">
              One Brick at a Time.
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="max-w-2xl text-sm sm:text-base lg:text-[18px] font-normal leading-[28px] sm:leading-[32px] lg:leading-[37px] text-white drop-shadow-sm">
            Trusted, family-owned general contractors serving Garfield, NJ, and beyond. We specialize in masonry, remodeling, and full renovations for residential and commercial clients. Licensed, insured, and bonded since 2009.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="/free-estimate"
              className="flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E56E1A] via-[#ED741D] to-[#E56E1A] px-6 text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-white shadow-md shadow-orange-500/25 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="h-3.5 w-3.5 text-white transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 text-xs sm:text-[13px] font-extrabold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              <Phone className="h-3.5 w-3.5 text-[#E56E1A] fill-current" aria-hidden="true" />
              <span>Call {BUSINESS.phone}</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="pt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold text-slate-200/90">
            <div className="flex items-center gap-1.5 text-amber-400">
              <Star className="h-4 w-4 fill-current text-amber-400" />
              <span className="text-white font-extrabold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-[#E56E1A]" />
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-[#E56E1A]" />
              <span>Garfield, NJ & 40 Mile Radius</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Hint */}
      <a
        href="#stats"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/70 hover:text-white transition-colors sm:block"
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase font-bold tracking-widest text-white/60">Scroll</span>
          <ChevronDown
            className="h-5 w-5 animate-bounce text-[#E56E1A]"
            aria-hidden="true"
          />
        </div>
      </a>
    </section>
  );
}