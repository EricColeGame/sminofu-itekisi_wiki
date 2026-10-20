type NavigationItem = {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "songs", path: "/songs", isContentType: true },
  { key: "music", path: "/music", isContentType: true },
  { key: "artists", path: "/artists", isContentType: true },
  { key: "lyrics", path: "/lyrics", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "discovery", path: "/discovery", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
