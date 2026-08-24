import type { Metadata } from "next";
import BlogHeroImage from "@/components/blog-hero-image";
import SiteHeader from "@/components/site-header";

const image = "/wp-content/uploads/2024/11/Smart-cleaning-technology-providing-eco-friendly-solutions-for-pristine-workplaces.png";

export const metadata: Metadata = {
  title: "Daily vs Weekly vs Monthly Restaurant Cleaning Tasks",
  description: "How to divide restaurant cleaning tasks by frequency to improve hygiene quality and operational control.",
  alternates: { canonical: "/blog/restaurant-cleaning-systems/daily-vs-weekly-vs-monthly-restaurant-cleaning-tasks/" },
  openGraph: {
    title: "Daily vs Weekly vs Monthly Restaurant Cleaning Tasks",
    description: "How to divide restaurant cleaning tasks by frequency to improve hygiene quality and operational control.",
    url: "/blog/restaurant-cleaning-systems/daily-vs-weekly-vs-monthly-restaurant-cleaning-tasks/",
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
        <h1>Daily vs Weekly vs Monthly Restaurant Cleaning Tasks</h1>
        <p className="article-lead">Not every task should run every shift. Frequency design is key to both quality and efficiency.</p>
        <BlogHeroImage src={image} alt="Cleaning team maintaining a commercial workplace" width={612} height={408} />
        <h2>Daily</h2>
        <p>High-touch surfaces, food-contact stations, restroom checks, waste handling.</p>
        <h2>Weekly</h2>
        <p>Deep clean corners, storage shelves, non-critical equipment externals.</p>
        <h2>Monthly</h2>
        <p>Full-area reviews, trend checks, SOP updates, and manager audit.</p>
        <p>Apply this with the <a href="/templates/kitchen-cleaning-checklist/">kitchen cleaning checklist template</a>.</p>
      </article>
    </main>
  );
}
