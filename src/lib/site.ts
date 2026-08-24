export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://cleanscan.site").replace(/\/$/, "");
export const SITE_HOST = new URL(SITE_URL).host;
export const DEFAULT_OG_IMAGE = "/og-image.png";
export const DEFAULT_OG_IMAGE_ALT = "CleanScan cleaning management app dashboard";
