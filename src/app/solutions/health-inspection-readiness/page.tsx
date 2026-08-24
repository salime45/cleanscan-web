import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Restaurant Health Inspection Readiness Software",
  description:
    "Restaurant health inspection readiness software for organizing cleaning routines, sanitation checks, corrective actions, and manager reviews.",
  alternates: { canonical: "/solutions/health-inspection-readiness/" },
};

const organizedItems = [
  "Cleaning logs by date and shift",
  "Restroom checks",
  "Kitchen sanitation routines",
  "Storage area checks",
  "Corrective actions",
  "Manager reviews",
  "Recurring self-inspections",
];

const reviewItems = [
  "Missed cleaning tasks",
  "Overdue checks",
  "Repeated issues",
  "Completion history",
  "Areas with weak follow-up",
];

const relatedTemplates = [
  { title: "Restaurant Health Inspection Checklist", href: "/templates/restaurant-health-inspection-checklist/" },
  { title: "Kitchen Cleaning Checklist", href: "/templates/kitchen-cleaning-checklist/" },
  { title: "Restroom Cleaning Log", href: "/templates/restroom-cleaning-log/" },
  { title: "Restaurant Cleaning Checklist", href: "/templates/restaurant-cleaning-checklist/" },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Solution</p>
        <h1>Restaurant Health Inspection Readiness Software</h1>
        <p className="article-lead">
          Keep cleaning routines, sanitation checks, corrective actions, and manager reviews
          organized so your team can prepare for inspections with better records.
        </p>
        <div className="hero-actions article-actions">
          <Link className="hero-cta" href="/contact/">
            Organize Inspection Readiness
          </Link>
          <Link className="outline-cta" href="/templates/restaurant-health-inspection-checklist/">
            View Inspection Checklist
          </Link>
        </div>

        <section>
          <h2>Inspection readiness starts before the inspection</h2>
          <p>
            The goal is not to pass inspections automatically. The practical goal is to keep routine
            cleaning work, internal checks, follow-up actions, and manager reviews organized before
            an inspector arrives.
          </p>
          <p>
            CleanScan gives restaurant managers a clearer way to manage cleaning records and spot
            weak follow-up earlier, instead of rebuilding the story from paper sheets after the fact.
          </p>
        </section>

        <section>
          <h2>What CleanScan helps you organize</h2>
          <div className="commercial-list-grid">
            {organizedItems.map((item) => (
              <div className="commercial-list-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>What managers can review</h2>
          <ul>
            {reviewItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="article-cta-box">
          <h2>Important note</h2>
          <p>
            CleanScan helps restaurants organize cleaning records and internal routines. It does not
            replace local health code requirements, staff training, food safety procedures, or
            professional compliance advice.
          </p>
        </section>

        <section>
          <h2>Related templates</h2>
          <ul>
            {relatedTemplates.map((template) => (
              <li key={template.href}>
                <Link href={template.href}>{template.title}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="article-cta-box commercial-final-cta">
          <h2>Prepare with better cleaning records</h2>
          <p>
            Use CleanScan to organize recurring cleaning routines, completion history, corrective
            actions, and manager review workflows in one place.
          </p>
          <Link className="hero-cta" href="/contact/">
            Request a Demo
          </Link>
        </section>
      </article>
    </main>
  );
}
