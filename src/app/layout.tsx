import type { Metadata } from "next";
import "./globals.css";
import "./design-refresh.css";
import CookieBanner from "@/components/cookie-banner";
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_ALT, SITE_URL } from "@/lib/site";
import { GoogleAnalytics } from '@next/third-parties/google'

const defaultDescription =
  "Smart cleaning management with digital checklists and photo-proof execution.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CleanScan",
    template: "%s | CleanScan",
  },
  description: defaultDescription,
  openGraph: {
    siteName: "CleanScan",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: DEFAULT_OG_IMAGE_ALT,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieBanner />
      </body>
      <GoogleAnalytics gaId="G-CJXCN6HZTL" />
    </html>
  );
}
