import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Cleaning Management Software & Restaurant Cleaning Solutions",
  description:
    "Explore CleanScan cleaning management software, cleaning checklist and schedule apps, restaurant cleaning management, restroom quality control, and inspection readiness.",
  alternates: { canonical: "/solutions/" },
};

const solutions = [
  {
    title: "Cleaning Management Software",
    href: "/cleaning-management-software/",
    description: "For teams that need recurring schedules, digital checklists, completion history, QR status pages, and cleaning metrics across multiple spaces.",
    cta: "View Cleaning Management Software",
    primary: true,
  },
  {
    title: "Cleaning Checklist App",
    href: "/cleaning-checklist-app/",
    description: "Replace paper cleaning sheets with digital tasks, assignments, completion tracking, records, and QR-enabled cleaning status.",
    cta: "View Cleaning Checklist App",
  },
  {
    title: "Cleaning Schedule App",
    href: "/cleaning-schedule-app/",
    description: "Schedule recurring cleaning by shift, service block, day, week, or month and track missed or overdue work.",
    cta: "View Cleaning Schedule App",
  },
  {
    title: "Restaurant Cleaning Management",
    href: "/solutions/restaurant-cleaning-management/",
    description: "Control daily, weekly, and monthly restaurant cleaning across kitchens, dining rooms, restrooms, storage, and shared areas.",
    cta: "View Restaurant Cleaning Management",
  },
  {
    title: "Restaurant Restroom Quality Control",
    href: "/solutions/restroom-quality-control/",
    description: "Track restroom checks by time block, assign responsibility, record incidents, and keep managers visible across every shift.",
    cta: "View Restroom Quality Control",
  },
  {
    title: "Health Inspection Readiness",
    href: "/solutions/health-inspection-readiness/",
    description: "Keep cleaning routines, sanitation checks, corrective actions, and internal reviews organized before inspections.",
    cta: "View Inspection Readiness",
  },
];

const included = [
  "Digital checklists",
  "Recurring schedules",
  "Task assignment by role and area",
  "Completion tracking",
  "Manager visibility",
  "Digital cleaning records",
  "Public QR status pages",
  "Cleaning metrics by space",
];

export default function SolutionsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="solutions-hero wrap">
        <div>
          <p className="article-kicker">Solutions</p>
          <h1>Cleaning Management Software & Operational Workflows</h1>
          <p className="article-lead">
            Choose the cleaning workflow you need to control: checklists, recurring schedules,
            restaurant operations, restroom checks, or inspection readiness.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="hero-cta" href="/cleaning-management-software/">View Cleaning Management Software</Link>
          <Link className="outline-cta" href="/contact/">Request a Demo</Link>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-heading">
          <p className="article-kicker">Solutions</p>
          <h2>Choose the workflow you want to improve</h2>
        </div>

        <div className="cards three solution-grid">
          {solutions.map((item) => (
            <article className={`card-v1 solution-card ${item.primary ? "featured" : ""}`} key={item.href}>
              {item.primary ? <p className="solution-eyebrow">Core platform</p> : null}
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <Link className="hero-cta" href={item.href}>{item.cta}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section light">
        <div className="wrap two-col solutions-included">
          <div>
            <p className="article-kicker">Platform Capabilities</p>
            <h2>Built on the same operational base</h2>
            <p>Start with one workflow and expand without rebuilding the cleaning process.</p>
          </div>
          <ul className="included-list">
            {included.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section cta">
        <div className="wrap cta-inner">
          <p className="article-kicker">Need a starting point?</p>
          <h2>Start with your existing cleaning sheets</h2>
          <p>
            Define the routine with a template, then move it into recurring digital tasks when you
            need assignments, visibility, records, and metrics.
          </p>
          <div className="hero-actions cta-actions">
            <Link className="hero-cta" href="/templates/">Browse Free Templates</Link>
            <Link className="outline-cta" href="/contact/">Request a Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
