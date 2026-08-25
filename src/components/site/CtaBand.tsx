import { ArrowRight, Phone, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import ctaImg from "@/assets/cta.jpg";
import welcomeVideo from "@/assets/welcome.mp4";
import { BUSINESS } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-[60px] border-y border-border/40">
      {/* Background Video */}
      <video
        src={welcomeVideo}
        poster={ctaImg}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-65 pointer-events-none"
      />

      {/* Dark Vignette Overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-black/45 to-slate-950/75 pointer-events-none" />

      {/* Ambient Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl opacity-60"
      />

      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Badge */}
          <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Elevate Your Property?</span>
            <Sparkles className="w-3.5 h-3.5" />
          </span>

          {/* Heading - Single line on desktop with slightly smaller font size */}
          <h2 className="text-white tracking-tight leading-[1.2] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[30px]">
            Transform Your Space With{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-400 to-primary">
              Craftsmanship You Can Trust
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
            Get a fast, 100% free, no-obligation estimate for your masonry, concrete, kitchen, bathroom, or whole-home remodeling project across Cliffwood and New Jersey.
          </p>

          {/* Dual Action Buttons */}
          <div className="mt-8 flex flex-col justify-center items-center gap-4 sm:flex-row">
            <a
              href="/free-estimate"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-primary via-amber-500 to-primary text-primary-foreground px-8 py-4 text-xs font-black uppercase tracking-wider shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              <span>Get Free On-Site Estimate</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white px-8 py-4 text-xs font-black uppercase tracking-wider backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto"
            >
              <Phone className="h-4 w-4 text-amber-400" />
              <span>Call {BUSINESS.phone}</span>
            </a>
          </div>

          {/* Trust Checklist Row */}
          <div className="mt-9 pt-7 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] font-bold text-slate-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>No Obligation Estimates</span>
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>Licensed &amp; Insured Master Crew</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>100% Upfront Transparent Pricing</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}