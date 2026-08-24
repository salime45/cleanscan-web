import { blogOgContentType, blogOgSize, createBlogOgImage } from "@/lib/blog-og";

export const dynamic = "force-static";
export const alt = "Restroom cleaning log template compared with a digital app";
export const size = blogOgSize;
export const contentType = blogOgContentType;

export default function Image() {
  return createBlogOgImage({
    kicker: "Restroom Logs",
    title: "Restroom Cleaning Log Template vs App",
    bullets: ["Paper workflow", "Digital checks", "Manager visibility"],
    accent: "#1b7fbf",
  });
}
