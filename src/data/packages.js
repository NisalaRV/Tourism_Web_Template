import { unsplash } from "../utils/images";

// SAMPLE packages: replace with your real offers and prices.
// type: "Stay" | "Tour" | "Experience"  (Experience = single-day, no departure date)
export const packages = [
  {
    id: "coastal-villa-retreat",
    name: "Coastal Villa Retreat",
    type: "Stay",
    duration: "3 nights",
    price: "From USD 000 (sample)",
    summary: "Sample package: a private villa stay steps from the beach.",
    image: unsplash("photo-1520250497591-112f2f40a3f4"),
    highlights: ["Private pool", "Daily breakfast", "Airport pickup"],
  },
  {
    id: "hill-country-escape",
    name: "Hill Country Escape",
    type: "Tour",
    duration: "4 days",
    price: "From USD 000 (sample)",
    summary: "Sample package: tea estates, misty viewpoints and scenic rail.",
    image: unsplash("photo-1469474968028-56623f02e42e"),
    highlights: ["Private driver-guide", "Tea estate visit", "Boutique lodging"],
  },
  {
    id: "wildlife-safari-day",
    name: "Wildlife Safari Day",
    type: "Experience",
    duration: "1 day",
    price: "From USD 000 (sample)",
    summary: "Sample package: a guided jeep safari with a local naturalist.",
    image: unsplash("photo-1500530855697-b586d89ba3ee"),
    highlights: ["Jeep safari", "Packed lunch", "Hotel transfers"],
  },
  {
    id: "cultural-triangle-journey",
    name: "Cultural Triangle Journey",
    type: "Tour",
    duration: "5 days",
    price: "From USD 000 (sample)",
    summary: "Sample package: ancient cities, temples and village life.",
    image: unsplash("photo-1566073771259-6a8506099945"),
    highlights: ["Expert guide", "Heritage sites", "Village lunch"],
  },
];

export const packageOptions = packages.map((p) => p.name);
