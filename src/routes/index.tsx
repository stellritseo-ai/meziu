import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Highlight } from "@/components/site/Highlight";
import { Showcase } from "@/components/site/Showcase";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyUs } from "@/components/site/WhyUs";
import { CtaBand } from "@/components/site/CtaBand";
import { Reviews } from "@/components/site/Reviews";
import { ServiceArea } from "@/components/site/ServiceArea";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingCta } from "@/components/site/FloatingCta";
import { FAQS } from "@/lib/site";

const TITLE = "General Contractor in Cliffwood, NJ | MEZIU CONSTRUCTION LLC";
const DESCRIPTION =
  "Family-owned general contractor in Cliffwood, NJ. Masonry, concrete, kitchen & bathroom remodeling, renovations, pavers and additions. Licensed, insured & bonded. Free estimates.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "MEZIU CONSTRUCTION LLC",
          founder: "Luan Meziu",
          foundingDate: "2009-01-09",
          telephone: "+1-201-844-2427",
          email: "meziullc@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cliffwood",
            addressRegion: "NJ",
            addressCountry: "US",
          },
          areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: { "@type": "GeoCoordinates", latitude: 40.4426, longitude: -74.2238 },
            geoRadius: 64374,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "18:00",
          },
          knowsLanguage: ["en", "es"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <CtaBand />
        <Process />
        {/* <Highlight /> */}
        {/* <Showcase /> */}
        <WhyUs />
        <Portfolio />
        <Reviews />
        <ServiceArea />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
