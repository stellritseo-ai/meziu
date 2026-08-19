import { ArrowRight, Check } from "lucide-react";
import masonry from "@/assets/masonry.jpg";
import concrete from "@/assets/concrete.jpg";
import renovation from "@/assets/renovation.jpg";
import addition from "@/assets/addition.jpg";
import { Reveal } from "./Reveal";

const BULLETS = [
  "Professional workmanship",
  "Residential & commercial projects",
  "Licensed, insured & bonded",
  "Experienced construction team",
  "Personalized project guidance",
  "Service within 40 miles",
];

const COLLAGE = [
  { img: masonry, alt: "Brick masonry work in progress", className: "row-span-2 h-full" },
  { img: concrete, alt: "Concrete slab being finished", className: "" },
  { img: renovation, alt: "Interior renovation framing", className: "" },
  { img: addition, alt: "Home addition being framed", className: "col-span-2" },
];

export function Highlight() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="grid grid-cols-2 gap-4 lg:order-1">
          {COLLAGE.map((item) => (
            <div
              key={item.alt}
              className={`overflow-hidden rounded-2xl border border-border ${item.className}`}
            >
              <img
                src={item.img}
                alt={item.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="h-full min-h-40 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </Reveal>

        <Reveal delay={100} className="lg:order-2">
          <span className="eyebrow">Built To Last</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.08] text-foreground sm:text-4xl lg:text-5xl">
            From Small Improvements to Complete Transformations
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Whether it's a single repair, a kitchen you've been planning for years, or a full
            commercial build-out, MEZIU CONSTRUCTION LLC scales to the work in front of us. Small
            projects get the same planning and craftsmanship as large ones.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium">
                <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>

          <a
            href="/free-estimate"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
          >
            Request Your Estimate
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}