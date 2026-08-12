import { Building2, CalendarRange, Hammer, MapPinned, ShieldCheck } from "lucide-react";

const STATS = [
  { icon: Hammer, value: "15+ Years", label: "Industry Experience" },
  { icon: CalendarRange, value: "Since 2009", label: "Family-Owned" },
  { icon: MapPinned, value: "40 Miles", label: "Service Radius" },
  { icon: ShieldCheck, value: "100%", label: "Licensed & Insured" },
  { icon: Building2, value: "Res. & Comm.", label: "Full Construction" },
];

export function Stats() {
  // Multiply stats items to create seamless infinite marquee loop
  const marqueeItems = [...STATS, ...STATS, ...STATS, ...STATS, ...STATS];

  return (
    <section id="stats" className="relative z-20 -mt-[70px] sm:-mt-20 lg:-mt-28 w-full overflow-hidden py-2">
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-32 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent z-10" />

        {/* Right Gradient Fade Mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-32 bg-gradient-to-l from-slate-950 via-slate-950/70 to-transparent z-10" />

        {/* Infinite Marquee Track */}
        <div className="flex w-full overflow-hidden py-2">
          <div className="animate-marquee flex items-center gap-2.5 sm:gap-4 px-2 sm:px-4">
            {marqueeItems.map(({ icon: Icon, value, label }, index) => (
              <div
                key={`${label}-${index}`}
                className="group flex items-center gap-2 sm:gap-3.5 px-3 sm:px-5 py-2 sm:py-3 rounded-[10px] bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/25 hover:border-white/40 transition-all duration-300 shadow-lg shadow-black/10 shrink-0 cursor-pointer"
              >
                <div className="flex h-7 w-7 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-[6px] sm:rounded-[8px] bg-white/20 text-[#E56E1A] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E56E1A] group-hover:text-white group-hover:shadow-md">
                  <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5 transition-colors" aria-hidden="true" />
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-xs sm:text-lg font-semibold leading-none tracking-tight text-white transition-colors whitespace-nowrap">
                    {value}
                  </p>
                  <p className="mt-0.5 text-[9px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-100/90 transition-colors whitespace-nowrap">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-20%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}