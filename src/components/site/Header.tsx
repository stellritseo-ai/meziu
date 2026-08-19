import { useEffect, useState, useRef } from "react";
import { useLocation, Link } from "@tanstack/react-router";
import {
  Menu,
  Phone,
  Mail,
  X,
  Facebook,
  Pin,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  Layers,
  Grid,
  Utensils,
  Bath,
  Compass,
  Home,
  Maximize2,
  Wrench,
  Building2,
  Sparkles,
  ChevronRight,
  Star,
  Hammer,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { BUSINESS, NAV, SERVICES_SUBMENU } from "@/lib/site";
import { cn } from "@/lib/utils";

const SUB_SERVICE_ICONS: Record<string, React.ElementType> = {
  Layers,
  Grid,
  Utensils,
  Bath,
  Compass,
  Home,
  ShieldCheck,
  Maximize2,
  Wrench,
  Building2,
};

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isDedicatedPage =
    currentPath === "/about" ||
    currentPath === "/projects" ||
    currentPath === "/reviews" ||
    currentPath === "/free-estimate" ||
    currentPath === "/contact" ||
    currentPath.startsWith("/services");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [activeSection, setActiveSection] = useState<string>(
    isDedicatedPage ? currentPath : "/"
  );

  const handleServicesEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

  useEffect(() => {
    if (isDedicatedPage) {
      setActiveSection(currentPath);
      return;
    }

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

    // Use IntersectionObserver for active section tracking on home page
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find(entry => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection("/#" + visibleEntry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    NAV.forEach(item => {
      if (item.href.startsWith("/#")) {
        const id = item.href.replace("/#", "");
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [isDedicatedPage, currentPath]);

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
          href="/"
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
          className="hidden items-center gap-1.5 xl:gap-2 lg:flex ml-auto mr-4 xl:mr-6"
          aria-label="Primary Navigation"
        >
          {NAV.map((item) => {
            const isServices = item.label.toLowerCase() === "services";
            const isActive = activeSection === item.href;

            if (isServices) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.href);
                      setServicesOpen(false);
                    }}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[13px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer select-none",
                      isActive || servicesOpen
                        ? "bg-[#E56E1A] text-white shadow-sm shadow-orange-500/20"
                        : "text-slate-800 hover:bg-orange-50 hover:text-[#E56E1A]"
                    )}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-300",
                        servicesOpen ? "rotate-180 text-white" : isActive ? "text-white" : "text-slate-400"
                      )}
                    />
                  </a>

                  {/* Desktop Mega Dropdown Menu */}
                  {servicesOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[760px] z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                      onMouseEnter={handleServicesEnter}
                      onMouseLeave={handleServicesLeave}
                    >
                      <div className="rounded-3xl bg-white border border-slate-200/90 shadow-2xl p-6 overflow-hidden">

                        {/* Dropdown Header */}
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 mb-4">
                          <div className="inline-flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#E56E1A] animate-pulse" />
                            <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                              Our Specialized Construction Trades
                            </span>
                          </div>
                          <span className="text-[11px] font-extrabold uppercase text-[#B85008] bg-orange-50 border border-orange-200/60 px-2.5 py-0.5 rounded-full">
                            10 Master Services
                          </span>
                        </div>

                        {/* 2-Column Grid of 10 Sub Services */}
                        <div className="grid grid-cols-2 gap-2.5">
                          {SERVICES_SUBMENU.map((sub) => {
                            const IconComponent = SUB_SERVICE_ICONS[sub.icon] || Hammer;
                            return (
                              <a
                                key={sub.title}
                                href={sub.href}
                                onClick={() => {
                                  setServicesOpen(false);
                                  setActiveSection("/#services");
                                }}
                                className="group/item flex items-start gap-3 p-3 rounded-2xl border border-transparent hover:border-orange-200 hover:bg-orange-50/50 transition-all duration-200 cursor-pointer"
                              >
                                <div className="w-10 h-10 rounded-xl bg-orange-100/80 text-[#E56E1A] group-hover/item:bg-[#E56E1A] group-hover/item:text-white flex items-center justify-center shrink-0 transition-all duration-200 shadow-sm">
                                  <IconComponent className="w-5 h-5" />
                                </div>
                                <div className="space-y-0.5 min-w-0 flex-1">
                                  <div className="text-xs font-bold text-slate-950 group-hover/item:text-[#E56E1A] transition-colors flex items-center justify-between">
                                    <span className="truncate">{sub.title}</span>
                                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#E56E1A] shrink-0" />
                                  </div>
                                  <p className="text-[11px] text-slate-500 line-clamp-1 font-medium">
                                    {sub.desc}
                                  </p>
                                </div>
                              </a>
                            );
                          })}
                        </div>

                        {/* Bottom Banner Strip Inside Dropdown */}
                        <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between bg-slate-50/80 -mx-6 -mb-6 px-6 py-3.5 rounded-b-3xl">
                          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                            <Sparkles className="w-4 h-4 text-[#E56E1A]" />
                            <span>Residential &amp; Commercial projects in Garfield &amp; 40-mile radius</span>
                          </div>

                          <div className="flex items-center gap-3">
                            <a
                              href="/free-estimate"
                              onClick={() => setServicesOpen(false)}
                              className="inline-flex items-center gap-1 text-xs font-black uppercase text-[#E56E1A] hover:underline"
                            >
                              <span>Free On-Site Estimate</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                className={cn(
                  "flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-bold uppercase tracking-wider transition-all duration-200 active:scale-95 whitespace-nowrap",
                  isActive
                    ? "bg-[#E56E1A] text-white shadow-sm shadow-orange-500/20"
                    : "text-slate-800 hover:bg-orange-50 hover:text-[#E56E1A]"
                )}
              >
                <span>{item.label}</span>
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0B132B] text-white shadow-md transition-transform hover:scale-105 cursor-pointer"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Light Luxury Theme) */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white/98 backdrop-blur-2xl text-slate-950 lg:hidden animate-in fade-in zoom-in-95 duration-300 origin-top">
          
          {/* Header Row */}
          <div className="container-x flex h-20 items-center justify-between border-b border-slate-200/80 bg-white/90 shrink-0">
            <Link to="/" onClick={() => setOpen(false)} className="inline-block">
              <img
                src={logo}
                alt={BUSINESS.name}
                className="h-11 w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-2">
              {/* Language Switcher */}
              <button
                type="button"
                onClick={() => setLang(lang === "EN" ? "ES" : "EN")}
                className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-[#E56E1A] bg-orange-100/80 border border-orange-200 px-3 py-1.5 rounded-full cursor-pointer"
              >
                <span>{lang === "EN" ? "🇺🇸 EN" : "🇪🇸 ES"}</span>
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all active:scale-95 cursor-pointer"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Quick Trust Bar */}
          <div className="bg-slate-50 border-b border-slate-200/70 px-4 py-2 flex items-center justify-between text-[11px] font-extrabold text-slate-700 shrink-0">
            <div className="flex items-center gap-1.5 text-amber-600">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>5.0 ★ Google Verified</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-700">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Licensed &amp; Insured</span>
            </div>
            <span className="text-[#E56E1A] font-bold">Hablamos Español</span>
          </div>
          
          {/* Navigation Links with Smooth Scroll */}
          <nav
            className="container-x flex-1 overflow-y-auto py-4 space-y-1.5"
            aria-label="Mobile Navigation"
          >
            {NAV.map((item) => {
              const isServices = item.label.toLowerCase() === "services";
              const isActive =
                currentPath === item.href ||
                (isServices && currentPath.startsWith("/services"));

              if (isServices) {
                return (
                  <div key={item.href} className="border-b border-slate-100 pb-2">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={cn(
                        "w-full flex items-center justify-between py-3 px-3 rounded-2xl text-left font-display text-[17px] font-extrabold uppercase tracking-wide transition-colors cursor-pointer",
                        isActive
                          ? "bg-orange-50 text-[#E56E1A]"
                          : "text-slate-900 hover:bg-slate-50"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.label}</span>
                        <span className="text-[10px] font-black uppercase text-[#B85008] bg-orange-100 border border-orange-200 px-2 py-0.5 rounded-full">
                          10 Services
                        </span>
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-slate-400 transition-transform duration-200",
                          mobileServicesOpen ? "rotate-180 text-[#E56E1A]" : ""
                        )}
                      />
                    </button>

                    {/* Expandable 10 Sub-Services Accordion */}
                    {mobileServicesOpen && (
                      <div className="pl-1 pr-1 py-2 space-y-1.5 bg-slate-50/90 rounded-2xl border border-slate-200/80 animate-in fade-in slide-in-from-top-2 duration-200 my-2">
                        {SERVICES_SUBMENU.map((sub) => {
                          const IconComp = SUB_SERVICE_ICONS[sub.icon] || Hammer;
                          const isSubActive = currentPath === sub.href;

                          return (
                            <a
                              key={sub.title}
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "flex items-center gap-3 p-2.5 rounded-xl transition-all",
                                isSubActive
                                  ? "bg-orange-100/90 border border-orange-300 shadow-sm"
                                  : "hover:bg-white border border-transparent"
                              )}
                            >
                              <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#E56E1A] flex items-center justify-center shrink-0 shadow-inner">
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className={cn(
                                  "text-xs font-bold truncate",
                                  isSubActive ? "text-[#E56E1A] font-black" : "text-slate-900"
                                )}>
                                  {sub.title}
                                </div>
                                <div className="text-[10px] text-slate-500 line-clamp-1 font-medium">
                                  {sub.desc}
                                </div>
                              </div>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-400 ml-auto shrink-0" />
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "group flex items-center justify-between border-b border-slate-100 py-3 px-3 rounded-2xl transition-all",
                    isActive
                      ? "bg-orange-50 text-[#E56E1A] font-black"
                      : "text-slate-900 hover:bg-slate-50"
                  )}
                >
                  <span className="font-display text-[17px] font-extrabold uppercase tracking-wide">
                    {item.label}
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 group-hover:bg-orange-100 transition-colors">
                    <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-[#E56E1A] transition-colors group-hover:translate-x-0.5" />
                  </div>
                </a>
              );
            })}
          </nav>
          
          {/* Bottom Action & Dispatch Area */}
          <div className="container-x space-y-3 pb-8 pt-4 border-t border-slate-200/80 bg-white shrink-0 shadow-2xl">
            
            {/* Quick Contact Info */}
            <div className="grid grid-cols-2 gap-3 py-2 px-3 bg-slate-50 rounded-2xl border border-slate-200/70 text-center">
              <div>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block">Email Us</span>
                <a href={`mailto:${BUSINESS.email}`} className="text-xs font-bold text-slate-800 hover:text-[#E56E1A] transition-colors truncate block">{BUSINESS.email}</a>
              </div>
              <div className="border-l border-slate-200 pl-2">
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block">Direct Call</span>
                <a href={BUSINESS.phoneHref} className="text-xs font-extrabold text-[#E56E1A] hover:underline block">{BUSINESS.phone}</a>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href="/free-estimate"
                onClick={() => setOpen(false)}
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#E56E1A] via-amber-500 to-[#E56E1A] font-black text-xs uppercase tracking-wider text-white shadow-lg shadow-orange-500/25 transition-all active:scale-98"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={BUSINESS.phoneHref}
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 font-black text-xs uppercase tracking-wider text-white shadow-md transition-all active:scale-98"
              >
                <Phone className="h-4 w-4 fill-current text-amber-400" />
                <span>Call {BUSINESS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}