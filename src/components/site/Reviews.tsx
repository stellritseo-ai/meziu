import { useRef } from "react";
import { Star, BadgeCheck, ArrowRight, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";

export const GOOGLE_BUSINESS_URL =
  "https://www.google.com/search?q=Meziu+Construction&oq=Meziu+Construction&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGD3SAQc0MjVqMGo3qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x89c2f91183545ed7:0x3980f4dc8da76f91,1,,,,";

const GoogleIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

interface ReviewItem {
  text: string;
  name: string;
  role: string;
  rating: number;
  initials: string;
  avatarColor: string;
  timeAgo: string;
  contribUrl: string;
  isLocalGuide?: boolean;
  tags?: string[];
}

const REVIEWS: ReviewItem[] = [
  {
    text: "Extraordinary team and very high-quality work. Luan and his team have worked on several projects: remodeling our living room with bricks, creating a new backyard, installing an irrigation system, etc. Always available and conscientious. I recommend 100%.",
    name: "Julie Rabin",
    role: "Verified Google Reviewer · 5 reviews",
    rating: 5,
    initials: "JR",
    avatarColor: "#ea580c",
    timeAgo: "2 years ago",
    contribUrl: "https://www.google.com/maps/contrib/115741659648542964303/reviews?hl=en-GB",
  },
  {
    text: "I recently worked with Meziu LLC for a remodel of our basement, bathroom, deck, and patio, and it was a solid experience. They were upfront about pricing and clearly communicated any change orders. Luan was extremely patient throughout the entire project.",
    name: "Shannon Ruiz",
    role: "Verified Google Reviewer · 9 reviews",
    rating: 5,
    initials: "SR",
    avatarColor: "#0284c7",
    timeAgo: "a year ago",
    contribUrl: "https://www.google.com/maps/contrib/107560224315498466326/reviews?hl=en-GB",
  },
  {
    text: "Very professional, trustworthy and knows masonry! Luan has helped to transform our entire backyard and fix our water issues! Know that he will insure the project is done to your satisfaction and the quality of his masonry work is the best in the business.",
    name: "Byron Anderson",
    role: "Verified Google Reviewer · 4 reviews",
    rating: 5,
    initials: "BA",
    avatarColor: "#059669",
    timeAgo: "3 years ago",
    contribUrl: "https://www.google.com/maps/contrib/100051410624048703513/reviews?hl=en-GB",
    tags: ["Responsiveness", "Quality", "Value"],
  },
  {
    text: "Luan and his team at Meziu Construction helped us with several projects in our backyard in Jersey City NJ. They refinished and restored a damaged concrete garage back to life with a plaster stucco finish and poured a new concrete slab for outdoor dining.",
    name: "Luis Bustamante",
    role: "Google Local Guide · 108 reviews",
    rating: 5,
    initials: "LB",
    avatarColor: "#7c3aed",
    timeAgo: "3 years ago",
    isLocalGuide: true,
    contribUrl: "https://www.google.com/maps/contrib/115688919649979661104/reviews?hl=en-GB",
  },
  {
    text: "They did an incredible job on my driveway and it was quick and smooth. Very friendly workers, efficient and knowledgeable. Definitely going to them again for my patio and other work in my backyard!",
    name: "Kathy Yuan",
    role: "Verified Google Reviewer · 9 reviews",
    rating: 5,
    initials: "KY",
    avatarColor: "#db2777",
    timeAgo: "4 years ago",
    contribUrl: "https://www.google.com/maps/contrib/104306262016011130844/reviews?hl=en-GB",
  },
  {
    text: "Luan and the rest of his team are professional, timely, and always do a high quality job. They redid several retaining walls around my home, fixed my patio, and redid my walkway with pavers among several other jobs - fantastic job.",
    name: "alina",
    role: "Verified Google Reviewer · 2 reviews",
    rating: 5,
    initials: "AL",
    avatarColor: "#d97706",
    timeAgo: "3 years ago",
    contribUrl: "https://www.google.com/maps/contrib/107013419711617846739/reviews?hl=en-GB",
    tags: ["Quality", "Professionalism"],
  },
  {
    text: "I'm very impressed and satisfied with the work performed by MEZIU construction. They were very professional and completed the task within the promised timeline. Our patio looks amazing. Affordable pricing for the quality!",
    name: "Aida Cani",
    role: "Woodcliff Lake, NJ · 4 reviews",
    rating: 5,
    initials: "AC",
    avatarColor: "#0d9488",
    timeAgo: "3 years ago",
    contribUrl: "https://www.google.com/maps/contrib/115308708701295480347/reviews?hl=en-GB",
    tags: ["Responsiveness", "Quality", "Value"],
  },
  {
    text: "I am totally satisfied with the work that MEZIU construction did for me. These guys did excellent work in my new patio with Techo-Block pavers. Outstanding work, hard working guys and very responsible. I would highly recommend.",
    name: "Ina",
    role: "Woodcliff Lake, NJ · 7 reviews",
    rating: 5,
    initials: "IN",
    avatarColor: "#2563eb",
    timeAgo: "3 years ago",
    contribUrl: "https://www.google.com/maps/contrib/114535364579639125989/reviews?hl=en-GB",
    tags: ["Professionalism"],
  },
  {
    text: "I was very happy from start to finish. The crew was always on time and cleaned up after a days work. Luan was very helpful in advising us to different types of pavers and overall shape of our patio. We love spending time enjoying our fire pit.",
    name: "Bubba Gumpy",
    role: "Verified Google Reviewer · 1 review",
    rating: 5,
    initials: "BG",
    avatarColor: "#ea580c",
    timeAgo: "3 years ago",
    contribUrl: "https://www.google.com/maps/contrib/117297532725730302186/reviews?hl=en-GB",
    tags: ["Responsiveness", "Quality", "Value"],
  },
  {
    text: "Luan and his crew were great. They did exactly what they promised, were professional, clean, communicative, and reasonable. Very happy with the product they delivered. Great company to deal with.",
    name: "Levi Barrett",
    role: "Verified Google Reviewer · 2 reviews",
    rating: 5,
    initials: "LB",
    avatarColor: "#0284c7",
    timeAgo: "a year ago",
    contribUrl: "https://www.google.com/maps/contrib/100969143887292896528/reviews?hl=en-GB",
  },
  {
    text: "Luan and his team are incredible. Professionalism is a must, and they got it. They redid my driveway, clean and smooth. I had a huge dent that was troublesome. Would use them again for different projects in the future.",
    name: "Jeffrey Krov",
    role: "Google Local Guide · 13 reviews",
    rating: 5,
    initials: "JK",
    avatarColor: "#059669",
    timeAgo: "3 years ago",
    isLocalGuide: true,
    contribUrl: "https://www.google.com/maps/contrib/101788830468837069330/reviews?hl=en-GB",
  },
  {
    text: "They replace my fence and took my flower garden out to replace it with stone and rocks. I called them, they came the next day for a quote and the project was done a few days later. Both project came out good.",
    name: "Richard weierich",
    role: "Google Local Guide · 16 reviews",
    rating: 5,
    initials: "RW",
    avatarColor: "#7c3aed",
    timeAgo: "3 years ago",
    isLocalGuide: true,
    contribUrl: "https://www.google.com/maps/contrib/111033269579745719179/reviews?hl=en-GB",
    tags: ["Responsiveness", "Quality", "Value"],
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
        {/* Star Rating & Google Verified Badge */}
        <div className="flex items-center justify-between">
          <StarRating count={review.rating} />
          <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/80 px-2.5 py-0.5 rounded-full">
            <GoogleIcon className="w-3.5 h-3.5" />
            <span className="text-[10px] font-extrabold text-slate-700">Google Verified</span>
          </div>
        </div>

        {/* Review Text */}
        <p className="text-foreground/90 text-xs sm:text-[13px] leading-relaxed font-medium">
          "{review.text}"
        </p>

        {/* Tags */}
        {review.tags && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {review.tags.map((t) => (
              <span
                key={t}
                className="text-[9px] font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Author Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-border/60 mt-1">
        <div className="flex items-center gap-3 min-w-0">
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
            <p className="text-muted-foreground text-[11px] font-medium mt-0.5 truncate">
              {review.role}
            </p>
          </div>
        </div>

        <a
          href={review.contribUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="View review on Google Maps"
          className="text-slate-400 hover:text-primary transition-colors p-1"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
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
  const row1 = REVIEWS.slice(0, 6);
  const row2 = REVIEWS.slice(6);

  return (
    <section id="reviews" className="relative py-[60px] bg-background border-b border-border/40 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container-x">
        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 bg-card border border-border/80 rounded-full px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest mb-4 shadow-sm">
            <GoogleIcon className="w-4 h-4" />
            <span>Google Business 5.0 ★ Verified Reviews</span>
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
            Read real, unedited Google Business reviews from homeowners and business owners across Cliffwood,
            Woodcliff Lake, Jersey City, Paramus, and New Jersey.
          </p>
        </Reveal>

        {/* Dual Infinite Marquee Rows */}
        <div className="relative z-10 flex flex-col gap-4">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>

        {/* Action Buttons */}
        <Reveal delay={120} className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/reviews"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-xs font-bold uppercase tracking-widest shadow-md transition-all duration-300 hover:bg-foreground/90 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Read All 22+ Google Reviews</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-300 text-slate-800 px-7 py-3.5 text-xs font-bold uppercase tracking-widest shadow-sm transition-all duration-300 hover:bg-slate-50 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <GoogleIcon className="w-4 h-4" />
            <span>View on Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href="/free-estimate"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Request Your Estimate</span>
          </a>
        </Reveal>
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