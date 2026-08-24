import type { Metadata } from "next";
import BlogHeroImage from "@/components/blog-hero-image";
import SiteHeader from "@/components/site-header";

const image = "/wp-content/uploads/2024/02/cropped-hand-person-holding-paper-clipboard-home-300x200.jpg";

export const metadata: Metadata = {
  title: "How to Create a Restaurant Cleaning SOP",
  description: "Build a restaurant cleaning SOP with clear responsibilities, sanitation steps, and verification criteria.",
  alternates: { canonical: "/blog/kitchen-sanitation-food-safety/how-to-create-a-restaurant-cleaning-sop/" },
  openGraph: {
    title: "How to Create a Restaurant Cleaning SOP",
    description: "Build a restaurant cleaning SOP with clear responsibilities, sanitation steps, and verification criteria.",
    url: "/blog/kitchen-sanitation-food-safety/how-to-create-a-restaurant-cleaning-sop/",
    type: "article",
    images: [image],
  },
};

export default function Page() {
  return (
    <main className="article-page">
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Kitchen Sanitation & Food Safety</p>
        <h1>How to Create a Restaurant Cleaning SOP</h1>
        <p className="article-lead">A useful SOP is practical, role-based, and measurable under shift pressure.</p>
        <BlogHeroImage src={image} alt="Cleaning procedure checklist beside cleaning tools" width={300} height={200} />
        <ol>
          <li>Define task objective and area scope.</li>
          <li>Specify method (clean / rinse / sanitize where relevant).</li>
          <li>Set responsible role and frequency.</li>
          <li>Add verification and escalation rule.</li>
        </ol>
        <p>Start with the <a href="/templates/kitchen-cleaning-checklist/">kitchen cleaning checklist</a>.</p>
      </article>
    </main>
  );
}
