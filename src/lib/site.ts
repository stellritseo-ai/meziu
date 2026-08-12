export const BUSINESS = {
  name: "MEZIU CONSTRUCTION LLC",
  owner: "Luan Meziu",
  phone: "(201) 844-2427",
  phoneHref: "tel:+12018442427",
  email: "meziullc@gmail.com",
  city: "Garfield",
  state: "NJ",
  hours: "Monday–Friday · 7:00 AM–6:00 PM",
  radius: "40 miles",
} as const;

export const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  // { label: "Service Areas", href: "#areas" },
  { label: "Free Estimate", href: "#contact" },
  { label: "Contact", href: "#contact" },
] as const;

export const FAQS = [
  {
    q: "What areas does MEZIU CONSTRUCTION LLC serve?",
    a: "We serve Garfield, NJ and surrounding communities within approximately a 40-mile service area.",
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