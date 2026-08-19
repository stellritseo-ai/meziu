import { Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { BUSINESS, NAV } from "@/lib/site";

// Reliable SVG Social Icons
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const SOCIALS = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
];

const SERVICES_LIST = [
  { name: "Masonry Services", href: "/services/masonry" },
  { name: "Concrete Contractor", href: "/services/concrete" },
  { name: "Kitchen Remodeling", href: "/services/kitchen" },
  { name: "Bathroom Remodeling", href: "/services/bathroom" },
  { name: "Pavers & Driveways", href: "/services/pavers" },
  { name: "Home Remodeling & Renovation", href: "/services/home-remodeling" },
  { name: "Stone Work & Walls", href: "/services/stonework" },
  { name: "Home Additions", href: "/services/home-additions" },
  { name: "General Contracting & Handyman", href: "/services/general-contracting" },
  { name: "Commercial Construction", href: "/services/commercial-construction" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-100 overflow-hidden border-t border-border/80 pt-16 pb-28 lg:pb-12">
      {/* Background Decorative Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 right-10 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[120px]" />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">

          {/* Column 1 (4 cols): Brand & Description */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block group">
              <img
                src={logo}
                alt="MEZIU CONSTRUCTION LLC Logo"
                width={160}
                height={64}
                loading="lazy"
                className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-sm">
              Built with experience. Driven by quality. Family-owned master contractor serving Garfield, NJ and surrounding Northern New Jersey communities since 2009.
            </p>

            {/* Social Links Row */}
            <div className="flex items-center gap-2.5 pt-1">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-primary/20 hover:border-primary/40 flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>NJ Master Contractor</span>
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-primary" />
                <span>100% Fully Insured</span>
              </span>
            </div>

            {/* Emergency Service Notice */}
            <div className="pt-2">
              <div className="inline-flex items-start gap-2 rounded-xl bg-primary/10 border border-primary/20 px-3.5 py-2.5">
                <span className="relative flex h-2 w-2 mt-1 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-bold text-primary leading-tight">
                  We provide Emergency Service<br />
                  <span className="text-slate-300 font-medium">in business hours.</span>
                </span>
              </div>
            </div>
          </div>

          {/* Column 2 + 3: Navigation & Core Services — side-by-side on mobile, separate cols on desktop */}
          <div className="grid grid-cols-2 gap-6 lg:contents">

            {/* Navigation */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Navigation</span>
              </h3>
              <ul className="space-y-2.5 text-xs font-semibold text-slate-300">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="hover:text-primary transition-colors flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Services */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Core Services</span>
              </h3>
              <ul className="space-y-2.5 text-xs font-semibold text-slate-300">
                {SERVICES_LIST.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="hover:text-primary transition-colors flex items-center gap-1.5 group"
                    >
                      <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      <span>{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Column 4 (3 cols): Direct Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Contact</span>
            </h3>

            <div className="space-y-3 text-xs font-semibold text-slate-300">
              {/* Phone */}
              <a
                href={BUSINESS.phoneHref}
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Call Us</span>
                  <span className="font-extrabold text-sm text-white group-hover:text-primary transition-colors">
                    {BUSINESS.phone}
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Email Us</span>
                  <span className="font-extrabold text-xs text-white group-hover:text-amber-400 transition-colors break-all">
                    {BUSINESS.email}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-sky-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Headquarters</span>
                  <span className="font-bold text-xs text-white">
                    Garfield, NJ 07026
                  </span>
                </div>
              </div>

              {/* Hours Box */}
              <div className="mt-3 p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase text-amber-400 tracking-wider">
                  <Clock className="w-3 h-3" />
                  <span>{BUSINESS.hours}</span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium leading-snug">
                  40-Mile Service Coverage radius across Bergen, Passaic &amp; Essex Counties.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copy & Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          <p>© 2026 MEZIU CONSTRUCTION LLC. All Rights Reserved. Design By StellR IT LLC</p>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms &amp; Conditions
            </Link>

            {/* Back to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-primary hover:text-amber-400 font-bold transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowRight className="w-3.5 h-3.5 -rotate-90" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}