// Royalty-free Unsplash photos. Every <SmartImage> has a gradient fallback,
// so if an ID ever stops resolving the layout still looks intentional.
export const unsplash = (photoId, width = 1200) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;
