import type { Metadata } from "next";
import BlogHeroImage from "@/components/blog-hero-image";
import SiteHeader from "@/components/site-header";

const image = "/wp-content/uploads/2024/01/ama-llaves-limpiando-habitacion-hotel-300x257.jpg";

export const metadata: Metadata = {
  title: "Restaurant Closing Cleaning Checklist by Role",
  description: "A role-based closing cleaning checklist for managers, FOH, and BOH teams.",
  alternates: { canonical: "/blog/opening-closing-shift-checklists/restaurant-closing-cleaning-checklist-by-role/" },
  openGraph: {
    title: "Restaurant Closing Cleaning Checklist by Role",
    description: "A role-based closing cleaning checklist for managers, FOH, and BOH teams.",
    url: "/blog/opening-closing-shift-checklists/restaurant-closing-cleaning-checklist-by-role/",
    type: "article",
    images: [image],
  },
};

export default function Page() {
  return (
    <main className="article-page">
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Opening, Closing & Shift Checklists</p>
        <h1>Restaurant Closing Cleaning Checklist by Role</h1>
        <p className="article-lead">Role-based closing workflows reduce handoff errors and improve next-shift readiness.</p>
        <BlogHeroImage src={image} alt="Cleaning a restroom during a closing checklist" width={300} height={257} />
        <h2>FOH</h2><p>Dining reset, surface sanitation, customer area prep.</p>
        <h2>BOH</h2><p>Station sanitation, equipment checks, safe storage controls.</p>
        <h2>Manager</h2><p>Final verification, unresolved issues log, sign-off.</p>
        <p>Use this template: <a href="/templates/restaurant-closing-cleaning-checklist/">Restaurant Closing Cleaning Checklist</a>.</p>
      </article>
    </main>
  );
}
