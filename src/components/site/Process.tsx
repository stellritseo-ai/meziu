import {
  CalendarCheck,
  Search,
  FileText,
  Wrench,
  BadgeCheck,
} from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    icon: CalendarCheck,
    title: "Schedule Estimate",
    desc: "Book online in 60 seconds or call our project team for an immediate on-site consultation.",
  },
  {
    icon: Search,
    title: "On-Site Inspection",
    desc: "Comprehensive assessment of site conditions, structural framing, permits, and design goals.",
  },
  {
    icon: FileText,
    title: "Transparent Quote",
    desc: "Upfront, itemized estimate signed before any construction starts. What we quote is what you pay.",
  },
  {
    icon: Wrench,
    title: "Master Construction",
    desc: "Experienced, licensed crew executes clean, code-compliant masonry, concrete, and interior work.",
  },
  {
    icon: BadgeCheck,
    title: "Final Walkthrough & Sign-Off",
    desc: "Quality inspection, site clean-up, client sign-off, and full workmanship warranty activated.",
  },
];

const DESKTOP_POSITIONS = [
  { left: "20%", top: "50px" },
  { left: "50%", top: "50px" },
  { left: "80%", top: "50px" },
  { left: "20%", top: "310px" },
  { left: "50%", top: "310px" },
];

export function Process() {
  return (
    <section id="process" className="relative py-[60px] overflow-hidden bg-background border-y border-border/40">
      {/* Background grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Embedded CSS Animations */}
      <style>{`
        @keyframes electricFlow {
          0%   { stroke-dashoffset: -30; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes sparkFlow {
          0%   { stroke-dashoffset: 45; }
          100% { stroke-dashoffset: -45; }
        }
        @keyframes verticalFlow {
          0%   { background-position: 0 -40px; }
          100% { background-position: 0 0; }
        }
        @keyframes pulseGlow {
          0%,100% { transform: scale(0.96); opacity: 0.15; }
          50%     { transform: scale(1.04); opacity: 0.35; }
        }
        @keyframes pulseGlowLarge {
          0%,100% { transform: scale(0.98); opacity: 0.05; }
          50%     { transform: scale(1.02); opacity: 0.15; }
        }
        .pulse-glow       { animation: pulseGlow 2s infinite ease-in-out; transform-origin: 17px 15px; }
        .pulse-glow-large { animation: pulseGlowLarge 3s infinite ease-in-out; transform-origin: 17px 15px; }
        .spark-flow       { stroke-dasharray: 12 24; animation: sparkFlow 1.8s infinite linear; }
        .mobile-conduit-flow {
          background: linear-gradient(to bottom, #f97316 0%, #f97316 30%, #ffedd5 50%, #f97316 70%, #f97316 100%);
          background-size: 100% 40px;
          animation: verticalFlow 1.2s infinite linear;
        }
      `}</style>

      <div className="container-x relative z-10">
        {/* ── Section Header ──────────────────────────────── */}
        <Reveal className="text-center max-w-3xl mx-auto mb-10 lg:mb-20">
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>Step by Step Process</span>
          </span>

          <h2
            className="text-foreground tracking-tight leading-[1.15] text-[24px] sm:text-[32px] lg:text-[36px] mt-0 mb-3 font-bold"
          >
            We Complete Every{" "}
            <span className="bg-gradient-to-r from-primary via-amber-500 to-primary bg-clip-text text-transparent">
              Step Carefully.
            </span>
          </h2>

          <p
            className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto font-medium leading-relaxed"
          >
            Our proven methodology guarantees precision, safety, and clean, code-compliant construction — from your initial consultation to final walkthrough.
          </p>
        </Reveal>

        {/* ── 1. DESKTOP: S-Curve SVG Layout ──────────────── */}
        <div className="hidden lg:block relative w-full h-[500px] select-none">
          <svg
            viewBox="0 0 1200 360"
            className="absolute top-0 left-0 w-full h-[360px] pointer-events-none z-0"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Drop shadow */}
            <path
              d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#0f172a"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.07"
            />
            {/* Outer conduit line */}
            <path
              d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#334155"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Animated primary orange core */}
            <path
              d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="var(--primary)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Yellow spark flow overlay */}
            <path
              d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#fbbf24"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
              className="spark-flow"
            />

            {/* Start Construction Hub Icon */}
            <g transform="translate(38, 15)">
              <rect x="0" y="0" width="62" height="68" rx="10" fill="#1E293B" stroke="var(--primary)" strokeWidth="2" />
              <rect x="5" y="5" width="52" height="24" rx="4" fill="#0F172A" />
              {/* House Roof & Blueprint Icon */}
              <path d="M 14 22 L 31 10 L 48 22" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <line x1="20" y1="22" x2="20" y2="25" stroke="#38BDF8" strokeWidth="1.5" />
              <line x1="42" y1="22" x2="42" y2="25" stroke="#38BDF8" strokeWidth="1.5" />
              {/* Green Live Indicator */}
              <circle cx="48" cy="11" r="2.5" fill="#10B981" className="animate-pulse" />
              {/* Construction Foundation Base */}
              <rect x="10" y="34" width="42" height="24" rx="4" fill="#0F172A" />
              <rect x="15" y="39" width="12" height="14" rx="2" fill="var(--primary)" opacity="0.9" />
              <rect x="31" y="39" width="16" height="6" rx="1.5" fill="#38BDF8" />
              <rect x="31" y="47" width="16" height="6" rx="1.5" fill="#64748B" />
            </g>

            {/* Glowing Construction Completion Badge */}
            <g transform="translate(915, 255)">
              <rect x="4" y="42" width="26" height="20" rx="3" fill="#1E293B" stroke="#334155" strokeWidth="1.5" />
              {/* Completed Building Silhouette */}
              <path d="M 2 34 L 17 20 L 32 34 V 58 H 2 Z" fill="#0F172A" stroke="var(--primary)" strokeWidth="2" strokeLinejoin="round" />
              <rect x="12" y="42" width="10" height="16" fill="var(--primary)" rx="1.5" />
              <path d="M 17 8 L 19 14 L 25 16 L 19 18 L 17 24 L 15 18 L 9 16 L 15 14 Z" fill="#fbbf24" className="pulse-glow" />
              <circle cx="17" cy="30" r="28" fill="var(--primary)" opacity="0.15" className="pulse-glow" />
              <circle cx="17" cy="30" r="45" fill="var(--primary)" opacity="0.06" className="pulse-glow-large" />
            </g>
          </svg>

          {/* Step Nodes */}
          {STEPS.map((s, i) => {
            const pos = DESKTOP_POSITIONS[i] || { left: "0%", top: "0px" };
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="absolute group cursor-default"
                style={{ left: pos.left, top: pos.top }}
              >
                {/* Circle Node */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[78px] h-[78px] rounded-full bg-card shadow-[0_10px_32px_rgba(0,0,0,0.08)] border border-border flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_40px_-6px_rgba(249,115,22,0.25)] group-hover:border-primary/40">
                  {/* Step Number Badge */}
                  <div className="absolute -top-2.5 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-md border-2 border-background">
                    <span className="text-primary-foreground text-[9px] font-black leading-none">{i + 1}</span>
                  </div>
                  {/* Icon */}
                  <Icon className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Text Description Below Node */}
                <div className="absolute top-[48px] -translate-x-1/2 text-center w-[220px] flex flex-col items-center pt-1">
                  <h3 className="font-extrabold text-[15px] text-foreground leading-tight mt-1 mb-1.5 group-hover:text-primary transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-medium px-1">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── 2. MOBILE: Vertical Timeline ────────────────── */}
        <div className="relative grid gap-8 pl-14 lg:hidden">
          {/* Vertical Conduit */}
          <div className="absolute left-[39px] top-6 bottom-6 w-2.5 pointer-events-none z-0">
            <div className="absolute inset-0 bg-slate-900/10 rounded-full blur-[2px]" />
            <div className="absolute inset-0 bg-[#334155] rounded-full" />
            <div className="absolute inset-[2px] rounded-full mobile-conduit-flow" />
          </div>

          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="relative flex flex-col group text-left"
              >
                {/* Circle Node */}
                <div className="absolute -left-[54px] top-0 w-12 h-12 rounded-full bg-card shadow-md border border-border flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40">
                  {/* Step Badge */}
                  <div className="absolute -top-1.5 -right-0.5 w-4 h-4 rounded-full bg-primary flex items-center justify-center border border-background">
                    <span className="text-primary-foreground text-[8px] font-black">{i + 1}</span>
                  </div>
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Text Content */}
                <div className="pl-4 py-0.5">
                  <h3 className="font-extrabold text-base text-foreground leading-tight mt-0 mb-1.5 group-hover:text-primary transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium max-w-sm">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}