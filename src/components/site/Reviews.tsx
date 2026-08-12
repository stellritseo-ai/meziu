import { useRef } from "react";
import { Star, BadgeCheck } from "lucide-react";
import { Reveal } from "./Reveal";

interface ReviewItem {
  text: string;
  name: string;
  role: string;
  rating: number;
  initials: string;
  avatarColor: string;
  replyText?: string;
}

const REVIEWS: ReviewItem[] = [
  {
    text: "Meziu Construction built a natural stone retaining wall and custom paver driveway for our property in Garfield. The team was punctual, kept the site immaculate, and completed the job on schedule.",
    name: "Dominick R.",
    role: "Homeowner, Garfield NJ",
    rating: 5,
    initials: "DR",
    avatarColor: "#ea580c",
    replyText: "Thank you Dominick! It was a pleasure working on your driveway and stone hardscape.",
  },
  {
    text: "We hired Meziu for a complete kitchen and master bathroom renovation in Paramus. Their craftsmanship and attention to layout design exceeded our expectations. Truly 5-star master builders.",
    name: "Elena M.",
    role: "Homeowner, Paramus NJ",
    rating: 5,
    initials: "EM",
    avatarColor: "#0284c7",
  },
  {
    text: "Engineered concrete slab and steps poured for our commercial storefront in Hackensack. Passed city inspection with zero punch-list items. Highly recommend their concrete crew.",
    name: "Robert K.",
    role: "Commercial Property Manager, Hackensack NJ",
    rating: 5,
    initials: "RK",
    avatarColor: "#059669",
  },
  {
    text: "From our first free estimate to final walkthrough, communication was seamless. They framed and built a beautiful two-story home addition that looks original to our house.",
    name: "Anthony V.",
    role: "Homeowner, Ridgewood NJ",
    rating: 5,
    initials: "AV",
    avatarColor: "#7c3aed",
    replyText: "Thank you Anthony! We're glad the addition blends so seamlessly with your home.",
  },
  {
    text: "Repaired our aging brick chimney and rebuilt our front masonry porch. Professional, honest pricing, and top-notch structural brickwork. Will definitely hire again.",
    name: "Sarah T.",
    role: "Homeowner, Passaic County NJ",
    rating: 5,
    initials: "ST",
    avatarColor: "#db2777",
  },
  {
    text: "Outstanding general contracting service. Meziu coordinated framing, plumbing, tile work, and trim for our full home remodel in Clifton without delays.",
    name: "Michael B.",
    role: "Real Estate Investor, Clifton NJ",
    rating: 5,
    initials: "MB",
    avatarColor: "#d97706",
  },
  {
    text: "Installed interlocking paver patio with built-in seating and outdoor fire pit. The base preparation was deep and thorough — zero settling after harsh winter weather.",
    name: "Jessica P.",
    role: "Homeowner, Wayne NJ",
    rating: 5,
    initials: "JP",
    avatarColor: "#0d9488",
  },
  {
    text: "Storefront interior build-out completed ahead of our grand opening. Meziu Construction handles every detail with precision and professional integrity.",
    name: "Carlos G.",
    role: "Business Owner, Garfield NJ",
    rating: 5,
    initials: "CG",
    avatarColor: "#2563eb",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function TestimonialCard({ review }: { review: ReviewItem }) {
  return (
    <div className="relative bg-card border border-border/80 shadow-md hover:shadow-xl rounded-2xl p-6 flex flex-col justify-between gap-4 group hover:border-primary/40 transition-all duration-300 w-[340px] sm:w-[380px] shrink-0 text-left">
      <div className="space-y-3.5">
        {/* Star Rating & Verified Badge */}
        <div className="flex items-center justify-between">
          <StarRating count={review.rating} />
          <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
            <BadgeCheck className="w-3 h-3" />
            <span>Verified</span>
          </span>
        </div>

        {/* Review Text */}
        <p className="text-foreground/90 text-xs sm:text-[13px] leading-relaxed font-medium">
          "{review.text}"
        </p>

        {/* Owner Reply */}
        {review.replyText && (
          <div className="mt-3 bg-muted/60 border border-border/60 p-3 rounded-xl text-left text-xs">
            <p className="font-extrabold text-primary uppercase tracking-wider text-[10px]">
              Meziu Construction Response
            </p>
            <p className="text-muted-foreground font-medium leading-snug mt-1 text-[11px]">
              "{review.replyText}"
            </p>
          </div>
        )}
      </div>

      {/* Author Footer */}
      <div className="flex items-center gap-3 pt-3 border-t border-border/60 mt-1">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-black shrink-0 shadow-sm"
          style={{ backgroundColor: review.avatarColor }}
        >
          {review.initials}
        </div>
        <div className="min-w-0">
          <p className="text-foreground font-extrabold text-xs sm:text-sm leading-tight truncate">
            {review.name}
          </p>
          <p className="text-muted-foreground text-[11px] font-medium mt-0.5 truncate">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, direction = "left" }: { items: ReviewItem[]; direction?: "left" | "right" }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const duplicated = [...items, ...items, ...items];
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className="overflow-hidden relative py-2"
      onMouseEnter={() => {
        if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
      }}
      onMouseLeave={() => {
        if (trackRef.current) trackRef.current.style.animationPlayState = "running";
      }}
    >
      {/* Fade Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent hidden sm:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent hidden sm:block" />

      <div ref={trackRef} className={`flex gap-5 ${animClass}`}>
        {duplicated.map((review, i) => (
          <TestimonialCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    </div>
  );
}

export function Reviews() {
  const row1 = REVIEWS.slice(0, 4);
  const row2 = REVIEWS.slice(4);

  return (
    <section id="reviews" className="relative py-[60px] bg-background border-b border-border/40 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container-x">
        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 bg-card border border-border/80 rounded-full px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Verified Customer Reviews</span>
          </div>

          <h2
            className="text-foreground tracking-tight leading-tight font-extrabold capitalize"
            style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
          >
            Trusted By{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-500 to-primary">
              Hundreds
            </span>{" "}
            Of NJ Clients
          </h2>

          <p className="mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed font-medium">
            Real feedback from homeowners and commercial property owners across Garfield &amp; Northern New Jersey. See why clients choose Meziu Construction every time.
          </p>
        </Reveal>

        {/* Dual Infinite Marquee Rows */}
        <div className="relative z-10 flex flex-col gap-4">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>
      </div>

      {/* Marquee Animations */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-33.3333%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
          width: max-content;
        }
        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}