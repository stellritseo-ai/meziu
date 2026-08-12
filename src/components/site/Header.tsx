import { useEffect, useState } from "react";
import { Menu, Phone, Mail, X, Facebook, Pin, ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";
import { BUSINESS, NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  const [activeSection, setActiveSection] = useState<string>("#top");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Use IntersectionObserver for active section tracking instead of heavy scroll logic
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most recently intersected entry that is intersecting
        const visibleEntry = entries.find(entry => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection("#" + visibleEntry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    // Observe all sections mapped in NAV
    NAV.forEach(item => {
      const id = item.href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex flex-col bg-white border-b border-slate-100/80 transition-all duration-300",
        scrolled ? "shadow-[0_8px_30px_rgb(0,0,0,0.08)]" : "shadow-sm"
      )}
    >
      {/* Top Bar */}
      <div
        className={cn(
          "w-full bg-gradient-to-r from-[#E56E1A] via-[#ED741D] to-[#E56E1A] text-white transition-all duration-300 overflow-hidden origin-top",
          scrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        )}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 text-xs font-semibold">
          {/* Left Social Links & Email */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block font-semibold tracking-wide text-white/95">
                Follow Us
              </span>
              <div className="flex items-center gap-1.5">
                <a
                  href="#"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#E56E1A] shadow-sm transition-transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-3.5 w-3.5 fill-current" />
                </a>
                <a
                  href="#"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#E56E1A] shadow-sm transition-transform hover:scale-110"
                  aria-label="Pinterest"
                >
                  <Pin className="h-3.5 w-3.5 fill-current" />
                </a>
                <a
                  href="#"
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#E56E1A] shadow-sm transition-transform hover:scale-110"
                  aria-label="Google"
                >
                  <span className="font-bold text-[11px] leading-none">G</span>
                </a>
              </div>
            </div>

            {/* Corporate Email */}
            <div className="hidden md:flex items-center gap-1.5 text-white/95 font-semibold border-l border-white/30 pl-3">
              <Mail className="h-3.5 w-3.5 text-white" />
              <a href={`mailto:${BUSINESS.email}`} className="hover:underline">
                {BUSINESS.email}
              </a>
            </div>
          </div>

          {/* Middle Badge (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 text-white/95 text-xs font-semibold">
            <ShieldCheck className="h-4 w-4" />
            <span>Licensed &amp; Insured Contractor • Serving NJ &amp; 40 Mile Radius</span>
          </div>

          {/* Right Info & Language */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block font-semibold tracking-wide text-white">
              Emergency Service in Business Hours
            </span>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 p-0.5 rounded-full px-2 border border-white/20">
              <button
                type="button"
                onClick={() => setLang("EN")}
                className={cn(
                  "px-2 py-0.5 rounded-full transition-all text-[11px]",
                  lang === "EN"
                    ? "bg-white text-[#E56E1A] font-bold shadow-sm"
                    : "text-white/80 hover:text-white"
                )}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("ES")}
                className={cn(
                  "px-2 py-0.5 rounded-full transition-all text-[11px]",
                  lang === "ES"
                    ? "bg-white text-[#E56E1A] font-bold shadow-sm"
                    : "text-white/80 hover:text-white"
                )}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300",
          scrolled ? "h-16" : "h-20 lg:h-24"
        )}
      >
        {/* Brand Logo */}
        <a
          href="#top"
          className="flex shrink-0 items-center group transition-transform hover:opacity-95"
          aria-label={`${BUSINESS.name} home`}
        >
          <img
            src={logo}
            alt={BUSINESS.name}
            width={200}
            height={80}
            className={cn(
              "object-contain origin-left transition-all duration-300 scale-105 sm:scale-115",
              scrolled ? "h-11 sm:h-13 w-auto" : "h-14 sm:h-16 lg:h-19 w-auto"
            )}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden items-center gap-1.5 xl:gap-2.5 lg:flex ml-auto mr-4 xl:mr-6"
          aria-label="Primary Navigation"
        >
          {NAV.map((item) => {
            const isServiceAreas =
              item.label.toLowerCase() === "service areas";
            const isServices = item.label.toLowerCase() === "services";
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                className={cn(
                  "flex items-center gap-1 rounded-full px-3 py-1.5 text-[13px] font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 whitespace-nowrap group",
                  isActive
                    ? "bg-[#E56E1A] text-white shadow-sm shadow-orange-500/20"
                    : "text-slate-800 hover:bg-orange-50 hover:text-[#E56E1A]"
                )}
              >
                {isServiceAreas ? (
                  <span className="inline-flex flex-col text-center leading-[1.1]">
                    <span>SERVICE</span>
                    <span>AREAS</span>
                  </span>
                ) : (
                  <span>{item.label}</span>
                )}

                {isServices && (
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180",
                      isActive ? "text-white" : "text-slate-400 group-hover:text-[#E56E1A]"
                    )}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-2.5 lg:flex">
          {/* Phone Pill Button */}
          <a
            href={BUSINESS.phoneHref}
            className="flex h-9 items-center gap-2 rounded-full bg-gradient-to-r from-[#E56E1A] to-[#F17B24] px-4 text-white shadow-sm shadow-orange-500/20 transition-all duration-300 hover:shadow-md hover:shadow-orange-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#E56E1A] shadow-inner">
              <Phone className="h-3 w-3 fill-current" />
            </div>
            <span className="font-extrabold text-xs tracking-tight pr-0.5">
              {BUSINESS.phone}
            </span>
          </a>
        </div>

        {/* Mobile Menu & Call Icon */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <a
            href={BUSINESS.phoneHref}
            aria-label={`Call ${BUSINESS.phone}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E56E1A] text-white shadow-md transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4 fill-current" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0B132B] text-white shadow-md transition-transform hover:scale-105"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Premium Redesign) */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-slate-950/90 backdrop-blur-2xl text-white lg:hidden animate-in fade-in zoom-in-95 duration-300 origin-top">
          
          {/* Header Row */}
          <div className="container-x flex h-20 items-center justify-between border-b border-white/10">
            <img
              src={logo}
              alt={BUSINESS.name}
              className="h-12 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all active:scale-95"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav
            className="container-x flex flex-1 flex-col justify-center gap-2 overflow-y-auto py-8"
            aria-label="Mobile Navigation"
          >
            {NAV.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-white/5 py-4 animate-in slide-in-from-right-8 fade-in fill-mode-both"
                style={{ animationDelay: `${i * 75}ms`, animationDuration: '400ms' }}
              >
                <span className="font-display text-[22px] font-extrabold uppercase tracking-wide text-slate-100 group-hover:text-[#E56E1A] transition-colors">
                  {item.label}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 group-hover:bg-[#E56E1A]/10 transition-colors">
                  <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-[#E56E1A] transition-colors group-hover:translate-x-0.5" />
                </div>
              </a>
            ))}
          </nav>
          
          {/* Bottom Action Area */}
          <div className="container-x space-y-3 pb-8 pt-6 border-t border-white/10 bg-gradient-to-t from-slate-950 to-transparent">
            
            {/* Quick Contact Info */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Us</span>
                <a href={`mailto:${BUSINESS.email}`} className="text-xs font-semibold text-white hover:text-[#E56E1A] transition-colors">{BUSINESS.email}</a>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <div className="flex flex-col items-center gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Call Us</span>
                <a href={BUSINESS.phoneHref} className="text-xs font-semibold text-white hover:text-[#E56E1A] transition-colors">{BUSINESS.phone}</a>
              </div>
            </div>

            {/* CTAs */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex h-14 items-center justify-center gap-2 rounded-xl bg-white font-black text-[13px] uppercase tracking-wider text-slate-950 shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E56E1A] via-amber-500 to-[#E56E1A] font-black text-[13px] uppercase tracking-wider text-white shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="h-4 w-4 fill-current" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}