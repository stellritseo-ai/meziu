import { useState } from "react";
import { MapPin, Navigation, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const TOWN_AREAS = [
  { name: "Garfield (HQ)", x: "50%", y: "48%", primary: true },
  { name: "Clifton", x: "36%", y: "55%" },
  { name: "Passaic", x: "38%", y: "68%" },
  { name: "Paterson", x: "28%", y: "38%" },
  { name: "Hackensack", x: "66%", y: "42%" },
  { name: "Elmwood Park", x: "44%", y: "38%" },
  { name: "Lodi", x: "54%", y: "44%" },
  { name: "Saddle Brook", x: "48%", y: "32%" },
  { name: "Paramus", x: "54%", y: "24%" },
  { name: "Wayne", x: "20%", y: "34%" },
  { name: "& All Surrounding Areas", x: "62%", y: "22%", subtitle: "Ask us if we cover your zip code!" },
];

export function ServiceArea() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [isDarkMap, setIsDarkMap] = useState(true);

  return (
    <section id="areas" className="relative py-[60px] bg-background border-b border-border/40 overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Interactive Town Chips */}
          <Reveal className="z-10 text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>Service Area Coverage</span>
            </div>

            <h2
              className="text-foreground leading-tight tracking-tight capitalize font-extrabold text-[24px] sm:text-[30px] lg:text-[33px] mt-0 mb-3"
            >
              Proudly Serving{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-500 to-primary">
                Northern New Jersey
              </span>
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base font-medium leading-relaxed max-w-lg mb-8">
              We are committed to the local community and provide service to these cities within a 40-mile radius of Garfield, NJ:
            </p>

            {/* Interactive Town Capsule Chips */}
            <div className="flex flex-wrap gap-2.5">
              {TOWN_AREAS.map((a) => {
                const isActive = hoveredArea === a.name;
                return (
                  <div
                    key={a.name}
                    onMouseEnter={() => setHoveredArea(a.name)}
                    onMouseLeave={() => setHoveredArea(null)}
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider rounded-xl py-2.5 px-4 transition-all duration-300 shadow-sm cursor-pointer border ${
                      isActive || a.primary
                        ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-105"
                        : "text-muted-foreground bg-card border-border/80 hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    <MapPin className={`h-3.5 w-3.5 shrink-0 transition-colors duration-300 ${
                      isActive || a.primary ? "text-primary-foreground" : "text-primary"
                    }`} />
                    <span>{a.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Zip Code Inquiry Callout */}
            <div className="mt-4 inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 rounded-xl px-4 py-2 text-xs font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span>Ask us if we cover your zip code! We are happy to accommodate nearby locations.</span>
            </div>

            {/* Trust Checklist Row */}
            <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-border/60">
              <div className="flex items-center gap-2 text-xs font-extrabold text-foreground">
                <Navigation className="w-4 h-4 text-primary" />
                <span>40-Mile Service Radius</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-extrabold text-foreground">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Licensed NJ Master Crew</span>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Premium Dispatch Telemetry & Interactive Map */}
          <Reveal delay={120} className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden bg-slate-950 border border-border/80 shadow-2xl group">
            {/* Embedded Google Map Background (User Provided Embed URL) */}
            <iframe
              title="Garfield NJ Service Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24133.92749117383!2d-74.13227952141052!3d40.87755916759436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f9445e72b0e1%3A0x2067730e330eb099!2sGarfield%2C%20NJ%2007026%2C%20USA!5e0!3m2!1sen!2snp!4v1786561834737!5m2!1sen!2snp"
              className={`absolute inset-0 w-full h-full transition-all duration-500 border-0 ${
                isDarkMap
                  ? "opacity-80 grayscale invert contrast-[1.2] brightness-[0.85]"
                  : "opacity-95 contrast-100 brightness-100"
              }`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Stylized Dark Mode Grid & Radar Overlay */}
            {isDarkMap && (
              <svg
                viewBox="0 0 600 450"
                className="absolute inset-0 h-full w-full pointer-events-none"
                aria-hidden
              >
                <defs>
                  <radialGradient id="mapGlow" cx="50%" cy="48%" r="50%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
                    <stop offset="60%" stopColor="#f97316" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Coverage Radial Glow */}
                <circle cx="300" cy="216" r="180" fill="url(#mapGlow)" />

                {/* Radar Sweep Line */}
                <line
                  x1="300"
                  y1="216"
                  x2="300"
                  y2="36"
                  stroke="rgba(249, 115, 22, 0.5)"
                  strokeWidth="1.5"
                  className="radar-sweep-line"
                />

                {/* Animated Coverage Boundary Line */}
                <path
                  d="M 120 260 C 150 140, 230 100, 340 120 S 520 180, 510 290 C 460 360, 340 380, 220 350 S 100 320, 120 260 Z"
                  fill="rgba(249, 115, 22, 0.02)"
                  stroke="#f97316"
                  strokeWidth="2"
                  className="animated-boundary"
                  opacity="0.75"
                />
              </svg>
            )}

            {/* Top-Left Live Status Badge */}
            <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 bg-slate-950/85 backdrop-blur-md border border-white/20 text-white rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Garfield Operations Center</span>
            </div>

            {/* Top-Right Map View Mode Switcher Button */}
            <button
              type="button"
              onClick={() => setIsDarkMap(!isDarkMap)}
              className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 bg-slate-950/85 hover:bg-slate-900 backdrop-blur-md border border-white/20 text-white rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <Navigation className="w-3 h-3 text-primary" />
              <span>{isDarkMap ? "Color Map View" : "Radar Telemetry"}</span>
            </button>

            {/* Map Hotspot Pins */}
            {TOWN_AREAS.map((pin) => (
              <Pin
                key={pin.name}
                x={pin.x}
                y={pin.y}
                label={pin.name}
                primary={pin.primary || false}
                active={hoveredArea === pin.name}
                onMouseEnter={() => setHoveredArea(pin.name)}
                onMouseLeave={() => setHoveredArea(null)}
              />
            ))}

            {/* Bottom Floating Glassmorphic Headquarters Card */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-950/90 border border-white/15 backdrop-blur-md text-white rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-white leading-tight">
                    Meziu Construction LLC
                  </h4>
                  <p className="text-[11px] text-slate-300 font-medium mt-0.5">
                    Garfield, NJ 07026 • Direct Dispatch: (201) 844-2427
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Garfield,+NJ+07026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground text-[10px] font-black uppercase tracking-wider rounded-xl px-4 py-2.5 transition-all duration-300 shadow-md hover:scale-105 cursor-pointer shrink-0 w-full sm:w-auto text-center"
              >
                <span>Get Directions</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @keyframes radar-sweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes boundary-dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .radar-sweep-line {
          transform-origin: 300px 216px;
          animation: radar-sweep 10s linear infinite;
        }
        .animated-boundary {
          stroke-dasharray: 6 4;
          animation: boundary-dash 15s linear infinite;
        }
      `}</style>
    </section>
  );
}

function Pin({
  x,
  y,
  label,
  primary = false,
  active = false,
  onMouseEnter,
  onMouseLeave,
}: {
  x: string;
  y: string;
  label: string;
  primary?: boolean;
  active?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-full group cursor-pointer z-20 transition-all duration-300"
      style={{ left: x, top: y }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col items-center gap-1">
        {/* Hotspot Ring */}
        <div className="relative flex h-7 w-7 items-center justify-center">
          <span
            className={`animate-ping absolute inline-flex h-5 w-5 rounded-full opacity-75 transition-all duration-300 ${
              active || primary ? "bg-primary scale-125" : "bg-amber-400"
            }`}
          />
          <span
            className={`relative inline-flex rounded-full h-4 w-4 items-center justify-center text-white shadow-md transition-all duration-300 ${
              active || primary ? "bg-primary scale-110 shadow-lg shadow-primary/50" : "bg-amber-500"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          </span>
        </div>

        {/* Pin Label */}
        <span
          className={`px-2.5 py-0.5 rounded-lg backdrop-blur-md border transition-all duration-300 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap shadow-md ${
            primary || active
              ? "bg-primary border-primary text-primary-foreground scale-105"
              : "bg-slate-950/90 border-white/20 text-white group-hover:bg-primary group-hover:border-primary"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}