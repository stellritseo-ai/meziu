import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | MEZIU CONSTRUCTION LLC" },
      {
        name: "description",
        content:
          "How MEZIU CONSTRUCTION LLC handles information submitted through estimate requests and website contact forms.",
      },
      { property: "og:title", content: "Privacy Policy | MEZIU CONSTRUCTION LLC" },
      {
        property: "og:description",
        content: "Privacy practices for MEZIU CONSTRUCTION LLC in Garfield, New Jersey.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="container-x py-24">
      <Link to="/" className="text-sm font-semibold text-primary">
        ← Back home
      </Link>
      <h1 className="mt-6 font-display text-4xl font-bold">Privacy Policy</h1>
      <div className="mt-8 max-w-2xl space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>
          MEZIU CONSTRUCTION LLC collects only the information you choose to provide through our
          estimate request form — such as your name, phone number, email address, and project
          details.
        </p>
        <p>
          That information is used solely to respond to your request and discuss potential work. We
          do not sell or rent customer information to third parties.
        </p>
        <p>
          To request removal of your information, contact us at meziullc@gmail.com or call (201)
          844-2427 during business hours, Monday–Friday 7:00 AM–6:00 PM.
        </p>
      </div>
    </main>
  );
}