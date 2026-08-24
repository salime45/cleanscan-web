import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Restaurant Cleaning Operations Solutions",
  description:
    "Choose CleanScan solutions for restaurant cleaning management, restroom quality control software, and health inspection readiness workflows.",
  alternates: { canonical: "/solutions/" },
};

const solutions = [
  {
    title: "Restaurant Cleaning Management",
    href: "/solutions/restaurant-cleaning-management/",
    description:
      "For restaurants that want to control daily, weekly, and monthly cleaning tasks across the kitchen, dining room, restrooms, and shared areas.",
    chooseIf:
      "Choose this if your team still uses paper cleaning sheets or managers have to chase staff after each shift.",
    cta: "View Cleaning Management",
    primary: true,
  },
  {
    title: "Restaurant Restroom Quality Control Software",
    href: "/solutions/restroom-quality-control/",
    description:
      "For restaurants that need to track restroom checks by time block, assign responsibility, record incidents, and keep managers visible across every shift.",
    chooseIf: "Choose this if paper restroom logs are backfilled, missed during rush periods, or hard for managers to verify.",
    cta: "View Restroom Quality Control",
  },
  {
    title: "Restaurant Health Inspection Readiness Software",
    href: "/solutions/health-inspection-readiness/",
    description:
      "For managers who want cleaning routines, sanitation checks, corrective actions, and internal reviews organized before inspections.",
    chooseIf:
      "Choose this if records are hard to find or cleaning follow-up is not consistently documented.",
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
];

export default function SolutionsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="solutions-hero wrap">
        <div>
          <p className="article-kicker">Solutions</p>
          <h1>Restaurant Cleaning Operations Solutions</h1>
          <p className="article-lead">
            Choose the area you want to control: daily cleaning routines, restroom checks, or
            inspection readiness. CleanScan helps restaurant teams turn cleaning work into
            trackable digital workflows.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">
            Start with Cleaning Management
          </Link>
          <Link className="outline-cta" href="/contact/">
            Request a Demo
          </Link>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-heading">
          <p className="article-kicker">Decision Guide</p>
          <h2>What do you need to improve?</h2>
        </div>

        <div className="cards three solution-grid">
          {solutions.map((item) => (
            <article className={`card-v1 solution-card ${item.primary ? "featured" : ""}`} key={item.href}>
              {item.primary ? <p className="solution-eyebrow">Main solution</p> : null}
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p className="solution-choose-if">{item.chooseIf}</p>
              <Link className="hero-cta" href={item.href}>
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section light">
        <div className="wrap two-col solutions-included">
          <div>
            <p className="article-kicker">Platform Capabilities</p>
            <h2>All solutions include</h2>
            <p>
              Each commercial path uses the same operational base, so managers can expand from one
              workflow into the next without rebuilding the process.
            </p>
          </div>
          <ul className="included-list">
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section wrap solutions-proof">
        <p>Used by restaurant teams to replace paper cleaning logs and improve shift accountability.</p>
      </section>

      <section className="section cta">
        <div className="wrap cta-inner">
          <p className="article-kicker">Not sure where to start?</p>
          <h2>Start with the daily restaurant cleaning checklist</h2>
          <p>
            Most restaurants start by digitizing their daily restaurant cleaning checklist. From
            there, they add restroom logs, opening and closing routines, and inspection-readiness
            workflows.
          </p>
          <div className="hero-actions cta-actions">
            <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">
              Start with Cleaning Management
            </Link>
            <Link className="outline-cta" href="/contact/">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
