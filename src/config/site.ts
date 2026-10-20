export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Sminofu iTekisi Wiki",
  shortName: "Sminofu iTekisi",
  logoText: "S",
  tagline: "Tracklist, Songs & Official Visualizers",
  description: "Explore Sminofu's iTekisi album, released October 16, 2026, with its 17-track listing, song information, release details, and official music video resources.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sminofu-itekisi.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sminofu-itekisi.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://music.empi.re/itekisi",
  heroVideoId: "vd6wF6FPYLU", // Sminofu - iTekisi (Official Visualizer)
  social: {
    youtube: "https://www.youtube.com/@Sminofu",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
