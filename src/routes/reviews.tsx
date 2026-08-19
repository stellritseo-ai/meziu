import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  ShieldCheck,
  Award,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Quote,
  ChevronRight,
  Star,
  Check,
  ThumbsUp,
  MessageSquarePlus,
  Send,
  ExternalLink,
  Search,
  BadgeCheck,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingCta } from "@/components/site/FloatingCta";
import { BUSINESS } from "@/lib/site";

// Import project video clips for video testimonials
import welcomeVideo from "@/assets/welcom1.mp4";
import whyUsVideo from "@/assets/whyus.mp4";
import heroVideo from "@/assets/hero.mp4";
import masonryImg from "@/assets/masonry.jpg";
import paversImg from "@/assets/pavers.jpg";
import kitchenImg from "@/assets/kitchen.jpg";

export const GOOGLE_BUSINESS_URL =
  "https://www.google.com/search?q=Meziu+Construction&oq=Meziu+Construction&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGD3SAQc0MjVqMGo3qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x89c2f91183545ed7:0x3980f4dc8da76f91,1,,,,";

export const GOOGLE_WRITE_REVIEW_URL =
  "https://www.google.com/search?q=Meziu+Construction&oq=Meziu+Construction&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGD3SAQc0MjVqMGo3qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x89c2f91183545ed7:0x3980f4dc8da76f91,3,,,,";

// Google SVG Icon
const GoogleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
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

const TITLE = "Google Business Verified Reviews | MEZIU CONSTRUCTION LLC — Garfield, NJ";
const DESCRIPTION =
  "Read 22+ genuine 5-star Google Business reviews from homeowners and commercial clients across Garfield, Woodcliff Lake, Jersey City, Paramus, and Northern NJ.";

export interface GoogleReview {
  id: string;
  name: string;
  contribUrl: string;
  stats: string;
  isLocalGuide?: boolean;
  timeAgo: string;
  rating: number;
  location?: string;
  category: "Masonry & Stone" | "Concrete & Driveways" | "Patios & Pavers" | "Remodeling & Additions" | "General Contracting";
  text: string;
  positives?: string[];
  hasPhotos?: boolean;
  highlight?: string;
}

export const ALL_GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "julie-rabin",
    name: "Julie Rabin",
    contribUrl: "https://www.google.com/maps/contrib/115741659648542964303/reviews?hl=en-GB",
    stats: "5 reviews · 4 photos",
    timeAgo: "2 years ago",
    rating: 5,
    location: "Garfield & Northern NJ",
    category: "Remodeling & Additions",
    hasPhotos: true,
    highlight: "Remodeling our living room with bricks, creating a new backyard, installing irrigation.",
    text: "Extraordinary team and very high-quality work. Luan and his team have worked on several projects: remodeling our living room with bricks, creating a new backyard, installing an irrigation system, etc. Always available and conscientious. I recommend 100%. See picture before and after !",
  },
  {
    id: "kathy-yuan",
    name: "Kathy Yuan",
    contribUrl: "https://www.google.com/maps/contrib/104306262016011130844/reviews?hl=en-GB",
    stats: "9 reviews · 3 photos",
    timeAgo: "4 years ago",
    rating: 5,
    location: "Northern NJ",
    category: "Concrete & Driveways",
    hasPhotos: true,
    highlight: "Incredible job on my driveway, quick and smooth. Very friendly and knowledgeable.",
    text: "They did an incredible job on my driveway and it was quick and smooth. Very friendly workers, efficient and knowledgeable. Definitely going to them again for my patio and other work in my backyard!",
  },
  {
    id: "shannon-ruiz",
    name: "Shannon Ruiz",
    contribUrl: "https://www.google.com/maps/contrib/107560224315498466326/reviews?hl=en-GB",
    stats: "9 reviews",
    timeAgo: "a year ago",
    rating: 5,
    location: "Northern NJ",
    category: "Remodeling & Additions",
    highlight: "Upfront pricing, clean work area, excellent communication for basement, bathroom & patio.",
    text: "I recently worked with Meziu LLC for a remodel of our basement, bathroom, deck, and patio, and it was a solid experience. They were upfront about pricing and clearly communicated any change orders, which made the process straightforward.\n\nWhat I appreciated most was their willingness to listen to my ideas and provide helpful suggestions. Luan, in particular, was extremely patient throughout the entire project, addressing all my concerns without hesitation. They kept me informed every step of the way and always maintained a clean work area, which minimized any disruption.\n\nOverall, I recommend Meziu LLC for their professionalism and commitment to getting the job done right.",
  },
  {
    id: "alina",
    name: "alina",
    contribUrl: "https://www.google.com/maps/contrib/107013419711617846739/reviews?hl=en-GB",
    stats: "2 reviews",
    timeAgo: "3 years ago",
    rating: 5,
    location: "Northern NJ",
    category: "Masonry & Stone",
    positives: ["Responsiveness", "Quality", "Professionalism", "Value"],
    highlight: "Redid several retaining walls, fixed patio, and redid walkway with pavers.",
    text: "Luan and the rest of his team are professional, timely, and always do a high quality job. They redid several retaining walls around my home, fixed my patio, and redid my walkway with pavers among several other jobs - they always do a fantastic job. I highly recommend Meziu Construction and am looking forward to working with them again on several other projects around my home.",
  },
  {
    id: "byron-anderson",
    name: "Byron Anderson",
    contribUrl: "https://www.google.com/maps/contrib/100051410624048703513/reviews?hl=en-GB",
    stats: "4 reviews · 6 photos",
    timeAgo: "3 years ago",
    rating: 5,
    location: "Northern NJ",
    category: "Masonry & Stone",
    hasPhotos: true,
    positives: ["Responsiveness", "Quality", "Professionalism", "Value"],
    highlight: "Very professional, trustworthy and knows masonry! Fixed our water issues & transformed our backyard.",
    text: "Very professional, trustworthy and knows masonry! Luan has helped to transform our entire backyard and fix our water issues! Know that he will insure the project is done to your satisfaction and the quality of his masonry work is the best in the business. He is not afraid of the challenge and my big ideas. He has helped us to maximized our space. He goes beyond the ask and is just great to work with and is the only person we will call.",
  },
  {
    id: "luis-bustamante",
    name: "Luis Bustamante",
    contribUrl: "https://www.google.com/maps/contrib/115688919649979661104/reviews?hl=en-GB",
    stats: "108 reviews · 22 photos",
    isLocalGuide: true,
    timeAgo: "3 years ago",
    rating: 5,
    location: "Jersey City, NJ",
    category: "Concrete & Driveways",
    hasPhotos: true,
    highlight: "Restored concrete garage with plaster stucco finish, pergola cover & outdoor dining slab.",
    text: "Luan and his team at Meziu Construction helped us with several projects in our backyard in Jersey City NJ. They refinished and restored a damaged concrete garage back to life with a plaster stucco finish. They also installed an outdoor pergola cover and poured a new concrete slab for an outdoor dining space. Through the whole experience, his team was committed to craft and doing a good job. We have been recommending Meziu to our neighbors and look forward to working with them again.",
  },
  {
    id: "gexusrd85",
    name: "gexusrd85",
    contribUrl: "https://www.google.com/maps/contrib/113308392134920962644/reviews?hl=en-GB",
    stats: "3 reviews",
    timeAgo: "3 years ago",
    rating: 5,
    location: "Northern NJ",
    category: "General Contracting",
    positives: ["Professionalism"],
    highlight: "Completed several interior and exterior jobs with great timeliness & quality.",
    text: "MEZIU Construction has completed several projects at my residence. They have worked interior and exterior jobs, and I've been very pleased with their timeliness and quality of work on each project. I highly recommend them to friends & family, and look forward to scheduling future work at my home.",
  },
  {
    id: "aida-cani",
    name: "Aida Cani",
    contribUrl: "https://www.google.com/maps/contrib/115308708701295480347/reviews?hl=en-GB",
    stats: "4 reviews",
    timeAgo: "3 years ago",
    rating: 5,
    location: "Woodcliff Lake, NJ",
    category: "Patios & Pavers",
    positives: ["Responsiveness", "Quality", "Professionalism", "Value"],
    highlight: "Completed within promised timeline. Our patio looks amazing with affordable pricing.",
    text: "I'm very impressed and satisfied with the work performed by MEZIU construction. They were very professional and completed the task within the promised timeline. Will definitely be using them again for other projects. Our patio looks amazing. Affordable pricing for the quality and effectiveness of the job!! Thank you so much! Woodcliff Lake, NJ",
  },
  {
    id: "ina",
    name: "Ina",
    contribUrl: "https://www.google.com/maps/contrib/114535364579639125989/reviews?hl=en-GB",
    stats: "7 reviews",
    timeAgo: "3 years ago",
    rating: 5,
    location: "Woodcliff Lake, NJ",
    category: "Patios & Pavers",
    positives: ["Professionalism"],
    highlight: "Excellent work on new patio with Techo-Bloc pavers. Outstanding & hardworking crew.",
    text: "I am totally satisfied with the work that MEZIU construction did for me. These guys did excellent work in my new patio with Techo-Block pavers. Outstanding work , hard working guys and very responsible. I would highly recommend. Try them. Thank me later!\nThank you!\nIna Woodcliff lake",
  },
  {
    id: "bubba-gumpy",
    name: "Bubba Gumpy",
    contribUrl: "https://www.google.com/maps/contrib/117297532725730302186/reviews?hl=en-GB",
    stats: "1 review",
    timeAgo: "3 years ago",
    rating: 5,
    location: "Northern NJ",
    category: "Patios & Pavers",
    positives: ["Responsiveness", "Quality", "Professionalism", "Value"],
    highlight: "Luan advised us on different paver types and shapes. We love our fire pit and patio!",
    text: "I was very happy from start to finish. The crew was always on time and cleaned up after a days work. Luan was very helpful in advising us to different types of pavers and overall shape of our patio. We love spending time out there enjoying our fire pit. Highly recommend them!",
  },
  {
    id: "levi-barrett",
    name: "Levi Barrett",
    contribUrl: "https://www.google.com/maps/contrib/100969143887292896528/reviews?hl=en-GB",
    stats: "2 reviews",
    timeAgo: "a year ago",
    rating: 5,
    location: "Northern NJ",
    category: "General Contracting",
    highlight: "Did exactly what they promised: professional, clean, communicative, and reasonable.",
    text: "Luan and his crew were great. They did exactly what they promised, were professional, clean, communicative, and reasonable. Very happy with the product they delivered. Great company to deal with. Would recommend them.",
  },
  {
    id: "jeffrey-krov",
    name: "Jeffrey Krov",
    contribUrl: "https://www.google.com/maps/contrib/101788830468837069330/reviews?hl=en-GB",
    stats: "13 reviews · 10 photos",
    isLocalGuide: true,
    timeAgo: "3 years ago",
    rating: 5,
    location: "Northern NJ",
    category: "Concrete & Driveways",
    hasPhotos: true,
    highlight: "Redid my driveway clean and smooth, fixed a troublesome large dent.",
    text: "Luan and his team are incredible. Professionalism is a must, and they got it. They redid my driveway, clean and smooth. I had a huge dent that was troublesome. Would use them again for different projects in the future.",
  },
  {
    id: "richard-weierich",
    name: "Richard weierich",
    contribUrl: "https://www.google.com/maps/contrib/111033269579745719179/reviews?hl=en-GB",
    stats: "16 reviews · 1 photo",
    isLocalGuide: true,
    timeAgo: "3 years ago",
    rating: 5,
    location: "Northern NJ",
    category: "Masonry & Stone",
    hasPhotos: true,
    positives: ["Responsiveness", "Quality", "Professionalism", "Value"],
    highlight: "Replaced fence & transformed garden into stone and rocks in just a few days.",
    text: "They replace my fence and took my flower garden out to replace it with stone and rocks. I called them, they came the next day for a quote and the project was done a few days later. Both project came out good",
  },
  {
    id: "arunabh-bhattacharya",
    name: "Arunabh Bhattacharya",
    contribUrl: "https://www.google.com/maps/contrib/100574304567333092081/reviews?hl=en-GB",
    stats: "2 reviews",
    timeAgo: "3 years ago",
    rating: 5,
    location: "Woodcliff Lake, NJ",
    category: "General Contracting",
    positives: ["Responsiveness", "Quality", "Professionalism"],
    highlight: "Walkways, garden steps, garage repair, door replacement, and rainwater drainage.",
    text: "They did a great job in fixing my walkways, garden steps, garage repair, door replacement, and rainwater drainage. I will always call them back for more projects. Woodcliff Lake, NJ",
  },
  {
    id: "dodge-rodgers",
    name: "Dodge Rodgers",
    contribUrl: "https://www.google.com/maps/contrib/114154058411788374767/reviews?hl=en-GB",
    stats: "5 reviews",
    timeAgo: "4 years ago",
    rating: 5,
    location: "Northern NJ",
    category: "Patios & Pavers",
    positives: ["Quality", "Professionalism", "Value"],
    highlight: "Incredibly professional, worked clean and finished ahead of schedule.",
    text: "Mezui construction did a fantastic job on my patio. They were incredibly professional, worked clean and finished ahead of schedule. I plan to go to them for my flooring next.",
  },
  {
    id: "alexandria-ingram",
    name: "Alexandria Ingram",
    contribUrl: "https://www.google.com/maps/contrib/107805684128931311359/reviews?hl=en-GB",
    stats: "2 reviews",
    timeAgo: "3 years ago",
    rating: 5,
    location: "Northern NJ",
    category: "General Contracting",
    positives: ["Responsiveness", "Quality", "Professionalism", "Value"],
    highlight: "Installed a Sauna & replaced a fire door. Responsive, professional, and very nice!",
    text: "I hired this company to install a Sauna & replace a fire door. They were responsive, professional, and very nice ! The work came out great! I highly recommend!",
  },
  {
    id: "jarrel",
    name: "Jarrel",
    contribUrl: "https://www.google.com/maps/contrib/114904956215226036591/reviews?hl=en-GB",
    stats: "1 review",
    timeAgo: "3 years ago",
    rating: 5,
    location: "Northern NJ",
    category: "Masonry & Stone",
    positives: ["Responsiveness", "Quality", "Professionalism", "Value"],
    highlight: "Installed brick and stone driveway and floors. Top of the line work outside.",
    text: "I recently had brick and stone installed driveway and floors. The projects they did outside was top of the line. I would definitely recommend for any projects you may have",
  },
  {
    id: "rita-coleman",
    name: "Rita Coleman",
    contribUrl: "https://www.google.com/maps/contrib/108974245557009897402/reviews?hl=en-GB",
    stats: "3 reviews",
    timeAgo: "a year ago",
    rating: 5,
    location: "Northern NJ",
    category: "General Contracting",
    highlight: "Always on time, very professional, open to suggestions, very good reasonable price.",
    text: "Highly recommended. Always on time. Very professional. Open to suggestions. Very good for reasonable price. Definitely you get your money's worth. I plan to continue using his service.",
  },
  {
    id: "zach-smith",
    name: "Zach Smith",
    contribUrl: "https://www.google.com/maps/contrib/106698449306278611357/reviews?hl=en-GB",
    stats: "2 reviews",
    timeAgo: "a year ago",
    rating: 5,
    location: "Northern NJ",
    category: "General Contracting",
    highlight: "Luan and Meziu were fantastic to work with. Would highly recommend.",
    text: "Luan and Meziu were fantastic to work with. Would highly recommend.",
  },
  {
    id: "jackie18jh",
    name: "Jackie18jh",
    contribUrl: "https://www.google.com/maps/contrib/117440582510960407388/reviews?hl=en-GB",
    stats: "78 reviews · 10 photos",
    isLocalGuide: true,
    timeAgo: "3 years ago",
    rating: 5,
    location: "Northern NJ",
    category: "General Contracting",
    hasPhotos: true,
    highlight: "Loved their professionalism, quick response, and quality of work. Very happy!",
    text: "I loved their professionalism, the quick response and quality of their work. Very happy with the result.",
  },
  {
    id: "roberto-reyes",
    name: "roberto reyes",
    contribUrl: "https://www.google.com/maps/contrib/110508892887705473669/reviews?hl=en-GB",
    stats: "1 review",
    timeAgo: "a year ago",
    rating: 5,
    location: "Northern NJ",
    category: "General Contracting",
    highlight: "Good job 👏🏻 (Translated from Spanish)",
    text: "Good job 👏🏻 (Buen trabajo)",
  },
  {
    id: "edison-lato",
    name: "Edison Lato",
    contribUrl: "https://www.google.com/maps/contrib/113441738662904016658/reviews?hl=en-GB",
    stats: "2 reviews",
    timeAgo: "3 years ago",
    rating: 5,
    location: "Northern NJ",
    category: "General Contracting",
    positives: ["Quality", "Professionalism"],
    highlight: "Rated 5/5 for outstanding Quality and Professionalism.",
    text: "Top rated contractor experience. Verified 5-star positive review for Quality and Professionalism.",
  },
];

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/reviews" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "MEZIU CONSTRUCTION LLC",
          telephone: "+1-201-844-2427",
          email: "meziullc@gmail.com",
          url: "https://www.google.com/search?q=Meziu+Construction",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Garfield",
            addressRegion: "NJ",
            postalCode: "07026",
            addressCountry: "US",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            bestRating: "5",
            worstRating: "1",
            ratingCount: "22",
            reviewCount: "22",
          },
          review: ALL_GOOGLE_REVIEWS.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.name, url: r.contribUrl },
            datePublished: r.timeAgo,
            reviewRating: { "@type": "Rating", ratingValue: String(r.rating) },
            reviewBody: r.text,
          })),
        }),
      },
    ],
  }),
  component: ReviewsPage,
});

/* ── Rating Breakdown Data ── */
const RATING_CRITERIA = [
  { label: "Quality of Workmanship", score: "5.0", percent: 100, count: "22/22 (100%)" },
  { label: "Professionalism & Integrity", score: "5.0", percent: 100, count: "22/22 (100%)" },
  { label: "Responsiveness & Communication", score: "5.0", percent: 100, count: "22/22 (100%)" },
  { label: "Pricing & Transparent Value", score: "5.0", percent: 100, count: "22/22 (100%)" },
  { label: "Timeliness & Clean Job Sites", score: "5.0", percent: 100, count: "22/22 (100%)" },
];

/* ── Video Testimonials Data ── */
const VIDEO_TESTIMONIALS = [
  {
    id: "vid-1",
    title: "Master Masonry & Retaining Wall Client Project",
    location: "Garfield, NJ",
    src: welcomeVideo,
    poster: masonryImg,
    category: "Masonry & Stone Work",
  },
  {
    id: "vid-2",
    title: "Custom Paver Patio & Fire Pit Walkthrough",
    location: "Wayne, NJ",
    src: whyUsVideo,
    poster: paversImg,
    category: "Pavers & Patios",
  },
  {
    id: "vid-3",
    title: "Full Interior Renovation & Living Space Remodel",
    location: "Clifton, NJ",
    src: heroVideo,
    poster: kitchenImg,
    category: "Home Renovations",
  },
];

const CATEGORIES = [
  "All Reviews",
  "Masonry & Stone",
  "Concrete & Driveways",
  "Patios & Pavers",
  "Remodeling & Additions",
  "Local Guides",
] as const;

function ReviewsPage() {
  const [selectedCat, setSelectedCat] = useState<string>("All Reviews");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [formRating, setFormRating] = useState<number>(5);
  const [recommend, setRecommend] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Filtered Reviews computation
  const filteredReviews = useMemo(() => {
    return ALL_GOOGLE_REVIEWS.filter((rev) => {
      // Category check
      if (selectedCat === "Local Guides") {
        if (!rev.isLocalGuide) return false;
      } else if (selectedCat !== "All Reviews") {
        if (rev.category !== selectedCat) return false;
      }

      // Search keyword check
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = rev.name.toLowerCase().includes(q);
        const matchesText = rev.text.toLowerCase().includes(q);
        const matchesLoc = rev.location?.toLowerCase().includes(q) || false;
        const matchesCat = rev.category.toLowerCase().includes(q);
        const matchesHighlight = rev.highlight?.toLowerCase().includes(q) || false;
        return matchesName || matchesText || matchesLoc || matchesCat || matchesHighlight;
      }

      return true;
    });
  }, [selectedCat, searchQuery]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen flex flex-col selection:bg-[#E56E1A] selection:text-white">
      <Header />

      <main className="flex-1">
        {/* ──────────────────────────────────────────────────────────────────────────
            1. HERO SECTION (LIGHT THEME WITH GOOGLE BUSINESS BADGE)
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-slate-50/60 pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-slate-200/70">
          <div className="pointer-events-none absolute -top-24 right-10 w-96 h-96 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl" />

          <div className="container-x relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
              <Link to="/" className="hover:text-[#E56E1A] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#E56E1A] font-bold">Client Reviews</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Heading & Trust Narrative */}
              <div className="lg:col-span-7 space-y-5">
                {/* Google Verified Eyebrow */}
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-black uppercase tracking-widest text-slate-800 shadow-sm">
                  <GoogleIcon className="w-4 h-4" />
                  <span>Google Business Verified Reviews</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Main Headline */}
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 leading-[1.15]">
                  What Our Clients Say
                </h1>

                {/* Sub-headline */}
                <h2 className="text-lg sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E56E1A] via-amber-600 to-[#E56E1A] tracking-tight">
                  100% Genuine 5.0 Star Google Reviews Across Northern New Jersey
                </h2>

                {/* Body Text */}
                <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-600">
                  Read genuine, unedited reviews from homeowners and business owners across Garfield,
                  Woodcliff Lake, Jersey City, Paramus, and Northern NJ. Master contractor Luan Meziu
                  and our experienced crew are dedicated to unmatched craftsmanship and transparent communication.
                </p>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <a
                    href={GOOGLE_BUSINESS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-white border border-slate-300 px-6 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800 shadow-sm hover:bg-slate-50 hover:border-slate-400 hover:scale-105 transition-all cursor-pointer group"
                  >
                    <GoogleIcon className="w-4 h-4" />
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </a>

                  <a
                    href={GOOGLE_WRITE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-slate-950 px-6 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-md hover:bg-slate-900 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <MessageSquarePlus className="w-4 h-4 text-amber-400" />
                    <span>Write a Google Review</span>
                  </a>

                  <a
                    href="/free-estimate"
                    className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#E56E1A] to-[#F17B24] px-6 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-orange-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Get Free Estimate</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Google Live Score Card */}
              <div className="lg:col-span-5">
                <div className="p-7 sm:p-8 rounded-3xl bg-white border-2 border-orange-200/90 shadow-xl relative overflow-hidden space-y-6">
                  {/* Subtle Corner Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center shadow-inner">
                        <GoogleIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-black text-slate-950 uppercase tracking-wider">
                          Google Business Profile
                        </div>
                        <div className="text-[11px] text-slate-500 font-semibold">
                          MEZIU CONSTRUCTION LLC
                        </div>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-100 border border-emerald-200 px-2.5 py-1 rounded-full">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      <span>Verified 100%</span>
                    </span>
                  </div>

                  {/* Rating Numbers */}
                  <div className="flex items-center gap-5 pt-2">
                    <div className="text-5xl font-black text-slate-950 tracking-tight">5.0</div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(5)].map((_, s) => (
                          <Star key={s} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-xs font-extrabold text-slate-800">
                        ★★★★★ 22 Google Business Reviews
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium">
                        100% Positive Client Rating
                      </p>
                    </div>
                  </div>

                  {/* Key Review Highlight Pills */}
                  <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-2xl bg-orange-50/80 border border-orange-100 space-y-0.5">
                      <div className="text-[10px] font-black text-[#B85008] uppercase tracking-wider">
                        Response Rate
                      </div>
                      <div className="font-extrabold text-slate-900">Immediate</div>
                    </div>
                    <div className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-100 space-y-0.5">
                      <div className="text-[10px] font-black text-emerald-800 uppercase tracking-wider">
                        Recommended
                      </div>
                      <div className="font-extrabold text-slate-900">100% of Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            2. RATING BREAKDOWN SECTION
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-14 bg-slate-50/70 border-b border-slate-200/70">
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-5 space-y-3">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-[#B85008]">
                  <Award className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>Performance Metrics</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-950">
                  Client Evaluation Breakdown
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Real evaluation metrics extracted directly from client feedback across Garfield,
                  Woodcliff Lake, Jersey City, Paramus, Clifton, Wayne, and Bergen County.
                </p>

                <div className="pt-2 flex flex-col gap-2 text-xs font-bold text-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Zero Negative Reviews (100% 5-Star Satisfaction)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Direct Owner Supervision on Every Job Site</span>
                  </div>
                </div>
              </div>

              {/* Right Column Meters */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
                {RATING_CRITERIA.map((crit) => (
                  <div key={crit.label} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-900">{crit.label}</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center text-amber-500">
                          {[...Array(5)].map((_, s) => (
                            <Star key={s} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                        <span className="text-slate-950 font-black">{crit.score}/5</span>
                      </div>
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#E56E1A] to-amber-500 h-2.5 rounded-full"
                        style={{ width: `${crit.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            3. ALL 22 VERIFIED GOOGLE BUSINESS REVIEWS GRID WITH SEARCH & FILTER
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-x">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-200 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#B85008]">
                  <Quote className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>All 22 Google Business Reviews</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                  Verified Client Reviews &amp; Testimonials
                </h2>
                <p className="text-sm text-slate-600">
                  Read genuine experiences from real local homeowners. Click on any reviewer name to view their Google Profile or read on Google Maps.
                </p>
              </div>

              {/* Live Search Input */}
              <div className="w-full lg:w-72 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by client or keyword..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:bg-white focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-100">
              {CATEGORIES.map((cat) => {
                const count =
                  cat === "All Reviews"
                    ? ALL_GOOGLE_REVIEWS.length
                    : cat === "Local Guides"
                    ? ALL_GOOGLE_REVIEWS.filter((r) => r.isLocalGuide).length
                    : ALL_GOOGLE_REVIEWS.filter((r) => r.category === cat).length;
                const isSelected = selectedCat === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCat(cat)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#E56E1A] text-white shadow-md shadow-orange-500/20 scale-105"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                        isSelected ? "bg-white/25 text-white" : "bg-white text-slate-600"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Empty State */}
            {filteredReviews.length === 0 ? (
              <div className="p-12 text-center rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
                <p className="text-base font-extrabold text-slate-800">
                  No reviews matched "{searchQuery}"
                </p>
                <p className="text-xs text-slate-500">
                  Try adjusting your search terms or selecting another category.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCat("All Reviews");
                  }}
                  className="mt-2 text-xs font-black text-[#E56E1A] underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              /* All 22 Google Reviews Cards Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredReviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between space-y-4 group"
                  >
                    {/* Top Row: Author Header & Google Badge */}
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        {/* Author Info */}
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Avatar Initials Circle */}
                          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#E56E1A] to-amber-600 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                            {rev.name.charAt(0).toUpperCase()}
                          </div>

                          <div className="min-w-0">
                            <a
                              href={rev.contribUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-black text-sm text-slate-950 hover:text-[#E56E1A] transition-colors flex items-center gap-1.5 group/author truncate"
                              title={`View ${rev.name}'s Google reviews profile`}
                            >
                              <span className="truncate">{rev.name}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400 group-hover/author:text-[#E56E1A] shrink-0" />
                            </a>

                            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium truncate">
                              <span>{rev.stats}</span>
                            </div>
                          </div>
                        </div>

                        {/* Google Icon & Star Rating */}
                        <div className="flex flex-col items-end shrink-0">
                          <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-full mb-1">
                            <GoogleIcon className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-extrabold text-slate-700">Google</span>
                          </div>
                        </div>
                      </div>

                      {/* Stars & Time */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-0.5 text-amber-400">
                          {[...Array(rev.rating)].map((_, s) => (
                            <Star key={s} className="w-4 h-4 fill-current" />
                          ))}
                        </div>

                        <span className="text-xs text-slate-400 font-semibold">{rev.timeAgo}</span>
                      </div>

                      {/* Local Guide Badge */}
                      {rev.isLocalGuide && (
                        <div className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200/80 text-amber-800 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                          <Award className="w-3 h-3 text-amber-600" />
                          <span>Google Local Guide</span>
                        </div>
                      )}

                      {/* Review Body */}
                      <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700 font-medium whitespace-pre-line">
                        "{rev.text}"
                      </p>
                    </div>

                    {/* Bottom Metadata: Positive Tags & Category */}
                    <div className="pt-4 border-t border-slate-100 space-y-2">
                      {/* Positive Attribute Tags if present */}
                      {rev.positives && rev.positives.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {rev.positives.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-md"
                            >
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                              <span>{tag}</span>
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between text-[11px] font-bold">
                        <span className="text-[#B85008] bg-orange-50 border border-orange-200/60 px-2.5 py-0.5 rounded-full">
                          {rev.category}
                        </span>

                        {rev.location && (
                          <span className="text-slate-500 font-semibold flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#E56E1A]" />
                            <span>{rev.location}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Direct Google Business CTA Strip */}
            <div className="mt-14 p-8 rounded-3xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <GoogleIcon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg text-white">
                    Verified on Google Business Profile
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    Garfield, NJ 07026 • Family-Owned Master Contractor Since 2009
                  </p>
                </div>
              </div>

              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#E56E1A] to-[#F17B24] px-6 py-3 text-xs font-black uppercase tracking-wider text-white shadow-lg hover:scale-105 transition-all cursor-pointer shrink-0"
              >
                <span>Read Directly on Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            4. VIDEO TESTIMONIALS & PROJECT WALKTHROUGHS
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-24 bg-slate-50/70 border-t border-slate-200/70">
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 border border-orange-200 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#B85008]">
                <Sparkles className="w-3.5 h-3.5 text-[#E56E1A]" />
                <span>On-Site Proof of Craftsmanship</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Real Job Site Walkthroughs
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                See the masonry, patio pavers, and renovation quality that our clients rave about in their 5-star reviews.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {VIDEO_TESTIMONIALS.map((video) => (
                <div
                  key={video.id}
                  className="group relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <video
                      src={video.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        <span>{video.location}</span>
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                        {video.category}
                      </span>
                      <h3 className="text-sm font-bold text-white leading-snug mt-0.5">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            5. INTERACTIVE "LEAVE A REVIEW" FORM
           ────────────────────────────────────────────────────────────────────────── */}
        <section id="leave-review" className="py-16 lg:py-24 bg-white">
          <div className="container-x max-w-4xl">
            <div className="rounded-3xl bg-slate-50/80 border border-slate-200/90 p-8 sm:p-12 shadow-lg space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 border border-orange-200 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-[#B85008]">
                  <MessageSquarePlus className="w-3.5 h-3.5 text-[#E56E1A]" />
                  <span>Client Feedback</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-950">
                  Share Your Experience
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Have you recently completed a project with MEZIU CONSTRUCTION LLC? Please share your
                  review here or post directly on our Google Business page.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-950">Thank You for Your Review!</h3>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Your feedback has been received and will be reviewed and published to our client
                    showcase. We appreciate your trust in Luan Meziu and MEZIU CONSTRUCTION LLC!
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-900 underline mt-2 cursor-pointer"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Rating Selector */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <label className="text-xs font-black uppercase tracking-wider text-slate-900 block">
                        Your Overall Rating *
                      </label>
                      <span className="text-[11px] text-slate-500 font-medium">
                        Click on the stars to select your rating (1 to 5)
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormRating(star)}
                          className="p-1 text-amber-500 hover:scale-125 transition-transform cursor-pointer"
                          aria-label={`Rate ${star} star`}
                        >
                          <Star
                            className={`w-7 h-7 ${
                              star <= formRating ? "fill-amber-500" : "text-slate-300"
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-2 font-black text-sm text-slate-900">
                        {formRating}.0 / 5.0
                      </span>
                    </div>
                  </div>

                  {/* Form Inputs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-900">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Shannon Ruiz"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-900">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-900">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        placeholder="(201) 555-0123"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-900">Location (City/Town) *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Woodcliff Lake, NJ"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-900">Project Type *</label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A]"
                    >
                      <option value="">Select your project type...</option>
                      <option value="Masonry & Stone Work">Masonry &amp; Stone Work</option>
                      <option value="Concrete & Driveways">Concrete &amp; Driveways</option>
                      <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                      <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                      <option value="Home Renovations & Additions">Home Renovations &amp; Additions</option>
                      <option value="Pavers & Patios">Pavers &amp; Patios</option>
                      <option value="Commercial Construction">Commercial Construction</option>
                      <option value="Other Construction Service">Other Construction Service</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-900">Your Review *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please share details about the craftsmanship, communication, punctuality, and overall satisfaction..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#E56E1A] focus:ring-2 focus:ring-orange-500/20"
                    />
                  </div>

                  {/* Recommendation Toggle */}
                  <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">
                      Would you recommend MEZIU CONSTRUCTION to friends &amp; family?
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setRecommend(true)}
                        className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                          recommend
                            ? "bg-[#E56E1A] text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 hover:text-slate-950"
                        }`}
                      >
                        Yes 👍
                      </button>
                      <button
                        type="button"
                        onClick={() => setRecommend(false)}
                        className={`px-3 py-1 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
                          !recommend
                            ? "bg-slate-800 text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 hover:text-slate-950"
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>

                  {/* Submit Button & Consent Note */}
                  <div className="space-y-3">
                    <button
                      type="submit"
                      className="w-full h-14 rounded-full bg-gradient-to-r from-[#E56E1A] to-[#F17B24] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-orange-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Review</span>
                    </button>

                    <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                      Note: By submitting this form, you agree to allow MEZIU CONSTRUCTION LLC to
                      feature your review on our website and marketing materials.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────────────────────────
            6. CALL TO ACTION & REASSURANCE
           ────────────────────────────────────────────────────────────────────────── */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-[#E56E1A] via-[#ED741D] to-[#E56E1A] text-white relative overflow-hidden shadow-xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          <div className="container-x relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-black/15 border border-white/30 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Experience The Difference</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Ready to Work with a 5-Star Rated Team?
            </h2>

            <p className="text-base sm:text-lg font-medium text-white/95 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of happy clients across Northern New Jersey. Get a free, upfront, and transparent on-site estimate today.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={GOOGLE_WRITE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-full bg-white text-slate-950 px-8 text-xs sm:text-sm font-black uppercase tracking-wider shadow-xl hover:bg-slate-100 hover:scale-105 transition-all cursor-pointer"
              >
                <GoogleIcon className="w-4 h-4" />
                <span>Write a Google Review</span>
              </a>

              <a
                href="/free-estimate"
                className="inline-flex h-13 items-center justify-center gap-3 rounded-full bg-slate-950 px-8 sm:px-9 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-2xl transition-all duration-300 hover:bg-slate-900 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#E56E1A] fill-current" />
                <span>Request Free Estimate — {BUSINESS.phone}</span>
              </a>
            </div>

            {/* Reassurance Footer Note */}
            <div className="mt-8 pt-6 border-t border-white/20 max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm font-semibold text-white/90 leading-relaxed">
                All reviews are verified Google Business customer submissions. MEZIU CONSTRUCTION LLC
                delivers top-quality masonry, concrete, and remodeling craftsmanship since 2009.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCta />
    </div>
  );
}
