export const BUSINESS = {
  name: "MEZIU CONSTRUCTION LLC",
  owner: "Luan Meziu",
  phone: "(201) 844-2427",
  phoneHref: "tel:+12018442427",
  email: "meziullc@gmail.com",
  city: "Cliffwood",
  state: "NJ",
  hours: "Monday–Friday · 7:00 AM–6:00 PM",
  radius: "40 miles",
} as const;

export const WEB3FORMS_CONFIG = {
  accessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
  recipientEmail: "eva@stellrit.com",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  // { label: "Service Areas", href: "/#areas" },
  { label: "Free Estimate", href: "/free-estimate" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES_SUBMENU = [
  {
    title: "Masonry Services",
    desc: "Brickwork, stone veneer, chimneys, and structural masonry",
    href: "/services/masonry",
    icon: "Layers",
  },
  {
    title: "Concrete Contractor",
    desc: "Engineered slabs, reinforced steps, footings, and stamped concrete",
    href: "/services/concrete",
    icon: "Grid",
  },
  {
    title: "Kitchen Remodeling",
    desc: "Custom cabinetry, quartz countertops, and full kitchen design",
    href: "/services/kitchen",
    icon: "Utensils",
  },
  {
    title: "Bathroom Remodeling",
    desc: "Walk-in glass showers, luxury tile work, and modern fixtures",
    href: "/services/bathroom",
    icon: "Bath",
  },
  {
    title: "Pavers & Driveways",
    desc: "Interlocking paver driveways, custom patios, and walkways",
    href: "/services/pavers",
    icon: "Compass",
  },
  {
    title: "Home Remodeling & Renovation",
    desc: "Full interior gut remodels and whole-home transformations",
    href: "/services/home-remodeling",
    icon: "Home",
  },
  {
    title: "Stone Work & Walls",
    desc: "Natural stone retaining walls, erosion control, and facades",
    href: "/services/stonework",
    icon: "ShieldCheck",
  },
  {
    title: "Home Additions",
    desc: "Two-story additions, master suites, and room expansions",
    href: "/services/home-additions",
    icon: "Maximize2",
  },
  {
    title: "General Contracting & Handyman",
    desc: "Turnkey project management, framing, drywall, and repairs",
    href: "/services/general-contracting",
    icon: "Wrench",
  },
  {
    title: "Commercial Construction",
    desc: "Storefront build-outs, commercial masonry, and tenant fit-outs",
    href: "/services/commercial-construction",
    icon: "Building2",
  },
] as const;

export const FAQS = [
  {
    q: "What areas does MEZIU CONSTRUCTION LLC serve?",
    a: "We serve Cliffwood, NJ and surrounding communities within approximately a 40-mile service area.",
  },
  {
    q: "What services do you provide?",
    a: "We provide masonry, concrete, remodeling, renovations, general contracting, kitchens, bathrooms, pavers, driveways, walls, stone work, additions, handyman services, electrical work, and more.",
  },
  {
    q: "Do you work on commercial properties?",
    a: "Yes. MEZIU CONSTRUCTION LLC provides both residential and commercial construction services.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. The business is licensed, insured, and bonded.",
  },
  {
    q: "When are you available?",
    a: "Monday through Friday, 7:00 AM to 6:00 PM.",
  },
  {
    q: "Do you offer emergency service?",
    a: "Emergency service is available during regular working hours only.",
  },
  {
    q: "How can I request an estimate?",
    a: "Contact MEZIU CONSTRUCTION LLC by phone at (201) 844-2427 or email meziullc@gmail.com.",
  },
] as const;