import type { Metadata } from "next";
import BlogHeroImage from "@/components/blog-hero-image";
import SiteHeader from "@/components/site-header";

const image = "/wp-content/uploads/2024/02/cropped-hand-person-holding-paper-clipboard-home-300x200.jpg";

export const metadata: Metadata = {
  title: "How to Build a Master Cleaning Schedule for a Restaurant",
  description: "Build a master restaurant cleaning schedule by area, role, and frequency to improve consistency and execution quality.",
  alternates: { canonical: "/blog/restaurant-cleaning-systems/how-to-build-master-cleaning-schedule-for-a-restaurant/" },
  openGraph: {
    title: "How to Build a Master Cleaning Schedule for a Restaurant",
    description: "Build a master restaurant cleaning schedule by area, role, and frequency to improve consistency and execution quality.",
    url: "/blog/restaurant-cleaning-systems/how-to-build-master-cleaning-schedule-for-a-restaurant/",
    type: "article",
    images: [image],
  },
};

export default function Page() {
  return (
    <main className="article-page">
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Restaurant Cleaning Systems</p>
        <h1>How to Build a Master Cleaning Schedule for a Restaurant</h1>
        <p className="article-lead">A master schedule aligns tasks, frequencies, and accountability so cleaning quality is predictable.</p>
        <BlogHeroImage src={image} alt="Cleaning checklist used to plan restaurant cleaning tasks" width={300} height={200} />
        <ol>
          <li>Map all areas: FOH, BOH, restrooms, storage, waste zones.</li>
          <li>Define frequency: per shift, daily, weekly, monthly.</li>
          <li>Assign owners by role and shift.</li>
          <li>Set verification method and escalation path.</li>
        </ol>
        <p>Start with this <a href="/templates/restaurant-cleaning-checklist/">restaurant cleaning checklist template</a>.</p>
        <a className="hero-cta" href="/contact/">Use this schedule digitally</a>
      </article>
    </main>
  );
}
