import kitchen from "@/assets/kitchen.jpg";
import bathroom from "@/assets/bathroom.jpg";
import interior from "@/assets/interior.jpg";
import about from "@/assets/about.jpg";
import stonework from "@/assets/stonework.jpg";
import pavers from "@/assets/pavers.jpg";
import { Reveal } from "./Reveal";

const ITEMS = [
  { img: kitchen, label: "Kitchen Remodeling", alt: "Remodeled kitchen with white cabinets", cls: "sm:col-span-2 sm:row-span-2" },
  { img: bathroom, label: "Bathroom Renovation", alt: "Renovated bathroom with tiled walk-in shower", cls: "" },
  { img: interior, label: "Home Renovation", alt: "Renovated living room with new flooring", cls: "" },
  { img: stonework, label: "Stone & Hardscape", alt: "Stone retaining wall and steps", cls: "" },
  { img: pavers, label: "Driveways & Pavers", alt: "Paver driveway installation", cls: "" },
  { img: about, label: "Exterior Construction", alt: "Finished stone home exterior", cls: "sm:col-span-2" },
];

export function Showcase() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-[1.08] text-foreground sm:text-4xl lg:text-5xl">
            Transforming Homes. Improving Everyday Living.
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[13rem] grid-cols-1 gap-4 sm:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal
              key={item.label}
              delay={(i % 3) * 80}
              className={`group relative overflow-hidden rounded-2xl border border-border ${item.cls}`}
            >
              <img
                src={item.img}
                alt={item.alt}
                width={1200}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-80 transition-opacity group-hover:opacity-95"
              />
              <span className="absolute bottom-4 left-4 text-sm font-semibold text-ink-foreground">
                {item.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}