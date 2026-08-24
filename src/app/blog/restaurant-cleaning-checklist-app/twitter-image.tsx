import { blogOgContentType, blogOgSize, createBlogOgImage } from "@/lib/blog-og";

export const dynamic = "force-static";
export const alt = "Restaurant cleaning checklist app by shift and area";
export const size = blogOgSize;
export const contentType = blogOgContentType;

export default function Image() {
  return createBlogOgImage({
    kicker: "Checklist App",
    title: "Restaurant Cleaning Checklist App",
    bullets: ["Shift-based tasks", "Area ownership", "Live completion records"],
    accent: "#36b37e",
  });
}
