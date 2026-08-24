import type { Metadata } from "next";
import BlogHeroImage from "@/components/blog-hero-image";
import SiteHeader from "@/components/site-header";

const image = "/wp-content/uploads/2024/02/cropped-hand-person-holding-paper-clipboard-home-300x200.jpg";

export const metadata: Metadata = {
  title: "Paper vs Digital Cleaning Logs for Restaurants",
  description: "Compare paper and digital restaurant cleaning logs on execution errors, visibility, and inspection readiness.",
  alternates: { canonical: "/blog/restaurant-cleaning-systems/paper-vs-digital-cleaning-logs-for-restaurants/" },
  openGraph: {
    title: "Paper vs Digital Cleaning Logs for Restaurants",
    description: "Compare paper and digital restaurant cleaning logs on execution errors, visibility, and inspection readiness.",
    url: "/blog/restaurant-cleaning-systems/paper-vs-digital-cleaning-logs-for-restaurants/",
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
        <h1>Paper vs Digital Cleaning Logs for Restaurants</h1>
        <p className="article-lead">Paper logs document intent. Digital logs improve execution control and supervision speed.</p>
        <BlogHeroImage src={image} alt="Paper cleaning checklist beside cleaning supplies" width={300} height={200} />
        <ul>
          <li><strong>Paper:</strong> low setup, high follow-up overhead, weak traceability.</li>
          <li><strong>Digital:</strong> real-time visibility, structured records, faster corrective action.</li>
        </ul>
        <p>Use this <a href="/templates/restroom-cleaning-log/">restroom cleaning log template</a> as a starting point.</p>
      </article>
    </main>
  );
}
