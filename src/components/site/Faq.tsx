import { useState } from "react";
import { Plus, Minus, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

import welcomeVideo from "@/assets/gallery/AQOHLqwFZEsmhgLa8-hIuoXIfcCRoeXOJmKhRmXqaDMwSWljspmz7MtZHsJMyX7zlZbWasfwuC9FdqBnX5okvTstZUyamX0xwj-_-Q0.mp4";
import renovation from "@/assets/renovation.jpg";

type FaqItem = {
  q: string;
  a: string;
  cat: string;
};

const FAQ_LIST: FaqItem[] = [
  {
    q: "What areas does MEZIU CONSTRUCTION LLC serve?",
    a: "We proudly serve Garfield, NJ, Bergen County, Passaic County, and surrounding Northern New Jersey communities within a 40-mile service radius.",
    cat: "Coverage",
  },
  {
    q: "What construction & remodeling services do you provide?",
    a: "Our full-spectrum services include masonry, structural concrete flatwork, kitchen remodeling, bathroom renovation, house additions, stone brickwork, paver driveways & patios, retaining walls, roofing, framing, handyman repairs, and commercial build-outs.",
    cat: "Services",
  },
  {
    q: "Do you work on commercial properties?",
    a: "Yes. MEZIU CONSTRUCTION LLC provides comprehensive commercial construction, storefront build-outs, concrete foundation work, and facility renovations across Northern NJ.",
    cat: "Commercial",
  },
  {
    q: "Are you licensed, insured, and bonded in New Jersey?",
    a: "Yes. MEZIU CONSTRUCTION LLC is fully licensed, insured, and bonded master contractor in the state of New Jersey. We adhere to all local building codes and safety regulations.",
    cat: "Licensing",
  },
  {
    q: "When are your regular business hours?",
    a: "Our master crew and office team are available Monday through Friday from 7:00 AM to 6:00 PM. We schedule weekend on-site consultations by appointment.",
    cat: "Hours",
  },
  {
    q: "Do you offer emergency masonry or structural repair services?",
    a: "Yes. Emergency structural, masonry, or weather-damage repair services are available during regular operational hours. Call (973) 928-6500 or (201) 844-2427 for immediate dispatch.",
    cat: "Emergency",
  },
  {
    q: "How can I request a free on-site estimate?",
    a: "Requesting a free estimate is fast and easy! Call us directly at (973) 928-6500 / (201) 844-2427, email meziullc@gmail.com, or fill out our online contact form to schedule an on-site consultation.",
    cat: "Estimates",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-[60px] bg-background border-b border-border/40 overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-40 right-10 w-[500px] h-[350px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container-x">

        {/* ── MOBILE: Section Header only (no video) ── */}
        <div className="lg:hidden mb-8">
          <Reveal>
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>Frequently Asked Questions</span>
            </div>

            {/* Headline */}
            <h2 className="text-foreground leading-tight tracking-tight capitalize font-extrabold text-[22px] mb-3">
              Clear Answers For Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-500 to-primary">
                Construction
              </span>{" "}
              Project
            </h2>

            <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-6">
              Everything you need to know about our masonry, concrete, kitchen, bathroom, and structural remodeling services in Garfield &amp; Northern NJ.
            </p>

            {/* Video Showcase Card — visible on mobile too */}
            <div className="rounded-2xl bg-slate-950 border border-border/80 shadow-xl overflow-hidden relative group h-[220px]">
              <video
                src={welcomeVideo}
                poster={renovation}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Overlay badge */}
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md border border-white/20 text-white rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Our Work In Action</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── MOBILE: Accordion only ── */}
        <div className="lg:hidden space-y-2.5">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index;
            const numStr = (index + 1).toString().padStart(2, "0");
            return (
              <div
                key={faq.q}
                className={`relative rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-card border-primary/60 shadow-md shadow-primary/5"
                    : "bg-card/70 border-border/80 hover:border-primary/40 hover:bg-card shadow-sm"
                }`}
              >
                {isOpen && (
                  <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-primary via-amber-500 to-primary rounded-r-full" />
                )}

                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                    <div
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-black shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-primary/10 text-primary border border-primary/20"
                      }`}
                    >
                      {numStr}
                    </div>

                    <div className="space-y-0.5 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center text-[9px] font-black uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                          {faq.cat}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-foreground text-xs leading-snug">
                        {faq.q}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-primary border-primary text-primary-foreground shadow-sm"
                        : "bg-muted border-border text-muted-foreground"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-0 border-t border-border/40">
                    <p className="text-muted-foreground text-xs leading-relaxed font-medium pt-3">
                      {faq.a}
                    </p>
                    <div className="mt-3 pt-3 border-t border-border/40 flex flex-wrap items-center gap-3 text-[11px] font-bold text-foreground">
                      <div className="flex items-center gap-1 text-primary">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Garfield NJ Headquarters</span>
                      </div>
                      <div className="flex items-center gap-1 text-emerald-500">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>100% Upfront Transparent Pricing</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── DESKTOP: Two-column layout ── */}
        <div className="hidden lg:grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
          {/* Left Column: sticky header + video */}
          <Reveal className="sticky top-28">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>Frequently Asked Questions</span>
            </div>

            {/* Headline */}
            <h2 className="text-foreground leading-tight tracking-tight capitalize font-extrabold text-[23px] mt-0 mb-3">
              Clear Answers For Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-500 to-primary">
                Construction
              </span>{" "}
              Project
            </h2>

            <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-8">
              Everything you need to know about our masonry, concrete, kitchen, bathroom, and structural remodeling services in Garfield &amp; Northern NJ.
            </p>

            {/* Video Showcase Card */}
            <div className="rounded-3xl bg-slate-950 border border-border/80 shadow-2xl overflow-hidden relative group h-[380px] w-full">
              <video
                src={welcomeVideo}
                poster={renovation}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </Reveal>

          {/* Right Column: Accordion List */}
          <Reveal delay={100} className="space-y-2.5">
            {FAQ_LIST.map((faq, index) => {
              const isOpen = openIndex === index;
              const numStr = (index + 1).toString().padStart(2, "0");

              return (
                <div
                  key={faq.q}
                  className={`relative rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-card border-primary/60 shadow-md shadow-primary/5"
                      : "bg-card/70 border-border/80 hover:border-primary/40 hover:bg-card shadow-sm"
                  }`}
                >
                  {isOpen && (
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-primary via-amber-500 to-primary rounded-r-full" />
                  )}

                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full py-3.5 px-5 text-left flex items-center justify-between gap-3 cursor-pointer pl-6"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1 pr-2">
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-black shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "bg-primary/10 text-primary border border-primary/20"
                        }`}
                      >
                        {numStr}
                      </div>

                      <div className="space-y-0.5 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center text-[9px] font-black uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                            {faq.cat}
                          </span>
                        </div>
                        <h3 className="font-extrabold text-foreground text-sm leading-snug">
                          {faq.q}
                        </h3>
                      </div>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-primary border-primary text-primary-foreground rotate-180 shadow-sm"
                          : "bg-muted border-border text-muted-foreground"
                      }`}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-4 pt-0 border-t border-border/40">
                      <p className="text-muted-foreground text-sm leading-relaxed font-medium pt-3">
                        {faq.a}
                      </p>
                      <div className="mt-3 pt-3 border-t border-border/40 flex flex-wrap items-center gap-3 text-[11px] font-bold text-foreground">
                        <div className="flex items-center gap-1 text-primary">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Garfield NJ Headquarters</span>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-500">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>100% Upfront Transparent Pricing</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </Reveal>
        </div>

      </div>
    </section>
  );
}