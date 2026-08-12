import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | MEZIU CONSTRUCTION LLC" },
      {
        name: "description",
        content:
          "Terms covering use of the MEZIU CONSTRUCTION LLC website, estimates, and service information.",
      },
      { property: "og:title", content: "Terms of Use | MEZIU CONSTRUCTION LLC" },
      {
        property: "og:description",
        content: "Website terms for MEZIU CONSTRUCTION LLC, a licensed contractor in Garfield, NJ.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="container-x py-24">
      <Link to="/" className="text-sm font-semibold text-primary">
        ← Back home
      </Link>
      <h1 className="mt-6 font-display text-4xl font-bold">Terms of Use</h1>
      <div className="mt-8 max-w-2xl space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          Content on this website is provided for general information about the services offered by
          MEZIU CONSTRUCTION LLC and does not constitute a contract or a binding quote.
        </p>
        <p>
          Estimates are provided after a project discussion and may change based on site conditions,
          scope changes, materials, and permitting requirements.
        </p>
        <p>
          Service availability depends on location, generally within approximately 40 miles of
          Garfield, New Jersey. Questions? Call (201) 844-2427.
        </p>
      </div>
    </main>
  );
}