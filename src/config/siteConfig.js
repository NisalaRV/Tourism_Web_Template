import { Compass, ShieldCheck, Leaf, HeartHandshake, MapPinned, Sparkles } from "lucide-react";

export const siteConfig = {
  businessName: "Your Business Name",
  shortName: "YBN",
  tagline: "Curated Sri Lankan Journeys",
  description:
    "Placeholder description: replace this with two or three sentences about your guest house, villa, boutique hotel or tour company.",

  // Country code + number, digits only (no +, spaces or dashes)
  whatsappNumber: "94771234567",
  phone: "+94 77 123 4567",
  email: "hello@yourbusiness.example",
  address: "123 Sample Road, Galle, Sri Lanka",

  social: {
    instagram: "https://instagram.com/yourbusiness",
    facebook: "https://facebook.com/yourbusiness",
    youtube: "https://youtube.com/@yourbusiness",
  },

  navItems: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Gallery", to: "/gallery" },
    { label: "Contact", to: "/contact" },
    { label: "Booking", to: "/booking" },
  ],

  footerServices: [
    "Boutique Stays",
    "Private Tours",
    "Cultural Experiences",
    "Airport Transfers",
  ],

  theme: {
    deep: "#102B26",
    deepSoft: "#1B403A",
    gold: "#D6B779",
    goldSoft: "#E9D5A8",
    ivory: "#F5F0E7",
    charcoal: "#202522",
  },

  hero: {
    eyebrow: "Sri Lanka · Private & Boutique Travel",
    headline: "Discover the island, beautifully unhurried.",
    text: "Placeholder copy: describe your signature experience here. Handpicked stays, local guides and journeys shaped around you.",
    image: "photo-1507525428034-b723cf961d3e",
  },

  whyUs: [
    { icon: Compass, title: "Tailored Journeys", text: "Sample text. Explain how you shape each trip around the guest." },
    { icon: ShieldCheck, title: "Trusted Service", text: "Sample text. Describe your standards, licences and support." },
    { icon: Leaf, title: "Responsible Travel", text: "Sample text. Describe your community or environmental approach." },
    { icon: HeartHandshake, title: "Local Hospitality", text: "Sample text. Describe the welcome guests can expect." },
  ],

  // PLACEHOLDER statistics: replace with real, verifiable figures or remove.
  stats: [
    { value: "00+", label: "Sample statistic" },
    { value: "00", label: "Sample statistic" },
    { value: "00+", label: "Sample statistic" },
    { value: "00", label: "Sample statistic" },
  ],

  about: {
    image: "photo-1559827260-dc66d52bef19",
    secondaryImage: "photo-1540541338287-41700207dee6",
    story:
      "Placeholder story: tell guests how your business began, who is behind it and what makes your corner of Sri Lanka special. Replace this text with your own words.",
    values: [
      { icon: HeartHandshake, title: "Warm Hospitality", text: "Sample value text. Describe how you welcome guests." },
      { icon: Leaf, title: "Responsible Travel", text: "Sample value text. Describe your community or eco approach." },
      { icon: ShieldCheck, title: "Trusted Service", text: "Sample value text. Describe your standards and support." },
    ],
    highlights: [
      { icon: Compass, title: "Tailored Itineraries", text: "Sample highlight. Routes built around your pace." },
      { icon: MapPinned, title: "Local Expertise", text: "Sample highlight. Insider knowledge of the island." },
      { icon: Sparkles, title: "Considered Details", text: "Sample highlight. Small touches that matter." },
    ],
  },
};
