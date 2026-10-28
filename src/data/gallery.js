import { unsplash } from "../utils/images";

// SAMPLE gallery: replace the photo IDs/URLs and alt text with your own.
// `ratio` controls the tile shape so the masonry grid has natural variety.
export const galleryImages = [
  { id: 1, category: "Coast", alt: "Tropical beach with palm trees and turquoise water", ratio: "4 / 5", src: unsplash("photo-1507525428034-b723cf961d3e", 1000) },
  { id: 2, category: "Stays", alt: "Resort pool surrounded by tropical gardens", ratio: "4 / 3", src: unsplash("photo-1540541338287-41700207dee6", 1000) },
  { id: 3, category: "Hills", alt: "Green mountain landscape under soft clouds", ratio: "3 / 4", src: unsplash("photo-1469474968028-56623f02e42e", 1000) },
  { id: 4, category: "Wildlife", alt: "Wild landscape at golden hour", ratio: "4 / 3", src: unsplash("photo-1500530855697-b586d89ba3ee", 1000) },
  { id: 5, category: "Stays", alt: "Elegant boutique hotel exterior at dusk", ratio: "4 / 5", src: unsplash("photo-1566073771259-6a8506099945", 1000) },
  { id: 6, category: "Coast", alt: "Calm bay with boats near the shoreline", ratio: "1 / 1", src: unsplash("photo-1573843981267-be1999ff37cd", 1000) },
  { id: 7, category: "Stays", alt: "Luxury villa with a private terrace", ratio: "4 / 3", src: unsplash("photo-1520250497591-112f2f40a3f4", 1000) },
  { id: 8, category: "Hills", alt: "Lakeside view framed by forested hills", ratio: "3 / 4", src: unsplash("photo-1506744038136-46273834b3fb", 1000) },
  { id: 9, category: "Culture", alt: "Traveller exploring an ancient temple complex", ratio: "4 / 5", src: unsplash("photo-1476514525535-07fb3b4ae5f1", 1000) },
  { id: 10, category: "Coast", alt: "Sunset over a quiet tropical beach", ratio: "4 / 3", src: unsplash("photo-1559827260-dc66d52bef19", 1000) },
  { id: 11, category: "Culture", alt: "Scenic road winding through a mountain valley", ratio: "1 / 1", src: unsplash("photo-1488646953014-85cb44e25828", 1000) },
  { id: 12, category: "Wildlife", alt: "Clear tropical water with marine life", ratio: "3 / 4", src: unsplash("photo-1544551763-46a013bb70d5", 1000) },
];

export const galleryCategories = ["All", ...Array.from(new Set(galleryImages.map((i) => i.category)))];
